import { motion } from "motion/react";
import { Star, Wind, Dumbbell, ShieldCheck, Maximize, Users, Sparkles, MapPin } from "lucide-react";
import { FEATURES } from "../data";

export default function WhyChooseUs() {
  const getFeatureIcon = (iconName: string) => {
    const className = "w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300";
    switch (iconName) {
      case "Star":
        return <Star className={`${className} fill-current text-red-500`} />;
      case "Wind":
        return <Wind className={className} />;
      case "Dumbbell":
        return <Dumbbell className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Maximize":
        return <Maximize className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "MapPin":
        return <MapPin className={className} />;
      default:
        return <Dumbbell className={className} />;
    }
  };

  // Variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-red-650/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Our Strength</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2" id="features-header">
              Why Choose JUST <span className="text-red-600">2</span> FIT?
            </h2>
            <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-zinc-400 mt-4 text-base sm:text-lg">
              We provide an unmatched environment to break sweaty goals, build massive strength, and secure pristine results with extreme health focus.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="features-grid"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(220, 38, 38, 0.4)" }}
              className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:bg-zinc-900/80 transition-all duration-300"
              id={`feature-${feature.id}`}
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:bg-red-950/20 group-hover:border-red-900/35 transition-colors">
                {getFeatureIcon(feature.iconName)}
              </div>
              
              <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-red-500 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
