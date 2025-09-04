'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'Bus Scheduling System',
    description: 'Designed a bus scheduling and routing system to optimize routes and timings for better efficiency.',
    tags: ['Java', 'MySQL', 'Data Structures', 'Problem-Solving'],
    image: '/BusSchedulingSS.png',
    link: 'https://github.com/snehasharma200303/Automated-Bus-Scheduling-Route-Management-System',
  },
  {
    id: 2,
    title: 'Tic Tac Toe Game',
    description: 'Developed an interactive Tic Tac Toe game with multiplayer support and win/draw detection logic.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Problem-Solving'],
    image: '/TicTacToeGame.png',
    link: 'https://github.com/snehasharma200303/Tic-Tac-Toe-Game',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Developed a weather forecasting app showing real-time temperature, humidity, and location-based data using APIs.',
    tags: ['JavaScript', 'React.js', 'REST APIs', 'JSON Handling'],
    image: '/WeatherappSS.png',
    link: 'https://github.com/snehasharma200303/Weather-App',
  },
  {
    id: 4,
    title: 'Calculator',
    description: 'Built a fully functional calculator handling basic arithmetic operations with a clean interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    image: '/CalculatorSS.png',
    link: 'https://github.com/snehasharma200303/Calculator',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Created a responsive portfolio website to showcase projects, skills, and achievements with modern animations.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/PortFolioSS.png',
    link: 'https://github.com/snehasharma200303/My-PortFolio-WebSite',
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 sm:h-64 bg-gray-200 dark:bg-gray-700">
                {/* Project image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-opacity duration-300"
                />
                
                {/* Overlay on hover */}
                {activeProject === project.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
                  >
                    <a 
                      href={project.link} 
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </motion.div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/snehasharma200303" 
            className="inline-flex items-center px-6 py-3 bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium rounded-full transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2">View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}