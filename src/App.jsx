import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';
import ProjectDeets from './components/ProjectDeets';
import LikeCounter from './components/LikeCounter';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isFade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } , 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className={`bg-bgDark transition-opacity duration-500 ${isFade ? "opacity-0" : "opacity-100"}`}>
      <Loader />
    </div>
  ) : (
    <div className={`w-full min-h-screen bg-darkBg text-textPrimary transition-opacity duration-700 ${isFade ? "opacity-100" : "opacity-0"} overflow-hidden`}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectDeets />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Router>
      <LikeCounter />
      <Footer />
    </div>
  );
};

export default App;
