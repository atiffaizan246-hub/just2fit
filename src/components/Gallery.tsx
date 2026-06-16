import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "../data";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Workout", "Cardio", "Weights", "Trainers"];

  const filteredGallery = selectedCategory === "All"
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY.findIndex(g => g.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Visual Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase mt-2">
            Inside Our <span className="text-red-650">Powerhouse</span>
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Take a visual tour of our highly motivating workout sectors, modern plate loaders, clean amenities, and professional coaching sessions.
          </p>
        </div>

        {/* Filter categories tabs header */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-category-chips">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-zinc-950 text-zinc-455 text-zinc-400 hover:text-white border border-zinc-900/60 hover:bg-zinc-905 hover:bg-zinc-900"
              }`}
              id={`chip-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid of photos */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-images-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-900 bg-zinc-950 shadow-md"
                onClick={() => handleOpenLightbox(item)}
              >
                {/* Gym image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                />

                {/* Cover graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="bg-red-600 w-8 h-8 rounded-lg flex items-center justify-center text-white mb-2 shadow-lg shadow-red-600/30">
                    <Eye className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest font-mono">
                    {item.category} Zone
                  </span>
                  <h4 className="text-base font-bold text-white uppercase mt-0.5 tracking-wide">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox full-screen Modal Popup (with carousel controls) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxIndex(null)}
            id="gallery-lightbox"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 bg-zinc-900/60 rounded-full border border-zinc-800 hover:scale-105 transition-all"
              id="btn-close-lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left controller */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 bg-zinc-900/70 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-red-500 hover:scale-105 text-white transition-all z-10"
              id="lightbox-btn-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY[lightboxIndex].image}
                alt={GALLERY[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-zinc-900 shadow-2xl"
              />
              
              <div className="mt-4 text-center">
                <span className="text-xs text-red-500 uppercase tracking-widest font-mono font-bold block">
                  {GALLERY[lightboxIndex].category} Zone
                </span>
                <h3 className="text-lg font-bold text-white uppercase mt-1">
                  {GALLERY[lightboxIndex].title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-sans">
                  Image {lightboxIndex + 1} of {GALLERY.length}
                </p>
              </div>
            </motion.div>

            {/* Right controller */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-zinc-900/70 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-red-500 hover:scale-105 text-white transition-all z-10"
              id="lightbox-btn-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
