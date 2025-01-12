'use client'


import Link from 'next/link'
import { Github, Linkedin, Mail} from 'lucide-react'

import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import TechnicalSkills from '../components/technical-skills'
import ProjectsSection from '../components/projects-section'
import SoftSkills from '../components/soft-skills'
import ContactSection from '../components/contact-section'
import Navbar from '../components/navbar'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <Navbar />

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <TechnicalSkills />
        <ProjectsSection />
        <SoftSkills />
        <ContactSection />
      </main>

      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="https://github.com" className="hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:example@email.com" className="hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Ravichandran Kirusanthan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

