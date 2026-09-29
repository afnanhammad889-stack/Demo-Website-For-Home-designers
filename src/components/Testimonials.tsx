import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 sm:py-36 bg-[#09090b] text-white border-b border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">06 / Words of Trust</span>
            <span className="w-8 h-[1px] bg-neutral-800" />
            <span className="text-[10px] uppercase font-mono text-neutral-400">Demo Content Placeholder</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 border border-neutral-800 hover:border-neutral-500 rounded-full flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next Testimonial"
              className="w-10 h-10 border border-neutral-800 hover:border-neutral-500 rounded-full flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Quote Display with Smooth Crossfade */}
        <div className="min-h-[280px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-neutral-100 leading-snug tracking-tight">
                "{activeTestimonial.quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-neutral-850 gap-4">
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white tracking-wide">
                    {activeTestimonial.author}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 tracking-wider">
                    <span>{activeTestimonial.role}</span>
                    <span>·</span>
                    <span>{activeTestimonial.location}</span>
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block">
                    Commission
                  </span>
                  <span className="text-xs text-neutral-300 font-light">
                    {activeTestimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to testimonial ${idx + 1}`}
              className={`h-1 transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
