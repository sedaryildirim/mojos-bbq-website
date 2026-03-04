import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const handleConnectInstagram = async () => {
    try {
      const response = await fetch('/api/auth/instagram/url');
      const { url } = await response.json();
      window.open(url, 'instagram_oauth', 'width=600,height=700');
    } catch (error) {
      console.error('Failed to get auth URL', error);
    }
  };

  return (
    <footer className="border-slate-light flex flex-col items-center justify-between gap-10 border-t bg-slate-dark p-16 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
          © 2026 MOJOS THAILAND // SMOKED IN THE TROPICS
        </div>
        <button 
          onClick={handleConnectInstagram}
          className="font-mono text-[8px] text-left tracking-widest text-slate-700 uppercase hover:text-matte-orange transition-colors"
        >
          [ ADMIN: CONNECT INSTAGRAM ]
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {[
          { name: 'Instagram', url: 'https://www.instagram.com/mojos.th/', icon: <Instagram size={16} strokeWidth={1.5} /> },
          { name: 'Facebook', url: 'https://www.facebook.com/mojosbbqthailand/', icon: <Facebook size={16} strokeWidth={1.5} /> },
          { name: 'Contact', url: 'mailto:hello@mojos.th' },
          { name: 'Privacy Policy', url: '#' }
        ].map((link) => (
          <a 
            key={link.name}
            href={link.url}
            target={link.url.startsWith('http') ? "_blank" : undefined}
            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
            className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase transition-all duration-300 hover:text-white hover:scale-110 flex items-center justify-center"
            aria-label={link.name}
          >
            {link.icon || link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
