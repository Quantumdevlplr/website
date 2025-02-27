import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Target, Award } from 'lucide-react';

const StartupCommunity = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Startup Community"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Startup Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Join our thriving ecosystem of innovators and entrepreneurs
          </motion.p>
        </div>
      </section>

      {/* Featured Startups */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Startups</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Portfolio management',
                founder: 'Saket Maharaj ',
                description: 'Managers those people portfolio who are not able to give time in stock market',
               
              },
              {
                name: 'Stitched',
                founder: 'Lalit Mohan Joshi',
                description: 'Stitched offers personalized, custom-made clothing through a streamlined online platform. Customers select from a variety of options and work closely with skilled tailors to create unique, perfectly fitting garments.',
  
              },
              {
                name: 'Voyago',
                founder: 'Aryan Raj',
                description: 'Voyago, "Explore the Unknown," solves travel planning issues for adventurers by providing an AI-driven app that uncovers hidden gems, plans optimized trips, and fosters community. It offers personalized recommendations, in-app bookings, and rewards, redefining travel experiences.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Green cab',
                founder: 'Atul mani tripathi ',
                description: 'In this we introduce cab service, in which only ev cars will allow to give service. Eco-friendly. Cities like, Delhi-NCR, Mumbai, Hyderabad, Bangalore, who has high AQI, will prefer ev for sure. Huge demand in future.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'HealthTech',
                founder: 'Amit Patel',
                description: 'Remote healthcare monitoring system for rural areas',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'HealthTech',
                founder: 'Amit Patel',
                description: 'Remote healthcare monitoring system for rural areas',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
            ].map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                {/* <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
                  <p className=" mb-4 text-white">Founded by {startup.founder}</p>
                  <p className="text-white">{startup.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Resources & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="h-8 w-8 text-blue-600" />,
                title: 'Incubation',
                description: 'Access to workspace, mentorship, and essential resources'
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Mentorship',
                description: 'Guidance from industry experts and successful entrepreneurs'
              },
              {
                icon: <Target className="h-8 w-8 text-blue-600" />,
                title: 'Funding',
                description: 'Connect with investors and funding opportunities'
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: 'Network',
                description: 'Access to alumni network and industry connections'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Partner with Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Looking to collaborate with innovative startups? Join our community as a partner
            organization and help shape the future of entrepreneurship.
          </p>
          <a
            href="/join-us"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  );
};

export default StartupCommunity;