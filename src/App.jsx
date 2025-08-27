import React from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import AchievementsSection from '@/components/AchievementsSection'
import ContactSection from '@/components/ContactSection'

export default function App() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
