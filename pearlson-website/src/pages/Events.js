import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const target = new Date('2025-06-21T08:00:00+03:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setCount({ days, hours, minutes });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const upcomingEvents = [
    {
      title: 'Multilingual Fest Nairobi Edition',
      date: 'June 21, 2025',
      location: 'Nyayo Stadium, Nairobi, Kenya',
      description: 'Celebrate languages (French, German, Spanish, Chinese, Kiswahili, English, Sign Language) with poems, songs, raps, drama, and more under the theme \'Unite, Innovate and Transform Africa\'s Journey Ahead.\' Starts at 8:00 AM EAT.',
      image: '/Images/IMG-20250410-WA0084.jpg',
    }
  ];

  const pastEvents = [
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
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-pearlson-navy py-20"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Events & Celebrations
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
              <button
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'upcoming'
                    ? 'bg-pearlson-navy text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-2 rounded-lg ${
                  activeTab === 'past'
                    ? 'bg-pearlson-navy text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative h-64 md:h-full">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          poster="/Images/IMG-20250410-WA0084.jpg"
                        >
                          <source src="/Images/21st june event.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {event.date}
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {event.location}
                        </div>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                          <p className="text-lg font-semibold text-pearlson-red">
                            Event starts in {count.days} days, {count.hours} hours, {count.minutes} minutes
                          </p>
                        </div>
                        <a
                          href="https://wa.me/254727211822?text=I'd%20like%20to%20learn%20more%20about%20the%20Multilingual%20Fest%20or%20enroll%20my%20school"
                          className="btn-primary w-full text-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register Now
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
              <motion.div 
                className="bg-gray-50 section-padding"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="container-custom">
                  <motion.h2 
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Past Events
                  </motion.h2>
                  <motion.div 
                    className="grid grid-cols-1 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Image Gallery */}
                    <motion.div 
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        '/Images/IMG-20250410-WA0084.jpg',
                        '/Images/IMG-20250410-WA0086.jpg',
                        '/Images/IMG-20250410-WA0087.jpg',
                        '/Images/IMG-20250410-WA0088.jpg',
                        '/Images/IMG-20250410-WA0089.jpg',
                        '/Images/IMG-20250410-WA0090.jpg',
                        '/Images/IMG-20250410-WA0091.jpg',
                        '/Images/IMG-20250410-WA0092.jpg',
                      ].map((image, index) => (
                        <motion.div key={index} variants={itemVariants}>
                          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              <img
                                src={image}
                                alt={`Past event ${index + 1}`}
                                className="w-full h-48 object-cover"
                              />
                            </motion.div>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Event Videos */}
                    <motion.div variants={itemVariants}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-4">Event Highlights</h3>
                          <p className="text-gray-600 mb-6">
                            Watch highlights from our past events and celebrations.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="relative rounded-lg overflow-hidden shadow-xl"
                            >
                              <video
                                className="w-full h-auto"
                                controls
                                poster="/Images/IMG-20250410-WA0084.jpg"
                              >
                                <source src="/Images/event video 1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="relative rounded-lg overflow-hidden shadow-xl"
                            >
                              <video
                                className="w-full h-auto"
                                controls
                                poster="/Images/IMG-20250410-WA0086.jpg"
                              >
                                <source src="/Images/event video 2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </motion.div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>

                    {/* Other Past Events */}
                    {pastEvents.map((event, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Card className="mb-16 hover:shadow-xl transition-shadow duration-300">
                          <Badge variant="secondary" className="mb-2">Past</Badge>
                          <h3 className="text-2xl font-bold mb-6">{event.title}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {event.images.map((image, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="relative group overflow-hidden rounded-lg"
                              >
                                <img
                                  src={image}
                                  alt={`${event.title} - Image ${imgIndex + 1}`}
                                  className="w-full h-48 object-cover"
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex items-center text-gray-600 mb-4">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            {event.date}
                          </div>
                          <div className="flex items-center text-gray-600 mb-4">
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
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {event.location}
                          </div>
                          <p className="text-gray-600">{event.description}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Floating Registration Button */}
      <motion.a
        href="https://wa.me/254727211822?text=I'd%20like%20to%20learn%20more%20about%20the%20Multilingual%20Fest%20or%20enroll%20my%20school"
        className="fixed bottom-8 right-8 bg-pearlson-red text-white px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Register
      </motion.a>
    </div>
  );
};

export default Events; 