import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../data/content';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>('01');
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(SERVICES[0]);

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#09090b] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">02 / Capabilities</span>
              <span className="w-8 h-[1px] bg-neutral-800" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white">
              Bespoke Services.
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            From initial structural space planning to turnkey bespoke furniture curation, our studio executes complete architectural interior transformations.
          </p>
        </div>

        {/* Editorial Layout: Left Services List + Right Persistent Image Showcase (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Vertical Services List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-neutral-850">
            {SERVICES.map((service) => {
              const isActive = activeId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setActiveId(service.id);
                    setHoveredService(service);
                  }}
                  onClick={() => {
                    setActiveId(service.id);
                    setHoveredService(service);
                  }}
                  className={`group py-6 sm:py-8 transition-colors duration-300 cursor-pointer ${
                    isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-6 sm:gap-8">
                      <span className={`text-xs sm:text-sm font-mono transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-300'
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`text-xl sm:text-2xl md:text-3xl font-serif font-light transition-all duration-300 ${
                        isActive ? 'text-white translate-x-1' : 'text-neutral-400 group-hover:text-neutral-200'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-400 transition-colors">
                        {service.subtitle.split('&')[0]}
                      </span>
                      <div className={`p-2 transition-transform duration-300 ${isActive ? 'rotate-45 text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile & Active Details Accordion */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pt-4"
                      >
                        <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-xl pl-12 sm:pl-16 mb-4">
                          {service.description}
                        </p>

                        {/* Deliverables Unboxed Tags */}
                        <div className="pl-12 sm:pl-16 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-400 mb-4">
                          {service.deliverables.map((item, i) => (
                            <span key={i} className="flex items-center gap-2">
                              <span>·</span>
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>

                        {/* Mobile Image Display */}
                        <div className="lg:hidden mt-4 pl-12 sm:pl-16">
                          <div className="aspect-[16/9] overflow-hidden border border-neutral-800">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>

                        <div className="pl-12 sm:pl-16 pt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(service);
                            }}
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-neutral-300 border-b border-white hover:border-neutral-400 pb-0.5 cursor-pointer"
                          >
                            <span>Inquire for {service.title}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop Right Side Sticky Image Showcase (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative aspect-[4/5] bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {hoveredService && (
                  <motion.div
                    key={hoveredService.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={hoveredService.image}
                      alt={hoveredService.title}
                      className="w-full h-full object-cover filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs uppercase tracking-[0.25em] text-neutral-300 mb-1 block">
                        Service Showcase · {hoveredService.number}
                      </span>
                      <h4 className="text-2xl font-serif font-light text-white mb-2">
                        {hoveredService.title}
                      </h4>
                      <p className="text-xs text-neutral-300 font-light line-clamp-2">
                        {hoveredService.subtitle}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
