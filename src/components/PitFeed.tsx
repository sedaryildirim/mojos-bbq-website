import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface InstagramMedia {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url?: string;
  caption?: string;
}

export default function PitFeed() {
  const [feed, setFeed] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await fetch("/api/instagram/feed");
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || "Failed to fetch feed");
        }
        const data = await response.json();
        setFeed(data);
      } catch (err: any) {
        console.error("Feed error:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return (
    <div className="bg-slate-dark">
      <div className="border-slate-light flex flex-col items-center justify-between border-b px-10 py-8 md:flex-row">
        <span className="font-mono text-matte-orange text-[10px] tracking-[0.5em] uppercase font-bold">
          // THE PIT FEED
        </span>
        <a 
          href="https://www.instagram.com/mojos.th/" 
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase italic transition-colors hover:text-white"
        >
          @MOJOS.TH
        </a>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-slate-light aspect-square animate-pulse border-r bg-slate-900/50" />
          ))}
        </div>
      ) : error ? (
        <div className="border-slate-light border-b p-20 text-center">
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            {error.includes("configured") 
              ? "// Instagram integration pending configuration" 
              : `// Error loading feed: ${error}`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {feed.map((item) => (
            <a 
              key={item.id} 
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-slate-light aspect-square overflow-hidden border-r bg-slate-900 group relative block"
            >
              <img 
                src={item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url} 
                className="h-full w-full cursor-pointer object-cover opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" 
                referrerPolicy="no-referrer"
                alt={item.caption || "Instagram post"}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="bg-matte-orange px-3 py-1 text-[8px] font-black text-white uppercase tracking-tighter">
                  VIEW POST
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
