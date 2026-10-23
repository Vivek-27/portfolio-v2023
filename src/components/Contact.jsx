import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResumeModal from './ResumeModal';
import passportImg from '../images/passport.png';
import './contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('vivekvb@protonmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:vivekvb@protonmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="contact-page-wrapper">
        <div className="contact-container">
          <div className="contact-header">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h1 className="contact-headline">
              Let's collaborate on your next <br />
              <span className="text-highlight">high-impact project</span>.
            </h1>
            <p className="contact-subtitle">
              Whether you're hiring for a full-stack, distributed backend, or GenAI engineering role,
              have a project inquiry, or just want to discuss cloud architectures — my inbox is always open.
            </p>
          </div>

          <div className="contact-grid">
            {/* Direct Channels Column */}
            <div className="contact-channels-col">
              <div className="contact-profile-card">
                <div className="profile-top">
                  <div className="profile-avatar-wrap">
                    <img src={passportImg} alt="Vivek Kumar" className="profile-avatar" />
                  </div>
                  <div>
                    <h3>Vivek Kumar</h3>
                    <p>Dual AWS Certified Software Engineer</p>
                  </div>
                </div>

                <div className="profile-status">
                  <span className="status-dot"></span>
                  <span>Actively exploring new engineering opportunities</span>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="touchpoint-cards">
                <div className="touchpoint-card">
                  <div className="touchpoint-icon">📧</div>
                  <div className="touchpoint-info">
                    <span className="touchpoint-label">EMAIL ADDRESS</span>
                    <a href="mailto:vivekvb@protonmail.com" className="touchpoint-val">
                      vivekvb@protonmail.com
                    </a>
                  </div>
                  <button type="button" className="touchpoint-btn" onClick={copyEmail}>
                    {copied ? 'Copied! ✓' : 'Copy'}
                  </button>
                </div>

                <div className="touchpoint-card">
                  <div className="touchpoint-icon">📞</div>
                  <div className="touchpoint-info">
                    <span className="touchpoint-label">PHONE / WHATSAPP</span>
                    <a href="tel:+918439872415" className="touchpoint-val">
                      +91 8439872415
                    </a>
                  </div>
                  <a href="tel:+918439872415" className="touchpoint-btn">
                    Call
                  </a>
                </div>

                <div className="touchpoint-card">
                  <div className="touchpoint-icon">📍</div>
                  <div className="touchpoint-info">
                    <span className="touchpoint-label">CURRENT LOCATION</span>
                    <span className="touchpoint-val">Lohaghat, Uttarakhand, India</span>
                  </div>
                  <span className="touchpoint-badge">Remote / Hybrid</span>
                </div>
              </div>

              {/* Resume Trigger Card */}
              <div className="contact-resume-box">
                <div>
                  <h4>Tailored Resumes</h4>
                  <p>MERN + GenAI &bull; Java Backend &bull; Data Engineering</p>
                </div>
                <button
                  type="button"
                  className="btn-download-resume"
                  onClick={() => setResumeOpen(true)}
                >
                  📄 View &amp; Download ⬇
                </button>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-box">
                <span className="socials-label">FIND ME ONLINE:</span>
                <div className="socials-row">
                  <a href="https://github.com/Vivek-27" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  <a href="https://www.linkedin.com/in/vivek-fullstack/" target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Message Form Column */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h3>Send a Message</h3>
                <p>Fill out this form to connect directly via email.</p>

                {formSubmitted && (
                  <div className="form-success-banner">
                    ✓ Opening your mail client with your prefilled message! You can also email directly at <strong>vivekvb@protonmail.com</strong>.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="e.g. Full-Stack / Backend Engineering Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      placeholder="Tell me about the role, team, or project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Direct Message &rarr;
                  </button>
                </form>
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

export default Contact;
