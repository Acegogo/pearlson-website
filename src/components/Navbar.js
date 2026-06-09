import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
        { path: '/workbooks', label: 'Workbooks (Coming Soon)' },
      ],
    },
    {
      path: '/events',
      label: 'Events',
      dropdown: [
        { path: '/events', label: 'All Events' },
        { path: '/champions-league-register', label: 'Champions League 2026' },
      ],
    },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkClass = (isActive) =>
    `text-base font-medium transition-colors duration-200 ${
      isActive ? 'text-orange' : isScrolled ? 'text-olive hover:text-orange' : 'text-cream hover:text-orange'
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-200 ${
        isScrolled ? 'bg-cream shadow-md border-b border-orange/10' : 'bg-black/30'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/Images/PLS_logo.png"
              alt="Pearlson Languages"
              className="h-10 md:h-12 bg-white rounded-xl p-1 shadow-sm"
              width="48"
              height="48"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.path} className="relative group">
                  <button className={`${linkClass(location.pathname.startsWith(link.path))} flex items-center gap-1`}>
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-orange/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                    {link.dropdown.map((item) => (
                      <Link key={item.path} to={item.path} className="block px-4 py-2.5 text-olive hover:bg-orange hover:text-cream text-sm">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={link.path} to={link.path} className={linkClass(location.pathname === link.path)}>
                  {link.label}
                </Link>
              )
            )}
            <Link to="/champions-league-register" className="btn-primary text-sm">
              Register Now
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-olive' : 'text-cream'}`}
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

        {isOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-lg border border-orange/10 mt-2 mb-4 py-3 px-3">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        link.label === 'Events'
                          ? setEventsDropdownOpen(!eventsDropdownOpen)
                          : setCoursesDropdownOpen(!coursesDropdownOpen)
                      }
                      className={`${linkClass(location.pathname.startsWith(link.path))} flex items-center justify-between w-full py-2.5 px-2`}
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {(link.label === 'Events' ? eventsDropdownOpen : coursesDropdownOpen) &&
                      link.dropdown.map((item) => (
                        <Link key={item.path} to={item.path} className="block text-olive/80 hover:text-orange py-2 pl-4 text-sm" onClick={() => setIsOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                  </>
                ) : (
                  <Link to={link.path} className={`${linkClass(location.pathname === link.path)} block py-2.5 px-2`} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/champions-league-register" className="btn-primary text-center block mt-2" onClick={() => setIsOpen(false)}>
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
