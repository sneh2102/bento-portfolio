import { IExperienceData, IProjectData } from './types';
import ragGpt from '../images/answer.png'; // Replace with actual images if available
import paradise from '../images/paradise.gif'; // Replace with actual images if available
import parkSpace from '../images/park_space.png'; 
import kubernetes from '../images/kubernetes.png'; // Replace with actual images if available
import shareSettle from '../images/sharesettle.png'; // Replace with actual images if available
import aniverse from '../images/Video_Streaming.png';
import multi from '../images/multi.png'; // Replace with actual images if available
import nomadic from '../images/nomadic.png'; // Replace with actual images if available
import minisql from '../images/transaction.png';
import onlinebanking from '../images/onlinebanking.png'; // Replace with actual images if available
import AIRes from '../images/AIRes.png'; // Replace with actual images if available
import qrngnode from '../images/qrngnode.png'; // Replace with actual images if available
import pqcChat from '../images/pqcChat.png'; // Replace with actual images if available
import liboqs from '../images/liboqs.png'; // Replace with actual images if available


export const options: string[] = ['all', 'about', 'projects'];

export const experienceData: IExperienceData[] = [
  {
    id: 1,
    title: 'TeleAi Corporation - Associated with Mytech Lab',
    subtitle: 'Software Developer',
    desc: 'Developed Node.js wrapper for a C++ library, boosted performance by 300% via multi-threading. Mentored co-op student in developing a major licensing feature. Designed AWS S3 chat backup feature, ensured 99.9% durability with 20% cost savings. Created analytics reports for R&D and presented to stakeholders.',
    time: 'Jan 2025 - Present',
  },
  {
    id: 2,
    title: 'MyTech Lab',
    subtitle: 'R&D Project Engineer',
    desc: 'Automated CI/CD pipelines with Jenkins, cutting deployment time by 50% for 10+ projects. Assisted Ph.D. students with development and deployments, speeding up timelines by 30%. Demonstrated creativity and prototyped layouts to improve user insights.',
    time: 'Sep 2024 - Dec 2024',
  },
  {
    id: 3,
    title: 'Webforest LLP',
    subtitle: 'Junior Fullstack Developer',
    desc: 'Developed full-stack web applications with React/Next.js and Node.js/Express, improving rendering speed by 30%. Implemented SSR in Next.js for 5+ pages, boosting SEO performance. Automated MongoDB backups, saving 10+ hours/month.',
    time: 'Jul 2022 - Jul 2024',
  },
  {
    id: 4,
    title: 'Webforest LLP',
    subtitle: 'Frontend Developer Intern',
    desc: 'Integrated 8+ Node.js endpoints, enhanced data sync by 30%. Built SPAs using React and Babel, optimized for scalability. Iterated designs rapidly to enhance user experience.',
    time: 'Jun 2022 - Jul 2022',
  },
];

export const projectsData: IProjectData[] = [
  {
    id: 1,
    title: 'MultiCloud Hotel Management System',
    description: 'Developed a hotel management system with multi-cloud architecture using AWS and GCP.',
    image: multi,
    url: "https://github.com/sneh2102/multicloud_hotel_management_system"

  },
  {
    id: 2,
    title: 'Kubernetes CI/CD',
    description: 'Managed GKE containers with Terraform and CI/CD pipelines, speeding up deployments by 40%.',
    image: kubernetes,
    url: 'https://github.com/sneh2102/Kubernetes-with-CI-CD',
  },
  {
    id: 3,
    title: 'AImpact-Res',
    description: 'Developed an AI-driven resume builder with Node.js, React, and AWS, supporting 200+ users.',
    image: AIRes,
    url: 'https://github.com/sneh2102/AI-Assistant-Resume_and_CoverLetter_Builder',
  },  
  {
    id: 4,
    title: 'Paradise',
    description: 'Built a MERN stack travel booking platform with role-based access and Google SSO.',
    image: paradise,
    url: 'https://github.com/sneh2102/Paradise',
  },
  {
    id: 5,
    title: 'RagGPT',
    description: 'Built a RAG-based app with Python and Ollama API, improved response accuracy by 35%.',
    image: ragGpt,
    url: 'https://github.com/sneh2102/RagGpt',
  },
  {
    id: 6,
    title: 'QRNG-Node',
    description: 'Built quantum-inspired RNG for Node.js with 0.995 bits/entropy via C++ bindings. Published as an NPM package.',
    image: qrngnode,
    url: 'https://github.com/sneh2102/qrng-node',
  },
  {
    id: 7,
    title: 'Post Quantum Chat Application',
    description: 'Developed a quantum-resistant chat app with Electron.js, liboqs, and Vernam cipher. Achieved 300% faster encryption.',
    image: pqcChat,
    url: 'https://github.com/sneh2102/post-quantum-communication',
  },
  {
    id: 8,
    title: 'liboqs-node',
    description: 'Created Node.js bindings for NIST-standard liboqs, enabling quantum-safe cryptography in JavaScript.',
    image: liboqs,
    url: 'https://github.com/sneh2102/liboqs-node-wrapper',
  },
  {
    id: 9,
    title: 'Park-Space',
    description: 'Built a GPS-based parking app with Jetpack Compose, Google Maps SDK, and Firebase.',
    image: parkSpace,
    url: 'https://github.com/sneh2102/Park-Space',
  },
  {
    id: 10,
    title: 'RagGPT',
    description: 'Built a RAG-based app with Python and Ollama API, improved response accuracy by 35%.',
    image: ragGpt,
    url: 'https://github.com/sneh2102/RagGpt',
  },

  {
    id: 11,
    title: 'Nomadic',
    description: 'Built a PERN stack travel booking platform with admin panel and CI/CD on Google Cloud Run.',
    image: nomadic,
    url: 'https://github.com/sneh2102/Nomadic',
  },
  {
    id: 12,
    title: 'Share Settle',
    description: 'Designed a greedy Simplify Debt algorithm for group debt management with 75%+ test coverage.',
    image: shareSettle,
    url: 'https://github.com/sneh2102/share-settle',
  },
  {
    id: 13,
    title: 'Aniverse',
    description: 'Created a serverless anime streaming platform with AWS, supporting 5,000+ daily users.',
    image: aniverse,
    url: 'https://github.com/sneh2102/AniVerse',
  },

  {
    id: 14,
    title: 'Online Banking System',
    description: 'Built a banking system with Java, Spring Boot, and MySQL, supporting 100+ users.',
    image: onlinebanking,
    url: 'https://github.com/sneh2102/online-banking'
  }

];

export const selectedReposList: string[] = [
  'multicloud_hotel_management_system',
  'realtime-data-dtreaming-pipeline',
  'online-banking',
  'qrng-node',
  'liboqs-node-windows',
  'liboqs-node-wrapper',
  'test-chat',
  'Saturnin-node',
  'liboqs-node-example',
  'Image_Background_Remover',
  'post-quantum-communication',
  'RagGpt',
  'liboqs-python',
  'linkedIn_auto_jobs_applier_with_AI',
  'Nomadic',
  'AI-Assistant-Resume_and_CoverLetter_Builder',
  'Share_Settle',
  'Note-Taking-app-AWS-Serverless',
  'Kubernetes-with-CI-CD',
  'Libraray-Management-System-in-Java',
  'Battleship-game',
  'sneh2102',
  'Share-Settle',
  'Paradise',
  'Mini-MySQL',
  'Park-Space',
  'AniVerse',
  'share-settleFrontend',
  'share-settleserver',
  'Paradise-Server',
  'Paradise-frontend',
  'bing',
  'html',
  'lyricsApp',
  'Movie-app',
  'Hooks'
];
