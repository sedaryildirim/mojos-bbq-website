import { FEED_IMAGES } from "../constants";

export default function PitFeed() {
  return (
    <div className="bg-slate-dark">
      <div className="border-slate-light flex flex-col items-center justify-between border-b px-10 py-8 md:flex-row">
        <span className="font-mono text-matte-orange text-[10px] tracking-[0.5em] uppercase font-bold">
          // THE PIT FEED
        </span>
        <a 
          href="#" 
          className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase italic transition-colors hover:text-white"
        >
          @MOJOS_THAILAND
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {FEED_IMAGES.map((img, idx) => (
          <div key={idx} className="border-slate-light aspect-square overflow-hidden border-r bg-slate-900 group">
            <img 
              src={img} 
              className="h-full w-full cursor-pointer object-cover opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" 
              referrerPolicy="no-referrer"
              alt={`Feed image ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
