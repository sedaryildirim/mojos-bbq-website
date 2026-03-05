import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function RoastCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      // Build a candidate "this Sunday at 12:00" date
      const nextSunday = new Date(now);
      const daysUntilSunday = (7 - now.getDay()) % 7;
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      // Set time BEFORE comparing so the check is accurate
      nextSunday.setHours(12, 0, 0, 0);

      // If we're already past Sunday 12pm (or it's Sunday and past 12pm), jump to next week
      if (now >= nextSunday) {
        nextSunday.setDate(nextSunday.getDate() + 7);
      }

      const difference = nextSunday.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-matte-red py-12 px-8 border-y border-slate-light overflow-hidden relative">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="font-display text-[20vw] italic uppercase text-white whitespace-nowrap">
          Sunday Roast
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-display text-4xl md:text-6xl italic text-white uppercase leading-none">
            The Legend Returns
          </h2>
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/80 uppercase mt-2">
            // EVERY SUNDAY FROM 12PM // LAMAI & BAAN TAI //
          </p>
        </div>

        <div className="flex gap-4 md:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <motion.span
                key={item.value}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-4xl md:text-6xl italic text-white"
              >
                {String(item.value).padStart(2, '0')}
              </motion.span>
              <span className="font-mono text-[8px] tracking-widest text-white/60 uppercase mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
