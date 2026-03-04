import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="border-slate-light flex min-h-[60vh] flex-col items-center justify-center border-b bg-slate-medium px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://image.pollinations.ai/prompt/abstract%20smoke%20fire%20texture%20dark%20industrial" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          alt="Smoke and fire texture"
        />
      </div>
      <motion.h1 
        initial={{ scale: 2, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.21, 1.11, 0.81, 0.99] // Custom "slam" ease
        }}
        className="text-matte-orange text-[16vw] leading-[0.8] font-black tracking-tighter uppercase italic lg:text-[13vw] relative z-10"
      >
        Mojos
      </motion.h1>
      <motion.p 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="font-mono mt-8 text-[10px] tracking-[0.4em] text-slate-300 relative z-10 font-bold uppercase"
      >
        // WOOD FIRE SMOKE // GULF OF THAILAND //
      </motion.p>
    </section>
  );
}
