import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = {
    tutor: [
      {
        level: 'Primary School Program',
        title: 'Tutor-Led Language Program',
        description: 'Expert tutors deliver interactive French and German lessons aligned with CBC for primary schools.',
        duration: 'Per school term',
        schedule: 'Weekly sessions',
        image: '/Images/IMG-20250410-WA0098.jpg',
        features: [
          'Interactive lessons',
          'Custom lesson plans',
          'Songs, games, and drama',
          'Cultural immersion',
          'Student engagement'
        ],
      }
    ]
  };

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
    <div className="relative min-h-screen w-full" style={{
      backgroundImage: "url('/Images/Past Events/Nairobi Edition/1 (185).jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="relative bg-teal bg-opacity-70 py-20 backdrop-blur-md"
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
              <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6 drop-shadow-lg">
                Our Language Programs
              </h1>
              <p className="text-xl text-orange max-w-3xl mx-auto drop-shadow-lg">
                Discover our comprehensive French and German language programs designed for primary schools
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Course Cards */}
        <motion.div 
          className="section-padding"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {courses.tutor.map((course, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.15)' }}>
                  <Card className="mb-8 hover:shadow-2xl transition-shadow duration-300 bg-white bg-opacity-70 backdrop-blur-md border border-orange">
                    <div className="relative h-48">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge variant="primary" className="absolute top-4 left-4 bg-orange text-cream">{course.level}</Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-black">{course.title}</h3>
                      <p className="text-olive mb-4">{course.description}</p>
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
                        {course.duration}
                      </div>
                      <div className="flex items-center text-olive mb-6">
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
                        {course.schedule}
                      </div>
                      <ul className="space-y-2 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-olive">
                            <svg
                              className="w-5 h-5 mr-2 text-orange"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/courses-register"
                        className="mt-4 inline-block bg-[#FF4500] hover:bg-[#cc3700] text-white font-bold py-2 px-6 rounded shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2"
                      >
                        Register for Courses
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="bg-olive section-padding"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-cream"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Student Success Stories
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  name: 'Sarah M.',
                  course: 'French Program',
                  quote: 'The French program at Pearlson transformed our students\' language skills and opened doors to new opportunities.',
                },
                {
                  name: 'John K.',
                  course: 'German Program',
                  quote: 'Excellent teaching methods and supportive environment. Our students can now confidently speak German.',
                },
                {
                  name: 'Mary W.',
                  course: 'French Program',
                  quote: "Starting from scratch, our students never thought they'd be able to hold conversations in French. Thank you, Pearlson!",
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-user-circle text-4xl text-gray-400 mr-4"></i>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.course}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses; 