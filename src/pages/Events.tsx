import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Camera,
  User,
} from "lucide-react";

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
  2025:[
    {
      title: "Galgotias Ideathon",
      date: "April 5-7, 2024",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "One of the most anticipated events of the year, the *Galgotias Ideathon*",
      details:
        " It encouraged students to brainstorm and develop innovative solutions to real-world challenges. Participants worked on groundbreaking ideas, received mentorship, and competed for incubation and funding opportunities.",
      photoLink: "https://drive.google.com/drive/folders/example2024",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "Government Funding Opportunities",
      date: "April 5-7, 2024",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740653078/Ecell/lsbsknhocljjzadrmhgh.png",
      description:"Knowledge Session by IIT Ropar",
      details:
        "A highly informative session conducted by *Ms. Radhika Trikha, CEO IHUB-AWaDH, IIT Ropar, where students gained in-depth knowledge about **government funding opportunities* available for startups. The session highlighted grants, incubation support, and resources essential for early-stage startups to scale and succeed.",
      photoLink: "https://drive.google.com/drive/folders/example2024",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
  ],
  2024: [
    {
      title: "AICSSYC 2024 - Startup Pitching Competition",
      date: "April 5-7, 2024",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "E-Cell Galgotias played a vital role in organizing the *Startup Pitching Competition* at the *12th IEEE All India Computer Society Student and Young Professional Congress (AICSSYC 2024)*",
      details:
        "This event provided student entrepreneurs with a platform to pitch their innovative ideas in front of industry experts, investors, and startup mentors, receiving valuable feedback and networking opportunities.",
      photoLink: "https://drive.google.com/drive/folders/example2024",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "Volunteering at Bharat Shiksha Expo 2024",
      date: "April 5-7, 2024",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740652347/Ecell/ypbwxd6r25ma2fnpoyhk.jpg",
      description:
        "E-Cell members actively participated in the *Bharat Shiksha Expo*, an initiative promoting education, innovation, and entrepreneurship",
      details:
        "As volunteers, they engaged with students, educators, and industry leaders, facilitating discussions on startup culture, technological advancements, and the future of education in India.",
      photoLink: "https://drive.google.com/drive/folders/example2024",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "Startup Community Launch - Startअब",
      date: "April 5-7, 2024",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740651815/cnjksxeqyx3a6m7vw0rb.jpg",
      description:
        "A landmark event in E-Cell’s journey, *Startअब* was officially launched at Galgotias University, creating a thriving startup ecosystem for budding entrepreneurs.",
      details:
        "The event featured insightful speaker sessions, panel discussions, and collaborations, setting the stage for a new era of student-led innovation. ",
      photoLink: "https://drive.google.com/drive/folders/example2024",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    
   
  ],
  2023: [
    {
      title: "Law Meet AI",
      date: "March 15, 2023",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344382/law_meet_ai_1_sophpb.png",
      description:
        "Annual entrepreneurship summit featuring keynote speakers and competitions.",
      details:
        "At the Entrepreneurship Cell, innovation and compliance are at the core of fostering successful startups. This dynamic event featured engaging discussions on how Artificial Intelligence is transforming legal frameworks and businesses. Dr. Rodney D. Ryder led an interactive workshop where participants learned about intellectual property rights, regulatory compliance, and AI-powered solutions in the legal domain. The event included live case studies, group discussions, and a Q&A session, leaving attendees with a robust understanding of legal strategies for startups.",
      photoLink: "https://drive.google.com/drive/folders/example2023",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "E-talk 1",
      date: "March 15, 2023",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344409/business_talk_u7wxxv.png",
      description:
        "Annual entrepreneurship summit featuring keynote speakers and competitions.",
      details:
        "As part of the E-Talk series, this session combined inspiration and practical guidance. Yatinder Singh shared his remarkable journey of resilience, offering tips on overcoming personal and professional challenges. Fit Minds Singha delved into how mindfulness and mental fitness can enhance decision-making and productivity in entrepreneurship. Attendees actively participated in an engaging dialogue about balancing mental well-being with entrepreneurial demands. The event concluded with a fitness-oriented activity, leaving participants energized and motivated.",
      photoLink: "https://drive.google.com/drive/folders/example2023",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "EAD",
      date: "March 15, 2023",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344197/Banner_2200_x_1000_px_oygpxh.png",
      description:
        "Annual entrepreneurship summit featuring keynote speakers and competitions.",
      details:
        "EAD Noida 2023 was a flagship event that brought together some of India’s most successful entrepreneurs to inspire and mentor the next generation. The event featured keynote speeches, interactive sessions, and fireside chats covering a range of topics such as scaling businesses, navigating challenges, and embracing innovation. Attendees had the opportunity to network with leaders from companies like Info Edge, Kuku FM, Pesto Tech, Sirona Hygiene, and AstroTalk. The event concluded with an open forum where participants posed questions and received valuable advice, leaving with actionable insights and inspiration.",
      photoLink: "https://drive.google.com/drive/folders/example2023",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "Meta AI certification program",
      date: "March 15, 2023",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344197/meta_yqojfk.png",
      description:
        "Annual entrepreneurship summit featuring keynote speakers and competitions.",
      details:
        "This exclusive Meta Certification Program was a hands-on learning experience where participants explored the nuances of digital branding, marketing, and analytics. Led by industry experts, the program featured interactive workshops, live demonstrations, and personalized feedback sessions. Participants developed strategies for building a strong online presence, leveraging social media platforms, and driving engagement. The program concluded with a certification ceremony, equipping attendees with skills and credentials to excel in the competitive startup ecosystem.",
      photoLink: "https://drive.google.com/drive/folders/example2023",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "E-talk 2",
      date: "March 15, 2023",
      image:
        "https://res.cloudinary.com/dj7ey49h9/image/upload/v1740344196/live_webinar_instagram_post_uvkge3.png",
      description:
        "Annual entrepreneurship summit featuring keynote speakers and competitions.",
      details:
        "This session explored the rapidly evolving world of fintech and its impact on global industries. Rahul Pal, a leading fintech expert, discussed blockchain innovations, digital payments, and financial inclusion strategies. Attendees participated in engaging discussions and case studies, gaining actionable insights into navigating the fintech ecosystem. The event’s highlight was a collaborative brainstorming session where participants pitched fintech-based solutions to real-world problems, fostering innovation and teamwork.",
      photoLink: "https://drive.google.com/drive/folders/example2023",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "Pitch Me 2.0",
      date: "March 15, 2023",
      image:
        "https://www.ecellgu.in/static/media/pitchme2Img3.81ec1258ea69f1622d1e.JPG",
      description:
        "Annual entrepreneurship summit featuring keynote speakers and competitions.",
      details:
        "Taking the momentum from the first edition, Pitch Me: Edition 2 was designed to elevate entrepreneurial skills. Participants worked on refining their business models, enhancing presentation strategies, and addressing real-world market challenges. The expert panel provided actionable critiques, helping participants create pitches that resonated with investors and stakeholders. This event marked a step forward in fostering innovation and building investor-ready startups, offering a competitive yet nurturing environment for aspiring founders.This edition introduced advanced frameworks for pitching and market strategy development, guided by the same expert panel of Mr. Khalid Wani, Ms. Bahu, Ms. Trina Das, and Dr. Vishal Gandhi. The event empowered participants to think critically, develop market-fit solutions, and pitch confidently, showcasing their potential to disrupt industries.",
      photoLink: "https://drive.google.com/drive/folders/example2023",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
  ],
  2022: [
    {
      title: "Pitch Me",
      date: "November 10, 2022",
      image:
        "https://www.ecellgu.in/static/media/Pitchme_1.cc8e51fc0525108cc6b9.jpg",
      description:
        "Startup pitch competition with cash prizes and mentorship opportunities.",
      details:
        "Pitch Me is a series event of pitching competiton which occurs yearly. Industry investors come and judges the idea. Pitch Me was an annual entrepreneurial extravaganza where innovators had 10 minutes to pitch their game-changing ideas to industry investors and a panel of seasoned judges. This dynamic event combined high-stakes competition with invaluable networking opportunities, offering entrepreneurs the chance to secure investment, refine their concepts, and form lasting connections within the startup ecosystem. Joining us at Pitch Me meant witnessing the birth of the next big thing and being a part of the innovation revolution.",
      photoLink: "https://drive.google.com/drive/folders/example2022",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
    {
      title: "Launch Pad",
      date: "November 10, 2022",
      image:
        "https://www.ecellgu.in/static/media/Pitchme_3.941f807b296683500785.jpg",
      description:
        "Startup pitch competition with cash prizes and mentorship opportunities.",
      details:
        "Launchpad , an event that would spark innovation and creativity by bringing together founders, budding entrepreneurs, mentors, and industry leaders. It is going to be an official event series hosted by Entrepreneurship Cell, Galgotias University. It will be a 24-hour hackathon where people will get together to solve problems or create new ideas around a specific topic. There will be certain rules that everyone needs to follow while developing their product. There will also be a jury who will evaluate the final product. North- India’s Biggest Student Start-up & Entrepreneurship Event of 2023, 2 Day event on campus. Launchpad, would start by a speaker session which would act as a fuel in the minds of the budding entrepreneurs. The Speaker would be a renowned founder from the start-up ecosystem.",
      photoLink: "https://drive.google.com/drive/folders/example2022",
      avatar:
        "https://www.ecellgu.in/static/media/logo.2232b451832df499f34e8273e92bebad.svg",
    },
  ],
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
          isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"
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
            <h3 className="text-xl font-semibold mb-2 text-gray-100">
              {event.title}
            </h3>

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
          isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"
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
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                Event Details
              </h3>
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

const EventCarousel = ({ year, events }: EventCarouselProps) => {
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
              <EventCard event={event} />
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
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-100">
          Our Events
        </h1>
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
