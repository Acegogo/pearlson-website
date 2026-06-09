import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HERO_BG = '/Images/Past Events/Nairobi Edition/1 (286).jpg';
const HERO_IMAGE = '/Images/Past Events/Nairobi Edition/1 (253).jpg';

const features = [
  { title: 'Expert Teachers', description: 'Learn from award-winning educators with over 15 years of experience.' },
  { title: 'Global Opportunities', description: 'Access international programs and cultural exchange opportunities.' },
  { title: 'Community Focus', description: 'Join a supportive community of language learners and educators.' },
];

const stats = [
  { value: '20+', label: 'Schools Enrolled' },
  { value: '7,000+', label: 'Students' },
  { value: '3+', label: 'Years Experience' },
];

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Pearlson Languages';
  }, []);

  return (
    <div>
      {/* Hero with background image */}
      <section
        className="relative min-h-[88vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" aria-hidden="true" />

        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange/25 border border-orange/40 text-cream text-sm font-medium mb-6">
                National Champions League — 1 August 2026 · Mombasa
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
                <Link to="/contact" className="btn-secondary text-center border-cream/30 text-cream bg-white/10 hover:bg-cream hover:text-olive">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="animate-slide-up hidden sm:block" style={{ animationDelay: '0.15s' }}>
              <div className="rounded-2xl overflow-hidden shadow-glow-card border-2 border-cream/20 max-w-md mx-auto lg:ml-auto">
                <img
                  src={HERO_IMAGE}
                  alt="Students celebrating at a Pearlson multilingual festival"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-olive py-14 md:py-18">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="text-4xl md:text-5xl font-bold text-cream block">{stat.value}</span>
              <div className="text-lg text-cream/80 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-olive">
            Why Choose Pearlson?
          </h2>
          <p className="text-olive/70 text-center mb-12 max-w-2xl mx-auto">
            Excellence in language education across Kenya
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} glow className="h-full bg-white">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <span className="text-orange font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-olive">{feature.title}</h3>
                <p className="text-olive/80 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section-padding bg-gradient-to-br from-orange to-teal">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-cream/90 mb-8 max-w-2xl mx-auto text-lg">
            Join our community of learners and discover the world through language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-3.5 bg-cream text-olive rounded-xl hover:bg-white transition-colors duration-200 font-semibold"
            >
              Explore Our Courses
            </Link>
            <Link
              to="/events"
              className="inline-block px-8 py-3.5 bg-teal/90 text-cream rounded-xl hover:bg-teal transition-colors duration-200 font-semibold border border-cream/20"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
