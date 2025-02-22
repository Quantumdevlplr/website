import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ESummit = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
            E-Summit 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Coming Soon • March 3-4, 2025
          </p>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <p className="text-gray-300 text-lg mb-6">
              Get ready for the biggest entrepreneurship summit of the year.
              Registration opens soon!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Notify Me
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ESummit