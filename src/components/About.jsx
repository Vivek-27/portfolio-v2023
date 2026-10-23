import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h1>Software Engineer & Cloud Architect</h1>
          <p>
            I'm <strong>Vivek Kumar</strong>, a Computer Science Engineering graduate and AWS Certified Developer & Data Engineer. I specialize in architecting full-stack web applications, scalable distributed microservices, Generative AI pipelines, and cloud infrastructure on AWS.
          </p>
        </div>

        <div className="about-section">
          <div className="about-section-title">🏆 Official AWS Certifications</div>
          <div className="cert-grid">
            <div className="cert-card">
              <span className="cert-badge">AWS CERTIFIED</span>
              <h3>AWS Certified Developer – Associate (DVA-C02)</h3>
              <p>
                Demonstrated expertise in building, deploying, and debugging cloud-native applications on AWS. Core proficiencies include serverless architectures with AWS Lambda & API Gateway, containerization with ECS Fargate and ECR, identity & access security (IAM, Secrets Manager, KMS), and automated CI/CD deployment pipelines.
              </p>
            </div>
            <div className="cert-card">
              <span className="cert-badge data-eng">AWS CERTIFIED</span>
              <h3>AWS Certified Data Engineer – Associate (DEA-C01)</h3>
              <p>
                Demonstrated expertise in data ingestion pipelines, storage architectures, ETL batch and streaming transformations, and big data orchestration. In-depth understanding of AWS Glue, S3 Data Lakes, Athena, Redshift, Kinesis data streams, and data governance.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-section-title">🛠️ Core Technical Competencies</div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>☁️ Cloud & Infrastructure</h4>
              <div className="skill-tags">
                <span className="skill-tag">Amazon Web Services</span>
                <span className="skill-tag">Terraform (IaC)</span>
                <span className="skill-tag">AWS ECS Fargate</span>
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">CloudFront CDN</span>
                <span className="skill-tag">GitHub Actions CI/CD</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>🤖 Generative AI & Machine Learning</h4>
              <div className="skill-tags">
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">LCEL Runnables</span>
                <span className="skill-tag">OpenAI GPT-4o</span>
                <span className="skill-tag">PyTorch (ResNet-18)</span>
                <span className="skill-tag">RAG Pipelines</span>
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">Pydantic Schemas</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>⚡ Distributed Systems & Backend</h4>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Apache Kafka</span>
                <span className="skill-tag">Redis Geospatial</span>
                <span className="skill-tag">Socket.IO WebSockets</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>💻 Frontend Engineering</h4>
              <div className="skill-tags">
                <span className="skill-tag">React.js (18 & 19)</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">TailwindCSS</span>
                <span className="skill-tag">Redux & Toolkit</span>
                <span className="skill-tag">Framer Motion</span>
                <span className="skill-tag">Material-UI</span>
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

export default About;
