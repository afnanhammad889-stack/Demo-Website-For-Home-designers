import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowUpRight, MapPin, Calendar, Layers, Check } from 'lucide-react';
import type { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onNextProject,
  onInquire,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl overflow-y-auto"
      >
        {/* Floating Top Control Bar */}
        <div className="sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-neutral-800 px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg tracking-[0.15em] text-white uppercase">
              {project.title}
            </span>
            <span className="hidden sm:inline text-xs text-neutral-400">· {project.location}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onInquire(project.title)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Inquire This Style</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              aria-label="Close Project Modal"
              className="p-2 text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 md:py-16 text-white">
          {/* Project Title Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-neutral-400 mb-4">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.location}</span>
              <span>·</span>
              <span>Completed {project.year}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 font-serif italic max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Large Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[16/9] w-full overflow-hidden border border-neutral-850 bg-neutral-950 mb-16 shadow-2xl"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-95"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Project Overview & Architectural Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-neutral-850 pb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0d0d10] p-6 border border-neutral-800 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-400 pb-2 border-b border-neutral-800">
                Specifications
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Area</span>
                  <span className="text-white font-mono">{project.specs.area}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Timeline</span>
                  <span className="text-white">{project.specs.duration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-850">
                  <span className="text-neutral-400">Location</span>
                  <span className="text-white">{project.location}</span>
                </div>
                <div className="flex flex-col py-1 gap-1">
                  <span className="text-neutral-400">Scope</span>
                  <span className="text-white font-light">{project.specs.scope}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Approach & Materiality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Design Approach
              </h2>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                Quiet monumentalism and intuitive human circulation.
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Materials & Details
              </h2>
              <ul className="space-y-3 pt-2">
                {project.materials.map((mat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-200">
                    <span className="w-1.5 h-1.5 bg-white" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Gallery - Cinematic Asymmetric Layout */}
          <div className="space-y-8 mb-20">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`overflow-hidden border border-neutral-850 bg-neutral-950 ${
                    idx === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} detail view ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation & Next Project */}
          <div className="pt-12 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => onInquire(project.title)}
              className="px-8 py-4 bg-white text-neutral-950 text-xs uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Start A Similar Project
            </button>

            <button
              onClick={onNextProject}
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Next Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
