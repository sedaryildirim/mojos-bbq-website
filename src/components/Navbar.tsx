import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Menu", href: "#menu" },
  { name: "Locations", href: "#locations" },
  { name: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-matte-red z-[60] origin-left"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-slate-dark/90 backdrop-blur-md border-b border-slate-light py-4" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="mx-auto max-w-7xl px-8 flex items-center justify-between">
          <a href="#" className="font-display text-2xl italic text-matte-red uppercase tracking-tighter">
            Mojos
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="font-mono text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase transition-colors hover:text-matte-red"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-dark flex flex-col items-center justify-center p-8"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl italic text-white uppercase tracking-tighter hover:text-matte-red transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-12 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
              // MOJOS BBQ THAILAND //
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
