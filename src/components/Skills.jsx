import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    name: 'Laravel',
    logo: 'https://laravel.com/img/logomark.min.svg',
    color: '#FF2D20'
  },
  {
    name: 'CodeIgniter',
    logo: 'https://codeigniter.com/assets/icons/44521256.png',
    color: '#EE4323'
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    color: '#61DAFB'
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    color: '#F7DF1E'
  },
  {
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    color: '#1572B6'
  },
  {
    name: 'HTML',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    color: '#E34F26'
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    color: '#06B6D4'
  },
  {
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    color: '#F24E1E'
  }
]

export default function Skills(){
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Logo Loop Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex animate-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-lg p-4">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}