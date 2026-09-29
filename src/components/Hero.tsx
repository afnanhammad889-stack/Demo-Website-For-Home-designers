import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenInquiry }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Subtle parallax zoom and movement while scrolling
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-end justify-center overflow-hidden bg-[#08080a] pb-16 sm:pb-24 pt-32"
    >
      {/* Background Image Container with Cinematic Mask Reveal */}
      <motion.div
        initial={{ clipPath: 'inset(10% 5% 10% 5%)', opacity: 0 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
      >
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="w-full h-full"
        >
          <img
            src={HERO_IMAGE}
            alt="Monumental minimalist living salon with natural stone and timber by Valmont Studio"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Sophisticated Architectural Gradients & Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* Hero Content Overlay */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12"
      >
        <div className="max-w-4xl">
          {/* Eyebrow / Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-neutral-400" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-light text-neutral-300">
              Architectural Interiors & Bespoke Living
            </span>
          </motion.div>

          {/* Main Headline Line-by-Line Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight leading-[1.05]"
            >
              Spaces Designed <br className="hidden sm:inline" />
              <span className="italic font-normal">To Be Lived In.</span>
            </motion.h1>
          </div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed mb-10"
          >
            Thoughtful interiors shaped around your lifestyle, architecture and vision. Monumental materiality, quiet craftsmanship, and timeless residential calm.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onExploreWork}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-950 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>

            <button
              onClick={onOpenInquiry}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white hover:border-white hover:bg-white/10 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar Details & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 sm:mt-20 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 tracking-wider gap-4"
        >
          <div className="flex items-center gap-6">
            <span>San Antonio, Texas</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Residential Architecture & Interior Design</span>
          </div>

          <div
            onClick={onExploreWork}
            className="group flex items-center gap-3 cursor-pointer text-neutral-400 hover:text-white transition-colors"
          >
            <span className="uppercase text-[11px] tracking-[0.25em]">Scroll Down</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1 group-hover:border-white transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
