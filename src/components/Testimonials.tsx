import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900/60 relative overflow-hidden border-t border-b border-zinc-900/80">
      {/* Background Graphic elements */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-red-600/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Customer Feedback</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2">
            What Our <span className="text-red-600">Members Say</span>
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Read real, non-fabricated reviews from 519+ active fitness enthusiasts who train with us in Paharganj daily.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-grid-container">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(220, 38, 38, 0.3)" }}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900/80 flex flex-col justify-between shadow-lg relative"
              id={`testi-card-${testimonial.id}`}
            >
              <Quote className="absolute right-6 top-6 w-8 h-8 text-zinc-900/40 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4" id={`stars-box-${idx}`}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const ratingValue = Math.floor(testimonial.rating);
                    const isFilled = i < ratingValue;
                    return (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${isFilled ? "text-amber-500 fill-current animate-pulse-slow" : "text-zinc-700"}`}
                      />
                    );
                  })}
                  <span className="text-xs text-amber-500 font-bold ml-1">{testimonial.rating}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-6 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{testimonial.name}</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] text-zinc-500 tracking-wider">Verified Local Member</span>
                  </div>
                </div>
                <span className="text-xs text-zinc-600">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregated ratings badge for trust */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-950 border border-zinc-900 text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 border border-red-500/20 text-xl font-bold italic shrink-0">
            J2F
          </div>
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Join Paharganj's Elite Squad</h4>
            <p className="text-xs text-zinc-400 mt-1">Excellent training infrastructure rated <strong>4.8 averages</strong> out of 519 active local Google Maps feedback forms.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
