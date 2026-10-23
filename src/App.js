import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import MenuBtn from './components/MenuBtn';
import { AnimatePresence } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';

const GREETINGS = [
  '• Hello',
  '• Bonjour',
  '• नमस्ते',
  '• Hola',
  '• Ciao',
  '• Olá',
  '• Hallo'
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    if (greetingIndex < GREETINGS.length) {
      const timer = setTimeout(() => {
        setGreetingIndex((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        setLoading(false);
      }, 200);
      return () => clearTimeout(finishTimer);
    }
  }, [greetingIndex]);

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <div id="loading" className="app-loader">
          <div className="loader-content">
            <h4>{GREETINGS[greetingIndex] || '• Welcome'}</h4>
            <div className="loader-bar">
              <div
                className="loader-progress"
                style={{
                  width: `${Math.min(100, ((greetingIndex + 1) / GREETINGS.length) * 100)}%`
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <NavBar />
          <MenuBtn />
          <ParallaxProvider>
            <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                <Route index element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </ParallaxProvider>
        </div>
      )}
    </>
  );
}

export default App;
