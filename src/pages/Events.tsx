import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Camera, User } from 'lucide-react';

interface EventDetails {
  title: string;
  date: string;
  image: string;
  description: string;
  details: string;
  photoLink: string;
  avatar: string;
}

interface EventCarouselProps {
  year: string;
  events: EventDetails[];
}

interface Events {
  [key: string]: EventDetails[];
}

const events: Events = {
  2025: [
    {
      title: 'E-Summit 2025',
      date: 'March 3-4, 2025',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      description: 'The biggest entrepreneurship summit featuring industry leaders and innovative startups.',
      details: 'Join us for two days of inspiring talks, workshops, and networking opportunities with industry leaders and fellow entrepreneurs.',
      photoLink: 'https://drive.google.com/drive/folders/example2025',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ],
  2024: [
    {
      title: 'Startup Weekend',
      date: 'April 5-7, 2024',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'A 54-hour event where developers, designers, and business professionals come together.',
      details: 'Experience the thrill of building a startup from scratch in just 54 hours with like-minded innovators.',
      photoLink: 'https://drive.google.com/drive/folders/example2024',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ],
  2023: [
    {
      title: 'E-Summit 2023',
      date: 'March 15-16, 2023',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Annual entrepreneurship summit featuring keynote speakers and competitions.',
      details: 'A successful gathering of entrepreneurs, investors, and industry experts sharing insights and opportunities.',
      photoLink: 'https://drive.google.com/drive/folders/example2023',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ],
  2022: [
    {
      title: 'Pitch Perfect',
      date: 'November 10, 2022',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Startup pitch competition with cash prizes and mentorship opportunities.',
      details: 'An exciting competition where startups pitched their innovative ideas to expert judges and investors.',
      photoLink: 'https://drive.google.com/drive/folders/example2022',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Pitch Perfect',
      date: 'November 10, 2022',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Startup pitch competition with cash prizes and mentorship jhdiluhxiludfz hivuheidlhuze jszdivs  sjeh hbwa i ciaie cawbw egaiu ug iu aif aiueg fga3 ga ig ifgawe sgfaiuw ig iuag iuwgesa opportunities.',
      details: 'An exciting competition wherejsduibih si hfh ae h hiwaeh ihawi ehe oawehf weh fiaw fiuwea iweuf iawef iur iuiweaigiuwg iuwiiaewg fiweu f3figawi iuwge iawei hfiwauea flusgweifg iuwg iwae f wieg iuwe fw ii ahw ehflisdh gshef s gu hie fiwhkh slhe luhe h ihsle hgshzlhserh iluewh hsel rhgioh;oihg;lhsgohdroihgsjghcvh bsehz;oshd;ghx;oihsreoih goie hh h ighs hghd sheoij iiooioishher  ohoih oiewhohoi hiuih i hheufserhgse  i ihwhe hsawh fwhefh sehgslghslehgisueh 8a wehf j h iuhiuh z iuahw4ifhsiu hskejrh sh sz skjvs ieuhrsjkvjs iuzhgiuh iue hs uh siuhvr iuawh ih iuhes jsiuhxerjvsxigrjbzvjs ,jj veru ih kxjd is iuers isue gish sjd vli uvu iush kjb livuhsiuiurrh ish hvih idfhv isuirh ih vh rdhlis uhsiuh iih srh ksxjhdr lhilh dvsxh lfh iush vhdkf sdxihxdiurh xlhrlvsheilhxjhdvlhrgh  u h izhius i hzhs u gh rh ius lz oi hsh oizh oih oiehshe ih oh ewg hljse startups pitched their innovative ideas to expert judges and investors.',
      photoLink: 'https://drive.google.com/drive/folders/example2022',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Pitch Perfect',
      date: 'November 10, 2022',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Startup pitch competition with cash prizes and mentorship jhdiluhxiludfz hivuheidlhuze jszdivs  sjeh hbwa i ciaie cawbw egaiu ug iu aif aiueg fga3 ga ig ifgawe sgfaiuw ig iuag iuwgesa opportunities.',
      details: 'An exciting competition wherejsduibih si hfh ae h hiwaeh ihawi ehe oawehf weh fiaw fiuwea iweuf iawef iur iuiweaigiuwg iuwiiaewg fiweu f3figawi iuwge iawei hfiwauea flusgweifg iuwg iwae f wieg iuwe fw ii ahw ehflisdh gshef s gu hie fiwhkh slhe luhe h ihsle hgshzlhserh iluewh hsel rhgioh;oihg;lhsgohdroihgsjghcvh bsehz;oshd;ghx;oihsreoih goie hh h ighs hghd sheoij iiooioishher  ohoih oiewhohoi hiuih i hheufserhgse  i ihwhe hsawh fwhefh sehgslghslehgisueh 8a wehf j h iuhiuh z iuahw4ifhsiu hskejrh sh sz skjvs ieuhrsjkvjs iuzhgiuh iue hs uh siuhvr iuawh ih iuhes jsiuhxerjvsxigrjbzvjs ,jj veru ih kxjd is iuers isue gish sjd vli uvu iush kjb livuhsiuiurrh ish hvih idfhv isuirh ih vh rdhlis uhsiuh iih srh ksxjhdr lhilh dvsxh lfh iush vhdkf sdxihxdiurh xlhrlvsheilhxjhdvlhrgh  u h izhius i hzhs u gh rh ius lz oi hsh oizh oih oiehshe ih oh ewg hljse startups pitched their innovative ideas to expert judges and investors.',
      photoLink: 'https://drive.google.com/drive/folders/example2022',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ]
};

const EventCard = ({ event }: { event: EventDetails }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[400px] w-full  perspective-1000 overflow-x-hidden"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Front of the card */}
      <div 
        className={`absolute inset-0 w-full h-full ${
          isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-opacity duration-300`}
      >
        <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-xl">
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsFlipped(true)}
              className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-full hover:bg-gray-800/80 transition-colors"
            >
              <User className="h-5 w-5 text-white" />
            </motion.button>
          </div>
          <div className="p-6 overflow-y-auto h-[calc(400px-192px)]">
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{event.title}</h3>
            <p className="text-gray-300 mb-4">{event.date}</p>
            <p className="text-gray-400 mb-4">{event.description}</p>
            <div className="flex justify-between items-center sticky bottom-0 bg-gray-800 pt-4">
              <button
                onClick={() => setIsFlipped(true)}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Read More
              </button>
              <a
                href={event.photoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300"
              >
                <Camera className="h-5 w-5 mr-2" />
                Photos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back of the card */}
      <div 
        className={`absolute inset-0 w-full h-full ${
          isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 [transform:rotateY(180deg)]`}
      >
        <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-xl">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <img
                src={event.avatar}
                alt="Event Organizer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-gray-100 font-semibold">Event Organizer</h4>
                <p className="text-gray-400 text-sm">E-Cell Team</p>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Event Details</h3>
              <p className="text-gray-300">{event.details}</p>
            </div>
            <div className="sticky bottom-0 flex justify-between items-center bg-gray-800 pt-4">
              <button
                onClick={() => setIsFlipped(false)}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Go Back
              </button>
              <a
                href={event.photoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EventCarousel = ({ year, events } : EventCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure we move by two cards at a time
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % events.length); // Loop to the start when reaching the end
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + events.length) % events.length); // Loop to the end when reaching the start
  };

  // Slice the events array to show two events at a time
  const displayEvents = events.slice(currentIndex, currentIndex + 2);

  return (
    <div className="relative">
      <h3 className="text-2xl font-bold mb-6 text-gray-100">{year}</h3>
      <div className="relative overflow-auto rounded-lg">
        <div className="flex space-x-4">
          {displayEvents.map((event, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EventCard event={event}  />
            </motion.div>
          ))}
        </div>

        {events.length > 2 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/80 p-2 rounded-r-lg hover:bg-gray-800/80 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/80 p-2 rounded-l-lg hover:bg-gray-800/80 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Event = () => {
  return (
    <div className="py-20 bg-[radial-gradient(circle,rgba(255,247,212,1),rgba(255,217,90,0.8),rgba(192,127,0,0.6),rgba(76,61,61,0.4))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-100">Our Events</h1>
        <div className="space-y-16">
          {Object.entries(events)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, yearEvents]) => (
              <EventCarousel key={year} year={year} events={yearEvents} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
