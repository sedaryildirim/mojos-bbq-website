export default function Footer() {
  return (
    <footer className="border-slate-light flex flex-col items-center justify-between gap-10 border-t bg-slate-dark p-16 md:flex-row">
      <div className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
        © 2026 MOJOS THAILAND // SMOKED IN THE TROPICS
      </div>
      <div className="flex space-x-12">
        {['Instagram', 'Facebook', 'Privacy Policy'].map((link) => (
          <a 
            key={link}
            href="#" 
            className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
