import { ArrowRight, Award, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import PersonCards from '../components/card';
import {InfiniteMovingCardsDemo} from '../components/crousel';

const Home = () => {
  return (
    <div className='bg-[radial-gradient(circle,rgba(255,247,212,1),rgba(255,217,90,0.8),rgba(192,127,0,0.6),rgba(76,61,61,0.4))]' >
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center bg-[radial-gradient(circle,rgba(255,247,212,1),rgba(255,217,90,0.8),rgba(192,127,0,0.6),rgba(76,61,61,0.4))] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-black"
          >
            Ignite Your Entrepreneurial Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Join Galgotias University's thriving ecosystem of Innovation and Entrepreneurship
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="/join-us"
            className="inline-flex items-center px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20   ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose E-Cell?</h2>
            <p className="text-lg text-gray-900 max-w-2xl mx-auto">
              We provide the perfect platform to transform your innovative ideas into successful ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-400" />,
                title: 'Innovation Hub',
                description: 'Access to state-of-the-art facilities and resources for your startup journey'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-400" />,
                title: 'Mentorship',
                description: 'Learn from experienced entrepreneurs and industry experts'
              },
              {
                icon: <Award className="h-12 w-12 text-blue-400" />,
                title: 'Recognition',
                description: 'Showcase your ideas and get recognized in various competitions'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-700 rounded-lg text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className='mx-40 mt-14'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Governance</h2>
        </div>
        <PersonCards />

      </section>
      {/* Latest Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Summit 2024',
                date: 'March 15-16, 2024',
                image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              },
              {
                title: 'Startup Weekend',
                date: 'April 5-7, 2024',
                image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              },
              {
                title: 'Innovation Workshop',
                date: 'April 20, 2024',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.date}</p>
                  <a
                    href="/events"
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section >
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Testimonial</h2>
        <InfiniteMovingCardsDemo />
      </section>
    </div>
  );
};

export default Home;