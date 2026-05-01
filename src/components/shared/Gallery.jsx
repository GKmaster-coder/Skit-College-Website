import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ items }) => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filteredItems

  const categories = ['All', ...new Set(items.map((item) => item.category))];
  const filteredItems = filter === 'All'
    ? items
    : items.filter((item) => item.category === filter);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = useCallback((dir) => {
    setLightbox((prev) => (prev + dir + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, navigate]);

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            type="button"
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
              filter === category
                ? 'bg-[#7A1F29] text-white border-[#7A1F29] shadow-lg'
                : 'bg-white text-slate-600 border-slate-100 hover:border-[#85b92b] hover:text-[#85b92b]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="relative group aspect-square overflow-hidden rounded-3xl bg-slate-100 cursor-zoom-in"
              onClick={() => openLightbox(index)}
            >
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.src}
                alt={item.alt || 'Gallery Image'}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-5 text-white text-3xl leading-none hover:text-gray-300 transition-colors z-10"
            >
              &times;
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl bg-white/10 hover:bg-white/20 rounded-full w-11 h-11 flex items-center justify-center transition-colors z-10"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl bg-white/10 hover:bg-white/20 rounded-full w-11 h-11 flex items-center justify-center transition-colors z-10"
            >
              ›
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={filteredItems[lightbox]?.src}
              alt={filteredItems[lightbox]?.alt || 'Gallery Image'}
              className="max-w-[90vw] max-h-[80vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 text-center">
              <p className="text-white/70 text-sm">{filteredItems[lightbox]?.alt}</p>
              <p className="text-white/40 text-xs mt-1">{lightbox + 1} / {filteredItems.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;