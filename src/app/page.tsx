'use client';

import MainLayout from '@/components/layout/MainLayout';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </MainLayout>
  );
}
