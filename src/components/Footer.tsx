import React from 'react';
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060608] text-neutral-400 text-xs tracking-wider border-t border-neutral-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-white font-light">
              VALMONT STUDIO
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm text-xs sm:text-sm">
              Architectural interior design practice crafting bespoke residential environments, monolithic culinary spaces, and serene living sanctuaries across Texas and nationwide.
            </p>
            <div className="pt-2 text-[11px] text-neutral-400">
              San Antonio · Texas Hill Country · Austin · Dallas
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#transformation" className="hover:text-white transition-colors">Before / After</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Methodology</a></li>
            </ul>
          </div>

          {/* Selected Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white block mb-4">
              Capabilities
            </span>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Full Home Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Residential Interiors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Kitchen & Living Monoliths</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sanctuary Bedroom & Bath</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bespoke Architectural Millwork</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Photorealistic 3D Visualization</a></li>
            </ul>
          </div>

          {/* Contact & Studio Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white block mb-4">
              Direct Inquiries
            </span>
            <p className="text-neutral-300 font-light">
              400 E. Olmos Drive, Suite 200<br />
              San Antonio, TX 78212
            </p>
            <p className="pt-2">
              <a href="mailto:inquiries@valmontstudio.com" className="hover:text-white transition-colors block">
                inquiries@valmontstudio.com
              </a>
              <a href="tel:+12108904420" className="hover:text-white transition-colors block">
                +1 (210) 890-4420
              </a>
            </p>
            <div className="pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@valmont.studio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} VALMONT STUDIO LLC. All Rights Reserved.</span>
            <span>·</span>
            <a href="#terms" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-neutral-400 transition-colors">Terms of Architectural Service</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[10px]">Back To Summit</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
