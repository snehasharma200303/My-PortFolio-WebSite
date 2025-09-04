'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';

function NotFoundContent() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-blue-600 dark:text-blue-500">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <ThemeProvider>
      <NotFoundContent />
    </ThemeProvider>
  );
}