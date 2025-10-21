import React from 'react'
import { motion } from 'framer-motion'
import LogoLoop from './LogoLoop'

const skills = [
  {
    name: 'Laravel',
    src: 'https://laravel.com/img/logomark.min.svg',
    alt: 'Laravel',
    href: 'https://laravel.com',
    color: '#FF2D20'
  },
  {
    name: 'CodeIgniter',
    src: 'https://codeigniter.com/assets/icons/44521256.png',
    alt: 'CodeIgniter',
    href: 'https://codeigniter.com',
    color: '#EE4323'
  },
  {
    name: 'React',
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    alt: 'React',
    href: 'https://reactjs.org',
    color: '#61DAFB'
  },
  {
    name: 'JavaScript',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    alt: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: '#F7DF1E'
  },
  {
    name: 'CSS',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    alt: 'CSS3',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    color: '#1572B6'
  },
  {
    name: 'HTML',
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    alt: 'HTML5',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    color: '#E34F26'
  },
  {
    name: 'Tailwind CSS',
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    alt: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
    color: '#06B6D4'
  },
  {
    name: 'Figma',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    alt: 'Figma',
    href: 'https://figma.com',
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
          className="mb-16"
        >
          <LogoLoop
            logos={skills}
            speed={80}
            direction="left"
            logoHeight={60}
            gap={48}
            pauseOnHover={true}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#000000"
            ariaLabel="Technology skills"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}