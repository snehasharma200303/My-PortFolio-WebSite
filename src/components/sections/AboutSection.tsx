'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            {/* Profile image */}
            <Image 
              src="/MyPhoto.jpg" 
              alt="Sneha Sharma" 
              fill 
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Software Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm Sneha Sharma, a final year B.Tech IT student passionate about creating elegant, user-friendly software solutions. 
              My journey in technology has equipped me with a strong foundation in  frontend but Builing foundation in backend development too.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I enjoy solving complex problems and turning ideas into reality through clean, efficient code. 
              My experience with UI/UX design in Figma complements my development skills, allowing me to create 
              applications that are not only functional but also intuitive and visually appealing.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science</p>
                <p className="text-gray-500 dark:text-gray-500">Final Year Student</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400"> Greater Noida, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">snehasharma200303@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Interests</h4>
                <p className="text-gray-600 dark:text-gray-400">Web Development, UI/UX, Cybersecurity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}