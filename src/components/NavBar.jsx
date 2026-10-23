import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import smImg from '../images/sm-img.png';
import hamburger from '../images/hamburger-menu-svgrepo-com.svg';
import ResumeModal from './ResumeModal';
import './navbar.css';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Listen for global open-menu event triggered by floating MenuBtn
  useEffect(() => {
    const handleToggle = () => setMobileMenuOpen((prev) => !prev);
    window.addEventListener('toggle-mobile-menu', handleToggle);
    return () => window.removeEventListener('toggle-mobile-menu', handleToggle);
  }, []);

  return (
    <>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Slide-out Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="drawer-panel">
          <div className="drawer-header">
            <span className="drawer-tag">NAVIGATION</span>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="drawer-nav-links">
            <Link to="/" className={`drawer-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/work" className={`drawer-link ${location.pathname === '/work' ? 'active' : ''}`}>
              Work
            </Link>
            <Link to="/about" className={`drawer-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`drawer-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
            <button
              type="button"
              className="drawer-resume-pill"
              onClick={() => {
                setMobileMenuOpen(false);
                setResumeOpen(true);
              }}
            >
              📄 Tailored Resumes (3 Tracks)
            </button>
          </div>

          <div className="drawer-footer">
            <span className="drawer-socials-tag">SOCIALS</span>
            <div className="drawer-socials-links">
              <a href="https://github.com/Vivek-27" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/vivek-fullstack/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://www.instagram.com/vivekumar27_/" target="_blank" rel="noreferrer">
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Top Navbar */}
      <nav className="site-navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-avatar-wrap">
              <img src={smImg} alt="Vivek Kumar" className="logo-avatar-img" />
            </div>
            <div className="logo-text-track">
              <span className="logo-author">Code by Vivek Kumar</span>
              <span className="logo-author-hover">Full-Stack &bull; Cloud &bull; GenAI</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar-links-desktop">
            <Link
              to="/work"
              className={`nav-item-link ${location.pathname === '/work' ? 'active' : ''}`}
            >
              <span>Work</span>
              {location.pathname === '/work' && <span className="nav-active-dot">•</span>}
            </Link>

            <Link
              to="/about"
              className={`nav-item-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              <span>About</span>
              {location.pathname === '/about' && <span className="nav-active-dot">•</span>}
            </Link>

            <Link
              to="/contact"
              className={`nav-item-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              <span>Contact</span>
              {location.pathname === '/contact' && <span className="nav-active-dot">•</span>}
            </Link>

            <button
              type="button"
              className="nav-resume-btn"
              onClick={() => setResumeOpen(true)}
            >
              📄 Resumes
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="navbar-hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <img src={hamburger} alt="Menu" className="hamburger-icon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
