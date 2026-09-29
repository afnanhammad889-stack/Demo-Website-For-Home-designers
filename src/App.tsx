/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { InstagramGrid } from './components/InstagramGrid';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CustomCursor } from './components/CustomCursor';
import { PROJECTS } from './data/content';
import type { Project, ServiceItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryTopic, setInquiryTopic] = useState<string>('Full Home Design');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (topic?: string) => {
    if (topic) {
      setInquiryTopic(topic);
    }
    scrollToSection('contact');
  };

  const handleSelectService = (service: ServiceItem) => {
    setInquiryTopic(service.title);
    scrollToSection('contact');
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-neutral-100 selection:bg-neutral-800 selection:text-white">
      {/* Subtle Desktop Cursor Follower */}
      <CustomCursor />

      {/* Top Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      <main>
        {/* Cinematic Hero */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onOpenInquiry={() => handleOpenInquiry()}
        />

        {/* Editorial Brand Statement */}
        <BrandStatement onDiscoverApproach={() => scrollToSection('about')} />

        {/* About Studio Section */}
        <AboutSection onLearnMore={() => scrollToSection('process')} />

        {/* Interactive Services Showcase */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Featured Projects Portfolio */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Showcase Before / After Slider */}
        <BeforeAfterSlider />

        {/* Animated Process Timeline */}
        <ProcessTimeline />

        {/* Why Choose Us Editorial Statements */}
        <WhyChooseUs />

        {/* Statistics & Provenance */}
        <Statistics />

        {/* Client Testimonials Slider */}
        <Testimonials />

        {/* Instagram / Social Proof Grid */}
        <InstagramGrid />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Final Cinematic Call to Action */}
        <FinalCTA onOpenInquiry={() => handleOpenInquiry()} />

        {/* Dedicated Contact & Private Inquiries */}
        <ContactSection initialServiceOrProject={inquiryTopic} />
      </main>

      {/* Minimalist Architectural Footer */}
      <Footer />

      {/* Fullscreen Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
        onInquire={(projTitle) => {
          setSelectedProject(null);
          handleOpenInquiry(projTitle);
        }}
      />
    </div>
  );
}
