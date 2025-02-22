import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = {
    leadership: [
      {
        name: 'Dr. Amit Kumar',
        role: 'Faculty Advisor',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          email: 'mailto:amit@example.com'
        }
      },
      {
        name: 'Rahul Sharma',
        role: 'President',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'mailto:rahul@example.com'
        }
      },
      {
        name: 'Priya Patel',
        role: 'Vice President',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'mailto:priya@example.com'
        }
      }
    ],
    ecell: [
      {
        name: 'Sneha Gupta',
        role: 'Events Coordinator',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'mailto:sneha@example.com'
        }
      },
      {
        name: 'Arjun Singh',
        role: 'Technical Lead',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'mailto:arjun@example.com'
        }
      },
      {
        name: 'Neha Sharma',
        role: 'Marketing Head',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        social: {
          linkedin: '#',
          twitter: '#',
          email: 'mailto:neha@example.com'
        }
      }
    ]
  };

  const TeamSection = ({ title, members, icon: Icon }) => (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <Icon className="h-8 w-8 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1 text-gray-100">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                )}
                {member.social.twitter && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </motion.a>
                )}
                {member.social.email && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.email}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Our Team</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals driving innovation and entrepreneurship at Galgotias University
          </p>
        </motion.div>

        <TeamSection title="Leadership Team" members={teamMembers.leadership} icon={Star} />
        <TeamSection title="E-Cell Team" members={teamMembers.ecell} icon={Users} />
      </div>
    </div>
  );
};

export default Team;