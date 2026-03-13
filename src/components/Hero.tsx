import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.2]);

  return (
    <section 
      ref={containerRef}
      className="border-slate-light flex min-h-[70vh] flex-col items-center justify-center border-b bg-slate-dark px-4 text-center relative overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <img 
          src="https://i.imgur.com/gNL13PE.jpeg" 
          className="w-full h-full object-cover scale-110 brightness-[0.8] contrast-[1.1]"
          referrerPolicy="no-referrer"
          alt="Mojo's Restaurant Interior"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-slate-dark/60" />
      </motion.div>
      <motion.div
        initial={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.21, 1.11, 0.81, 0.99] 
        }}
        className="relative z-10 w-[45vw] max-w-lg"
      >
        <img 
          src="/assets/logos/mojos-white-logo.png" 
          alt="Mojos BBQ" 
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <motion.p 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="font-mono mt-8 text-[10px] tracking-[0.4em] text-slate-300 relative z-10 font-bold uppercase"
      >
        // FIRE & SMOKE // KOH PHANGAN // KOH SAMUI //
      </motion.p>
    </section>
  );
}
