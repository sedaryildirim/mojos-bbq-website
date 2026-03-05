import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import SectionLabel from "./SectionLabel";

const REVIEWS = [
  {
    name: "Michael Gorodi",
    text: "Been here 3+ years and there’s very few restaurants on this island that are actually worth it… I just added Mojos to my list. Insanely good food from start to finish - generous portions and top service. Worth every penny!",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Grace",
    text: "Must visit! We were craving some western food this did not disappoint. We got all three tacos and chicken loaded fries, delicious! Staff were super attentive. If you’re in the area definitely visit.",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Mia Amawasu",
    text: "Great burger place in Lamai! The burger was juicy and flavorful, fries were crispy and delicious. Nice atmosphere, friendly staff, and good location near the beach. Highly recommended!",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Lourens Bam",
    text: "This is by far one of the best roasts I’ve had on the island, and I’ve been a resident here for 6 years. Absolutely mouthwatering and delicious—really enjoyed it and will definitely make this a regular spot!",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Maddie Stride",
    text: "Best Roast I have had in 4+ years living in Thailand. I highly recommend this place for anyone craving a proper, generous Sunday roast.",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Yanisa",
    text: "Amazing food every time. The Sunday roast is delicious, the burgers are juicy, and the beef ribs are full of flavour. The staff are super friendly and welcoming.",
    rating: 5,
    location: "Koh Samui, Lamai"
  }
];

export default function WallOfFlame() {
  return (
    <section id="reviews" className="bg-slate-dark border-b border-slate-light">
      <SectionLabel 
        mainText="WALL OF FLAME // CUSTOMER FEEDBACK" 
        subText="5.0 RATING // 160+ GOOGLE REVIEWS"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-12 border-slate-light border-r last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:border-r flex flex-col justify-between group hover:bg-slate-medium/10 transition-colors"
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
