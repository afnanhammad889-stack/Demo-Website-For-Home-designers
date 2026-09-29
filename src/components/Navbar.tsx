import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#hero"
            className="group flex flex-col tracking-wider focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-light text-white uppercase group-hover:text-neutral-300 transition-colors">
              VALMONT STUDIO
            </span>
          </a>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.18em] uppercase font-light text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              className="lg:hidden p-2 text-white hover:text-neutral-300 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#09090b] flex flex-col justify-between px-8 py-24 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">Navigation</span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-serif text-3xl sm:text-4xl text-neutral-200 hover:text-white tracking-wide transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="pt-10 border-t border-neutral-900 flex flex-col gap-6">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-4 bg-white text-neutral-950 text-center uppercase tracking-[0.25em] text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                Start Your Project
              </button>

              <div className="text-xs text-neutral-400 tracking-wider flex flex-col gap-1">
                <span>San Antonio · Texas Hill Country</span>
                <span>inquiries@valmontstudio.com</span>
                <span>+1 (210) 890-4420</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
