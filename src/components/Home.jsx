import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import portrate from '../images/portrate/Layer 1.png';
import passportImg from '../images/passport.png';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResumeModal from './ResumeModal';
import './home.css';

gsap.registerPlugin(ScrollTrigger);

const ROLES = [
  'Full-Stack Software Engineer',
  'AWS Certified Developer & Data Engineer',
  'Generative AI & LLM Specialist',
  'Distributed Systems (Kafka & Redis)'
];

const FEATURED_PROJECTS = [
  {
    title: 'Oxima Ride-Hailing Platform',
    category: 'Distributed Systems & Real-Time',
    desc: 'High-throughput ride-matching platform featuring Redis Geospatial indexing, Apache Kafka event streaming, and OpenStreetMap road routing with sub-50ms proximity dispatch.',
    tech: ['React 18', 'Node.js', 'Redis Spatial', 'Kafka', 'WebSockets', 'Tailwind'],
    github: 'https://github.com/Vivek-27/oxima-ride-hailing',
    live: 'https://oximacustomer.netlify.app/',
    badge: 'Flagship'
  },
  {
    title: 'AWS ECS Fargate TicketDesk',
    category: 'Cloud Architecture & DevOps',
    desc: 'Production AWS deployment implementing Terraform Infrastructure-as-Code, containerized FastAPI on ECS Fargate behind an ALB, multi-AZ RDS PostgreSQL, and GitHub Actions OIDC CI/CD.',
    tech: ['AWS ECS Fargate', 'Terraform', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/Vivek-27/poc-aws-deployment-ticketdesk',
    live: null,
    badge: 'AWS IaC'
  },
  {
    title: 'Generative AI & LangChain Toolkit',
    category: 'AI / LLM Engineering',
    desc: 'Multi-agent RAG orchestration architecture utilizing LangChain LCEL, Pydantic structured output validation, ChromaDB vector indexing, and low-latency FastAPI streaming.',
    tech: ['Python', 'LangChain', 'LCEL', 'OpenAI API', 'ChromaDB', 'FastAPI'],
    github: 'https://github.com/Vivek-27/generative-ai-langchain-toolkit',
    live: null,
    badge: 'GenAI'
  }
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const containerRef = useRef(null);

  // Time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Role rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // GSAP animation with proper cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.hero-photo-wrapper', {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      gsap.from('.about-intro-content', {
        scrollTrigger: {
          trigger: '.about-intro-section',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="home-wrapper" ref={containerRef}>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span> Available for Full-Time Roles
            </div>

            <div className="hero-roles-banner">
              <span className="role-prefix">I build as a</span>
              <h3 className="role-animated" key={roleIndex}>
                {ROLES[roleIndex]}
              </h3>
            </div>

            <h1 className="hero-headline">
              Hello, I'm <span className="text-highlight">Vivek Kumar</span>.
            </h1>

            <p className="hero-description">
              Dual AWS Certified Engineer crafting high-performance full-stack web applications,
              scalable distributed backends, and intelligent Generative AI workflows.
            </p>

            <div className="hero-cta-group">
              <Link to="/work" className="btn-primary-pill">
                Explore Work &rarr;
              </Link>
              <button
                type="button"
                className="btn-secondary-pill"
                onClick={() => setResumeOpen(true)}
              >
                📄 Get Resumes (3 Tracks)
              </button>
              <Link to="/contact" className="btn-ghost-pill">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-photo-container">
            <div className="hero-photo-wrapper">
              <img
                src={portrate}
                alt="Vivek Kumar portrait"
                className="hero-portrait"
                fetchPriority="high"
              />
              <div className="photo-backdrop-glow"></div>
            </div>
            <div className="hero-quick-stats">
              <div className="quick-stat-pill">
                <span className="stat-label">AWS Certified</span>
                <span className="stat-val">Developer &bull; Data Eng</span>
              </div>
              <div className="quick-stat-pill">
                <span className="stat-label">Education</span>
                <span className="stat-val">B.Tech CSE '25 (DIT Univ)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Intro / Philosophy Section */}
      <section className="about-intro-section">
        <div className="about-intro-content">
          <span className="section-eyebrow">ABOUT &amp; ENGINEERING APPROACH</span>
          <h2 className="about-intro-heading">
            Architecting modern distributed systems where clean design meets scalable, resilient cloud infrastructure.
          </h2>
          <div className="about-intro-grid">
            <p className="about-intro-text">
              I specialize in bridging responsive frontend applications with robust distributed backends. From optimizing geospatial driver-passenger matchmaking with <strong>Redis</strong> and streaming millions of events via <strong>Apache Kafka</strong>, to orchestrating multi-agent LLM reasoning pipelines with <strong>LangChain</strong> and automating cloud infrastructure with <strong>AWS &amp; Terraform</strong>.
            </p>
            <div className="about-intro-highlights">
              <div className="highlight-item">
                <div className="highlight-num">2x</div>
                <div className="highlight-text">Official AWS Associate Certifications (Developer &amp; Data Engineer)</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-num">Jul-Dec '24</div>
                <div className="highlight-text">Software Developer Intern at HulkHire (Microservices &amp; Spring Boot)</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-num">2025</div>
                <div className="highlight-text">B.Tech in Computer Science &amp; Engineering, DIT University</div>
              </div>
            </div>
          </div>

          <div className="about-actions-row">
            <Link to="/about" className="btn-link-action">
              Learn more about my background &amp; skills &rarr;
            </Link>
            <button
              type="button"
              className="btn-resume-inline"
              onClick={() => setResumeOpen(true)}
            >
              💼 View Tailored Resumes (MERN &bull; Java &bull; Data Eng)
            </button>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="featured-work-section">
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">SELECTED WORK</span>
            <h2 className="section-title">Flagship Architectures &amp; Projects</h2>
          </div>
          <Link to="/work" className="btn-secondary-pill">
            View All Projects ({FEATURED_PROJECTS.length}+) &rarr;
          </Link>
        </div>

        <div className="featured-grid">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <div key={idx} className="featured-card">
              <div className="card-top">
                <span className="card-badge">{proj.badge}</span>
                <span className="card-category">{proj.category}</span>
              </div>
              <h3 className="card-title">{proj.title}</h3>
              <p className="card-desc">{proj.desc}</p>
              <div className="card-tech-tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-links">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="card-btn-live"
                  >
                    Live Demo &rarr;
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-btn-code"
                >
                  GitHub Repository &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA Section */}
      <footer id="contact-cta" className="footer-cta-section">
        <div className="footer-cta-container">
          <div className="footer-cta-top">
            <div className="footer-avatar-wrap">
              <img
                src={passportImg}
                alt="Vivek Kumar Avatar"
                className="footer-avatar"
              />
            </div>
            <h2 className="footer-cta-heading">
              Let's create something <br />
              <span className="text-highlight">exceptional</span> together.
            </h2>
          </div>

          <div className="footer-cta-buttons">
            <a href="mailto:vivekvb@protonmail.com" className="footer-pill-btn">
              <span>📧 vivekvb@protonmail.com</span>
            </a>
            <a href="tel:+918439872415" className="footer-pill-btn">
              <span>📞 +91 8439872415</span>
            </a>
            <button
              type="button"
              className="footer-pill-btn resume-btn"
              onClick={() => setResumeOpen(true)}
            >
              <span>📄 Download Resume</span>
            </button>
          </div>

          <div className="footer-cta-bottom">
            <div className="footer-meta-col">
              <span className="footer-meta-label">VERSION</span>
              <span className="footer-meta-val">2025 Edition &bull; React 18</span>
            </div>

            <div className="footer-meta-col">
              <span className="footer-meta-label">LOCAL TIME</span>
              <span className="footer-meta-val">{currentTime || 'New Delhi, India'}</span>
            </div>

            <div className="footer-meta-col">
              <span className="footer-meta-label">CONNECT</span>
              <div className="footer-social-links">
                <a
                  href="https://github.com/Vivek-27"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Page transition slides */}
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
        />
      </div>
    </div>
  );
};

export default Home;
