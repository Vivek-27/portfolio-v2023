import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import portrate from '../images/portrate/Layer 1.png';
import './home.css';
import { Parallax, Background } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Work from './Work';
import { Link } from 'react-router-dom';
const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const text = ['Full-Stack Engineer', 'AWS Certified', 'Generative AI', 'Distributed Systems'];
  const currTime = new Date().toTimeString();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < text.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        setCurrentTextIndex(0);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentTextIndex, text.length]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray('#page2>h4').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 70, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -70, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        }
      });
    });

    gsap.utils.toArray('#page2>p').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 70, opacity: 0, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              opacity: 1,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -70, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto'
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        }
      });
    });
  }, []);

  return (
    <div id="home" className="home">
      <div id="page">
        <Parallax id="parallax" strength={200}>
          <Background className="background">
            <img className="animated-image" src={portrate} alt="" fetchpriority="high" />
          </Background>
          <div className="hero">
            <div id="left" className="left">
              <p>{text[currentTextIndex]}</p>
              <h4>Hi! I'm Vivek !</h4>
              <Link to="/contact">
                <button>Contact Me</button>
              </Link>
            </div>
            <div className="right">
              <p>Scroll Down</p>
            </div>
            <div className="page-bottom"></div>
          </div>
        </Parallax>
      </div>

      <div id="page2">
        <h4>
          I'm a Full-Stack Software Engineer & AWS Certified Developer / Data Engineer. <br /> In-depth expertise in
          <span> Distributed Architectures, Generative AI (LangChain & LCEL), and Cloud Systems. </span> Hands-on experience
          designing real-time event-driven platforms and resilient microservices.
        </h4>
        <p>
          Specialized in React, Next.js, Node.js, TypeScript, Python, AWS (ECS Fargate, Lambda, RDS, S3), Redis Geospatial, Apache Kafka, Docker, and PyTorch.
        </p>
      </div>

      <div id="page-work">
        <div className="top">
          <p>RECENT WORK</p>
        </div>
        <div className="projects">
          <Work />
        </div>
      </div>

      <div id="page3">
        <div className="top">
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
            onClick={() => {
              window.location = 'mailto:vivekvb@protonmail.com';
            }}
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
              <a href="https://www.instagram.com/vivekumar27_/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </ul>
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
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Home;
