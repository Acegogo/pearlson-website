import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notification from './components/Notification';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Events = lazy(() => import('./pages/Events'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const ChampionsLeagueRegister = lazy(() => import('./pages/ChampionsLeagueRegister'));
const CoursesRegister = lazy(() => import('./pages/CoursesRegister'));
const Workbooks = lazy(() => import('./pages/Workbooks'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-10 h-10 border-4 border-orange/30 border-t-orange rounded-full animate-spin" />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/events" element={<Events />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/post/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/champions-league-register" element={<ChampionsLeagueRegister />} />
                <Route path="/festival-register" element={<Navigate to="/champions-league-register" replace />} />
                <Route path="/festival-register/*" element={<Navigate to="/champions-league-register" replace />} />
                <Route path="/courses-register" element={<CoursesRegister />} />
                <Route path="/workbooks" element={<Workbooks />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
