import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResumeModal from './ResumeModal';
import passportImg from '../images/passport.png';
import './about.css';

const About = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="about-wrapper">
        {/* Header Hero */}
        <div className="about-hero-section">
          <div className="about-hero-top">
            <span className="about-eyebrow">ABOUT &bull; BIOGRAPHY</span>
            <button
              type="button"
              className="about-resume-hero-btn"
              onClick={() => setResumeOpen(true)}
            >
              📄 Download Tailored Resumes (3 Tracks)
            </button>
          </div>

          <div className="about-hero-main">
            <div className="about-hero-text">
              <h1 className="about-headline">
                Engineering at the intersection of <span className="text-highlight">Distributed Systems</span>, <span className="text-highlight">Cloud Architecture</span> &amp; <span className="text-highlight">Generative AI</span>.
              </h1>
              <p className="about-bio-lead">
                I'm <strong>Vivek Kumar</strong>, a Computer Science graduate from DIT University and Dual AWS Certified Engineer (Developer &amp; Data Engineer). I specialize in designing scalable full-stack web applications, microservices with Kafka and Redis Geospatial, and production-grade LLM pipelines.
              </p>
            </div>

            <div className="about-hero-avatar-box">
              <div className="avatar-frame">
                <img src={passportImg} alt="Vivek Kumar" className="about-avatar-img" />
              </div>
              <div className="avatar-caption">
                <span className="avatar-name">Vivek Kumar</span>
                <span className="avatar-title">Software Engineer &bull; Dual AWS Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Track Resume Showcase Card */}
        <div className="resume-showcase-section">
          <div className="resume-showcase-card">
            <div className="showcase-left">
              <span className="showcase-badge">ATS-READY RESUMES</span>
              <h2>Looking for a tailored profile for your team?</h2>
              <p>
                To provide recruiters and engineering managers with targeted relevance, I maintain 3 focused ATS-compliant resumes with Generative AI competencies integrated across each:
              </p>
            </div>
            <div className="showcase-tracks-grid">
              <div className="showcase-track-card">
                <div className="track-card-header">
                  <span className="track-emoji">⚡</span>
                  <h4>MERN Stack + GenAI</h4>
                </div>
                <p>Full-Stack, React, Next.js, Node.js, Redis Geospatial, Kafka, LangChain &amp; LCEL.</p>
                <div className="track-card-actions">
                  <a href="/resumes/Vivek_Kumar_MERN_GenAI_Resume.html" target="_blank" rel="noreferrer" className="btn-track-action">
                    View Interactive &rarr;
                  </a>
                  <a href="/resumes/Vivek_Kumar_MERN_GenAI_Resume.pdf" download className="btn-track-action primary">
                    Download PDF ⬇
                  </a>
                </div>
              </div>

              <div className="showcase-track-card">
                <div className="track-card-header">
                  <span className="track-emoji">☕</span>
                  <h4>Java + Cloud + GenAI</h4>
                </div>
                <p>Java 17, Spring Boot, Microservices, AWS ECS Fargate, PostgreSQL, ActiveMQ &amp; GenAI.</p>
                <div className="track-card-actions">
                  <a href="/resumes/Vivek_Kumar_Java_Cloud_GenAI_Resume.html" target="_blank" rel="noreferrer" className="btn-track-action">
                    View Interactive &rarr;
                  </a>
                  <a href="/resumes/Vivek_Kumar_Java_Cloud_GenAI_Resume.pdf" download className="btn-track-action primary">
                    Download PDF ⬇
                  </a>
                </div>
              </div>

              <div className="showcase-track-card">
                <div className="track-card-header">
                  <span className="track-emoji">📊</span>
                  <h4>Data Eng + GenAI</h4>
                </div>
                <p>PySpark, Kafka Streaming, Medallion Delta Lake, AWS Big Data, Text-to-SQL &amp; Analytics.</p>
                <div className="track-card-actions">
                  <a href="/resumes/Vivek_Kumar_Data_Engineering_GenAI_Resume.html" target="_blank" rel="noreferrer" className="btn-track-action">
                    View Interactive &rarr;
                  </a>
                  <a href="/resumes/Vivek_Kumar_Data_Engineering_GenAI_Resume.pdf" download className="btn-track-action primary">
                    Download PDF ⬇
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AWS Certifications Section */}
        <div className="about-section">
          <div className="section-title-wrap">
            <span className="section-eyebrow">INDUSTRY CREDENTIALS</span>
            <h2 className="section-heading">Official AWS Certifications</h2>
          </div>

          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-header">
                <span className="cert-badge aws-dev">AWS CERTIFIED</span>
                <span className="cert-code">DVA-C02</span>
              </div>
              <h3>AWS Certified Developer – Associate</h3>
              <p>
                Validation of technical expertise in developing, deploying, and debugging cloud applications on AWS. Core proficiencies include:
              </p>
              <ul className="cert-bullets">
                <li>Serverless architectures with AWS Lambda, API Gateway &amp; DynamoDB</li>
                <li>Container orchestration using Amazon ECS Fargate, ECR, and Docker</li>
                <li>Application security: IAM roles, Secrets Manager, KMS encryption</li>
                <li>Automated deployment pipelines using AWS CodePipeline &amp; GitHub Actions</li>
              </ul>
            </div>

            <div className="cert-card">
              <div className="cert-header">
                <span className="cert-badge aws-data">AWS CERTIFIED</span>
                <span className="cert-code">DEA-C01</span>
              </div>
              <h3>AWS Certified Data Engineer – Associate</h3>
              <p>
                Validation of expertise in designing and implementing data ingestion pipelines, storage architectures, and big data transformations on AWS. Core proficiencies include:
              </p>
              <ul className="cert-bullets">
                <li>Batch and streaming ETL workflows with AWS Glue, Athena, and EMR</li>
                <li>Data Lake architectures on Amazon S3 with partitioning and Parquet formats</li>
                <li>Data warehousing models and analytical optimization in Amazon Redshift</li>
                <li>Streaming event ingestion via Amazon Kinesis and Apache Kafka</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Experience & Education Timeline */}
        <div className="about-section">
          <div className="section-title-wrap">
            <span className="section-eyebrow">TRACK RECORD</span>
            <h2 className="section-heading">Experience &amp; Education</h2>
          </div>

          <div className="timeline-grid">
            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>Software Developer Intern</h3>
                  <h4>HulkHire &bull; Remote</h4>
                </div>
                <span className="timeline-badge">Jul 2024 – Dec 2024</span>
              </div>
              <ul className="timeline-bullets">
                <li>Developed and deployed enterprise backend microservices in Java 17 and Spring Boot with RESTful endpoints.</li>
                <li>Integrated Trustly Payment Gateway workflows featuring HMAC-SHA256 signature verification and idempotent filters.</li>
                <li>Implemented Redis caching to offload high-volume database queries, slashing database response times by 40%.</li>
                <li>Configured ActiveMQ and Kafka topics for asynchronous message delivery across billing and notification services.</li>
                <li>Collaborated in bi-weekly Agile Scrum sprints, backlog refinement, and code reviews on Bitbucket/Git.</li>
              </ul>
            </div>

            <div className="timeline-card">
              <div className="timeline-top">
                <div>
                  <h3>Bachelor of Technology (B.Tech)</h3>
                  <h4>Computer Science and Engineering &bull; DIT University, Dehradun</h4>
                </div>
                <span className="timeline-badge">2021 – 2025</span>
              </div>
              <ul className="timeline-bullets">
                <li>Rigorous coursework in Data Structures &amp; Algorithms, Operating Systems, Database Management Systems, and Distributed Computing.</li>
                <li>Architected open-source distributed systems including the Oxima real-time ride-hailing suite (Java 17 microservice backend &amp; React 18 client portals) and facial anti-spoofing microservices (PAD).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="about-section">
          <div className="section-title-wrap">
            <span className="section-eyebrow">TECHNICAL MATRIX</span>
            <h2 className="section-heading">Skills &amp; Technology Stack</h2>
          </div>

          <div className="skills-matrix-grid">
            <div className="skill-cat-card">
              <h4>☁️ Cloud &amp; DevOps</h4>
              <div className="skill-pill-wrap">
                <span className="skill-pill">AWS (ECS Fargate, Lambda, S3, RDS, CloudWatch)</span>
                <span className="skill-pill">Terraform (IaC)</span>
                <span className="skill-pill">Docker &amp; Compose</span>
                <span className="skill-pill">GitHub Actions CI/CD</span>
                <span className="skill-pill">Linux &amp; Bash</span>
              </div>
            </div>

            <div className="skill-cat-card">
              <h4>🤖 Generative AI &amp; LLMs</h4>
              <div className="skill-pill-wrap">
                <span className="skill-pill">LangChain &amp; LangGraph</span>
                <span className="skill-pill">LCEL Runnables</span>
                <span className="skill-pill">OpenAI GPT-4o</span>
                <span className="skill-pill">ChromaDB &amp; Pinecone</span>
                <span className="skill-pill">RAG Architectures</span>
                <span className="skill-pill">PyTorch (ResNet-18)</span>
              </div>
            </div>

            <div className="skill-cat-card">
              <h4>⚡ Distributed Systems &amp; Backend</h4>
              <div className="skill-pill-wrap">
                <span className="skill-pill">Node.js &amp; Express</span>
                <span className="skill-pill">Java 17 &amp; Spring Boot</span>
                <span className="skill-pill">Apache Kafka</span>
                <span className="skill-pill">Redis Geospatial</span>
                <span className="skill-pill">WebSockets / Socket.IO</span>
                <span className="skill-pill">REST &amp; GraphQL APIs</span>
              </div>
            </div>

            <div className="skill-cat-card">
              <h4>📊 Data Engineering &amp; DBs</h4>
              <div className="skill-pill-wrap">
                <span className="skill-pill">Apache Spark (PySpark)</span>
                <span className="skill-pill">Delta Lake / Parquet</span>
                <span className="skill-pill">PostgreSQL &amp; MySQL</span>
                <span className="skill-pill">MongoDB &amp; Mongoose</span>
                <span className="skill-pill">Medallion Architecture</span>
                <span className="skill-pill">Power BI Analytics</span>
              </div>
            </div>
          </div>
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

export default About;
