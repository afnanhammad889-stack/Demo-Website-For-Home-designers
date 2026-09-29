import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/content';

function CountUpNumber({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeVal * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <span ref={ref} className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-white">
      {count}
      <span className="text-neutral-400 font-sans text-3xl sm:text-4xl">{suffix}</span>
    </span>
  );
}

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#09090b] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col border-l border-neutral-800 pl-6 sm:pl-8"
            >
              <div className="mb-2">
                <CountUpNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-300 font-light mb-1">
                {stat.label}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
                ({stat.note})
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
