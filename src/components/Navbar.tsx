import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { LOCATIONS, MENU } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Locations', 'Menu'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="border-slate-light sticky top-0 z-50 flex items-center justify-between border-b bg-slate-dark/95 backdrop-blur-sm px-6 py-4 text-[10px] tracking-[0.2em] uppercase md:text-xs">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-matte-orange text-2xl font-black tracking-tighter uppercase italic cursor-pointer"
        >
          Mojos
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden space-x-12 lg:flex">
          {navItems.map((item) => (
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

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-slate-400 hidden sm:block"
          >
            THAI // EST 2026
          </motion.div>
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-matte-orange transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Branding (Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-slate-400 hidden lg:block"
        >
          THAI // EST 2026
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-dark pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-8 pb-12">
              {navItems.map((item, idx) => (
                <div key={item} className="flex flex-col space-y-4">
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black tracking-tighter uppercase italic text-white hover:text-matte-orange transition-colors"
                  >
                    {item}
                  </motion.a>
                  
                  {/* Sub-links for Locations */}
                  {item === 'Locations' && (
                    <div className="flex flex-col space-y-3 pl-4 border-l border-slate-light">
                      {LOCATIONS.map((loc, locIdx) => (
                        <motion.a
                          key={loc.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (locIdx * 0.05) + 0.2 }}
                          href={`#${loc.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-matte-orange transition-colors"
                        >
                          <ChevronRight size={14} className="text-matte-orange" />
                          {loc.area}
                        </motion.a>
                      ))}
                    </div>
                  )}

                  {/* Sub-links for Menu */}
                  {item === 'Menu' && (
                    <div className="flex flex-col space-y-3 pl-4 border-l border-slate-light">
                      {MENU.map((cat, catIdx) => (
                        <motion.a
                          key={cat.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (catIdx * 0.05) + 0.2 }}
                          href={`#${cat.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-matte-orange transition-colors"
                        >
                          <ChevronRight size={14} className="text-matte-orange" />
                          {cat.title}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-12 border-t border-slate-light">
                <p className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                  Smoked in the Tropics // Gulf of Thailand
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
