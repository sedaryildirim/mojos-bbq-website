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
      <div className="flex space-x-12">
        {[
          { name: 'Instagram', url: 'https://www.instagram.com/mojos.th/' },
          { name: 'Facebook', url: '#' },
          { name: 'Privacy Policy', url: '#' }
        ].map((link) => (
          <a 
            key={link.name}
            href={link.url}
            target={link.url !== '#' ? "_blank" : undefined}
            rel={link.url !== '#' ? "noopener noreferrer" : undefined}
            className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
