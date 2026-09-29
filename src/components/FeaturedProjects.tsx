import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import type { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-28 sm:py-36 bg-[#08080a] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">03 / Selected Works</span>
              <span className="w-8 h-[1px] bg-neutral-800" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white">
              Featured Projects.
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            A curated portfolio of private residences, architectural renovations, and bespoke living spaces shaped by timeless simplicity.
          </p>
        </div>

        {/* Editorial Layout: Varied Compositions (NOT an equal card grid) */}
        <div className="space-y-20 sm:space-y-28">
          {/* Project 1: Monumental Full-Width Featured Showcase */}
          {PROJECTS[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => onSelectProject(PROJECTS[0])}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-neutral-950 border border-neutral-850 mb-6">
                <img
                  src={PROJECTS[0].coverImage}
                  alt={PROJECTS[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-300 mb-2">
                      <span>{PROJECTS[0].location}</span>
                      <span>·</span>
                      <span>{PROJECTS[0].category}</span>
                      <span>·</span>
                      <span>{PROJECTS[0].year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-white group-hover:text-neutral-200 transition-colors">
                      {PROJECTS[0].title}
                    </h3>
                  </div>

                  <span className="text-xs uppercase tracking-[0.25em] text-white/90 border-b border-white/60 pb-1 self-start sm:self-auto">
                    View Project Case Study
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects 2 & 3: Asymmetric 2-Column Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Project 2 (7 cols) */}
            {PROJECTS[1] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={() => onSelectProject(PROJECTS[1])}
                className="lg:col-span-7 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950 border border-neutral-850 mb-6">
                  <img
                    src={PROJECTS[1].coverImage}
                    alt={PROJECTS[1].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">
                  <span>{PROJECTS[1].location}</span>
                  <span>·</span>
                  <span>{PROJECTS[1].category}</span>
                  <span>·</span>
                  <span>{PROJECTS[1].year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-white group-hover:text-neutral-200 transition-colors mb-2">
                  {PROJECTS[1].title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
                  {PROJECTS[1].description}
                </p>
              </motion.div>
            )}

            {/* Project 3 (5 cols, offset downward for editorial asymmetry) */}
            {PROJECTS[2] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={() => onSelectProject(PROJECTS[2])}
                className="lg:col-span-5 lg:pt-16 group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950 border border-neutral-850 mb-6">
                  <img
                    src={PROJECTS[2].coverImage}
                    alt={PROJECTS[2].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">
                  <span>{PROJECTS[2].location}</span>
                  <span>·</span>
                  <span>{PROJECTS[2].category}</span>
                  <span>·</span>
                  <span>{PROJECTS[2].year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-white group-hover:text-neutral-200 transition-colors mb-2">
                  {PROJECTS[2].title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {PROJECTS[2].description}
                </p>
              </motion.div>
            )}
          </div>

          {/* Project 4: Courtyard Villa Editorial Card */}
          {PROJECTS[3] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => onSelectProject(PROJECTS[3])}
              className="group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0b0b0e] border border-neutral-850 p-6 sm:p-10">
                <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={PROJECTS[3].coverImage}
                    alt={PROJECTS[3].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400">
                    <span>{PROJECTS[3].location}</span>
                    <span>·</span>
                    <span>{PROJECTS[3].category}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif font-light text-white group-hover:text-neutral-200 transition-colors">
                    {PROJECTS[3].title}
                  </h3>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {PROJECTS[3].description}
                  </p>

                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white border-b border-white pb-1 group-hover:border-neutral-400 transition-colors">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
