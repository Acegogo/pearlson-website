import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notification from './components/Notification';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import FestivalRegister from './pages/FestivalRegister';
import NairobiFestivalRegister from './pages/NairobiFestivalRegister';
import CoastFestivalRegister from './pages/CoastFestivalRegister';
import RiftValleyFestivalRegister from './pages/RiftValleyFestivalRegister';
import WesternFestivalRegister from './pages/WesternFestivalRegister';
import CoursesRegister from './pages/CoursesRegister';
import Workbooks from './pages/Workbooks';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Notification />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/post/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/festival-register" element={<FestivalRegister />} />
              <Route path="/festival-register/nairobi-2026" element={<NairobiFestivalRegister />} />
              <Route path="/festival-register/coast-2026" element={<CoastFestivalRegister />} />
              <Route path="/festival-register/riftvalley-2026" element={<RiftValleyFestivalRegister />} />
              <Route path="/festival-register/western-2026" element={<WesternFestivalRegister />} />
              <Route path="/courses-register" element={<CoursesRegister />} />
              <Route path="/workbooks" element={<Workbooks />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App; 