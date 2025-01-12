'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AJ Traders-microservice shopping app',
    description: 'Full-stack web application with modern features',
    image: '/ajtraders.jpg',
    tags: ['NextJs', 'Springboot', 'MySQL','microservices'],
    github: 'https://github.com/Kirushanthan03/AJ-Traders-frontend',
    demo: 'https://github.com/Kirushanthan03/AJ-traders-backend'
  },
  {
    title: 'Field Service management app',
    description: 'Full-stack web application with modern features',
    image: '/fsm.jpg',
    tags: ['React', 'Springboot', 'postgreSQL'],
    // github: 'https://github.com/Kirushanthan03/AJ-Traders-frontend',
    // demo: 'https://github.com/Kirushanthan03/AJ-traders-backend'
  },
  {
    title: 'microservice project for shopping',
    description: 'A microservice project for order processing using springboot',
    image: '/Ead.jpg',
    tags: [ 'Springboot', 'MySQL'],
    // github: 'https://github.com/Kirushanthan03/AJ-Traders-frontend',
    // demo: 'https://github.com/Kirushanthan03/AJ-traders-backend'
  },
  // Add more projects...
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and ongoing projects
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      frontend
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      backend
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

