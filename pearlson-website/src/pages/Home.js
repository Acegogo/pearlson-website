import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function useCountUp(target, inView, duration = 1.5) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    let frame = 0;
    function animate() {
      frame++;
      const next = Math.min(Math.round(start + increment * frame), end);
      setCount(next);
      if (next < end) requestAnimationFrame(animate);
    }
    animate();
    // eslint-disable-next-line
  }, [inView, target]);
  return count;
}

function StatsSection() {
  const [ref, setRef] = React.useState(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);
  const schools = useCountUp(20, inView);
  const students = useCountUp(7000, inView);
  const years = useCountUp(3, inView);
  return (
    <section ref={setRef} className="bg-olive py-20">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-12 h-12 text-cream" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a4 4 0 00-3-3.87" /></svg>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-5xl font-bold text-cream">{schools}+</span>
            <div className="text-xl text-cream mt-2 tracking-wide">Schools Enrolled</div>
          </motion.div>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-12 h-12 text-cream" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a4 4 0 00-3-3.87" /><circle cx="17" cy="7" r="4" /><circle cx="7" cy="7" r="4" /></svg>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="text-5xl font-bold text-cream">{students.toLocaleString()}+</span>
            <div className="text-xl text-cream mt-2 tracking-wide">Students</div>
          </motion.div>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-12 h-12 text-cream" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <span className="text-5xl font-bold text-cream">{years}+</span>
            <div className="text-xl text-cream mt-2 tracking-wide">Years Experience</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Home = () => {
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
        id="hero"
        className="relative bg-teal overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
                Empowering Students Through Language Learning
              </h1>
              <p className="text-lg text-orange mb-8">
                Join Pearlson Languages and Solutions to master French and German with expert guidance and immersive learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="btn-primary text-center hover:scale-105"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-cream text-black rounded-lg hover:bg-orange hover:text-cream transition-colors duration-300 text-center shadow hover:shadow-lg hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.2)' }}
            >
              <img
                src="/Images/PLS_logo.png"
                alt="Pearlson Languages"
                className="w-full h-auto rounded-lg shadow-xl bg-white p-2"
                style={{ background: 'white', borderRadius: '0.5rem', padding: '0.5rem' }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <StatsSection id="stats" />

      {/* Features Section */}
      <motion.div 
        id="features"
        className="section-padding bg-olive"
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
            Why Choose Pearlson?
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
                title: 'Expert Teachers',
                description: 'Learn from award-winning educators with over 15 years of experience.',
              },
              {
                title: 'Global Opportunities',
                description: 'Access international programs and cultural exchange opportunities.',
              },
              {
                title: 'Community Focus',
                description: 'Join a supportive community of language learners and educators.',
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(255,53,0,0.2)' }}>
                <Card className="p-6 hover:shadow-2xl transition-shadow duration-300 bg-cream border border-orange">
                  <h3 className="text-xl font-semibold mb-4 text-black">{feature.title}</h3>
                  <p className="text-olive">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        id="cta"
        className="section-padding bg-orange"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom text-center">
          <motion.h2 
            className="text-3xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Language Journey?
          </motion.h2>
          <motion.p 
            className="text-black mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our community of learners and discover the world through language.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
          >
            <Link
              to="/courses"
              className="inline-block px-8 py-3 bg-teal text-orange rounded-lg hover:bg-orange hover:text-teal transition-colors duration-300 font-semibold shadow hover:shadow-lg"
            >
              Explore Our Courses
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 