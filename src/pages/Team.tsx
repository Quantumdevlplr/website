import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Star, Instagram } from 'lucide-react';
import { i, ins } from 'framer-motion/client';

const Team = () => {
  const teamMembers = {
    mentor:[
      {
        name:'Prof. (Dr) Avadhesh Kumar',
        role:'Pro Vice Chancellor',
        image:'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344841/pvc_curluo.png',
        social:{
          linkedin:'https://www.linkedin.com/in/avadhesh-kumar-3a0b2b1b4/',
          instagram:'https://www.instagram.com/dr_avadhesh_kumar',
        }},

        {
          name: 'Dr. Kamal Kishore Malhotra',
          role: 'CEO',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          social: {
            linkedin: 'https://www.linkedin.com/in/kamal-kishor-malhotra-bb76a221a',
            instagram: 'https://www.instagram.com/malhotrakamalk',
          }
      },
        {
          name: 'Mr. Sonu Kadam',
          role: 'Incubation Manager',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          social: {
            linkedin: 'https://www.linkedin.com/in/kamal-kishor-malhotra-bb76a221a',
            instagram: 'https://www.instagram.com/kamalkishormalhotra/',
          }
      },
        {
          name: 'Mr. Saurabh Arya',
          role: 'Marketing Manager',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
          social: {
            linkedin: 'https://www.linkedin.com/in/kamal-kishor-malhotra-bb76a221a',
            instagram: 'https://www.instagram.com/sourabh_arya4',
          }
      }
    ],
    leadership: [
      
      {
        name: 'Aastha Bajaj',
        role: 'President',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337947/wczhdmfkchi4qxwdsplz.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/aastha-bajaj-862a2225a',
          instagram: 'https://www.instagram.com/aastha_prerna',
        }
      },
      
      {
        name: 'Anshu Raj',
        role: 'Vice President',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337946/uw5s0lf0agzj1cydoya6.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/anshu-raj2006',
          instagram: 'https://www.instagram.com/tech_anshraj',
        }
      },
      {
        name: 'Abhinna Chaudhary',
        role: 'Secretary',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344928/ABHINNA-CHAUDHARY-_Secretary__acfro8.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/abhinna-chaudhary-203a3a260',
          instagram:'https://www.instagram.com/abhiinnaa'
        }
      },
      {
        name: 'Umang Jain',
        role: 'Treasurer',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337945/q68ngp9zffkhco7wcoig.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/umangjain2003',
          instagram: 'https://www.instagram.com/iamumangjain?igsh=M2NoYjk3cnZieXBs'
        }
      }
    ],
    head: [
      {
        name: 'Tanishqa Giri',
        role: 'Startup Development Team',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337945/xhzikyd7yd1whsavkhco.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/tanishqa-giri-b29a15260',
          twitter: '#',
          email: 'mailto:john@example.com'
        }
      },
      {
        name: 'Shreeshant Prasad',
        role: 'Technical Team',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344653/IMG_20241113_172609863_pg6tyk.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/shreeshant-prasad-1b1656297/',
          instagram:'https://www.instagram.com/shreeshant_26'
        }
      },
      {
        name: 'Anshika Saxena',
        role: 'Public Relations Team',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337946/tpj7colvdm4neyuycjuk.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/shreeshant-prasad-1b1656297/',
          instagram:'https://www.instagram.com/anshikasaxena.18'
        }
      },
      {
        name: 'Amish Roushan',
        role: 'Digital Media & Promotions Team',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337946/miacuad7msfbq8gtrx4v.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/amish-roushan-0425662a3',
          instagram:'https://www.instagram.com/aphs_amiiish_24'
        }
      },
      {
        name: 'Shaivy Patel',
        role: 'Marketing Head',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337946/ifzbbyldicdq6htjsc9q.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/shaivy-patel-2b97142a5',
          instagram: 'https://www.instagram.com/shhhhaivy',
        }
      },
      {
        name: 'Ankur Singh',
        role: 'Ambassador Head',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337946/xlyk7salvhqbihkajz41.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/ankur-singh-822386286',
          instagram:'https://www.instagram.com/oye_its_ankur'
        }
      },
      {
        name: 'Piyush Bhardwaj',
        role: 'Event Management Head',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337945/skoyacaeirixaaciwuhz.png',
        social: {
          linkedin: 'https://www.linkedin.com/in/piyush-bhardwaj-2a6b98247',
         instagram: 'https://www.instagram.com/__piyushh____'
        }
      },
      {
        name: 'Karan Chauhan',
        role: 'Media Team Head',
        image: 'https://res.cloudinary.com/dj7ey49h9/image/upload/v1740337946/roawr5fexwkqbsg7ihyc.jpg',
        social: {
          linkedin: 'https://www.linkedin.com/in/piyush-bhardwaj-2a6b98247',
          twitter: '#',
          email: 'mailto:john@example.com'
        }
      },

    ]
  };

  const TeamSection = ({ title, members, icon: Icon }: { title: string; members: { name: string; role: string; image: string; social: { linkedin?: string; twitter?: string; email?: string; instagram?: string } }[]; icon: React.ComponentType<{ className?: string }> }) => (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <Icon className="h-8 w-8 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {member.social.instagram && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.instagram}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
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

        <TeamSection title="Our Mentor" members={teamMembers.mentor} icon={Star} />
        <TeamSection title="Leadership Team" members={teamMembers.leadership} icon={Star} />
        <TeamSection title="Heads" members={teamMembers.head} icon={Users} />
      </div>
    </div>
  );
};

export default Team;