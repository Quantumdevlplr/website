import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StartupCommunityButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/startup-community')}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center group"
    >
      <Rocket className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out ml-0 group-hover:ml-2">
        Startup Community
      </span>
    </motion.button>
  );
};

export default StartupCommunityButton