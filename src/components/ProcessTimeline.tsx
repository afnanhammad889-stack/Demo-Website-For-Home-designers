import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-28 sm:py-36 bg-[#09090b] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">04 / Methodology</span>
              <span className="w-8 h-[1px] bg-neutral-800" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white">
              The Architecture of Process.
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Our disciplined five-phase architectural workflow brings clarity, cost control, and serene execution to complex residential commissions.
          </p>
        </div>

        {/* Desktop Horizontal Milestone Selector */}
        <div className="hidden lg:block mb-16">
          <div className="relative border-b border-neutral-800 pb-6 flex items-center justify-between">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-start text-left focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-mono transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-300'
                    }`}>
                      {step.number}
                    </span>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      · {step.duration}
                    </span>
                  </div>
                  <span className={`text-lg font-serif transition-colors duration-300 ${
                    isActive ? 'text-white font-normal' : 'text-neutral-400 group-hover:text-neutral-300'
                  }`}>
                    {step.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeStepLine"
                      className="absolute -bottom-[1px] h-[2px] bg-white"
                      style={{
                        left: `${(idx / (PROCESS_STEPS.length - 1)) * 80}%`,
                        width: '120px'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="grid grid-cols-12 gap-12 bg-[#0c0c0e] border border-neutral-850 p-10 mt-8 items-start">
            <div className="col-span-5 space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400">
                <span>Phase {PROCESS_STEPS[activeStep].number}</span>
                <span>·</span>
                <span>{PROCESS_STEPS[activeStep].duration}</span>
              </div>
              <h3 className="text-3xl font-serif font-light text-white">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {PROCESS_STEPS[activeStep].summary}
              </p>
            </div>

            <div className="col-span-7 border-l border-neutral-800 pl-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
                Phase Deliverables & Activities
              </span>
              <div className="space-y-4">
                {PROCESS_STEPS[activeStep].details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span className="font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Stack Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-[#0c0c0e] border border-neutral-850"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                <span className="text-xs font-mono text-neutral-400">Phase {step.number}</span>
                <span className="text-xs text-neutral-400 font-mono">{step.duration}</span>
              </div>
              <h3 className="text-xl font-serif font-light text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                {step.summary}
              </p>
              <div className="space-y-2 pt-2 border-t border-neutral-850">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                    <span className="text-neutral-400">·</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
