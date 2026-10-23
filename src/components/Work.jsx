import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';
import './work.css';

// Project Images
import projectVision from '../images/project_vision.png';
import projectFileShare from '../images/project_fileShare.png';
import projectSnakeWaterGun from '../images/project_snake_water_gun.png';
import projectYoutube from '../images/project_youtube.png';
import projectLanding from '../images/project_landing_page.png';

const PROJECTS_DATA = [
  {
    id: 'oxima',
    title: 'Oxima: Real-Time Fleet & Ride-Hailing Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & Distributed',
    badge: 'Flagship ⭐',
    desc: 'Distributed nationwide ride-hailing architecture with customer & driver portals, live GPS tracking, and OSRM turn-by-turn road navigation. Engineered sub-50ms driver matching via Redis Geospatial indexing and decoupled event queuing via Apache Kafka.',
    highlights: [
      'Sub-50ms driver-rider proximity matching with Redis GEO commands',
      'Apache Kafka event streaming with partition keys for ride events',
      'OpenStreetMap OSRM road routing engine integration',
      '20-meter proximity PIN-lock ride initiation security',
      'Zustand state management & responsive mobile-first Tailwind UI'
    ],
    tech: ['React 18', 'Node.js', 'Express', 'Redis Spatial', 'Kafka', 'WebSockets', 'Tailwind CSS'],
    liveUrl: 'https://oximacustomer.netlify.app/',
    githubUrl: 'https://github.com/Vivek-27/oxima-ride-hailing',
    image: null,
    isLive: true
  },
  {
    id: 'aws-ticketdesk',
    title: 'AWS ECS Fargate TicketDesk Cloud Infrastructure',
    category: 'backend',
    categoryLabel: 'Cloud & Infrastructure',
    badge: 'AWS IaC ☁️',
    desc: 'Production-ready AWS infrastructure POC designed with Terraform (IaC). Provisions custom VPC, multi-AZ subnets, Application Load Balancers, containerized FastAPI on ECS Fargate, private RDS PostgreSQL, and GitHub Actions OIDC CI/CD.',
    highlights: [
      'Terraform Infrastructure-as-Code for zero-touch cloud deployments',
      'AWS ECS Fargate serverless containers with automated auto-scaling',
      'Multi-AZ RDS PostgreSQL with connection pooling in private subnets',
      'Automated GitHub Actions CI/CD with AWS OIDC authentication',
      'CloudWatch metrics and synthetic alarms for uptime monitoring'
    ],
    tech: ['AWS ECS Fargate', 'Terraform', 'FastAPI', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    liveUrl: null,
    githubUrl: 'https://github.com/Vivek-27/poc-aws-deployment-ticketdesk',
    image: null,
    isLive: false
  },
  {
    id: 'genai-toolkit',
    title: 'Generative AI & LangChain LCEL Architecture Toolkit',
    category: 'data_ai',
    categoryLabel: 'Generative AI & LLMs',
    badge: 'GenAI 🤖',
    desc: 'Extensible production-grade Generative AI framework showcasing modern LangChain Expression Language (LCEL), multi-agent orchestration, structured Pydantic schemas, and semantic RAG retrieval.',
    highlights: [
      'LCEL Runnables (RunnableSequence, RunnableParallel, Passthrough)',
      'Enterprise RAG pipeline with ChromaDB vector store & semantic chunking',
      'Guaranteed JSON validation using Pydantic structured output parsers',
      'Dockerized low-latency FastAPI endpoints with streaming token delivery'
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'LCEL', 'OpenAI GPT-4o', 'ChromaDB', 'FastAPI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Vivek-27/generative-ai-langchain-toolkit',
    image: null,
    isLive: false
  },
  {
    id: 'banking-fraud',
    title: 'Real-Time Banking Fraud Detection Streaming Pipeline',
    category: 'data_ai',
    categoryLabel: 'Big Data & Streaming',
    badge: 'Streaming Data 📊',
    desc: 'High-throughput financial fraud detection pipeline built with Apache Kafka, PySpark Structured Streaming, and Medallion Architecture on Delta Lake. Flags suspicious transaction velocity patterns in sub-second latency.',
    highlights: [
      'Kafka distributed streaming ingestion with Dockerized broker cluster',
      'Medallion Architecture: Bronze (Raw) -> Silver (Deduplicated) -> Gold (Scored)',
      'PySpark Structured Streaming with stateful windowed aggregations',
      'Automated quarantine logging for corrupt/anomalous records'
    ],
    tech: ['Apache Kafka', 'PySpark', 'Delta Lake', 'Docker Compose', 'Python', 'PostgreSQL'],
    liveUrl: null,
    githubUrl: 'https://github.com/Vivek-27',
    image: null,
    isLive: false
  },
  {
    id: 'pad-deepfake',
    title: 'Deepfake & Face Presentation Attack Detection (PAD) API',
    category: 'data_ai',
    categoryLabel: 'Machine Learning / CV',
    badge: 'Deep Learning 🧠',
    desc: 'Biometric security computer vision service trained to detect spoof attacks (printed photos, digital replays, 3D masks) versus genuine facial presentations using a fine-tuned ResNet-18 model.',
    highlights: [
      'Fine-tuned PyTorch ResNet-18 deep convolutional architecture',
      'Real vs. spoof binary image classification with Softmax scoring',
      'Optimized image preprocessing pipeline with OpenCV',
      'RESTful Flask inference microservice packaged in Docker'
    ],
    tech: ['PyTorch', 'ResNet-18', 'OpenCV', 'FastAPI', 'Docker', 'Python'],
    liveUrl: null,
    githubUrl: 'https://github.com/Vivek-27/deepfake-detection-pad-api',
    image: null,
    isLive: false
  },
  {
    id: 'campus-connect',
    title: 'CampusConnect: Student Marketplace & Real-Time Collaboration',
    category: 'fullstack',
    categoryLabel: 'Full-Stack MERN',
    badge: 'MERN Stack 🎓',
    desc: 'Campus marketplace platform featuring student peer-to-peer commerce, real-time messaging, Google OAuth authentication, and Razorpay payment gateway integration.',
    highlights: [
      'Stateless JWT & Google OAuth 2.0 secure authentication',
      'Real-time peer chat and instant notifications with Socket.IO',
      'Cloudinary media storage and image optimization pipelines',
      'Razorpay payment checkout flow integration'
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Razorpay', 'Cloudinary'],
    liveUrl: null,
    githubUrl: 'https://github.com/Vivek-27/campus-connect-platform',
    image: null,
    isLive: false
  },
  {
    id: 'flipkart-clone',
    title: 'Flipkart E-Commerce Marketplace',
    category: 'fullstack',
    categoryLabel: 'Full-Stack MERN',
    badge: 'E-Commerce',
    desc: 'Comprehensive online retail shopping experience featuring dynamic catalog filtering, cart management, Redux state synchronization, and payment gateway integration.',
    highlights: [
      'Redux Toolkit centralized cart and user state store',
      'Secure payment processing workflows with Paytm integration',
      'Product category browsing, search indexing, and customer reviews'
    ],
    tech: ['React.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Paytm API'],
    liveUrl: 'https://flipkart-com-cl.netlify.app/',
    githubUrl: 'https://github.com/Vivek-27/flipkart-ecommerce-clone',
    image: null,
    isLive: true
  },
  {
    id: 'task-manager',
    title: 'TaskFlow: Collaborative Task & Project Manager',
    category: 'fullstack',
    categoryLabel: 'Full-Stack MERN',
    badge: 'Productivity',
    desc: 'Productivity web application for tracking sprints, scheduling deadlines, and managing task lifecycles with user authentication and priority filtering.',
    highlights: [
      'CRUD task operations with category filters and due dates',
      'Secure authentication with encrypted credentials in MongoDB',
      'Clean modern dashboard UI built with responsive CSS'
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    liveUrl: 'https://task-management-app-frontend-i5ab.onrender.com',
    githubUrl: 'https://github.com/Vivek-27/taskflow-mern-app',
    image: null,
    isLive: true
  },
  {
    id: 'snake-water-gun',
    title: 'Multiplayer Real-Time Arena (Socket.io)',
    category: 'fullstack',
    categoryLabel: 'WebSockets & Gaming',
    badge: 'Socket.IO',
    desc: 'Real-time multiplayer browser game enabling instant 1v1 matchmaking with strangers or private room battles with friends via secret room codes.',
    highlights: [
      'Sub-20ms bidirectional event synchronization with Socket.io',
      'Private room code generation and random player queue logic',
      'Interactive scoreboard and visual match state animations'
    ],
    tech: ['Node.js', 'Socket.IO', 'JavaScript', 'HTML5 Canvas', 'Render'],
    liveUrl: 'https://snake-water-gun-2aot.onrender.com/',
    githubUrl: 'https://github.com/Vivek-27/snake-water-gun-multiplayer',
    image: projectSnakeWaterGun,
    isLive: true
  },
  {
    id: 'youtube-clone',
    title: 'YouTube Streaming Platform Clone',
    category: 'fullstack',
    categoryLabel: 'Frontend & APIs',
    badge: 'Media',
    desc: 'Video streaming web application featuring video search, channel feeds, video player controls, and simulated comment interactions.',
    highlights: [
      'Rapid video catalog discovery and categorization',
      'Custom video player embedding and related video feeds',
      'Responsive editorial dark theme'
    ],
    tech: ['React.js', 'RapidAPI / YouTube API', 'CSS Grid', 'Netlify'],
    liveUrl: 'https://github.com/Vivek-27',
    githubUrl: 'https://github.com/Vivek-27',
    image: projectYoutube,
    isLive: false
  },
  {
    id: 'apple-vision',
    title: 'Apple Vision Pro Interactive Showcase',
    category: 'fullstack',
    categoryLabel: 'Creative UI / Animation',
    badge: 'Interactive UI',
    desc: 'Fluid editorial product showcase replicating Apple Vision Pro promotional aesthetics, high-precision canvas canvas animations, and interactive scroll interactions.',
    highlights: [
      'Smooth frame-by-frame canvas scrubbing on scroll',
      'Apple design language typography and glassmorphic panels'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP ScrollTrigger'],
    liveUrl: 'https://visionapple.netlify.app/',
    githubUrl: 'https://github.com/Vivek-27/apple-vision-pro-showcase',
    image: projectVision,
    isLive: true
  },
  {
    id: 'file-share',
    title: 'Secure File Sharing Online',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Utility',
    badge: 'Cloud Storage',
    desc: 'Digital asset sharing service generating encrypted temporary download links for large files with download limits and expiration timestamps.',
    highlights: [
      'Direct file streaming without memory exhaustion',
      'Auto-expiring download URLs with token authentication'
    ],
    tech: ['Node.js', 'Express', 'Multer', 'MongoDB', 'Netlify'],
    liveUrl: 'https://filesharingonline.netlify.app/',
    githubUrl: 'https://github.com/Vivek-27/secure-file-share-web',
    image: projectFileShare,
    isLive: true
  },
  {
    id: 'parallax-landing',
    title: 'Parallax Scenic Landing Experience',
    category: 'fullstack',
    categoryLabel: 'Creative Animation',
    badge: 'GSAP Parallax',
    desc: 'Editorial parallax storytelling landing page with multi-plane depth illusions and smooth scroll triggers built in Vanilla JavaScript and GSAP.',
    highlights: [
      'Multi-layered SVG depth translation based on scroll velocity',
      'Hardware-accelerated CSS transforms'
    ],
    tech: ['JavaScript', 'GSAP', 'CSS3', 'Netlify'],
    liveUrl: 'https://parallax-landing-page23.netlify.app/',
    githubUrl: 'https://github.com/Vivek-27/parallax-landing-showcase',
    image: projectLanding,
    isLive: true
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack / MERN' },
  { id: 'backend', label: 'Cloud & Backend' },
  { id: 'data_ai', label: 'Data & GenAI' },
  { id: 'live', label: 'Live Deployments' }
];

const Work = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isGrid, setIsGrid] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'live') return item.isLive;
    return item.category === activeTab;
  });

  return (
    <>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="work-page-wrapper">
        <div className="work-header">
          <div className="work-header-top">
            <span className="work-eyebrow">PORTFOLIO ARCHIVES</span>
            <button
              type="button"
              className="work-resume-btn"
              onClick={() => setResumeOpen(true)}
            >
              📄 Download Tailored Resumes (3 Tracks)
            </button>
          </div>

          <h1 className="work-title">Crafting Resilient Digital Products &amp; Architectures</h1>
          <p className="work-subtitle">
            Explore {PROJECTS_DATA.length} projects spanning distributed cloud backends, real-time event streaming with Kafka &amp; Redis, modern MERN web apps, and Generative AI pipelines.
          </p>

          <div className="work-controls-bar">
            {/* Filter Pills */}
            <div className="filter-pills-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-pill ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                  {cat.id === 'all' && ` (${PROJECTS_DATA.length})`}
                  {cat.id === 'live' && ` (${PROJECTS_DATA.filter((p) => p.isLive).length})`}
                </button>
              ))}
            </div>

            {/* View Layout Toggle */}
            <div className="view-toggle-wrap">
              <button
                type="button"
                className={`view-toggle-btn ${isGrid ? 'active' : ''}`}
                onClick={() => setIsGrid(true)}
                title="Grid View"
                aria-label="Grid View"
              >
                <div className="grid-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${!isGrid ? 'active' : ''}`}
                onClick={() => setIsGrid(false)}
                title="List View"
                aria-label="List View"
              >
                <div className="list-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Display Container */}
        <div className="work-content-container">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className={isGrid ? 'projects-grid-layout' : 'projects-list-layout'}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className={`project-card ${project.isLive ? 'has-live' : ''}`}
                >
                  <div className="project-card-header">
                    <div className="card-badge-row">
                      <span className="project-badge">{project.badge}</span>
                      <span className="project-category-tag">{project.categoryLabel}</span>
                    </div>
                    {project.isLive && (
                      <span className="live-status-pill">
                        <span className="live-dot"></span> LIVE APP
                      </span>
                    )}
                  </div>

                  {project.image && isGrid && (
                    <div className="project-preview-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-preview-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.desc}</p>

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="project-highlights-box">
                        <span className="highlights-title">Key Highlights:</span>
                        <ul className="highlights-list">
                          {project.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="project-tech-tags">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-footer">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-card-visit"
                      >
                        Visit App ↗
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-card-github"
                    >
                      View Source ↗
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Page Transitions */}
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
    </>
  );
};

export default Work;
