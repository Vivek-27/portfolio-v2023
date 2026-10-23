import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import hamburger from '../images/hamburger-menu-svgrepo-com.svg';

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [anim, setAnim] = useState('ease-in-right');
  const [page, setPage] = useState('');
  const [navAbout, setNavAbout] = useState('');

  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.pathname === '/work') {
      setPage('work');
    }
    if (location.pathname === '/contact') {
      setPage('contact');
      setNavAbout('nav-about');
    } else {
      setNavAbout('');
    }
    if (location.pathname === '/about') {
      setPage('about');
    }
    if (location.pathname === '/') {
      setPage('');
    }
  }, [location]);

  return (
    <>
      {menu ? (
        <>
          <div className="menu" style={{ animation: `${anim} 0.6s linear` }}>
            <div
              className="menu-close"
              onClick={() => {
                setAnim('ease-out-right');
                setTimeout(() => {
                  setMenu((prev) => !prev);
                  setAnim('ease-in-right');
                }, 500);
              }}
            >
              ※
            </div>
            <div className="navigation-text">Navigation</div>
            <div className="nav-item-menu">
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/work"
              >
                Work
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="socials">
              <p>SOCIALS</p>
              <ul>
                <a href="https://github.com/Vivek-27" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/vivek-fullstack/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/vivekumar27_/" target="_blank" rel="noreferrer">Instagram</a>
              </ul>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      <nav className={`navigation ${navAbout}`}>
        <div className="nav">
          <div className="logo">
            <Link className="nav-link" to="/">
              <img src={require('../images/sm-img.png')} alt="" />
              <div className="logo-text">
                <p style={{ color: `${page === 'contact' ? '#f2f2f2' : ''}` }}>
                  Code by Vivek Kumar
                </p>
              </div>
            </Link>
            <div onClick={() => setMenu((prev) => !prev)} className="nav-menu">
              <img
                style={{ filter: 'invert(1)' }}
                className="hamburger"
                src={hamburger}
                alt=""
              />
            </div>
          </div>
          <div className="nav-link">
            <div className="nav-item">
              <Link className="nav-link point" to="/work">
                Work {page === 'work' ? <h1>•</h1> : ''}
              </Link>
              <Link className="nav-link point" to="/about">
                About {page === 'about' ? <h1>•</h1> : ''}
              </Link>
              <Link className="nav-link point" to="/contact">
                Contact {page === 'contact' ? <h1>•</h1> : ''}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
