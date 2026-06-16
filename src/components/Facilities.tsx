import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Flame, Grid, Zap, UserCheck, Lock, Wind, Droplets, Info } from "lucide-react";
import { FACILITIES } from "../data";
import { FacilityItem } from "../types";

export default function Facilities() {
  const [activeFacility, setActiveFacility] = useState<FacilityItem>(FACILITIES[0]);

  const getFacilityIcon = (iconName: string, active: boolean) => {
    const className = `w-6 h-6 ${active ? "text-red-500 scale-110" : "text-zinc-400 group-hover:text-red-500"} transition-all duration-300`;
    switch (iconName) {
      case "Activity": return <Activity className={className} />;
      case "Flame": return <Flame className={className} />;
      case "Grid": return <Grid className={className} />;
      case "Zap": return <Zap className={className} />;
      case "UserCheck": return <UserCheck className={className} />;
      case "Lock": return <Lock className={className} />;
      case "Wind": return <Wind className={className} />;
      case "Droplets": return <Droplets className={className} />;
      default: return <Activity className={className} />;
    }
  };

  return (
    <section id="facilities" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-650/3 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Zone Specifications</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2">
            Explore Our <span className="text-red-600">Facilities</span>
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Equipped with premium infrastructure, we offer optimized spaces crafted explicitly for peak metabolic and strength exercises.
          </p>
        </div>

        {/* Visual interactive split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="facilities-interactive-container">
          
          {/* Left Column: Interactive Selector List (grid of 8 compact cards) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3" id="facilities-selector-list">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {FACILITIES.map((facility) => {
                const isActive = activeFacility.id === facility.id;
                return (
                  <button
                    key={facility.id}
                    onClick={() => setActiveFacility(facility)}
                    className={`group text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      isActive
                        ? "bg-zinc-900 border-red-600 shadow-md shadow-red-950/25"
                        : "bg-zinc-900/40 border-zinc-900/60 hover:bg-zinc-900/60 hover:border-zinc-800"
                    }`}
                    id={`btn-fac-${facility.id}`}
                  >
                    <div className={`p-2.5 rounded-lg border transition-colors ${
                      isActive ? "bg-red-500/10 border-red-500/20" : "bg-zinc-950 border-zinc-850"
                    }`}>
                      {getFacilityIcon(facility.iconName, isActive)}
                    </div>
                    <div>
                      <h3 className={`text-sm sm:text-base font-bold uppercase tracking-wide transition-colors ${
                        isActive ? "text-red-500" : "text-zinc-300 group-hover:text-white"
                      }`}>
                        {facility.name}
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">{facility.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Focus Image and full specs banner */}
          <div className="lg:col-span-7" id="facilities-banner-viewer">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFacility.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col justify-between shadow-2xl relative"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[350px] overflow-hidden">
                  <img
                    src={activeFacility.image}
                    alt={activeFacility.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/30"></div>
                  
                  {/* Floating category */}
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-red-500 border border-zinc-800">
                    Active Zone
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                      <span>Operational Zone</span>
                    </div>
                    <h3 className="text-2xl font-display font-black uppercase text-white tracking-wide">
                      {activeFacility.name}
                    </h3>
                    <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                      {activeFacility.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <Info className="w-4 h-4 text-red-500" />
                      <span>Complimentary for all active premium memberships.</span>
                    </div>
                    <a
                      href="#plans"
                      className="text-xs font-bold text-white uppercase tracking-widest hover:text-red-500 flex items-center gap-1 group/btn transition-colors"
                    >
                      <span>Check applicable plans</span>
                      <span className="text-red-500 group-hover/btn:translate-x-1 transition-transform inline-block">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
