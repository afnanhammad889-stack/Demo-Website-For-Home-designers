import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 sm:py-36 bg-[#09090b] text-white border-b border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">08 / Inquiries & Clarity</span>
            <span className="w-8 h-[1px] bg-neutral-800" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
            Frequently Asked Questions.
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="divide-y divide-neutral-850 border-t border-b border-neutral-850">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg sm:text-2xl font-serif font-light transition-colors duration-200 pr-6 ${
                    isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`p-1.5 border border-neutral-800 transition-colors ${
                    isOpen ? 'border-white text-white' : 'text-neutral-400 group-hover:border-neutral-600'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed pt-4 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
