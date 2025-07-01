import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';

const NAIROBI_IMAGES = [
  '1 (2).jpg', '1 (15).jpg', '1 (21).jpg', '1 (23).jpg', '1 (29).jpg', '1 (32).jpg', '1 (37).jpg', '1 (41).jpg', '1 (45).jpg', '1 (55).jpg',
  '1 (64).jpg', '1 (66).jpg', '1 (74).jpg', '1 (76).jpg', '1 (85).jpg', '1 (94).jpg', '1 (99).jpg', '1 (115).jpg', '1 (128).jpg', '1 (136).jpg',
  '1 (145).jpg', '1 (147).jpg', '1 (157).jpg', '1 (159).jpg', '1 (163).jpg', '1 (164).jpg', '1 (170).jpg', '1 (175).jpg', '1 (184).jpg', '1 (185).jpg',
  '1 (201).jpg', '1 (203).jpg', '1 (213).jpg', '1 (217).jpg', '1 (219).jpg', '1 (220).jpg', '1 (222).jpg', '1 (225).jpg', '1 (228).jpg', '1 (250).jpg',
  '1 (253).jpg', '1 (258).jpg', '1 (263).jpg', '1 (266).jpg', '1 (270).jpg', '1 (280).jpg', '1 (281).jpg', '1 (286).jpg', '1 (289).jpg', '1 (294).jpg', '1 (295).jpg'
];

function getCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  return { days, hours };
}

function NairobiSlideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % NAIROBI_IMAGES.length), 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg border border-orange bg-white mb-4 flex flex-col items-center">
      <div className="relative w-full max-w-2xl aspect-video bg-teal flex items-center justify-center">
        <AnimatePresence initial={false}>
          <motion.img
            key={NAIROBI_IMAGES[index]}
            src={`/Images/Past Events/Nairobi Edition/${NAIROBI_IMAGES[index]}`}
            alt={`Nairobi Edition ${index + 1}`}
            className="w-full h-full object-contain absolute top-0 left-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-1 mt-2 pb-2">
        {NAIROBI_IMAGES.slice(0, 6).map((_, i) => (
          <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === index ? 'bg-orange' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
}

const EVENTS = [
  {
    name: 'Multilingual Festival - Rift Valley Edition',
    video: '/Images/Upcoming Events/riftvalley edition.mp4',
    date: new Date('2025-09-20T08:00:00+03:00'),
    location: 'Rift Valley, Kenya',
    bannerAlt: 'Rift Valley Festival Banner',
    tagline: 'Where young linguists shine! Over 25 schools competing across 8 languages.',
    theme: "Innovate, Unite, and Transform: Africa's Journey Ahead",
    categories: 'Kindergarten to Junior School competitions',
    prizes: 'Trophies, medals, and school grants for winners!',
    cta: 'Secure Your Spot →',
  },
  {
    name: 'Multilingual Festival - Mombasa Edition',
    video: '/Images/Upcoming Events/mombasa event.mp4',
    date: new Date('2025-10-18T08:00:00+03:00'),
    location: 'Mombasa, Kenya',
    bannerAlt: 'Mombasa Festival Banner',
    tagline: 'Where young linguists shine! Over 25 schools competing across 8 languages.',
    theme: "Innovate, Unite, and Transform: Africa's Journey Ahead",
    categories: 'Kindergarten to Junior School competitions',
    prizes: 'Trophies, medals, and school grants for winners!',
    cta: 'Secure Your Spot →',
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdowns, setCountdowns] = useState(EVENTS.map(e => getCountdown(e.date)));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns(EVENTS.map(e => getCountdown(e.date)));
    }, 60 * 60 * 1000); // update every hour
    return () => clearInterval(interval);
  }, []);

  const pastEvents = [
    {
      title: 'Multilingual Festival Nairobi Edition',
      date: 'June 21, 2025',
      location: 'Nyayo Stadium, Nairobi',
      description: `On June 21, 2025, Nyayo Stadium hosted the Multilingual Fest Nairobi Edition, where over 17 primary schools showcased performances in English, Swahili, French, German, Arabic, and indigenous languages. The theme "Unite, Innovate and Transform Africa's Journey Ahead" was brought to life through poems, songs, dances, and skits. With more than 425 students participating, the event was broadcasted on KTN and TV47, highlighting Pearlson Languages and Solutions' mission to empower students through language learning and cultural exchange.`,
      images: NAIROBI_IMAGES.map(img => `/Images/Past Events/Nairobi Edition/${img}`),
      slideshow: true,
    },
    {
      title: 'Multilingual Festival Western Edition',
      date: 'March 2024',
      location: 'Western Kenya',
      description: 'A successful celebration of language diversity featuring student performances and cultural exchange.',
      images: [
        '/Images/IMG-20250410-WA0086.jpg',
        '/Images/IMG-20250410-WA0087.jpg',
        '/Images/IMG-20250410-WA0088.jpg',
        '/Images/IMG-20250410-WA0089.jpg',
        '/Images/IMG-20250410-WA0090.jpg',
        '/Images/IMG-20250410-WA0091.jpg',
      ],
    },
    {
      title: 'Language Exchange Program',
      date: 'January 2024',
      location: 'Various Schools',
      description: 'A series of language exchange programs connecting students with native speakers.',
      images: [
        '/Images/IMG-20250410-WA0092.jpg',
        '/Images/IMG-20250410-WA0093.jpg',
        '/Images/IMG-20250410-WA0094.jpg',
        '/Images/IMG-20250410-WA0095.jpg',
        '/Images/IMG-20250410-WA0096.jpg',
        '/Images/IMG-20250410-WA0097.jpg',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-teal py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Events & Celebrations
            </h1>
            <p className="text-xl text-orange max-w-3xl mx-auto">
              Join us in celebrating languages and cultural diversity through exciting events
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        className="section-padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-lg border border-orange p-1 bg-cream">
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-orange text-black shadow-lg'
                    : 'text-olive hover:bg-orange hover:text-black'
                } hover:scale-105`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                  activeTab === 'past'
                    ? 'bg-orange text-black shadow-lg'
                    : 'text-olive hover:bg-orange hover:text-black'
                } hover:scale-105`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {EVENTS.map((event, idx) => (
                <motion.div key={event.name} variants={itemVariants} whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.15)' }}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-cream border border-orange flex flex-col h-full">
                    {/* Heading Section */}
                    <div className="p-6 pb-0">
                      <div className="font-bold text-2xl md:text-3xl mb-2 text-black text-center">{event.name}</div>
                      <div className="italic text-orange text-base md:text-lg text-center mb-2">A day of creativity, connection, and multilingual magic!</div>
                      <div className="text-orange font-semibold mb-2 text-center">{event.tagline}</div>
                    </div>
                    {/* Video Section */}
                    <div className="w-full flex justify-center mb-4">
                      <div className="w-full max-w-md aspect-video bg-teal rounded-lg border border-orange flex items-center justify-center">
                        <video
                          className="w-full h-full object-contain rounded-lg"
                          controls
                          poster="/Images/PLS_logo.png"
                        >
                          <source src={event.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    {/* Body Section */}
                    <div className="flex-1 flex flex-col justify-between px-6 pb-6">
                      <div>
                        <div className="flex flex-col items-center mb-4">
                          <div className="text-lg font-bold text-black">{event.date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                          <div className="flex items-center gap-2 text-olive mt-2">
                            <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span className="font-semibold text-lg">Countdown:</span>
                            <span className="font-mono text-2xl bg-orange/10 px-4 py-1 rounded-lg shadow text-orange border border-orange animate-pulse">
                              {countdowns[idx].days} <span className="font-bold">days</span> {countdowns[idx].hours} <span className="font-bold">hours</span>
                            </span>
                          </div>
                        </div>
                        <div className="mb-2 text-center">
                          <span className="font-bold text-black">Theme:</span> <span className="text-olive">{event.theme}</span>
                        </div>
                        <div className="mb-2 text-center">
                          <span className="font-bold text-black">Categories:</span> <span className="text-olive">{event.categories}</span>
                        </div>
                        <div className="mb-2 text-center">
                          <span className="font-bold text-black">Prizes:</span> <span className="text-olive">{event.prizes}</span>
                        </div>
                      </div>
                      {/* Footer Section with CTA */}
                      <div className="flex justify-center mt-4">
                        <a
                          href="https://wa.me/254727211822?text=I'd%20like%20to%20register%20my%20school%20for%20the%20Multilingual%20Fest"
                          className="btn-primary text-center px-8 py-3 font-bold text-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.cta}
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.15)' }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-cream border border-orange">
                    {event.slideshow ? <NairobiSlideshow /> : event.images && event.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {event.images.map((img, imgIdx) => (
                          <motion.img
                            key={imgIdx}
                            src={img}
                            alt={`${event.title} image ${imgIdx + 1}`}
                            className="w-full h-32 object-cover rounded-lg border border-orange hover:scale-105 transition-transform duration-300"
                            whileHover={{ scale: 1.08 }}
                          />
                        ))}
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-black">{event.title}</h3>
                      <div className="flex items-center text-olive mb-2">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-olive mb-4">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {event.location}
                      </div>
                      <p className="text-olive mb-4">{event.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Events; 