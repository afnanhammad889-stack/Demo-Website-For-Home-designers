import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { MoveHorizontal, Sparkles, CheckCircle2 } from 'lucide-react';
import { BEFORE_IMAGE, AFTER_IMAGE } from '../data/content';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Initial introductory animation when entering viewport
  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setSliderPosition(48);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging && e.type !== 'touchmove') return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove, isDragging]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [handleMove, isDragging]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section
      id="transformation"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#08080a] text-white border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3"
            >
              Architectural Transformation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white"
            >
              From Vision To Reality.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-neutral-400 text-sm md:text-base leading-relaxed"
          >
            Drag the interactive divider to inspect how dated builder-grade finishes were demolished and replaced by monolithic Calacatta Viola marble and concealed smoked oak joinery.
          </motion.div>
        </div>

        {/* Before / After Interactive Slider Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-none border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl select-none"
        >
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after transformation comparison slider"
            onKeyDown={handleKeyDown}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => {
              setIsDragging(false);
              setIsHovered(false);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] cursor-ew-resize outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            {/* Base Image (BEFORE - Left/Underneath) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={BEFORE_IMAGE}
                alt="Original dated kitchen before renovation by Valmont Studio"
                className="w-full h-full object-cover pointer-events-none filter brightness-90 contrast-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Subtle darkened vignette */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* Overlay Image (AFTER - Revealed from left by clip-path) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img
                src={AFTER_IMAGE}
                alt="Transformed modern architectural kitchen after renovation by Valmont Studio"
                className="w-full h-full object-cover pointer-events-none filter brightness-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Draggable Vertical Divider Bar */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Divider Line */}
              <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]" />

              {/* Center Circular Handle */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-2xl transition-all duration-200 pointer-events-auto ${
                    isDragging || isHovered ? 'scale-110 shadow-white/30' : 'scale-100'
                  }`}
                >
                  <MoveHorizontal className="w-5 h-5 text-neutral-900" />
                </div>
              </div>
            </div>

            {/* Static Clean Typography Badges (Zero-Pill Discipline) */}
            <div className="absolute top-6 left-6 z-30 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 text-white text-xs uppercase tracking-[0.2em]">
                Before <span className="text-neutral-400 ml-1">· 1990s Oak</span>
              </div>
            </div>

            <div className="absolute top-6 right-6 z-30 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 border border-black/10 text-neutral-950 text-xs uppercase tracking-[0.2em] font-medium">
                After <span className="text-neutral-600 ml-1">· Valmont Architecture</span>
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <div className="bg-black/70 backdrop-blur-md px-4 py-1.5 border border-white/10 text-[11px] uppercase tracking-[0.25em] text-neutral-300 flex items-center gap-2">
                <span>Drag divider left / right</span>
              </div>
            </div>
          </div>

          {/* Transformation Narrative Bar */}
          <div className="p-6 md:p-8 bg-neutral-900/60 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Previous Condition</p>
              <p className="text-neutral-300 font-light leading-relaxed">
                Dated honey-oak cabinetry, fragmented wall partitions, dated tile counters, and obstructive soffits that isolated the kitchen from natural light.
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Architectural Intervention</p>
              <p className="text-neutral-300 font-light leading-relaxed">
                Structural removal of bearing partition, installation of flush steel support beam, and bookmatched Calacatta Viola monolithic cantilevered island.
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-xs uppercase tracking-widest mb-1">Enduring Value</p>
              <p className="text-neutral-300 font-light leading-relaxed">
                Seamless flow to primary living salon, concealed secondary prep pantry, integrated architectural cove illumination, and museum-grade tactile materiality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
