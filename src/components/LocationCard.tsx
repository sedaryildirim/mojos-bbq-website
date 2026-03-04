import { motion } from "motion/react";

interface LocationProps {
  key?: string;
  id: string;
  island: string;
  area: string;
  hours: string;
  special: string | null;
  mapUrl: string;
  image: string;
  orderText: string;
}

export default function LocationCard({ id, island, area, hours, special, mapUrl, image, orderText }: LocationProps) {
  return (
    <div id={id} className="border-slate-light flex flex-col border-r bg-slate-dark scroll-mt-24">
      <div className="border-slate-light flex flex-grow flex-col justify-between border-b p-10">
        <div className="md:min-h-[160px]">
          <h2 className="text-3xl font-bold tracking-tighter text-white uppercase leading-none">
            {island}<br /><span className="text-matte-orange">{area}</span>
          </h2>
          <div className="mt-6 space-y-1">
            <p className="font-mono text-[10px] tracking-tight text-slate-400 uppercase font-bold">{hours}</p>
            {special && (
              <p className="font-mono text-matte-orange text-[10px] tracking-tight uppercase font-bold">{special}</p>
            )}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-2">
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-slate-600 py-3 text-center text-[9px] font-black tracking-widest text-slate-300 hover:bg-white hover:text-black uppercase transition-all"
          >
            Google Maps
          </a>
          <a 
            href="#" 
            className="border border-slate-600 py-3 text-center text-[9px] font-black tracking-widest text-slate-300 hover:bg-white hover:text-black uppercase transition-all"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="border-slate-light relative h-[250px] overflow-hidden border-b group">
        <img 
          src={image} 
          className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
          referrerPolicy="no-referrer"
          alt={area}
        />
      </div>
      <div className="border-slate-light border-b bg-slate-medium/50 p-8">
        <motion.a 
          href="#"
          whileTap={{ scale: 0.95 }}
          className="bg-matte-orange block w-full py-4 text-center text-[11px] font-black tracking-[0.2em] text-white uppercase transition-all hover:bg-orange-500"
        >
          {orderText}
        </motion.a>
      </div>
    </div>
  );
}
