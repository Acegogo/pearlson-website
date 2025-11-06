import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        { path: '/festival-register/nairobi-2026', label: 'Nairobi Edition 2026' },
        { path: '/festival-register/coast-2026', label: 'Coast Edition 2026' },
        { path: '/festival-register/riftvalley-2026', label: 'Rift Valley Edition 2026' },
        { path: '/festival-register/western-2026', label: 'Western Edition 2026' }
      ]
    },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Images/PLS_logo.png"
              alt="Pearlson Languages"
              className="h-12 bg-white rounded-lg p-1 shadow-md"
              style={{ background: 'white', borderRadius: '0.5rem', padding: '0.25rem' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.path} className="relative group">
                  <button
                    className={`text-lg font-medium transition-colors duration-300 flex items-center ${
                      location.pathname.startsWith(link.path)
                        ? 'text-pearlson-red'
                        : isScrolled
                        ? 'text-gray-800 hover:text-pearlson-red'
                        : 'text-white hover:text-pearlson-red'
                    }`}
                  >
                    {link.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-[#FF4500] hover:text-white transition-colors duration-200"
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
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.hash === `#${link.anchor}`
                      ? 'text-pearlson-red'
                      : isScrolled
                      ? 'text-gray-800 hover:text-pearlson-red'
                      : 'text-white hover:text-pearlson-red'
                  }`}
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
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-pearlson-red'
                      : isScrolled
                      ? 'text-gray-800 hover:text-pearlson-red'
                      : 'text-white hover:text-pearlson-red'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
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
                        className={`text-lg font-medium transition-colors duration-300 flex items-center justify-between w-full ${
                          location.pathname.startsWith(link.path)
                            ? 'text-pearlson-red'
                            : 'text-gray-800 hover:text-pearlson-red'
                        }`}
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform ${link.label === 'Events' ? (eventsDropdownOpen ? 'rotate-180' : '') : (coursesDropdownOpen ? 'rotate-180' : '')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {(link.label === 'Events' ? eventsDropdownOpen : coursesDropdownOpen) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block text-gray-600 hover:text-[#FF4500] hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-200"
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
                      className={`text-lg font-medium transition-colors duration-300 ${
                        location.pathname === link.path
                          ? 'text-pearlson-red'
                          : 'text-gray-800 hover:text-pearlson-red'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 