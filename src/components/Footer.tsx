import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  onPrivacyClick: () => void;
}

export default function Footer({ onPrivacyClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-light bg-slate-dark overflow-hidden">
      {/* Background Texture Overlay - CSS Noise for stability */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Large Watermark Branding */}
      <div className="absolute -bottom-10 -left-10 pointer-events-none select-none opacity-[0.02]">
        <span className="font-display text-[30vw] leading-none uppercase italic text-white">
          Mojos
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-4xl uppercase italic text-matte-red">Mojos</h3>
              <p className="font-mono text-[10px] leading-relaxed tracking-wider text-slate-400 uppercase">
                Smoked in the tropics.<br />
                Fire & Smoke // Koh Phangan // Koh Samui vibes.<br />
                Established 2024.
              </p>
            </div>
            <button 
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase transition-colors hover:text-white"
            >
              Back to top <ArrowUpRight size={12} aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.3em] text-slate-300 uppercase">Explore</h4>
            <nav className="flex flex-col gap-4">
              {['Menu', 'Locations'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-mono text-[10px] tracking-widest text-slate-400 uppercase transition-colors hover:text-matte-red"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Column */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.3em] text-slate-300 uppercase">Connect</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Instagram', handle: '@mojos.th', url: 'https://www.instagram.com/mojos.th/', icon: <Instagram size={14} aria-hidden="true" /> },
                { name: 'Facebook', handle: 'mojos.th', url: 'https://www.facebook.com/mojos.th/', icon: <Facebook size={14} aria-hidden="true" /> },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-[10px] tracking-widest text-slate-400 uppercase transition-colors hover:text-white"
                >
                  {link.icon} <span className="text-slate-300">{link.name}</span> <span className="text-slate-600">//</span> {link.handle}
                </a>
              ))}
            </div>
          </div>

          {/* Legal/Admin Column */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.3em] text-slate-300 uppercase">Support</h4>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                contact: info@mojos-bbq.com
              </span>
              <button 
                onClick={onPrivacyClick}
                className="font-mono text-[10px] tracking-widest text-slate-400 uppercase transition-colors hover:text-white text-left"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-slate-light/30 pt-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="font-mono text-[9px] tracking-[0.3em] text-slate-600 uppercase">
              © 2026 MOJOS THAILAND // ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-8">
              <a 
                href="https://cdc-group-landing-page.pages.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[9px] tracking-[0.3em] text-slate-500 uppercase transition-colors hover:text-matte-red"
              >
                CDC Hospitality Group
              </a>
              <span className="font-mono text-[9px] tracking-[0.3em] text-slate-700 uppercase">
                Designed for the heat
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
