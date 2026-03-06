import { motion } from "motion/react";
import { Flame } from "lucide-react";
import { MenuSection as MenuSectionType } from "../types";

interface MenuSectionProps {
  key?: string;
  id: string;
  number: string;
  title: string;
  watermark?: string;
  subtitle?: string;
  sections: MenuSectionType[];
  isDark?: boolean;
  isAccent?: boolean;
}

export default function MenuSection({ id, number, title, watermark, subtitle, sections, isDark, isAccent }: MenuSectionProps) {
  return (
    <div id={id} className={`relative border-slate-light border-r p-12 scroll-mt-24 transition-all duration-700 overflow-hidden h-full flex flex-col ${
      isAccent 
        ? 'bg-matte-red text-white shadow-[0_0_60px_rgba(225,29,72,0.3)] z-20' 
        : isDark ? 'bg-slate-medium/30' : ''
    }`}>
      {/* Background Watermark */}
      <div className="absolute -bottom-4 -left-4 pointer-events-none select-none opacity-[0.04] z-0">
        <span className="font-display text-[80px] leading-none uppercase italic text-white whitespace-nowrap">
          {watermark || title}
        </span>
      </div>

      {isAccent && (
        <>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px' 
          }} />
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
            <Flame size={240} strokeWidth={1} />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-white/10 py-1 overflow-hidden border-t border-white/20">
            <div className="flex whitespace-nowrap animate-marquee-fast">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-mono text-[8px] font-black tracking-widest uppercase mx-4">
                  LIMITED AVAILABILITY // SUNDAYS ONLY // 12:00 - 18:00 // 
                </span>
              ))}
            </div>
          </div>
        </>
      )}
      
      {isAccent && (
        <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
          <div className="absolute top-6 -right-8 rotate-45 bg-white text-matte-red font-mono text-[10px] font-black px-10 py-1 tracking-widest uppercase shadow-lg">
            SPECIAL
          </div>
        </div>
      )}

      <div className="relative z-10">
        <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${isAccent ? 'text-white' : 'text-matte-red'}`}>
          // {number}. {isAccent ? 'THE LEGENDARY' : ''}
        </span>
        <h3 className={`mt-1 font-heading font-bold tracking-tighter uppercase leading-none ${
          isAccent ? 'text-5xl mb-4' : 'text-xl mb-0'
        }`}>
          {title}
        </h3>
        
        <div className="mt-12 space-y-12 mb-8">
          {subtitle && (
            <p className={`font-mono text-[9px] font-bold tracking-[0.3em] uppercase leading-relaxed ${isAccent ? 'text-white' : 'text-white/40'}`}>
              {subtitle}
            </p>
          )}
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {section.name && (
              <p className={`font-mono text-[9px] tracking-[0.3em] uppercase ${isAccent ? 'text-white/80' : 'text-white/40'}`}>{section.name}</p>
            )}
            {section.items.map((item, itemIdx) => (
              <motion.div 
                key={itemIdx} 
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { x: 0 },
                  hover: { x: 4 }
                }}
                className={`flex justify-between items-center border-b pb-2 group cursor-default transition-all duration-300 ${
                  isAccent 
                    ? 'border-white/20 hover:border-white hover:bg-white/5 px-2 -mx-2 rounded' 
                    : 'border-slate-light hover:border-matte-red/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    variants={{
                      initial: { opacity: 0, scale: 0, width: 0 },
                      hover: { opacity: 1, scale: 1, width: 6 }
                    }}
                    className={`h-1.5 rounded-full ${isAccent ? 'bg-white' : 'bg-matte-red'}`}
                  />
                  <span className={`text-sm font-bold uppercase transition-colors ${
                    isAccent ? 'text-white group-hover:text-white' : 'text-white group-hover:text-matte-red'
                  }`}>
                    {item.name}
                  </span>
                </div>
                <motion.span 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  className={`font-mono font-bold origin-right ${isAccent ? 'text-white' : 'text-matte-red'}`}
                >
                  {item.price}
                </motion.span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
