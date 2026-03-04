import express from "express";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Get Instagram Feed
  app.get("/api/instagram/feed", async (req, res) => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const instagramId = process.env.INSTAGRAM_BUSINESS_ID;

    if (!accessToken || !instagramId) {
      return res.status(400).json({ 
        error: "Instagram credentials not configured.",
        message: "Please set INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_BUSINESS_ID in your environment."
      });
    }

    try {
      // Fetch media from Instagram Graph API
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
    
    // Scopes for Instagram Graph API
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

  // OAuth Flow: Callback
  app.get("/auth/instagram/callback", async (req, res) => {
    const { code } = req.query;
    const clientId = process.env.FACEBOOK_APP_ID;
    const clientSecret = process.env.FACEBOOK_APP_SECRET;
    const redirectUri = `${req.protocol}://${req.get("host")}/auth/instagram/callback`;

    if (!code) {
      return res.send("No code provided.");
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

      // In a real app, you'd store this in a DB.
      // For this demo, we'll just show it to the user so they can add it to their .env
      res.send(`
        <html>
          <body style="font-family: sans-serif; padding: 40px; background: #0f172a; color: white;">
            <h1 style="color: #f97316;">Instagram Connected!</h1>
            <p>Copy these values to your environment variables in AI Studio:</p>
            <div style="background: #1e293b; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p><strong>INSTAGRAM_ACCESS_TOKEN:</strong></p>
              <code style="word-break: break-all; color: #38bdf8;">${longLivedData.access_token}</code>
            </div>
            <p style="margin-top: 20px;">You also need your <strong>INSTAGRAM_BUSINESS_ID</strong>. You can find this by querying the Graph API Explorer or your Facebook Page settings.</p>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', token: '${longLivedData.access_token}' }, '*');
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
