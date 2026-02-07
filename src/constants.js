// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/streamlit_hero.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/render logo.jpg';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/streamlit_hero.png';
import fast from './assets/tech_logo/fastapi.png';
import flask from './assets/tech_logo/flaskapi.png';
import csharpLogo from './assets/tech_logo/csharp.png';
// fix
import Numpy from './assets/tech_logo/numpy logo.png';
import Pandas from './assets/tech_logo/Pandas_logo.png';
import OpenCV from './assets/tech_logo/open cv logo.png';
import ScikitLearn from './assets/tech_logo/sk learn logo.png';
import Matplotlib from './assets/tech_logo/ml plotlib logo.png';
import TensorFlow from './assets/tech_logo/tensor logo.png';
import PyTorch from './assets/tech_logo/pytorch logo.png';
import RAG from './assets/tech_logo/rag logo.png';
import HuggingFace from './assets/tech_logo/hugging logo.png';
import NLTK from './assets/tech_logo/nltk logo.png';
import spaCy from './assets/tech_logo/spacy logo.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import vpslogo from './assets/education_logo/vpslogo.png';

// Achievements Section Logo's
import leetCodeLogo from './assets/achievents/LeetCode.png';
import geeksForGeeksLogo from './assets/achievents/GeeksForGeeks.png';
import codolioLogo from './assets/achievents/codolio.png';

