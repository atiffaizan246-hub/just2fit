import { motion } from "motion/react";
import { Check, ShieldAlert, Award, Star } from "lucide-react";
import { BRAND_INFO } from "../data";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-zinc-900/60 relative overflow-hidden border-t border-b border-zinc-900/80">
      {/* Background graphic */}
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full bg-red-650/4 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Hand: Image Collage & Badging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="about-visuals"
          >
            {/* Main Picture */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
                alt="Active Training Session at JUST 2 FIT Gym"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping small picture */}
            <div className="absolute -bottom-8 -right-4 w-48 sm:w-64 aspect-video rounded-xl overflow-hidden border-4 border-zinc-950 shadow-2xl hidden sm:block">
              <img
                src="/src/assets/images/gym_strength_area_1781514183374.jpg"
                alt="Strength Equipment Area"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Float Badge */}
            <div className="absolute -top-6 -left-6 bg-red-600 text-white font-black italic px-5 py-4 rounded-xl shadow-xl shadow-red-600/30 transform -rotate-3 text-center">
              <div className="text-2xl tracking-tighter">10+</div>
              <div className="text-[10px] uppercase font-sans tracking-widest font-bold text-red-100">Years Exp</div>
            </div>
          </motion.div>

          {/* Right Hand: Structured Story Copywriting */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            id="about-text"
          >
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm">About Our Gym</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2 leading-tight" id="about-header">
              Where Fitness Meets <br />
              <span className="text-red-600 font-black">Absolute Motivation.</span>
            </h2>
            <div className="w-16 h-1.5 bg-red-600 mt-4 rounded-full"></div>

            <p className="text-zinc-300 mt-6 leading-relaxed text-sm sm:text-base">
              At <strong className="text-white">{BRAND_INFO.name}</strong>, we are more than just a place to sweat. We are a tightly knit fitness community in Motia Khan, Paharganj, dedicated to helping individuals from all walks of life transform their bodies and achieve lifelong goals. Our friendly atmosphere eliminates the intimidation of standard training centers.
            </p>

            <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
              Whether your target is massive muscle gains, building functional core power, shedding stubborn fat, or maintaining general cardiac health, we facilitate clean air-conditioned facilities with carefully hand-selected equipment.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" id="about-checklist">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Motivating Vibes</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">High-energy music and supportive community push you forward.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Expert Coaches</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Certified personal trainers for safe, injury-free setups.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Premium Machines</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Bio-mechanically correct plate loaded stations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Result Driven Focus</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Continuous body fat tracking and dietary audits.</p>
                </div>
              </div>
            </div>

            {/* Quick trust strip */}
            <div className="mt-8 p-4 rounded-xl bg-zinc-950 border border-zinc-900/60 flex items-center gap-4">
              <Award className="w-8 h-8 text-red-500 shrink-0" />
              <div>
                <p className="text-xs text-zinc-400 capitalize">Owner's declaration</p>
                <p className="text-xs sm:text-sm font-mono text-zinc-300 italic">"We guarantee full personal attention to every beginner for the first 30 days to build their workout confidence."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
