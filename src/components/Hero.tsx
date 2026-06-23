import React from "react";
import { motion } from "motion/react";
import { Phone, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { BRAND_INFO } from "../data";
import heroBg from "../assets/images/gym_hero_bg_1781514165897.jpg";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image with Rich Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="JUST 2 FIT Gym Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 scale-105 animate-pulse-slow"
        />
        {/* Dark radial and linear gradients for focus, contrast & depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/10"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-zinc-950/80"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-red-500/30 text-white text-xs sm:text-sm font-semibold tracking-wide mb-6 uppercase"
            id="hero-badge"
          >
            <div className="flex text-yellow-500">
              <Star className="w-4 h-4 fill-current text-amber-400" />
            </div>
            <span><span className="text-red-500 font-bold">{BRAND_INFO.rating} Stars</span> Rated Gym (519+ Reviews)</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white uppercase leading-tight"
            id="hero-headline"
          >
            Transform Your <span className="text-red-650 text-red-650 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600 block sm:inline">Body.</span> <br />
            Transform Your <span className="relative">
              <span className="relative z-10">Life.</span>
              <span className="absolute left-0 bottom-1 sm:bottom-3 w-full h-2 bg-red-650/30 -skew-x-12 z-0"></span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 font-sans leading-relaxed text-zinc-400 font-normal max-w-2xl"
            id="hero-subheadline"
          >
            Join one of the highest-rated gyms in Paharganj with professional trainers, modern equipment, and a motivating workout environment. Let us help you crush your health targets with custom guidance.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
            id="hero-ctas"
          >
            <button
              onClick={onJoinClick}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-705 bg-red-600 hover:from-red-700 hover:to-rose-700 text-white font-bold tracking-wide uppercase shadow-xl shadow-red-600/20 hover:shadow-red-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 text-center"
              id="hero-btn-join"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </button>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold tracking-wide uppercase border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-3 text-center"
              id="hero-btn-call"
            >
              <Phone className="w-5 h-5 text-red-500" />
              <span>Call +91 99903 18990</span>
            </a>
          </motion.div>
        </div>

        {/* Floating Quick Info Strips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-zinc-900/80 pt-8"
          id="hero-quick-info"
        >
          <div className="flex items-center gap-4 bg-zinc-950/60 backdrop-blur-md p-4 rounded-xl border border-zinc-900/50">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500 font-bold tracking-widest">Our Location</p>
              <p className="text-sm font-semibold text-zinc-200">Motia Khan, Paharganj, New Delhi</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-950/60 backdrop-blur-md p-4 rounded-xl border border-zinc-900/50">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500 font-bold tracking-widest">Gym Timings</p>
              <p className="text-sm font-semibold text-zinc-200">05:00 AM – 10:00 PM (Daily)</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-950/60 backdrop-blur-md p-4 rounded-xl border border-zinc-900/50">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-500 font-bold tracking-widest">Member Rating</p>
              <p className="text-sm font-semibold text-zinc-200">4.8 Average (519 Verified Reviews)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-12 top-0 bottom-0 w-px bg-zinc-900/30 hidden xl:block z-0"></div>
      <div className="absolute right-36 top-0 bottom-0 w-px bg-zinc-900/25 hidden xl:block z-0"></div>
    </section>
  );
}
