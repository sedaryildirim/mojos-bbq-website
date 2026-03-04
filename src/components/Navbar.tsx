import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="border-slate-light sticky top-0 z-50 flex items-center justify-between border-b bg-slate-dark/95 backdrop-blur-sm px-6 py-4 text-[10px] tracking-[0.2em] uppercase md:text-xs">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-matte-orange text-2xl font-black tracking-tighter uppercase italic cursor-pointer"
      >
        Mojos
      </motion.div>
      <div className="hidden space-x-12 lg:flex">
        {['Locations', 'Menu', 'Shop'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ color: '#f97316' }}
            className="text-white transition-colors duration-300"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-mono text-slate-400 hidden sm:block"
      >
        THAI // EST 2026
      </motion.div>
    </nav>
  );
}
