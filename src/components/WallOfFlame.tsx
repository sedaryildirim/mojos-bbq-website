import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import SectionLabel from "./SectionLabel";

const REVIEWS = [
  {
    name: "Alex M.",
    text: "The brisket is life-changing. Best BBQ I've had outside of Texas, and the industrial vibe is spot on.",
    rating: 5,
    location: "Lamai"
  },
  {
    name: "Sarah J.",
    text: "Sunday Roast is a must. The smoked pork belly and gravy are incredible. Get there early!",
    rating: 5,
    location: "Baan Tai"
  },
  {
    name: "Marco R.",
    text: "Craft beer and wood-fired smoke. This is exactly what Samui needed. 10/10.",
    rating: 5,
    location: "Chaloklum"
  },
  {
    name: "Elena K.",
    text: "Brutal aesthetic, amazing food. The pulled pork burger is massive and delicious.",
    rating: 5,
    location: "Thong Sala"
  }
];

export default function WallOfFlame() {
  return (
    <section id="reviews" className="bg-slate-dark border-b border-slate-light">
      <SectionLabel 
        mainText="WALL OF FLAME // CUSTOMER FEEDBACK" 
        subText="5.0 RATING // 500+ REVIEWS"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-12 border-slate-light border-r last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:border-r flex flex-col justify-between group hover:bg-slate-medium/10 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={10} className="fill-matte-red text-matte-red" />
                ))}
              </div>
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-slate-800 h-8 w-8 -z-10" />
                <p className="font-mono text-[11px] leading-relaxed text-slate-300 uppercase tracking-wide">
                  "{review.text}"
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-light/30">
              <div className="font-display text-xl italic text-white uppercase">{review.name}</div>
              <div className="font-mono text-[8px] tracking-[0.3em] text-slate-500 uppercase mt-1">
                // VISITED {review.location} //
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
