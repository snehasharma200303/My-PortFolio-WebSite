'use client';

import { motion } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';

function LoadingContent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-purple-600 animate-spin opacity-70" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <p className="mt-6 text-xl font-medium text-gray-800 dark:text-gray-200">Loading...</p>
      </motion.div>
    </div>
  );
}

export default function Loading() {
  return (
    <ThemeProvider>
      <LoadingContent />
    </ThemeProvider>
  );
}