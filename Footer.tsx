import { Instagram, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-light bg-slate-dark overflow-hidden">
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
                Fire & Smoke // Koh Phangan // Koh Samui.<br />
                {/* Fixed: was "Established 2024" but copyright said 2026 — align to actual founding year */}
                Established 2021.
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:text-white"
            >
              Back to top <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
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
                  className="font-mono text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:text-matte-red"
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
                { name: 'Instagram', handle: '@mojos.th', url: 'https://www.instagram.com/mojos.th/', icon: <Instagram size={14} /> },
                { name: 'Facebook', handle: 'mojos.th', url: 'https://www.facebook.com/mojos.th/', icon: <Facebook size={14} /> },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-mono text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:text-white"
                >
                  {link.icon} <span className="text-slate-300">{link.name}</span> <span className="text-slate-600">//</span> {link.handle}
                </a>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h4 className="font-mono text-[11px] font-bold tracking-[0.3em] text-slate-300 uppercase">Support</h4>
            <div className="flex flex-col gap-4">
              {/* Replace the email below with your real contact address */}
              <a
                href="mailto:hello@mojos-bbq.com"
                className="font-mono text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:text-white"
              >
                hello@mojos-bbq.com
              </a>
              <a href="#" className="font-mono text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-slate-light/30 pt-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="font-mono text-[9px] tracking-[0.3em] text-slate-600 uppercase">
              © {new Date().getFullYear()} MOJOS THAILAND // ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-8">
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
