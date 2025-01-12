'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cover from '../cover.jpg'
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/50 bg-gray-50 dark:bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              Ravichandran Kirusanthan
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
           Critical thinking debater comes Software Engineer
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
      <a
        href="https://github.com/Kirushanthan03"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 transition-colors"
      >
        <Github className="h-6 w-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/ravichandran-kirusanthan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </a>
      <a
        href="mailto:kirusanthanravi90@gmail.com"
        className="text-gray-700 hover:text-gray-900 transition-colors"
      >
        <Mail className="h-6 w-6" />
      </a>
    </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square rounded-full bg-gradient-to-tr from-primary to-primary-foreground/20 shadow-2xl"
        >
          <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-950">
            <img
              src='/new.jpg'
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
