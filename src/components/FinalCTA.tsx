import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/content';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-32 sm:py-44 bg-[#08080a] text-white overflow-hidden border-b border-neutral-900">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Architectural living salon"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125 scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/60 to-[#08080a]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-neutral-600" />
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
            Commence Your Journey
          </span>
          <span className="w-8 h-[1px] bg-neutral-600" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white tracking-tight mb-6 max-w-3xl"
        >
          Let's Create <br />
          <span className="italic font-normal">Something Beautiful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mb-10 leading-relaxed"
        >
          Tell us about your space, your vision and what you want it to become. We accept a limited number of residential commissions each calendar year.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={onOpenInquiry}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span>Start Your Project</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.button>
      </div>
    </section>
  );
};
