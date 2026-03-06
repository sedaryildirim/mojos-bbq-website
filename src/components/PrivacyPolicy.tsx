import { motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-dark/95 backdrop-blur-xl p-4 md:p-8"
    >
      <div className="relative max-w-2xl w-full bg-slate-medium border border-slate-light p-8 md:p-12 overflow-y-auto max-h-[80vh]">
        <button 
          onClick={onClose}
          aria-label="Close privacy policy"
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} aria-hidden="true" />
        </button>

        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-matte-red tracking-widest uppercase">// LEGAL</span>
            <h2 id="privacy-title" className="font-display text-4xl italic text-white uppercase italic tracking-tighter">Privacy Policy</h2>
          </div>

          <div className="font-mono text-[11px] leading-relaxed text-slate-400 uppercase space-y-6">
            <section className="space-y-2">
              <h3 className="text-white font-bold tracking-widest">01. DATA COLLECTION</h3>
              <p>We do not collect any personal data through this website. We do not use cookies for tracking or marketing purposes.</p>
            </section>

            <section className="space-y-2">
              <h3 className="text-white font-bold tracking-widest">02. THIRD PARTY LINKS</h3>
              <p>Our site contains links to external services (Google Maps, Grab, Delivery-KPG). These services have their own privacy policies which we recommend you review.</p>
            </section>

            <section className="space-y-2">
              <h3 className="text-white font-bold tracking-widest">03. CONTACT</h3>
              <p>For any legal inquiries, please contact us at info@mojos-bbq.com.</p>
            </section>

            <p className="pt-8 border-t border-slate-light text-[9px] text-slate-600">
              LAST UPDATED: MARCH 2026 // MOJOS THAILAND
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
