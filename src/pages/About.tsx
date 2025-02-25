import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, Rocket } from 'lucide-react';

const About = () => {

  const [isExpanded, setIsExpanded] = useState(false)
  
  const fullText =
  "Entrepreneurship Cell, Galgotias University strives to stimulate and encourage entrepreneurship and innovation, both within Entrepreneurship Cell and beyond. We endeavour to help aspiring entrepreneurs overcome any hurdles they face and support them in any way possible, including by connecting them to mentors and investors and providing any other support they need. Apart from this, we attempt to enhance the culture of entrepreneurship and invention. From hosting talks with the leaders of various industries, conducting workshops to propagate skills related to entrepreneurship to organizing events and competitions that enable participants to showcase their skills, E-Cell aims to build a community of innovation and excellence.";

const shortText = fullText.split(" ").slice(0, 30).join(" ") + "..."; 
  return (
    <div className="bg-[radial-gradient(circle,rgba(255,247,212,1),rgba(255,217,90,0.8),rgba(192,127,0,0.6),rgba(76,61,61,0.4))]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center ">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="About Us background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-black"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-black"
          >
 {isExpanded ? fullText : shortText}          </motion.p>

 <button onClick={()=> setIsExpanded(!isExpanded)}
  className="mt-4 text-blue-600 font-semibold hover:underline">
    {isExpanded? "Read Less" : "Read More"}
 </button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-100">Our Mission</h2>
              </div>
              <p className="text-gray-300">
                To create and nurture a vibrant entrepreneurial ecosystem that empowers students
                to transform their innovative ideas into successful ventures, contributing to
                the economic and social development of our society.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Rocket className="h-8 w-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-100">Our Vision</h2>
              </div>
              <p className="text-gray-300">
                To be recognized as a leading entrepreneurship cell that fosters innovation,
                creativity, and entrepreneurial spirit among students, making Galgotias University
                a hub for startup culture and business leadership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-blue-400" />,
                title: '50+ Startups',
                description: 'Successfully incubated and supported through our programs'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-400" />,
                title: '1000+ Members',
                description: 'Active student entrepreneurs in our community'
              },
              {
                icon: <Target className="h-12 w-12 text-blue-400" />,
                title: '₹1Cr+ Funding',
                description: 'Raised by our startups through various channels'
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Kumar',
                role: 'Founder, TechStart',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                quote: 'E-Cell provided me with the perfect platform to transform my idea into a successful startup.'
              },
              {
                name: 'Priya Singh',
                role: 'CEO, EduTech Solutions',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                quote: 'The mentorship and support from E-Cell were instrumental in my entrepreneurial journey.'
              },
              {
                name: 'Amit Patel',
                role: 'CTO, Innovation Labs',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                quote: 'E-Cell events and workshops helped me network with industry leaders and like-minded entrepreneurs.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-100">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;