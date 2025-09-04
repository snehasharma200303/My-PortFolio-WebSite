'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ScreenshotSection() {
  return (
    <section id="screenshot" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Portfolio Preview
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A screenshot of my portfolio website
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-xl mx-auto max-w-4xl"
        >
          <div className="relative w-full" style={{ height: '500px' }}>
            <Image 
              src="/portfolio-screenshot.jpg" 
              alt="Portfolio Website Screenshot" 
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}