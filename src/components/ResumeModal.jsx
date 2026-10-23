import React, { useState } from 'react';
import './resumeModal.css';

const RESUME_TRACKS = [
  {
    id: 'mern',
    tag: 'FULL-STACK & GENAI',
    title: 'MERN Stack + Generative AI Engineer',
    desc: 'React 18/19, Next.js, Node.js, Express, Redis Geospatial, Kafka, WebSockets, LangChain, LCEL, RAG pipelines & AWS.',
    pdf: '/resumes/Vivek_Kumar_MERN_GenAI_Resume.pdf',
    html: '/resumes/Vivek_Kumar_MERN_GenAI_Resume.html',
    badge: 'Popular',
    icon: '⚡'
  },
  {
    id: 'java',
    tag: 'BACKEND & CLOUD',
    title: 'Java, Spring Boot & AWS Cloud Engineer',
    desc: 'Java 17, Spring Boot, Microservices, Spring Security, AWS ECS Fargate, RDS PostgreSQL, Kafka, ActiveMQ & GenAI connectors.',
    pdf: '/resumes/Vivek_Kumar_Java_Cloud_GenAI_Resume.pdf',
    html: '/resumes/Vivek_Kumar_Java_Cloud_GenAI_Resume.html',
    badge: 'Enterprise',
    icon: '☕'
  },
  {
    id: 'data',
    tag: 'BIG DATA & ANALYTICS',
    title: 'Data Engineer (PySpark, AWS & GenAI Analytics)',
    desc: 'Apache Spark / PySpark, Kafka Structured Streaming, Medallion Architecture, AWS Glue/Athena/S3, Delta Lake & Text-to-SQL.',
    pdf: '/resumes/Vivek_Kumar_Data_Engineering_GenAI_Resume.pdf',
    html: '/resumes/Vivek_Kumar_Data_Engineering_GenAI_Resume.html',
    badge: 'AWS Certified',
    icon: '📊'
  }
];

const ResumeModal = ({ isOpen, onClose }) => {
  const [selectedTrack, setSelectedTrack] = useState('mern');

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <div>
            <span className="resume-modal-pill">ATS-OPTIMIZED RESUMES</span>
            <h2>Select Tailored Resume Track</h2>
            <p>Dual AWS Certified (Developer & Data Engineer) &bull; DIT University CSE Graduate</p>
          </div>
          <button className="resume-modal-close" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <div className="resume-tracks-list">
          {RESUME_TRACKS.map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <div
                key={track.id}
                className={`resume-track-item ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedTrack(track.id)}
              >
                <div className="track-left">
                  <div className="track-icon">{track.icon}</div>
                  <div className="track-info">
                    <div className="track-header-row">
                      <span className="track-tag">{track.tag}</span>
                      {track.badge && <span className="track-badge">{track.badge}</span>}
                    </div>
                    <h4>{track.title}</h4>
                    <p>{track.desc}</p>
                  </div>
                </div>
                <div className="track-actions">
                  <a
                    href={track.html}
                    target="_blank"
                    rel="noreferrer"
                    className="track-btn track-btn-view"
                    title="Open in interactive tab"
                  >
                    View HTML &rarr;
                  </a>
                  <a
                    href={track.pdf}
                    download
                    className="track-btn track-btn-download"
                    title="Download ATS PDF"
                  >
                    Download PDF ⬇
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="resume-modal-footer">
          <p>
            💡 Need a custom combined profile or direct conversation?{' '}
            <a href="mailto:vivekvb@protonmail.com">Email directly at vivekvb@protonmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
