import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ABOUT_DETAIL_IMAGE, PROJECT_HILLSIDE_IMAGE } from '../data/content';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const principles = [
    {
      title: 'Personalized Living',
      text: 'Every commission begins with a study of personal cadence: how morning light enters your study, how family convenes, and where private stillness resides.'
    },
    {
      title: 'Architectural Materiality',
      text: 'We select authentic materials that patina with grace—Cordova limestone, fumed oak, tactile linen, and unlacquered bronze.'
    },
    {
      title: 'Sculptural Illumination',
      text: 'Light is our primary material. We choreograph architectural cove reveals, window apertures, and low-glare luminaires to create serene twilight ambiance.'
    },
    {
      title: 'Obsessive Detailing',
      text: 'From shadowline baseboards to flush pivot doors and stone scribing, every junction is engineered with micrometric discipline.'
    }
  ];

  return (
    <section id="about" className="py-28 sm:py-36 bg-[#08080a] text-white border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Asymmetrical Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">01 / Studio Ethos</span>
              <span className="w-8 h-[1px] bg-neutral-800" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white leading-[1.1]"
            >
              Designing Homes <br />
              <span className="italic font-normal">With Intention.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-neutral-400 text-sm sm:text-base font-light leading-relaxed"
          >
            Founded on the belief that spaces shape human tranquility, Valmont Studio merges architectural rigor with bespoke interior artistry across Texas and beyond.
          </motion.div>
        </div>

        {/* Asymmetric Imagery Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          {/* Dominant Architectural Image (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group overflow-hidden bg-neutral-950 border border-neutral-850"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={ABOUT_DETAIL_IMAGE}
                alt="Pierre Jeanneret style lounge chair and travertine pedestal with dramatic natural sunlight shadows"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 bg-neutral-900/60 border-t border-neutral-800 text-[11px] uppercase tracking-[0.2em] text-neutral-400 flex items-center justify-between">
              <span>Figure 1.1 · Tactile Material Composition</span>
              <span>San Antonio Studio</span>
            </div>
          </motion.div>

          {/* Overlapping Secondary Vignette & Editorial Text (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-6 sm:p-8 bg-[#0c0c0e] border border-neutral-800"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">Core Manifesto</span>
                <span className="text-xs font-mono text-neutral-400">01 // ETHOS</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                We believe true luxury is invisible. It lives in the weight of a solid brass latch, the sound dampening of raw wool drapery, and the balance between monumental architecture and quiet human intimacy.
              </p>
              <div className="flex items-center gap-4 text-xs tracking-wider text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Private Commissions Currently Open</span>
              </div>
            </motion.div>

            {/* Secondary Overlapping Preview Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden border border-neutral-800 group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={PROJECT_HILLSIDE_IMAGE}
                  alt="Minimalist sanctuary bedroom looking out onto Texas ridge"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs uppercase tracking-[0.2em] text-white">
                  Hill Country Ridge Sanctuary
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Pillars - Clean Zero-Pill Typography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-neutral-850">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-xs font-mono text-neutral-400 mb-3">0{idx + 1}.</span>
              <h3 className="text-lg font-medium text-white mb-2 tracking-wide font-serif">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
