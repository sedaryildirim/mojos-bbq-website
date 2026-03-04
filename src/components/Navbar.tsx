import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { LOCATIONS, MENU } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = ['Locations', 'Menu'];

  const toggleMenu = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is in the upper middle
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Small delay to allow menu exit animation to start
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <nav className="border-slate-light sticky top-0 z-[100] flex items-center justify-between border-b bg-slate-dark/95 backdrop-blur-sm px-6 py-4 text-[10px] tracking-[0.2em] uppercase md:text-xs">
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-matte-orange origin-left z-50"
          style={{ scaleX }}
        />
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsOpen(false);
          }}
          className="text-matte-orange text-2xl font-display tracking-tighter uppercase italic cursor-pointer"
        >
          Mojos
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden space-x-12 lg:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id || 
              (id === 'locations' && LOCATIONS.some(l => l.id === activeSection)) ||
              (id === 'menu' && MENU.some(m => m.id === activeSection));
            
            return (
              <motion.a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                whileHover={{ color: '#f97316' }}
                className={`transition-colors duration-300 ${isActive ? 'text-matte-orange' : 'text-white'}`}
              >
                {item}
              </motion.a>
            );
          })}
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
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
        {isOpen && (
          <motion.div
            key="menu-content"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[95] w-full max-w-xs bg-slate-dark pt-24 px-6 lg:hidden overflow-y-auto shadow-2xl border-l border-slate-light"
          >
            <div className="flex flex-col space-y-8 pb-12">
              {navItems.map((item, idx) => (
                <div key={item} className="flex flex-col space-y-4">
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className={`text-4xl font-display tracking-tighter uppercase italic transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-matte-orange' : 'text-white hover:text-matte-orange'
                    }`}
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
                          onClick={(e) => handleNavClick(e, loc.id)}
                          className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors ${
                            activeSection === loc.id ? 'text-matte-orange' : 'text-slate-400 hover:text-matte-orange'
                          }`}
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
                          onClick={(e) => handleNavClick(e, cat.id)}
                          className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors ${
                            activeSection === cat.id ? 'text-matte-orange' : 'text-slate-400 hover:text-matte-orange'
                          }`}
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
