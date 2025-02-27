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
              },
              {
                name: 'Green cab',
                founder: 'Atul mani tripathi ',
                description: 'In this we introduce cab service, in which only ev cars will allow to give service. Eco-friendly. Cities like, Delhi-NCR, Mumbai, Hyderabad, Bangalore, who has high AQI, will prefer ev for sure. Huge demand in future.',
              },
              {
                name: 'MSKARD Business Solution',
                founder: 'Rohan Chahal',
                description: 'MSKARD Business Solution offers a unified platform for startups and SMEs, integrating key business services and training through its "Course Trap Funnel Strategy." Aiming to be a growth partner, it seeks incubation support for team building, funding, mentorship, and resources to accelerate development and empower businesses.',
              },
              {
                name: 'Bajrang Dairy',
                founder: 'VIKRAM SINGH TOMAR',
                description: 'I want to sell my product at national level and my product is totally pure.my product is ghee,khoa and paneer,curd.After this product going to be Packaging just like Amul and mother dairy',
              },
              {
                name: 'Brain Controlled Wheelchair',
                founder: 'Aditya Gupta',
                description: 'Brain controlled wheelchair can be controlled using eeg brain signals which will help people with serious disability and paralyzed person to be included in society and restore their dignity. It will also discard use of their hands which will not result in injuries.',
              },
              {
                name: 'IndoWatch',
                founder: 'Abhishek Meena',
                description: 'My idea is to integrate augmented reality features into a smart watch and some more features too.',
              },
              {
                name: 'GameArtSeekers',
                founder: 'Abhinav Jha',
                description: 'Gaming is growing day by day and is one of the sectors which has seen unsurmountable amount of growth despite of a Pandemic hitting the entire world along with that the potential of Indian Gaming market is still untapped. So I have also a Idea in my mind which is new Game concept which I will showcase further.',
              },

              {
                name: 'Hengo',
                founder: 'Anjali Tarun',
                description: 'A fully automatic poultry farm.',
              },
              {
                name: 'GREENLYY',
                founder: 'Vaibhav sharma',
                description: 'Ecofriendly stationary products.',
              },
              {
                name: 'PawSecure',
                founder: 'Ajay Yadav',
                description: 'This platform aims to simplify pet care in India by offering a single hub for services, insurance, and shopping. It provides easy booking for grooming, vet visits, and training, along with affordable pet insurance and a personalized online store, leveraging AI for tailored recommendations and reaching underserved areas.',
              },
              {
                name: 'Rehold',
                founder: 'Nidhi Yadav',
                description: "A watch for school going children or who go away from parents. The watch have the features in which the parents will recieve the call while the child is in any danger as the child will scream the specific words while they feel unsafe and watch will detect and instantly call the parents. It will also have GPS for tracing the location of the child. The watch will be waterproof also , so that water or rain cannot make it unworkable. The watch will also be unwore just by parents' fingerprint otherwise it will make sound if someone is trying to open it.",
              },

              {
                name: 'Creating an online platform between tourists and tour guide or tourist places',
                founder: 'Saksham',
                description: 'Creating an online platform between tourists and tour guide or tourist places .',
              },
              {
                name: 'Pharm amrit',
                founder: 'Nishant Nagar',
                description: 'This is basically a app that with connect people who want medicine at their doorstep but this app have a different base than other app present in the market it aims to deliver medicine fastly and with full privacy.',
              },
              {
                name: 'Mandram agarbatti',
                founder: 'Kashish gupta',
                description: 'We collect flowers from temple nd dry them nd roast them.. Nd make agarbatti stick nd perfumes... It give sustainability to society nd environment.',
              },
              {
                name: 'Startup pathsala',
                founder: 'Prince Kumar Giri',
                description: 'We do not need to go IIT IIM and foreign universities or do not require formal education to become entrepreneur. It is required to change your mindset to open startup. We will teach common and average people what is business or startup. I want everyone understand value of innovation, discovery, and starting something your own is more easier than doing job. Overall I want to create job creater without having formal education with common background.',
              },
              {
                name: 'The Healers (multi-medicanal platform)',
                founder: 'Karan Mishra',
                description: "This platform tackles high medicine costs by promoting generics, connecting testing kit wholesalers with doctors, and planning to offer consultation services and related medical supplies.",
              },
              {
                name: 'College crave',
                founder: 'Sachin yadav',
                description: 'College Crave is a revolutionary food tech solution designed to streamline the canteen experience for both students and canteen owners. Our platform allows students to order food directly from their classrooms and skip the long queues that typically form during busy hours. This not only saves time for students but also helps canteen owners manage orders more efficiently. With a user-friendly mobile app, real-time order tracking, and digital payments, College Crave is set to transform how food is ordered and enjoyed on college campuses.',
              },
              {
                name: 'Recycling wastage',
                founder: 'Aryan kumar Singh',
                description: 'About waste recycling and there uses',
              },
              {
                name: 'OMTO',
                founder: 'Bharat nanda',
                description: 'Ab new age immigration company working in trusted immigration and job connectivity we work in job and work in different sectors to India students to earn well and settle abroad. Our main agenda is to make real immigration knowledge and logistics support to 8+ countries.',
              },
              {
                name: 'Healthy Grab-and-Go cafe',
                founder: 'Vibhor Trivedi',
                description: 'The Healthy Grab-and-Go Café is a chain of small cafés located near gyms and workplaces, offering nutritious, ready-to-eat meals and beverages tailored to health-conscious individuals. The café provides pre-portioned meals catering to specific diets, such as keto, vegan, and high-protein options. It also integrates technology through QR codes on packaging, allowing customers to access nutritional information and calorie breakdowns. Additionally, the café offers a subscription service for weekly meal packages, making it convenient for busy customers to maintain their healthy lifestyle.',
              },
              
              {
                name: 'Portfolio',
                founder: 'Archana Mishra',
                description: 'we are developing an innovative application designed to assist users in making decisions by leveraging the opinions of random individuals from across the globe. Often, users find themselves in situations where they need advice or a second opinion but may not have someone available to consult at that moment. Our app solves this problem by connecting users with a community of global participants who can provide input on their choices in real-time. This crowdsourcing approach offers diverse perspectives and helps users make informed decisions, no matter the time or place.',
              },
              {
                name: 'Vidyut:- Home Energy Consumption Monitor',
                founder: 'Shreyash Rai',
                description: "'Vidyut' is an energy consumption monitoring system designed to conserve energy and reduce electricity usage in households, factories, and institutions. Accessible via an application, Vidyut offers real-time energy consumption tracking, allowing users to monitor individual appliance usage and identify areas for savings. It features an automated power cut-off timer to prevent energy waste and enhance safety, along with a hidden switch for secure power control. This device aims to benefit the middle class, farmers, and traders by reducing energy bills, promoting environmental consciousness, enhancing control over energy usage, and improving safety. By minimizing energy waste, Vidyut contributes to a sustainable lifestyle and reduces the country's carbon footprint, creating a significant market impact.",
              },
              {
                name: 'MAKARD Agro',
                founder: 'Ruchita',
                description: 'MSKRDA Agro is an innovative Farmer-to-Consumer (F2C) platform revolutionizing agriculture by offering organic farming solutions and fair pricing. Our model provides farmers with essential facilities in exchange for crop shares, processes farm produce, and delivers fresh products directly to consumers through a streamlined supply chain. With bio-CNG-powered logistics, an e-commerce platform, and local delivery networks, MSKRDA Agro ensures sustainability, transparency, and efficiency, empowering farmers and delighting consumers.',
              },
              {
                name: 'Safety for girls and women',
                founder: 'Shivani sharma',
                description: "Concerned by the rising rate of rape cases, the concept proposes a sensor-based mobile application designed to enhance girls' and women's safety. The app would enable users to quickly transmit their location to family members and law enforcement through simple actions, such as double or triple tapping, similar to making an emergency call. Crucially, the app would continue to share the user's live location even if the phone is switched off. The goal is to significantly deter and reduce incidents of rape and kidnapping, thereby contributing to increased safety and potentially fostering economic growth.",
              },
               {
                name: 'Closet share',
                founder: 'Sakshi Singh',
                description: "The core idea revolves around a clothing rental and sharing service, encompassing two primary strategies. Firstly, the business would acquire or design new clothing items specifically for rental purposes. Secondly, it would source used clothing, modify them as needed, and then offer them for rent. Despite being a relatively new concept for the proposer, there's a strong interest in exploring and developing this business model.",
              },
              {
                name: 'Aeroworks Technologies',
                founder: 'Arpit goyal',
                description: 'We are solving the drone flying time problem using hydrogen as a power source. This will help logistic sector to deliver goods faster. We can use this in disaster management, medical emergencies etc.',
              },
              {
                name: 'Vaayu',
                founder: 'Ranjan gupta',
                description: 'Advance aqi monitoring system',
              },
              {
                name: 'Lawer Bhai',
                founder: 'Shivansh Singh',
                description: 'Lawyer Bhai is a revolutionary app that connects users with lawyers worldwide for instant legal advice in their preferred language. Whether it’s a quick consultation or full representation in court, Lawyer Bhai offers experts for every legal need—criminal, family, financial, and personal. Our platform ensures instant support for any situation and provides experienced lawyers for cases ranging from local courts to the Supreme Court. Justice is now just a tap away with Lawyer Bhai!',
              },
              {
                name: 'Swing plate',
                founder: 'Khushi yadav',
                description: "Swing Plate is a platform aiming to transform student food services by partnering with local buffets to offer a varied menu. Students can purchase meal plans, earn digital coins in an in-app wallet, and redeem these coins for rapid food delivery within 10 minutes or scheduled tiffin services. Emphasizing convenience, affordability, and speed, Swing Plate caters to students' busy lifestyles while simultaneously supporting local food vendors, creating a streamlined dining solution within the student community.",
              },
              {
                name: 'Harmonius',
                founder: 'Surya Narayan Kumar',
                description: 'I want to start a Music Production House, i have collaboration with some of the artists related to this field and want to launch the first music video on youtube and other broadcast channels.',
              },
              {
                name: 'GURUKUL REDEMPTION : The Choosen One',
                founder: 'Aman Jain',
                description: 'Me and my team are making a game We are not big shot companies like EA , Rock star games we are a indie team where we produce game so we are working on a project called Gurukul Redemption',
              },
              {
                name: 'green decor',
                founder: 'Tanishq',
                description: 'fusion of vegetation and  decorations',
              },
              {
                name: 'Zorwink',
                founder: 'Shadab Jawed',
                description: "Zorwink's QR platform helps business to create digital catalogue for your shop",
              },
              {
                name: 'Smart Agriculture Chatbot',
                founder: 'MOHAMMED IQRAMUL',
                description: "The proposed Smart Agriculture Chatbot is an AI-driven tool designed to transform farming by offering personalized, real-time assistance to farmers. It will integrate various data sources, such as weather forecasts, soil health data, and climate patterns, to provide actionable insights tailored to each farmer's specific needs. Recognizing the critical need for timely information to optimize farming practices and mitigate financial strain, this chatbot will address the current lack of personalized guidance. By leveraging generative AI, it aims to create a user-friendly platform that empowers farmers to sustainably enhance their productivity, contributing to both agricultural and environmental well-being.",
              },
              {
                name: 'MSKARD Milk',
                founder: 'Komal kumari',
                description: "MSKARD Milk is a sustainable Farmer-to-Consumer (F2C) dairy model that collects fresh milk directly from farmers' homes using eco-friendly electric three-wheelers equipped with milking machines and storage tanks. By eliminating middlemen, we ensure purity, fair pricing for farmers, and timely delivery to consumers. Surplus milk is processed into high-quality dairy products, adding value to the supply chain. MSKARD Milk guarantees freshness, transparency, and sustainability in every drop.",
              },
              {
                name: 'Restaurant',
                founder: 'Mudassir khan',
                description: 'Indians and foreigners should get their favorite food, just as foreigners like their country food and Indians like India foods.',
              },
              {
                name: 'BIHARI  LITTI  CHOKHA',
                founder: 'Ankit kumar choudhary',
                description: "We want to bring 'LITTI CHOKHA' at national level with specialized taste and flavour, produced by our established kitchen , it will be available online mode through our website for online customer and offline at our restaurant.",
              },
              {
                name: 'Medi-Quick is',
                founder: 'Vikash',
                description: 'Medi-Quick is a startup leveraging quick commerce to revolutionize healthcare by providing fast, reliable, and accessible services for both routine and emergency needs. It bridges the gap between healthcare providers and patients through a comprehensive platform offering medicine delivery, instant ambulance booking, at-home blood collection for lab tests, easy doctor appointment scheduling, and quick hospital bed reservations. Future enhancements include an AI-powered chatbot for health advice and personalized health insights. Medi-Quick prioritizes speed, accessibility, and comprehensiveness, with plans for scalability into telemedicine and partnerships. Its mission is to make healthcare more efficient and affordable, aiming to improve health outcomes and transform the industry with its "Fast Health. Fast Recovery" approach.',
              },
              {
                name: 'Drip & roll',
                founder: 'Arhaan Jawed',
                description: 'The essence of my application, Drip & Roll, lies in solving a problem that countless bachelors face when they step out of their homes. They can order food, groceries, and virtually everything else online, but when it comes to cleaning their clothes, they find themselves in a tough spot. This is where Drip & Roll comes to the rescue—liberating them from the hassle of laundry. With this app, users can seamlessly connect with local laundries around them and get their clothes cleaned without breaking a sweat. It’s not just an app; it’s a revolution for the modern bachelor!',
              },

              {
                name: 'Bolstered',
                founder: 'Adarsh Jaiswal',
                description: 'Its a software based service which provide security  , safety , protection and assurance to all the IT related companies and people from cyber attack of all kind.',
              },
              {
                name: 'Metroman',
                founder: 'Abhishek Kumar singh',
                description: "Metroman is offer men's beauty products",
              },
              {
                name: 'Smart accident response system',
                founder: 'Naman kapoor',
                description: "Today's time. I felt like I was in an accident, I was about to die, no one helped me, the ambulance came on time, even the police were late, so I thought that We have made such an app that even if an accident does not happen or life can be saved, in today's time there is a lot of improvement in technology so we can install a sensor in the bike or car, if any accident happens then the police or ambulance can be informed quickly. The team can quickly find out which accident has happened and save our life because if an accident happens today then with this app we can save our life and even the government has lost its cars or bike company also",
              },
              {
                name: 'Flying solar car',
                founder: 'Pradhuman Dixit',
                description: 'A car which fly on solar energy and have a.i system',
              },
              {
                name: 'Hauk(we prey waste)',
                founder: 'Harsh Agarwal',
                description: 'As we all know currently India is facing a huge problem of waste in country like India a million tons of waste is generated out of which only a few portion is collected and out of which only a. Few is getting treated. At that place we come we will collect all the waste in our respective area where we operate and will do mechanical sorting and segregating of the waste and finally converting it to different quality material which can be used by various carbon neutral companies in there products again and can even export the unfiltered waste to other countries as they also pay a good price for the Same and if we talk about market size the size of the market is about 35 billion and will keep on increasing.',
              },
              {
                name: 'sell white label water botles',
                founder: 'Mohit',
                description: ' in this we make white label water bottles and sell the hotels or restaurants where they put there own logo ro banding and sell the costumer',
              },
              {
                name: 'Battlesai',
                founder: 'Abhishek singh',
                description: 'Abhishek Singh proposes a multi-phased educational startup that integrates AI and gamification to enhance learning across different age groups. Initially, for children under 10, the platform will use AI to create interactive games, puzzles, and quizzes, making learning engaging and effective. For adolescents aged 10-20, the focus shifts to gaming-based learning, incorporating general knowledge and subject-specific content to improve productivity and analytical skills. For young adults aged 20-30, the platform will emphasize industrial knowledge and social skills development to prepare them for real-world scenarios. The startup will operate on a SaaS and freemium model, with five phases of expansion: starting with basic games and AI-driven customization, then expanding to state, national, and international levels, progressively adding features and integrating AR/VR technology. The goal is to revolutionize education by making it enjoyable and relevant for all ages.',
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-500 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-white">{resource.description}</p>
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