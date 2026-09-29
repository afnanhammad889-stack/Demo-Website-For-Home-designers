import React from 'react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const statements = [
    {
      title: 'Personalized Design',
      note: 'Every space responds directly to your daily rituals and architectural context.'
    },
    {
      title: 'Attention To Detail',
      note: 'Engineered millwork with hairline tolerances, concealed pivots, and scribed stone.'
    },
    {
      title: 'Functional Spaces',
      note: 'Sculptural elegance that supports effortless living, entertaining, and quiet repose.'
    },
    {
      title: 'Quality Materials',
      note: 'Authentic stone, raw timber, and woven linen selected to age gracefully across decades.'
    },
    {
      title: 'Clear Communication',
      note: 'Disciplined documentation, transparent cost schedules, and relentless job-site advocacy.'
    }
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#08080a] text-white border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">05 / The Valmont Difference</span>
          <span className="w-8 h-[1px] bg-neutral-800" />
        </div>

        <div className="divide-y divide-neutral-850">
          {statements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="py-10 sm:py-14 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-white transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                  {item.title}
                </h3>
              </div>

              <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pl-12 sm:pl-16 md:pl-0">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
