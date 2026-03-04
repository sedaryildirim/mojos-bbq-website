import { motion } from "motion/react";

interface MenuItem {
  name: string;
  price: number;
}

interface MenuSectionProps {
  key?: string;
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  sections: {
    name?: string;
    items: MenuItem[];
  }[];
  isDark?: boolean;
  isAccent?: boolean;
}

export default function MenuSection({ id, number, title, subtitle, sections, isDark, isAccent }: MenuSectionProps) {
  return (
    <div id={id} className={`relative border-slate-light border-r p-12 scroll-mt-24 transition-all duration-700 overflow-hidden ${
      isAccent 
        ? 'bg-matte-orange text-white shadow-[0_0_40px_rgba(242,125,38,0.2)] z-10' 
        : isDark ? 'bg-slate-medium/30' : ''
    }`}>
      {isAccent && (
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px' 
        }} />
      )}
      {isAccent && (
        <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none">
          <div className="absolute top-6 -right-8 rotate-45 bg-white text-matte-orange font-mono text-[10px] font-black px-10 py-1 tracking-widest uppercase shadow-lg">
            SPECIAL
          </div>
        </div>
      )}

      <div className="relative z-10">
        <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${isAccent ? 'text-white' : 'text-matte-orange'}`}>
          // {number}. {isAccent ? 'THE LEGENDARY' : ''}
        </span>
        <h3 className={`mt-1 font-bold tracking-tighter uppercase leading-none ${
          isAccent ? 'text-5xl mb-4' : 'text-xl mb-0'
        }`}>
          {title}
        </h3>
        
        <div className="mt-12 space-y-12">
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
                    : 'border-slate-light hover:border-matte-orange/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    variants={{
                      initial: { opacity: 0, scale: 0, width: 0 },
                      hover: { opacity: 1, scale: 1, width: 6 }
                    }}
                    className={`h-1.5 rounded-full ${isAccent ? 'bg-white' : 'bg-matte-orange'}`}
                  />
                  <span className={`text-sm font-bold uppercase transition-colors ${
                    isAccent ? 'text-white group-hover:text-white' : 'text-white group-hover:text-matte-orange'
                  }`}>
                    {item.name}
                  </span>
                </div>
                <motion.span 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  className={`font-mono font-bold origin-right ${isAccent ? 'text-white' : 'text-matte-orange'}`}
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
