import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Database from "better-sqlite3";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- SQLite setup ---
const db = new Database("mojos.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS tokens (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`);

function getToken(key: string): string | null {
  const row = db.prepare("SELECT value FROM tokens WHERE key = ?").get(key) as { value: string } | undefined;
  return row?.value ?? null;
}

function setToken(key: string, value: string): void {
  db.prepare(`
    INSERT INTO tokens (key, value, updated_at) VALUES (?, ?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
  `).run(key, value, new Date().toISOString());
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Get Instagram Feed
  app.get("/api/instagram/feed", async (req, res) => {
    // Prefer DB-stored token over env var (DB token is the long-lived one from OAuth)
    const accessToken = getToken("INSTAGRAM_ACCESS_TOKEN") ?? process.env.INSTAGRAM_ACCESS_TOKEN;
    const instagramId = getToken("INSTAGRAM_BUSINESS_ID") ?? process.env.INSTAGRAM_BUSINESS_ID;

    if (!accessToken || !instagramId) {
      return res.status(400).json({
        error: "Instagram credentials not configured.",
        message: "Please set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_BUSINESS_ID in your environment or complete the OAuth flow."
      });
    }

    try {
      const response = await fetch(
        `https://graph.facebook.com/v22.0/${instagramId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}&limit=12`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to fetch Instagram feed");
      }

      const data = await response.json();
      res.json(data.data);
    } catch (error: any) {
      console.error("Instagram API Error:", error.message);
      res.status(500).json({ error: error.message });
    }
  });

  // OAuth Flow: Get Auth URL
  app.get("/api/auth/instagram/url", (req, res) => {
    const clientId = process.env.FACEBOOK_APP_ID;
    const redirectUri = `${req.protocol}://${req.get("host")}/auth/instagram/callback`;

    const scopes = [
      "instagram_basic",
      "instagram_content_publish",
      "pages_read_engagement",
      "pages_show_list",
      "business_management"
    ].join(",");

    const authUrl = `https://www.facebook.com/v22.0/dialog/oauth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=code`;

    res.json({ url: authUrl });
  });

  // OAuth Flow: Callback — stores token securely in DB instead of rendering it to screen
  app.get("/auth/instagram/callback", async (req, res) => {
    const { code } = req.query;
    const clientId = process.env.FACEBOOK_APP_ID;
    const clientSecret = process.env.FACEBOOK_APP_SECRET;
    const redirectUri = `${req.protocol}://${req.get("host")}/auth/instagram/callback`;

    if (!code) {
      return res.status(400).send("No code provided.");
    }

    try {
      // 1. Exchange code for short-lived access token
      const tokenResponse = await fetch(
        `https://graph.facebook.com/v22.0/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(redirectUri)}&code=${code}`
      );
      const tokenData = await tokenResponse.json();
      if (tokenData.error) throw new Error(tokenData.error.message);

      // 2. Exchange for long-lived access token
      const longLivedResponse = await fetch(
        `https://graph.facebook.com/v22.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${tokenData.access_token}`
      );
      const longLivedData = await longLivedResponse.json();
      if (longLivedData.error) throw new Error(longLivedData.error.message);

      // 3. Store token securely in SQLite — never expose it in HTML or window.postMessage
      setToken("INSTAGRAM_ACCESS_TOKEN", longLivedData.access_token);

      // 4. Fetch and store the business/user ID
      const meResponse = await fetch(
        `https://graph.facebook.com/v22.0/me?fields=id,name&access_token=${longLivedData.access_token}`
      );
      const meData = await meResponse.json();
      if (meData.id) setToken("INSTAGRAM_BUSINESS_ID", meData.id);

      res.send(`
        <html>
          <body style="font-family: sans-serif; padding: 40px; background: #0a0a0a; color: white;">
            <h1 style="color: #e11d48;">Instagram Connected!</h1>
            <p>Your account <strong>${meData.name ?? meData.id}</strong> has been linked successfully.</p>
            <p style="color: #64748b; font-size: 14px;">The access token has been stored securely on the server. You can close this window.</p>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS' }, '*');
              }
            </script>
          </body>
        </html>
      `);
    } catch (error: any) {
      res.status(500).send(`Auth Error: ${error.message}`);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
