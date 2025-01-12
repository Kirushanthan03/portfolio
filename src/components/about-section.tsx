'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Palette, Brain, Rocket } from 'lucide-react'

// const features = [
//   {
//     icon: Code2,
//     title: 'Full Stack Development',
//     description: 'Building end-to-end solutions with modern technologies'
//   },
//   {
//     icon: Palette,
//     title: 'UI/UX Design',
//     description: 'Creating intuitive and beautiful user experiences'
//   },
//   {
//     icon: Brain,
//     title: 'Problem Solving',
//     description: 'Tackling complex challenges with innovative solutions'
//   },
//   {
//     icon: Rocket,
//     title: 'Performance Optimization',
//     description: 'Ensuring fast and efficient applications'
//   }
// ]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Badge className="mb-4" variant="secondary">About Me</Badge>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Passionate About Solving Problems
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
          A final year undergraduate from university of Moratuwa with strong technical , public speaking and leadership skills,
          A good communicator and a team player. Passion about solving problems and breaking challenges.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Internship Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
I completed my academic internship at codelantic pvt ltd as a Intern Backend Software Engineer (Java).It gave me the experience in different aspects of real world software engineering practices and decision making situations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Months of Internship</div>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Industry Projects worked</div>
              </CardContent>
           </Card>
           <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Java</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Springboot Framework</div>
              </CardContent>
           </Card>
           <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Codelantic</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Multinational Sotware Company</div>
              </CardContent>
           </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

