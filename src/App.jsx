import React from 'react';
import StaggeredMenu from './components/StaggeredMenu';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Contact', link: '#contact' },
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/pawpawly' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/fiqri-ardian-9423b8243/' },
  ];

  const handleItemClick = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <StaggeredMenu
        logoText="CookiesDev"
        items={menuItems}
        socialItems={socialItems}
        position="right"
        colors={['#1f2937', '#111827']}
        accentColor="#38bdf8"
        onItemClick={handleItemClick}
        isFixed={true}
      />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  );
}
