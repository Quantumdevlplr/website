import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import { Users, Calendar, Rocket } from 'lucide-react';

const photos = {
  teams: [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      width: 2070,
      height: 1380,
      title: "E-Cell Core Team"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      width: 1950,
      height: 1300,
      title: "Technical Team"
    }
  ],
  events: [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      width: 2070,
      height: 1380,
      title: "E-Summit 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      width: 1950,
      height: 1300,
      title: "Startup Weekend"
    }
  ],
  startups: [
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      width: 1950,
      height: 1300,
      title: "Startup Showcase"
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      width: 1950,
      height: 1300,
      title: "Innovation Hub"
    }
  ]
};

const GallerySection = ({ title, photos, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <div className="flex items-center mb-8">
      <Icon className="h-8 w-8 text-blue-400 mr-3" />
      <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
    </div>
    <PhotoAlbum
      layout="rows"
      photos={photos}
      targetRowHeight={300}
      spacing={8}
      padding={0}
      renderPhoto={({ photo, wrapperStyle, imageProps }) => (
        <motion.div
          style={{ position: 'relative', ...wrapperStyle }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            {...imageProps}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
            <p className="text-sm font-medium">{photo.title}</p>
          </div>
        </motion.div>
      )}
    />
  </motion.div>
);

const Gallery = () => {
  const [activeSection, setActiveSection] = useState('teams');

  const sections = [
    { id: 'teams', title: 'Teams', icon: Users },
    { id: 'events', title: 'Events', icon: Calendar },
    { id: 'startups', title: 'Startups', icon: Rocket }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Gallery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our memories and achievements through these captured moments
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-2 inline-flex space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <section.icon className="h-5 w-5 mr-2" />
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <GallerySection
              title={sections.find(s => s.id === activeSection).title}
              photos={photos[activeSection]}
              icon={sections.find(s => s.id === activeSection).icon}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;