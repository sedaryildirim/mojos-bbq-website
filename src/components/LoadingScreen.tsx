import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 15, 100);
        if (next >= 100) {
          clearInterval(interval);
          hideTimeoutRef.current = setTimeout(() => setIsVisible(false), 500);
        }
        return next;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-dark"
        >
          <div className="relative w-64 space-y-4">
            <div className="flex justify-between font-mono text-[10px] tracking-widest text-slate-500 uppercase">
              <span>System Booting</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-[2px] w-full bg-slate-light overflow-hidden">
              <motion.div
                className="h-full bg-matte-red"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[8px] text-slate-600 uppercase animate-pulse">
                // Initializing Wood Fire Smoke...
              </span>
              <span className="font-mono text-[8px] text-slate-600 uppercase animate-pulse delay-75">
                // Calibrating Brisket Temps...
              </span>
            </div>
          </div>

          <div className="absolute bottom-12 font-display text-4xl italic text-white/5 uppercase">
            Mojos
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
