'use client';

import { motion } from 'framer-motion';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Resume
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and qualifications
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Education
            </h3>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">B.Tech in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Galgotias University</p>
                <p className="text-gray-500 dark:text-gray-500">2022 - 2026</p>
                <p className="text-gray-500 dark:text-gray-500">Cgpa: 8.7</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Relevant coursework: Data Structures and Algorithms, Database Management, Web Development, Software Engineering, UIUX
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">12th</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">St. Andrew's Public School Agra</p>
                <p className="text-gray-500 dark:text-gray-500">2021 - 2022</p>
                <p className="text-gray-500 dark:text-gray-500">% : 87</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Stream: Mathmatics
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Experience
            </h3>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Aiml (Virtual Intership)</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">AICTE-Eduskills</p>
                <p className="text-gray-500 dark:text-gray-500">Summer 2023</p>
                <ul className="mt-3 text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                  <li>Gained hands-on experience in core AI/ML concepts including supervised & unsupervised learning, data preprocessing, and model evaluation.</li>
                  <li>Explored practical applications of AI/ML in areas like prediction models, classification, and recommendation systems</li>
                  <li>Improved understanding of data visualization and model optimization techniques</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Hackathons</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Hackathon conducted by Galgotias University And SIH</p>
                <ul className="mt-3 text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                  <li>Actively participated in multiple national & college-level hackathons, working on innovative solutions in web development, AI/ML, and problem-solving</li>
                  <li>Collaborated with diverse teams, applied React, Java, and Python skills, and enhanced real-world project building & presentation abilities.</li>
                  <li>Gained exposure to time-bound coding, teamwork, and creative solution design.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a 
            href="/SnehaSharmaProfessionalResume.pdf" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}