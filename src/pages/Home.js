import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import PageBackground from '../components/PageBackground';

function useCountUp(target, inView, duration = 1.5) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const increment = target / (duration * 60);
    function animate() {
      frame++;
      const next = Math.min(Math.round(increment * frame), target);
      setCount(next);
      if (next < target) requestAnimationFrame(animate);
    }
    animate();
    // eslint-disable-next-line
  }, [inView, target]);
  return count;
}

function StatsSection() {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
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

  const stats = [
    { value: `${schools}+`, label: 'Schools Enrolled', icon: 'M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a4 4 0 00-3-3.87' },
    { value: `${students.toLocaleString()}+`, label: 'Students', icon: 'M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a4 4 0 00-3-3.87 M17 7a4 4 0 11-8 0 4 4 0 018 0zM9 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { value: `${years}+`, label: 'Years Experience', icon: 'M12 8v4l3 3 M12 22a10 10 0 100-20 10 10 0 000 20z' },
  ];

  return (
    <section ref={setRef} className="relative bg-olive/95 py-16 md:py-20 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-teal/10 via-transparent to-orange/10 pointer-events-none" />
      <div className="container-custom relative grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-cream/10 flex items-center justify-center shadow-glow-teal">
                <svg className="w-7 h-7 text-cream" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
            </div>
            <span className="text-4xl md:text-5xl font-bold text-cream block">{stat.value}</span>
            <div className="text-lg text-cream/80 mt-2 tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Pearlson Languages';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const features = [
    { title: 'Expert Teachers', description: 'Learn from award-winning educators with over 15 years of experience.' },
    { title: 'Global Opportunities', description: 'Access international programs and cultural exchange opportunities.' },
    { title: 'Community Focus', description: 'Join a supportive community of language learners and educators.' },
  ];

  return (
    <PageBackground image="/Images/Past Events/Nairobi Edition/1 (286).jpg">
      <motion.div
        id="hero"
        className="premium-hero backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange/20 border border-orange/30 text-cream text-sm font-medium mb-6">
                National Champions League 2026 — 1 August
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
                Empowering Students Through Language Learning
              </h1>
              <p className="text-base md:text-lg text-cream/90 mb-8 max-w-xl leading-relaxed">
                Join Pearlson Languages and Solutions to master French and German with expert guidance and immersive learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/champions-league-register" className="btn-primary text-center">
                  Register for Champions League
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative glow-card p-3 bg-white/95 max-w-sm w-full">
                <img
                  src="/Images/PLS_logo.png"
                  alt="Pearlson Languages"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-white shadow-glow-purple p-1 hidden sm:block">
                  <img src="/Images/kpsa-logo.png" alt="KPSA partner" className="w-full h-full object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <StatsSection />

      <motion.div
        id="features"
        className="section-padding bg-olive/90 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-cream"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Pearlson?
          </motion.h2>
          <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
            Excellence in language education across Kenya
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card glow className="h-full bg-cream/95">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                    <span className="text-orange font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-olive">{feature.title}</h3>
                  <p className="text-olive/80 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        id="cta"
        className="section-padding relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange/90 via-orange/85 to-teal/80" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(184,169,212,0.2) 0%, transparent 50%)'
        }} />
        <div className="container-custom relative z-10 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-cream mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Language Journey?
          </motion.h2>
          <motion.p
            className="text-cream/90 mb-8 max-w-2xl mx-auto text-lg"
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/courses"
              className="inline-block px-8 py-3.5 bg-cream text-olive rounded-xl hover:bg-white transition-all duration-300 font-semibold shadow-glow-card hover:shadow-glow-card-hover hover:scale-105"
            >
              Explore Our Courses
            </Link>
            <Link
              to="/events"
              className="inline-block px-8 py-3.5 bg-teal/90 text-cream rounded-xl hover:bg-teal transition-all duration-300 font-semibold shadow-glow-teal hover:scale-105 border border-cream/20"
            >
              View Events
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </PageBackground>
  );
};

export default Home;
