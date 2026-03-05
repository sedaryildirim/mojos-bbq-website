import { motion } from "motion/react";
import { FEED_IMAGES } from "../constants";
import SectionLabel from "./SectionLabel";

export default function FoodGallery() {
  return (
    <section id="gallery" className="border-slate-light border-b bg-slate-dark overflow-hidden">
      <SectionLabel 
        mainText="HERE'S WHAT TO EXPECT // OUR FOOD" 
        subText="// FIRE & SMOKE"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {FEED_IMAGES.map((src, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative aspect-square overflow-hidden border-slate-light border-r last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 xl:border-r"
          >
            <img 
              src={src} 
              alt={`Mojo's Food ${idx + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 brightness-75 group-hover:brightness-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-matte-red/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            
            {/* Corner Accent */}
            <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-white/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-2 group-hover:-translate-y-2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
