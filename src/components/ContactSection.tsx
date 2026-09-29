import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin, Instagram } from 'lucide-react';

interface ContactSectionProps {
  initialServiceOrProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceOrProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialServiceOrProject || 'Full Home Design',
    budget: '$150,000 — $300,000',
    timeline: 'Within 3 to 6 Months',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your property or goals.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">09 / Private Inquiries</span>
                <span className="w-8 h-[1px] bg-neutral-800" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mb-6">
                Commence a Conversation.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Whether considering a ground-up architectural build, comprehensive estate restoration, or bespoke culinary interior, we welcome thoughtful inquiries.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-850 space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-neutral-400 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    Studio Address
                  </span>
                  <p className="text-neutral-200 font-light">
                    400 E. Olmos Drive, Suite 200<br />
                    San Antonio, TX 78212
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-neutral-400 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    Direct Email
                  </span>
                  <a
                    href="mailto:inquiries@valmontstudio.com"
                    className="text-neutral-200 hover:text-white transition-colors font-light"
                  >
                    inquiries@valmontstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-4 h-4 text-neutral-400 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    Telephone
                  </span>
                  <a
                    href="tel:+12108904420"
                    className="text-neutral-200 hover:text-white transition-colors font-light"
                  >
                    +1 (210) 890-4420
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-4 h-4 text-neutral-400 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    Instagram
                  </span>
                  <span className="text-neutral-200 font-light">
                    @valmont.studio
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-neutral-800 p-8 sm:p-12 relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                    Inquiry Received with Appreciation.
                  </h3>
                  <p className="text-sm text-neutral-400 font-light max-w-md leading-relaxed">
                    Thank you, {formData.name}. Our principal designer will review your brief for the {formData.projectType} and contact you within one business day to arrange a private walkthrough.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Full Home Design',
                        budget: '$150,000 — $300,000',
                        timeline: 'Within 3 to 6 Months',
                        message: ''
                      });
                    }}
                    className="text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white border-b border-neutral-600 pb-1 cursor-pointer pt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Montgomery"
                        className={`w-full bg-[#141418] border px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@example.com"
                        className={`w-full bg-[#141418] border px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (210) 000-0000"
                        className="w-full bg-[#141418] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#141418] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Full Home Design">Full Home Design</option>
                        <option value="Residential Interiors">Residential Interiors</option>
                        <option value="Kitchen & Living Architecture">Kitchen & Living Architecture</option>
                        <option value="Sanctuary Bedroom & Bath">Sanctuary Bedroom & Bath</option>
                        <option value="Custom Millwork & Furnishings">Custom Millwork & Furnishings</option>
                        <option value="Historic Estate Restoration">Historic Estate Restoration</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Estimated Budget Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#141418] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="$100,000 — $200,000">$100,000 — $200,000</option>
                        <option value="$200,000 — $500,000">$200,000 — $500,000</option>
                        <option value="$500,000 — $1,000,000">$500,000 — $1,000,000</option>
                        <option value="$1,000,000+">$1,000,000+ (Monumental Estate)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#141418] border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Immediate (1 to 2 Months)">Immediate (1 to 2 Months)</option>
                        <option value="Within 3 to 6 Months">Within 3 to 6 Months</option>
                        <option value="Next Year / Ground-Up Blueprint">Next Year / Ground-Up Blueprint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                      Brief Message & Property Details *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share current square footage, location, architectural style, and specific aspirations..."
                      className={`w-full bg-[#141418] border px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500' : 'border-neutral-800 focus:border-white'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white text-neutral-950 hover:bg-neutral-200 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
