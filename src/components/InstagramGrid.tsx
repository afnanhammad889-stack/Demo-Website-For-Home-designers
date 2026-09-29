import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/content';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#08080a] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2 block">
              07 / Social Archive
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
              Follow Our Work.
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors pb-1 border-b border-neutral-700 hover:border-white"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@valmont.studio</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* 4-Column Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden bg-neutral-950 border border-neutral-850 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-75"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-6">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-white/80" />
                </div>
                <div>
                  <p className="text-xs text-white/90 font-light mb-2 line-clamp-2">
                    {item.title}
                  </p>
                  <span className="text-[11px] uppercase tracking-widest text-neutral-300 flex items-center gap-1 font-mono">
                    <span>View Post</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
