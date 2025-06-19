import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const About = () => {
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
              About Pearlson Languages
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Empowering Kenyan students with language skills for global opportunities
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Founder Section */}
      <motion.div 
        className="section-padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/Images/founder_image.png"
                alt="Flency Atswenje - Founder"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-gray-600 mb-6">
                Flency Atswenje, an award-winning German teacher with over 15 years of experience,
                founded Pearlson Languages and Solutions with a vision to bridge language gaps
                in Kenya. Her dedication to education has empowered over 2,000 students with
                dynamic language learning experiences.
              </p>
              <p className="text-gray-600">
                Under her leadership, Pearlson has become a beacon of excellence in language
                education, particularly in French and German instruction, serving both rural
                and urban communities across Kenya.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div 
        className="bg-gray-50 section-padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide accessible, high-quality language education that empowers Kenyan
                  students to connect with global opportunities and bridge cultural divides.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading foreign language education provider in Kenya, fostering cultural
                  exchange and creating pathways for students to achieve their international
                  aspirations.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Gallery */}
      <motion.div 
        className="section-padding"
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
            Our Journey in Pictures
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
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
                      alt={`Pearlson event ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 