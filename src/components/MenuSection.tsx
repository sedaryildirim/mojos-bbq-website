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
}

export default function MenuSection({ id, number, title, subtitle, sections, isDark }: MenuSectionProps) {
  return (
    <div id={id} className={`border-slate-light border-r p-12 scroll-mt-24 ${isDark ? 'bg-slate-medium/30' : ''}`}>
      <span className="font-mono text-matte-orange text-[10px] font-bold tracking-widest uppercase">
        // {number}. {title}
      </span>
      <div className="mt-12 space-y-12">
        {subtitle && (
          <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">{subtitle}</p>
        )}
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {section.name && (
              <p className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">{section.name}</p>
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
                className="border-slate-light flex justify-between border-b pb-2 group cursor-default transition-colors hover:border-matte-orange/50"
              >
                <div className="flex items-center gap-2">
                  <motion.span 
                    variants={{
                      initial: { opacity: 0, scale: 0, width: 0 },
                      hover: { opacity: 1, scale: 1, width: 6 }
                    }}
                    className="h-1.5 bg-matte-orange rounded-full"
                  />
                  <span className="text-sm font-bold text-white uppercase group-hover:text-matte-orange transition-colors">
                    {item.name}
                  </span>
                </div>
                <motion.span 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  className="font-mono text-matte-orange font-bold origin-right"
                >
                  {item.price}
                </motion.span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
