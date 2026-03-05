const MARQUEE_ITEMS = [
  "Authentic Low & Slow BBQ //",
  "Daily Smoked Brisket //",
  "Sunday Roast Starts 12:00 //",
  "Ice Cold Beers //",
];

export default function Marquee() {
  return (
    <div className="border-slate-light overflow-hidden border-b bg-matte-red py-3 text-white">
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex">
            {MARQUEE_ITEMS.map((item, index) => (
              <span key={index} className="font-mono mx-8 text-[11px] font-black tracking-widest uppercase italic">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
