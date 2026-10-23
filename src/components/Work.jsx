import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './work.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SimpleImageSlider from 'react-simple-image-slider';

const Work = () => {
  const btnClicked = { backgroundColor: 'black', color: 'white' };
  const [allBtnStyle, setAllBtnStyle] = useState({
    backgroundColor: 'black',
    color: 'white'
  });
  const [liveBtnStyle, setLiveBtnStyle] = useState({});
  const [devBtnStyle, setDevBtnStyle] = useState({});
  const imagesFlipkartProj = [
    { url: require('../images/flipkartProject/p1.png') },
    { url: require('../images/flipkartProject/p2.png') },
    { url: require('../images/flipkartProject/p3.png') }
  ];

  const imagesTaskProject = [
    { url: require('../images/taskManagerProject/p1.png') },
    { url: require('../images/taskManagerProject/p2.png') },
    { url: require('../images/taskManagerProject/p3.png') },
    { url: require('../images/taskManagerProject/p4.png') }
  ];
  const images = [
    { url: require('../images/project_vision.png') },
    { url: require('../images/project_vision2.png') },
    { url: require('../images/project_vision3.png') },
    { url: require('../images/project_vision4.png') }
  ];

  const btnStyleChange = (e) => {
    if (e === 'all') {
      setAllBtnStyle(btnClicked);
      setDevBtnStyle({});
      setLiveBtnStyle({});
    } else if (e === 'live') {
      setLiveBtnStyle(btnClicked);
      setAllBtnStyle({});
      setDevBtnStyle({});
    } else if (e === 'dev') {
      setDevBtnStyle(btnClicked);
      setAllBtnStyle({});
      setLiveBtnStyle({});
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray('.project1>.left>.img-p1').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 70, autoAlpha: 0 },
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        }
      });
    });
    gsap.utils.toArray('.project1>.left>.img-p2').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { x: 0, autoAlpha: 0 },
            {
              duration: 1.5,
              x: -120,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        }
      });
    });
    gsap.utils.toArray('.project1>.left>.img-p3').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { x: 30, autoAlpha: 0 },
            {
              duration: 2,
              x: 120,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        }
      });
    });

    gsap.utils.toArray('.project1>.project2>.card3').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { x: -10, autoAlpha: 0 },
            {
              duration: 2,
              x: 50,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        }
      });
    });
    gsap.utils.toArray('.project1>.project2>.card1').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { x: 10, autoAlpha: 0 },
            {
              duration: 2,
              x: -50,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        }
      });
    });
    gsap.utils.toArray('.project1>.project2>.card2').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { scale: 0.9, autoAlpha: 0 },
            {
              duration: 0.5,
              scale: 1,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        }
      });
    });
  }, []);

  return (
    <>
      <div id="home" className="home">
        <div className="mid-text">
          <h2>Creating next level digital products</h2>
        </div>
        <div className="mid-menu">
          <div className="left">
            <button onClick={() => btnStyleChange('all')} style={allBtnStyle}>
              All
            </button>
            <button onClick={() => btnStyleChange('live')} style={liveBtnStyle}>
              Live
            </button>
            <button onClick={() => btnStyleChange('dev')} style={devBtnStyle}>
              Development
            </button>
          </div>
          <div className="right">
            <div className="list-view circle">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="grid-view circle">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
        <div className="projects">
          {/* Oxima Ride Hailing */}
          <div className="project1 item oxima-ride-hailing">
            <div className="left-text">
              <h5>Oxima: Real-Time Fleet & Ride-Hailing Platform ⭐</h5>
              <p>
                Enterprise-grade nationwide ride-hailing system built with Node.js, React 18, Redis Geospatial driver tracking, Apache Kafka telemetry streaming, and OSRM turn-by-turn road navigation.
              </p>
              <div className="end">
                <span>
                  <p>Key Highlights —</p>
                  <ul>
                    <li>Redis Spatial GEO driver tracking</li>
                    <li>Apache Kafka telemetry event streaming</li>
                    <li>OSRM turn-by-turn road routing</li>
                    <li>20-meter proximity PIN-lock verification</li>
                    <li>City surge pricing with automated TTL</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://github.com/Vivek-27/oxima-ride-hailing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AWS Cloud Deployment */}
          <div className="project1 item project-even aws-ticketdesk">
            <div className="left-text">
              <h5>AWS Cloud Deployment (TicketDesk) ☁️</h5>
              <p>
                Production AWS deployment POC implementing Terraform Infrastructure-as-Code, containerized FastAPI on ECS Fargate behind an ALB, private RDS PostgreSQL, S3 presigned uploads, and GitHub Actions OIDC CI/CD.
              </p>
              <div className="end">
                <span>
                  <p>Key Highlights —</p>
                  <ul>
                    <li>AWS ECS Fargate & Application Load Balancer</li>
                    <li>Multi-AZ RDS PostgreSQL in private subnets</li>
                    <li>S3 Event-driven Lambda thumbnail generation</li>
                    <li>Terraform IaC (zero-to-production automation)</li>
                    <li>GitHub Actions CI/CD with AWS OIDC authentication</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://github.com/Vivek-27/poc-aws-deployment-ticketdesk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Generative AI Toolkit */}
          <div className="project1 item genai-toolkit">
            <div className="left-text">
              <h5>Generative AI & LangChain LCEL Architecture Toolkit 🤖</h5>
              <p>
                Comprehensive hands-on Generative AI engineering toolkit demonstrating modern LangChain Expression Language (LCEL) Runnables, parallel chains, Pydantic structured outputs, and RAG document ingestion pipelines.
              </p>
              <div className="end">
                <span>
                  <p>Key Highlights —</p>
                  <ul>
                    <li>LCEL Runnables (Sequence, Parallel, Passthrough)</li>
                    <li>Pydantic schemas & structured JSON enforcement</li>
                    <li>Multi-source RAG loaders (Directory, Web, Lazy loading)</li>
                    <li>OpenAI GPT-4o & HuggingFace Hub integrations</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://github.com/Vivek-27/generative-ai-langchain-toolkit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Presentation Attack Detection */}
          <div className="project1 item project-even pad-deepfake">
            <div className="left-text">
              <h5>Presentation Attack Detection (PAD) Deepfake API 🧠</h5>
              <p>
                Computer vision deep learning microservice for biometric anti-spoofing and deepfake detection. Built with PyTorch (fine-tuned ResNet-18) and Flask RESTful API.
              </p>
              <div className="end">
                <span>
                  <p>Key Highlights —</p>
                  <ul>
                    <li>Fine-tuned ResNet-18 convolutional neural network</li>
                    <li>Real vs. spoof binary image classification</li>
                    <li>Low-latency evaluation mode with Softmax scoring</li>
                    <li>RESTful Flask inference microservice</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://github.com/Vivek-27/deepfake-detection-pad-api"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project1 item instagram-clone">
            <div className="left-text">
              <h5>Instagram Clone </h5>
              <p>
                In this project, I have build Instagram Clone using React Js (as
                front-end) and Node Js (as back-end), which includes creating a
                posting page where users can scroll and see the posted images.
              </p>
              <div className="end">
                <span>
                  <p>Features —</p>
                  <ul>
                    <li>Follow other users</li>
                    <li>Post Images</li>
                    <li>Like posts</li>
                    <li>Comment on post</li>
                    <li>Sign Up and Login</li>
                    <li>Edit Profile</li>
                  </ul>
                </span>
                <span>
                  <p>Credentials (phony) -</p>
                  <ul>
                    <li>email:- instagram@gmail.com</li>
                  </ul>
                  <ul>
                    <li>password:- admin</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://instagram-cc.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/instagram-mern-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="left">
              <img
                className="img-p2"
                src={require('../images/project_instagram2.png')}
                alt=""
              />

              <img
                className="img-p3"
                src={require('../images/project_instagram3.png')}
                alt=""
              />
              <img
                className="img-p1"
                src={require('../images/project_instagram.png')}
                alt=""
              />
            </div>
          </div>

          <div className="project1 item project-even file-sharing-app">
            <div className="left project2">
              <SimpleImageSlider
                width={'90%'}
                height={'70%'}
                images={imagesFlipkartProj}
                navSize={20}
                loop
                autoPlay
                showNavs={true}
                navMargin={5}
              />
            </div>

            <div className="left-text">
              <h5>
                Flipkart Clone: <h6>MERN Stack with JWT, Paytm & Redux</h6>
              </h5>
              <p>
                Shop effortlessly with our MERN stack Flipkart clone. Secure
                authentication with JWT, swift transactions via Paytm, and a
                dynamic UI powered by Redux make for a seamless online shopping
                experience.
              </p>
              <div className="end">
                <span>
                  <p>Key Features:</p>
                  <ul>
                    <li>Secure JWT Authentication</li>
                    <li>Paytm Payment Gateway Integration</li>
                    <li>Responsive UI with Redux State Management</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://flipkart-com-cl.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/flipkart-ecommerce-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project1 item snakewatergun">
            <div className="left-text">
              <h5>Snake Water Gun Game⭐</h5>
              <p>
                Multiplayer online game, can play with friends or with
                strangers. Integrated Socket.io technology to address smooth
                game experience.
              </p>
              <div className="end">
                <span>
                  <p>Features —</p>
                  <ul>
                    <li>Play with friends using private key</li>
                    <li>Play with random Strangers.</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://snake-water-gun-2aot.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/snake-water-gun-multiplayer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="left">
              <img
                style={{ scale: '.8' }}
                className="img-p3 project-parallax-img"
                src={require('../images/project_snake_water_gun.png')}
                alt=""
              />
            </div>
          </div>
          <div className="project1 item project-even task_management">
            <div className="left project2">
              <SimpleImageSlider
                width={'100%'}
                height={'45%'}
                images={imagesTaskProject}
                navSize={20}
                loop
                autoPlay
                showNavs={true}
                navMargin={5}
              />
            </div>

            <div className="left-text">
              <h5>
                Task Manager:{' '}
                <h6>
                  To-do list webapp, view task and complete from anywhere using
                  login functionality.
                </h6>
              </h5>
              <p></p>
              <div className="end">
                <span>
                  <p>Key Features:</p>
                  <ul>
                    <li>Login and Signup</li>
                    <li>Protable</li>
                    <li>Task Schedule</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://task-management-app-frontend-i5ab.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/taskflow-mern-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project1 item youtube-clone">
            <div className="left-text">
              <h5>YouTube Clone </h5>
              <p>
                This is a YouTube Clone that implements the main features of
                YouTube using MERN Stack, here you will able to create your own
                channel and post videos as you do in Youtube.
              </p>
              <div className="end">
                <span>
                  <p>Features —</p>
                  <ul>
                    <li>Post Videos</li>
                    <li>Subscribe to any Channel</li>
                    <li>Like and Dislike any video</li>
                    <li>Comment on video</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://github.com/Vivek-27"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="left project2">
              <img
                className="img-p2"
                src={require('../images/project_youtube2.png')}
                alt=""
              />

              <img
                className="img-p3"
                src={require('../images/project_youtube3.png')}
                alt=""
              />
              <img
                className="img-p1"
                src={require('../images/project_youtube.png')}
                alt=""
              />
            </div>
          </div>

          <div className="project1 item project-even file-sharing-app">
            <div className="left project2">
              <SimpleImageSlider
                width={'90%'}
                height={'70%'}
                images={images}
                navSize={20}
                loop
                autoPlay
                showNavs={true}
                navMargin={5}
              />
            </div>

            <div className="left-text">
              <h5>Apple Vision Web</h5>
              <p>
                This is a website of Apple Vision created using HTML, CSS and
                JavaScript only. COntains some cool looking apple vision
                animations.
              </p>
              <div className="end">
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://visionapple.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/apple-vision-pro-showcase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project1 item parallax-landing-page">
            <div className="left-text">
              <h5>Parallax Landing Page ⭐</h5>
              <p>
                This is complete Vanilla JavaScript project. I have used GSAP to
                animate the parallax effect.
              </p>
              <div className="end">
                <span>
                  <p>Features —</p>
                  <ul>
                    <li>Simple Design</li>
                    <li>Parallax effect.</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://parallax-landing-page23.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/parallax-landing-showcase"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="left">
              <img
                style={{ scale: '.8' }}
                className="img-p3 project-parallax-img"
                src={require('../images/project_landing_page.png')}
                alt=""
              />
            </div>
          </div>

          <div className="project1 item project-even file-sharing-app">
            <div className="left project2">
              <div className="card1 card"></div>
              <div className="card2 card">
                <img src={require('../images/project_fileShare.png')} alt="" />
              </div>
              <div className="card3 card"></div>
            </div>
            <div className="left-text">
              <h5>File Share Online</h5>
              <p>
                This File sharing site provide services to access digital media
                like photos, videos, documents, etc., from anywhere to its
                users. These apps will help you to transfer large files easily.
                It provide advanced link which you can share to person you want
                to access that file.
              </p>
              <div className="end">
                <span>
                  <p>Features —</p>
                  <ul>
                    <li>Easy File Share online</li>
                    <li>Provides file sharable link.</li>
                  </ul>
                </span>
                <div className="links">
                  <a
                    style={{ color: 'orange' }}
                    href="https://filesharingonline.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/Vivek-27/secure-file-share-web"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>Work</h1>
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
    </>
  );
};

export default Work;
