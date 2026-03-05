import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import SectionLabel from "./SectionLabel";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="bg-slate-dark border-b border-slate-light">
      <SectionLabel 
        mainText="IGNITE A CONVERSATION // CONTACT US" 
        subText="CATERING // EVENTS // FEEDBACK"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Info Column */}
        <div className="p-12 lg:p-24 border-slate-light border-b lg:border-b-0 lg:border-r space-y-12">
          <div className="space-y-4">
            <h3 className="font-display text-5xl italic text-white uppercase leading-none">Get in touch</h3>
            <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-md">
              Whether you're planning a massive villa party or just want to tell us how much you loved the brisket, we're listening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-matte-red uppercase tracking-widest font-bold">Email</span>
              <p className="font-mono text-[11px] text-white uppercase tracking-widest">hello@mojos.th</p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-matte-red uppercase tracking-widest font-bold">Social</span>
              <p className="font-mono text-[11px] text-white uppercase tracking-widest">@mojos_samui</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="p-12 lg:p-24 bg-slate-medium/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-transparent border-b border-slate-light py-2 font-mono text-[11px] text-white uppercase tracking-widest focus:border-matte-red outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-transparent border-b border-slate-light py-2 font-mono text-[11px] text-white uppercase tracking-widest focus:border-matte-red outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-transparent border-b border-slate-light py-2 font-mono text-[11px] text-white uppercase tracking-widest focus:border-matte-red outline-none transition-colors resize-none"
              />
            </div>

            <button 
              disabled={status !== "idle"}
              className="group relative flex items-center gap-4 bg-matte-red px-12 py-4 overflow-hidden transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="relative z-10 font-mono text-[10px] font-bold tracking-[0.3em] text-white uppercase">
                {status === "idle" ? "Send Message" : status === "sending" ? "Igniting..." : "Sent Successfully"}
              </span>
              <Send size={14} className="relative z-10 text-white group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
