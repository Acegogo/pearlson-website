import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function scrollToAnchor(anchor) {
  const el = document.getElementById(anchor);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      path: '/courses',
      label: 'Courses',
      dropdown: [
        { path: '/courses', label: 'All Courses' },
        { path: '/courses-register', label: 'Register for Courses' },
        { path: '/workbooks', label: 'Workbooks (Coming Soon)' }
      ]
    },
    {
      path: '/events',
      label: 'Events',
      dropdown: [
        { path: '/events', label: 'All Events' },
        { path: '/champions-league-register', label: 'Champions League 2026' },
      ]
    },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkClass = (isActive) =>
    `text-base font-medium transition-all duration-300 ${
      isActive
        ? 'text-orange'
        : isScrolled
        ? 'text-olive hover:text-orange'
        : 'text-cream hover:text-orange'
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-xl shadow-lg border-b border-orange/10'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center group">
            <img
              src="/Images/PLS_logo.png"
              alt="Pearlson Languages"
              className="h-10 md:h-12 bg-white rounded-xl p-1 shadow-md group-hover:shadow-glow-orange transition-shadow duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.path} className="relative group">
                  <button
                    className={`${linkClass(location.pathname.startsWith(link.path))} flex items-center gap-1`}
                  >
                    {link.label}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-52 bg-cream/95 backdrop-blur-xl rounded-xl shadow-glow-card border border-orange/15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                    {link.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-4 py-2.5 text-olive hover:bg-orange hover:text-cream transition-colors duration-200 text-sm"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.anchor && location.pathname === '/' ? (
                <a
                  key={link.label}
                  href={`#${link.anchor}`}
                  className={linkClass(location.hash === `#${link.anchor}`)}
                  onClick={e => {
                    e.preventDefault();
                    scrollToAnchor(link.anchor);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={linkClass(location.pathname === link.path)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link to="/champions-league-register" className="btn-primary text-sm">
              Register Now
            </Link>
          </div>

          <button
            className={`md:hidden focus:outline-none p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-olive hover:bg-orange/10' : 'text-cream hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-cream/95 backdrop-blur-xl rounded-2xl shadow-glow-card border border-orange/15 mt-2 mb-4 py-4 px-4">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => {
                              if (link.label === 'Events') {
                                setEventsDropdownOpen(!eventsDropdownOpen);
                              } else if (link.label === 'Courses') {
                                setCoursesDropdownOpen(!coursesDropdownOpen);
                              }
                            }}
                            className={`${linkClass(location.pathname.startsWith(link.path))} flex items-center justify-between w-full py-2.5 px-2 rounded-lg`}
                          >
                            {link.label}
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                link.label === 'Events'
                                  ? eventsDropdownOpen ? 'rotate-180' : ''
                                  : coursesDropdownOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {(link.label === 'Events' ? eventsDropdownOpen : coursesDropdownOpen) && (
                            <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange/20 pl-3">
                              {link.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.path}
                                  to={dropdownItem.path}
                                  className="block text-olive/80 hover:text-orange py-2 text-sm transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`${linkClass(location.pathname === link.path)} block py-2.5 px-2 rounded-lg`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link
                    to="/champions-league-register"
                    className="btn-primary text-center mt-3"
                    onClick={() => setIsOpen(false)}
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
