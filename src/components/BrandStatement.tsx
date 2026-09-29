import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface BrandStatementProps {
  onDiscoverApproach: () => void;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ onDiscoverApproach }) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const statementWords = [
    'We', 'create', 'spaces', 'that', 'balance', 'architecture,', 'function', 'and', 'feeling.'
  ];

  return (
    <section
      ref={containerRef}
      className="py-32 sm:py-44 bg-[#0a0a0c] text-white border-b border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Subtle section label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">Philosophy</span>
          <span className="w-12 h-[1px] bg-neutral-800" />
        </motion.div>

        {/* Large Statement with Word-by-Word Scroll Reveal */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.15] tracking-tight mb-14 text-neutral-200">
          {statementWords.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.08 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block ${
                  word.includes('feeling') || word.includes('architecture')
                    ? 'text-white italic font-normal'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Supporting Editorial Paragraph & Action Link */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-neutral-850">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
              Intentional Simplicity
            </span>
          </div>

          <div className="md:col-span-8 flex flex-col items-start gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl"
            >
              Every home is an emotional sanctuary. We strip away superficial adornment to reveal authentic texture: hand-troweled lime plaster, monolithic limestone, aged timber, and pure daylight. Our spaces do not clamor for attention; they command presence through quiet restraint.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              onClick={onDiscoverApproach}
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white hover:text-neutral-300 transition-colors pb-1 border-b border-white hover:border-neutral-400 cursor-pointer"
            >
              <span>Discover Our Approach</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
