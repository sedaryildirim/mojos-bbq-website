import { motion } from "motion/react";

interface LocationProps {
  key?: string;
  id: string;
  island: string;
  area: string;
  hours: string;
  special: string | null;
  mapUrl: string;
  embedUrl: string;
  image: string;
  orderText: string;
}

export default function LocationCard({ id, island, area, hours, special, mapUrl, embedUrl, image, orderText }: LocationProps) {
  return (
    <div id={id} className="border-slate-light flex flex-col border-r bg-slate-dark scroll-mt-24 h-full">
      <div className="border-slate-light flex flex-grow flex-col justify-between border-b p-10">
        <div className="md:min-h-[180px]">
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-white uppercase leading-[1.1]">
            {island}
            <div className="text-matte-red mt-1">{area}</div>
          </h2>
          <div className="mt-10 space-y-2">
            <p className="font-mono text-[10px] tracking-tight text-slate-400 uppercase font-bold">{hours}</p>
            {special && (
              <p className="font-mono text-matte-red text-[10px] tracking-tight uppercase font-bold">{special}</p>
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
      
      <div className="flex flex-col">
        <div className="border-slate-light relative h-[250px] flex-grow overflow-hidden border-b bg-slate-medium/20 group">
          <motion.div 
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <iframe
              title={`Map of ${area}`}
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 transition-opacity group-hover:opacity-100"
            />
          </motion.div>
          <div className="absolute inset-0 pointer-events-none border border-white/5 z-10" />
        </div>
        <div className="border-slate-light border-b bg-slate-medium/50 p-8">
          <motion.a 
            href="#"
            whileTap={{ scale: 0.95 }}
            className="bg-matte-red block w-full py-4 text-center text-[11px] font-black tracking-[0.2em] text-white uppercase transition-all hover:bg-red-600"
          >
            {orderText}
          </motion.a>
        </div>
      </div>
    </div>
  );
}