// Certificate Section Images
import certDsaImg from './assets/certificates/cert_dsa.png';
import certFullstackImg from './assets/certificates/cert_fullstack.png';
import certMlImg from './assets/certificates/cert_ml.png';
import certMlIm from './assets/certificates/cert_m.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Numpy', logo: Numpy },
      { name: 'Pandas', logo: Pandas },
      { name: 'OpenCV', logo: OpenCV },
      { name: 'Scikit-Learn', logo: ScikitLearn },
      { name: 'Matplotlib', logo: Matplotlib },
      { name: 'TensorFlow', logo: TensorFlow },
      { name: 'PyTorch', logo: PyTorch },
      { name: 'RAG', logo: RAG },
    ],
  },
  {
    title: 'NLP & Speech AI',
    skills: [
      { name: 'Hugging Face', logo: HuggingFace },
      { name: 'NLTK', logo: NLTK },
      { name: 'spaCy', logo: spaCy },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Streamlit', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: figmaLogo },
      { name: 'FastAPI', logo: fast },
      { name: 'Flask', logo: flask },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Artificial intelligence and Machine learning",
      company: "SURE ProEd(AICTE)",
      date: "January 2026 - Present",
      desc: "Worked as an Artificial Intelligence and Machine Learning trainee, applying data analysis, machine learning algorithms, and deep learning techniques to build and optimize predictive models and ML pipelines.",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Supervised Learning",
        "Unsupervised Learning",
        "RL",
        "Deep Learning",
        "AI",
        "Scikit-Learn",
        "ML Pipelines",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Artificial intelligence and Machine learning",
      company: "Labmantix Pvt. Ltd.",
      date: "September 2025 - Present",
      desc: "Worked as an AI & Machine Learning Intern, applying data analysis and machine learning techniques to build, train, and evaluate models using Python libraries and structured ML pipelines.",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Data Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning (RL)",
        "Machine Learning Algorithms",
        "Model Training & Evaluation",
        "Scikit-learn",
        "ML Pipelines",
        "Deep Learning Fundamentals",
        "Artificial Intelligence Concepts",

      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Web Development",
      company: "Vanillakart",
      date: "September 2025 - November 2025",
      desc: "Worked as a Web Development Intern, managing and customizing WordPress websites, enhancing UI/UX, and contributing to live client projects. as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "WordPress",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "LOVELY PROFESSIONAL UNIVERSITY, PUNJAB",
      date: "Aug 2023 - Present",
      grade: "6.75 CGPA",
      desc: "I am Currently Purshing my Bachelor of Computer Science Engineering from Lovely Professional University, PUnjab. During from this time at LPU, I gained a strong foundation in programming, Machine Learning And AI , and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, ML, and AI. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Bachelor of Computer Science Engineering - B.Tech",
    },
    {
      id: 2,
      img: vpslogo,
      school: "B.N. Collagiate, Patna",
      date: "Apr 2020 - May 2022",
      grade: "78%",
      desc: "I completed my class 12 education from B.N. Collagiate, Patna under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "BSEB(XII) - PCM",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "S.G.P.H. + 2 High School, Kochas, Bihar",
      date: "Apr 2019 - Jul 2020",
      grade: "84.2%",
      desc: "I completed my class 10 education from S.G.P.H. + 2 high School, Kochas, under the BSEB board.",
      degree: "BSEB(X), Science",
    },
  ];

  // Achievements (LeetCode, GeeksforGeeks, Codolio)
  export const achievements = [
    {
      id: 0,
      img: leetCodeLogo,
      platform: "LeetCode",
      title: "LeetCode Problem Solving",
      problemsSolved: "750+ problems solved.",
      description:
        "Regularly solving LeetCode problems focused on data structures, algorithms, and competitive programming patterns.",
      profile: "https://leetcode.com/u/saurabh061/",
    },
    {
      id: 1,
      img: geeksForGeeksLogo,
      platform: "GeeksforGeeks",
      title: "GeeksforGeeks Problem Solving",
      problemsSolved: "250+ problems solved.",
      description:
        "Strengthening DSA fundamentals by solving topic-wise GeeksforGeeks questions and practicing interview patterns.",
      profile: "https://www.geeksforgeeks.org/profile/ssaurabhkehig?tab=activity",
    },
    {
      id: 2,
      img: codolioLogo,
      platform: "Codolio",
      title: "Codolio Coding Profile",
      problemsSolved: "1100+ (Across all over platfrom eg. codechef, codeforces)",
      description:
        "Participating in contests and challenges on Codolio to improve problem-solving speed and accuracy.",
      profile: "https://codolio.com/profile/saurabh061",
    },
  ];

  // Certifications - each certificate gets its own image, link, and modal. Add photos in assets/certificates/
  export const certifications = [
    {
      id: 0,
      image: certFullstackImg,
      name: "AI And Machine Learning",
      issuer: "IBM",
      year: "2026",
      link: "https://drive.google.com/file/d/1UBYR_okw0fdQdKtDE-6gABb5k0wCWsOm/view?usp=drive_link", // e.g., "/certifications/dsa-certificate.pdf"
    },
    {
      id: 1,
      image: certDsaImg,
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      link: "https://drive.google.com/file/d/1Avp0s6Eg8ktnxOWFce1G97vjxpbpL4Mm/view?usp=drive_link",
    },
    {
      id: 2,
      image: certMlImg,
      name: "Generative AI, LLM & RAG",
      issuer: "GeeksforGeeks",
      year: "2025",
      link: "https://drive.google.com/file/d/1TgR7nMS7nomUOiaFyMlCYXyLd-2dmwye/view?usp=drive_link",
    },
    {
      id: 2,
      image: certMlIm,
      name: "Cloud Computing",
      issuer: "NPTEL",
      year: "2025",
      link: "https://drive.google.com/file/d/1440mSOdKIBPXimwvltHV49Na9W8sy9R-/view?usp=drive_link",
    },
    
  ];


  export const projects = [
    {
      id: 0,
      title: "Arial Object Classification and Detection",
      description:
        "A robust and efficient computer vision application developed to accurately detect and classify birds and drones from aerial imagery. The system leverages deep learning–based CNN models to analyze visual data, performing reliable object classification through structured preprocessing and model evaluation pipelines. Its practical and scalable design supports applications in airspace monitoring, surveillance, and aviation safety, making it a valuable solution for real-world intelligent monitoring systems.",
        image: githubdetLogo,
      tags: ["Python", "Tensorflow", "PyTorch", "NumPy", "Pandas", "YOLOv8", "CNN", "ML Pipelines", "OpenCV", "Streamlit"],
      github: "https://github.com/SA9572/Aerial_Object_Classification_and_Detection.git",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Disaster-Tweet-Classification-And-Geotagging",
      description:
        "An NLP-driven application developed to classify disaster-related tweets and extract geographical insights from social media data. The system analyzes real-time textual information to identify disaster events and associate them with relevant locations. Designed for scalability and clarity, the project supports effective disaster response, crisis monitoring, and emergency decision-making.",
      image: csprepLogo,
      tags: ["Python", "Natural Language Processing (NLP)", "Machine Learning", "scikit-learn", "TF-IDF", "Flask", "REST APIs", "SQLite", "Clustering"],
      github: "https://github.com/SA9572/Disaster-Tweet-Classification-And-Geotagging-NLP.git",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "AI-Driven Assessment of Aluminium Wire Rod Properties",
      description:
        "This project focuses on predicting the quality of Aluminium Wire Rods by analyzing key material properties such as mechanical, electrical, and physical characteristics. Using data-driven techniques, the system evaluates input parameters to determine overall product quality and identifies potential defects. Based on the analysis, it provides actionable recommendations on property adjustments required to improve wire rod performance and meet industry standards.",
        image: movierecLogo,
      tags: ["Python", "HTML", "CSS", "JS", "Numpy", "Pandas", "Scikit-Learn", "ML Predictive Analysis", "Render"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Fake Job Detection",
      description:
        "Fake Job Detection is a machine learning–based system designed to identify fraudulent job postings by analyzing textual content and structural features of job advertisements. The model evaluates job descriptions, requirements, and metadata to classify listings as genuine or fake. By enabling early detection, the system helps protect job seekers and enhances trust in online recruitment platforms.",
      image: npmLogo,
      tags: ["Python", "HTML", "CSS", "JS", "Numpy", "Pandas", "Scikit-Learn", "Pipeline", "ML Flow", "ML Predictive Analysis", "Render"],
      github: "https://github.com/SA9572/End-to-End-Fake-Job-Detection.git",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "End-to-end-ml-pipeline-project",
      description:
        "An end-to-end machine learning pipeline project implementing complete ML workflow, including repository setup, environment configuration, modular package structure, data ingestion, transformation, and model training. The project uses custom logging, exception handling, EDA and model training notebooks, automated train and prediction pipelines, and deploys the best-performing model through a Flask web application with interactive HTML templates.",
      image: taskremLogo,
      tags: ["Python", "Machine Learning", "Scikit-learn", "Flask", "HTML", "CSS"],
      github: "https://github.com/SA9572/End-to-end-ml-pipeline-project.git",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Tesla-Stock-Price-Prediction",
      description:
        "A deep learning–based time-series project that predicts Tesla’s closing stock prices using SimpleRNN and LSTM models. The workflow includes data cleaning, EDA, sequence modeling, hyperparameter tuning, and performance comparison for 1-day, 5-day, and 10-day forecasts.",
      image: webverLogo,
      tags: ["Python", "Deep Learning", "SimpleRNN", "LSTM", "TensorFlow", "Streamlit"],
      github: "https://github.com/SA9572/Tesla-Stock-Price-Prediction.git",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Tourism-Experience-Analytics",
      description:
        "Tourism Experience Analytics – ML web app that predicts attraction ratings and visit modes, recommends attractions via collaborative filtering, and visualizes tourism insights. Built with Python, scikit-learn, Flask/Streamlit, and SQLite",
      image: cmLogo,
      tags: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Streamlit", "SQLite"],
      github: "https://github.com/SA9572/tourism-experience-analytics.git",
      webapp: "https://codingmasterweb.in/",
    },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
];
  
