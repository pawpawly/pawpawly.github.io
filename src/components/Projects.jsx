import React from 'react'
import { motion } from 'framer-motion'
import museumImage from '/src/assets/museumkayuhbaimbai.png'
import portfolioImage from '/src/assets/portfolio.png'
import siakadImage from '/src/assets/siakad.png'

const projects = [
  { 
    id: 1, 
    title: 'Sistem Informasi Akademik Politeknik Kotabaru', 
    desc: 'A web-based academic information system designed to manage student data, course registration, lecturer schedules, and academic reports efficiently for Politeknik Kotabaru.',
    tech: ['React', 'Node.js', 'Laravel', 'MySQL'],
    image: siakadImage,
    link: '#'
  },
  { 
    id: 2, 
    title: 'Sistem Informasi Museum Kayuh Baimbai Kota Banjarmasin', 
    desc: 'An interactive digital platform showcasing the cultural heritage and collections of Museum Kayuh Baimbai, featuring virtual tours, historical archives, and museum management tools.',
    tech: ['CodeIgniter 4', 'Tailwind CSS', 'MySQL'],
    image: museumImage,
    link: '#'
  },
  { 
    id: 3, 
    title: 'Website Portfolio', 
    desc: 'A modern and responsive personal portfolio website to showcase projects, skills, and professional background — built with elegant animations and clean design.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    image: portfolioImage,
    link: '#'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects that demonstrate my experience in building impactful and modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-black rounded-xl overflow-hidden border border-white/10 ring-1 ring-white/10 hover:border-[var(--accent)] hover:ring-[var(--accent)] transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-white text-black hover:text-gray-600 px-4 py-2 rounded-lg font-semibold text-sm"
                    >
                      View Project
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-gray-600 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
