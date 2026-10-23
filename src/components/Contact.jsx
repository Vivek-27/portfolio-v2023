import React from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
  const currTime = new Date().toTimeString();

  return (
    <>
      <div>
        <div id="about" className="about">
          <div
            id="page3"
            style={{ position: 'absolute', top: '0', zIndex: -1 }}
          >
            <div style={{ position: 'relative', top: '15%' }} className="top">
              <h2>
                <img
                  className="passport-img"
                  src={require('../images/passport.png')}
                  alt=""
                />
                Let's work <br />
                together
              </h2>
            </div>
            <div className="mid">
              <button
                onClick={() =>
                  (window.location = 'mailto:vivekvb@protonmail.com')
                }
              >
                vivekvb@protonmail.com
              </button>
              <button>
                <a style={{ color: 'white' }} href="tel:+91 8439872415">
                  +91 8439872415
                </a>
              </button>
            </div>
            <div className="end">
              <div className="left">
                <div className="ver">
                  <p>VERSION</p>
                  <span>2024©Edition</span>
                </div>
                <div className="ver">
                  <p>LOCAL TIME</p>
                  <span>{currTime}</span>
                </div>
              </div>
              <div className="right">
                <p>SOCIALS</p>
                <ul>
                  <a href="https://github.com/Vivek-27" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vivek-fullstack/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/vivekumar27_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="motionDiv">
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    </>
  );
};

export default Contact;
