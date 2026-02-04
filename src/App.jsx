import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Eye, Download, X, ExternalLink } from 'lucide-react';

import profileImage from './assets/portfolio.JPG';
import PMOverviewImg from './assets/pm_overview.JPG';
import UIPreview from './assets/ui_example.JPG';
import Sensorama from './assets/sensorama_external.jpg';
import B52Lobby from './assets/fs_remake.jpg';


export default function GameDevPortfolio() {
  const [activeSection, setActiveSection] = useState('hammond');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const hammondRef = useRef(null);

  const cld = (path, w = 1600) =>
    `https://res.cloudinary.com/dlhazdpo7/image/upload/f_auto,q_auto,w_${w}/${path}`;

  const projects = [
    {
      id: 0,
      title: 'Regressor’s Endgame',
      category: 'Action RPG | ML Progression | Story Systems',
      thumbnail: PMOverviewImg,
      description:
        'An in-progress action RPG built around storyline-driven progression with a machine-learning leveling/class system that adapts player builds over time.',
      tags: [
        'Unity',
        'C#',
        'Action RPG',
        'Combat',
        'AI',
        'Progression',
        'Machine Learning',
        'ML.NET',
        'Tools',
      ],
      github: 'https://github.com/Michamm79/Regressor-s_Endgame.git',
      codeDownload:
        'https://github.com/yourname/regressors-endgame/archive/refs/heads/main.zip',
      media: [
        {
          type: 'image',
          src: PMOverviewImg,
          poster: 'https://your-thumbnail-link-here.jpg',
          label: 'Combat Loop & Ability Flow',
          system: 'Combat',
        },
      
      ],
      highlights: [
  'Designing and implementing a modular combat system with a focus on readability and player expression.',
  'Developing a regression-based progression framework to support long-term build evolution.',
  'Iterating on gameplay feel and system tuning through rapid prototyping.'
      ],
    },

    {
      id: 1,
      title: 'Project Maelstrom - Solo Dev Game Demo',
      category: 'Action-Adventure RPG',
      thumbnail: PMOverviewImg, // ✅ local thumbnail
      description:
        'Inclusive Action-RPG where players unknowingly exist in a hyper-realistic virtual experiment. Multiplayer coming.',
      tags: ['Unity', 'C#', 'Combat Systems', 'AI', 'Cinematics'],
      github: 'https://github.com/Michamm79/Project_Maelstrom',
      codeDownload:
        'https://github.com/Michamm79/Project_Maelstrom/archive/refs/heads/main.zip',
      media: [
        {
          type: 'video',
          src: '/media/maelstrom-reel.mp4',
          poster: 'https://i.ibb.co/S4MBjHTs/PM-Environment.jpg',
          label: 'Gameplay Reel',
          system: 'Combat',
        },
        {
          type: 'image', // ✅ supports images now
          src: PMOverviewImg,
          label: 'Battle Essence',
          system: 'AI',
        },
      ],
      highlights: [
        'Owned end-to-end gameplay systems: player controller, combat loop, progression, and encounter pacing.',
        'Built data-driven systems for abilities and upgrades to support rapid iteration.',
        'Implemented enemy behavior coordination to prevent dog-piling and improve readability.',
      ],
    },

    {
      id: 2,
      title: 'B52 Training Suite',
      category: 'VR/USAF - Large-Scale Production',
      thumbnail: cld('v1770171103/B52training_immersion_wjoscn.jpg', 1600),
      description:
        'Multi-million dollar immersive B52 training system. Multiple trainees linked using Normcore (migrated to Photon).',
      tags: ['Unity', 'VR', 'Multiplayer', 'Photon', 'XR Training'],

      media: [
        {
          type: 'image',
          src: cld('v1770171103/B52training_immersion_wjoscn.jpg', 1600),
          label: 'Training Cockpit (In-Engine)',
          system: 'Multiplayer',
        },
        {
          type: 'youtube',
          src: 'https://www.youtube.com/watch?v=RwfVfCtx3-M',
          poster: B52Lobby),
          label: 'Sizzle Reel — Networked Training Flow',
          system: 'Multiplayer',
        },
      ],

      highlights: [
        'Built multiplayer training interactions across multiple trainees with networked state sync.',
        'Collaborated with cross-functional teams to ship stable features under production constraints.',
        'Optimized performance and reliability for repeated training sessions and hardware variability.',
      ],
    },

    {
      id: 3,
      title: 'Sensorama R&D Project',
      category: 'VR/AR & Robotics',
      thumbnail: Sensorama,
      description:
        'Action-horror VR/AR prototype where players are miniaturized inside a claw machine while real-world sensor feeds influence in-game threats in real time.',
      tags: ['Unity', 'C#', 'Action Horror', 'Physics Systems', 'Sensor Integration', 'Experimental Gameplay'],
      github: 'https://github.com/Michamm79',
      codeDownload: 'https://github.com/Michamm79/archive/refs/heads/main.zip',
      media: [
        {
          type: 'image',
          src: Sensorama,
          label: 'Gameplay Mechanics/Environment',
          system: 'Research & Development',
        },
      ],
      highlights: [
  'Integrated real-time sensor inputs (LiDAR, radar, sonar) into gameplay systems to drive enemy behavior and environmental responses.',
  'Designed physics-based interactions emphasizing player scale/physical limitations, tension, and emergent problem-solving.',
  'Collaborated with robotics R&D engineers to translate physical sensing constraints into interactive gameplay mechanics.'
      ],
    },
  ];

  const systemBuckets = useMemo(() => {
    const buckets = {};
    projects.forEach((p) => {
      (p.media || []).forEach((m) => {
        const key = m.system || 'Other';
        if (!buckets[key]) buckets[key] = [];
        buckets[key].push({
          ...m,
          project: p,
          _index: (p.media || []).indexOf(m),
        });
      });
    });
    return buckets;
  }, [projects]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hammond', 'projects', 'motion'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const embers = useMemo(() => {
    const count = 90;
    return Array.from({ length: count }, (_, i) => {
      const dur = 4 + Math.random() * 6.5;
      const size = 2 + Math.random() * 7;
      const startY = 70 + Math.random() * 40;
      const glow = 8 + Math.random() * 18;
      const isWhite = Math.random() < 0.25;
      return {
        id: i,
        left: Math.random() * 100,
        top: startY,
        size,
        delay: -(Math.random() * dur),
        duration: dur,
        dx: -60 + Math.random() * 120,
        alpha: 0.45 + Math.random() * 0.45,
        color: isWhite ? 'rgba(0,255,170,0.95)' : 'rgba(0,212,255,0.75)',
        glow,
      };
    });
  }, []);

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root{
          --navH: 78px;

          /* Palette */
          --sky:#63C5DA;
          --lapis:#2832C2;
          --indigo:#281E5D;

          --void-black:#050508;
          --deep-shadow:#070b14;
          --midnight-blue:#0b1224;

          --panel: rgba(8,12,28,0.68);
          --panel-2: rgba(10,16,40,0.55);

          --electric-cyan:#7fe9ff;
          --plasma-blue:#4db7ff;
          --energy-glow:#eaf7ff;
          --accent-white:#f2fbff;

          --border: rgba(99,197,218,0.35);
          --border-strong: rgba(40,50,194,0.55);
          --glow-sky: rgba(99,197,218,0.25);
          --glow-lapis: rgba(40,50,194,0.18);

          --text: #eaf3ff;
          --text-dim: rgba(234,243,255,0.78);

          /* ✅ FIXED: closed properly */
          --title-grad: linear-gradient(135deg,
            #bfefff 0%,
            var(--sky) 32%,
            #7adfff 48%,
            var(--lapis) 100%
          );

          --seafoam:#7fe9ff;
          --seafoam-soft: rgba(127,233,255, 0.12);
          --seafoam-border: rgba(127,233,255, 0.55);

          --glass: rgba(7,18,33, 0.62);
          --glass-2: rgba(11,31,58, 0.55);
          --stroke: rgba(127,233,255, 0.35);
          --stroke-strong: rgba(127,233,255, 0.60);

          --moonSize: 52px;
          --moonRight: 70px;
          --moonTopOffset: 28px;
        }

        body{
          background: var(--void-black);
          color: var(--accent-white);
          font-family:'Rajdhani', sans-serif;
          overflow-x:hidden;
        }

        .portfolio{ position:relative; min-height:100vh; }

        nav{
          height: var(--navH);
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1.1rem 2.5rem;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(0, 212, 255, 0.15);
        }
        .nav-links{
          display:flex;
          justify-content:center;
          gap:3rem;
          list-style:none;
          flex-wrap:wrap;
        }
        .nav-link{
          color: var(--accent-white);
          text-decoration:none;
          font-size:1.02rem;
          font-weight:500;
          letter-spacing:0.12em;
          text-transform:uppercase;
          position:relative;
          transition: color 0.25s ease;
        }
        .nav-link::after{
          content:'';
          position:absolute;
          bottom:-6px; left:0;
          width:0;
          height:2px;
          background: var(--electric-cyan);
          box-shadow: 0 0 10px var(--electric-cyan);
          transition: width 0.25s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after{ width:100%; }
        .nav-link:hover{ color: var(--electric-cyan); }
        
        section{
          min-height: 100vh;
          padding: 6rem 3rem;
          position: relative;
        }

        .section-title{
          position: relative;
          display: inline-block;
          opacity: 0.95;
        
          font-family:'Orbitron', sans-serif;
          font-size: clamp(1.9rem, 4.2vw, 3.1rem);
          margin-bottom: 2.25rem; /* reduced from 3rem */
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          text-align: center;                 
        
          background: linear-gradient(
            110deg,
            #ffffff 0%,
            #bfefff 18%,
            #63C5DA 40%,
            #2832C2 72%,
            #281E5D 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
          text-shadow:
          0 8px 0 rgba(99,197,218,0.18),
          0 15px 0px rgba(40,50,194,0.22),
          0 12px 0px rgba(40,30,93,0.35);

        }

        /* ✅ Paint-stroke title treatment */
        .stroke-title{
          position: relative;
          display: inline-block;
          padding: 0.12em 0.18em;
          line-height: 1.05;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          background: var(--title-grad);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stroke-title::before{
          content:"";
          position:absolute;
          left: -0.18em;
          right: -0.18em;
          top: 55%;
          height: 0.72em;
          transform: translateY(-50%) skewX(-10deg);
          border-radius: 999px;
          opacity: 0.42;
          z-index: -1;

          background: linear-gradient(90deg,
            rgba(99,197,218,0.95) 0%,
            rgba(122,223,255,0.80) 35%,
            rgba(40,50,194,0.85) 100%
          );

          box-shadow:
            0 0 18px var(--glow-sky),
            0 0 26px var(--glow-lapis);
        }

        /* HERO */
        .hammond{
          position: relative;
          isolation: isolate;
          height: 100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .hammond::before{
          content:'';
          position:absolute;
          inset:-25%;
          background:
            radial-gradient(circle at 20% 40%, rgba(0,246,255,0.05) 0%, transparent 55%),
            radial-gradient(circle at 70% 30%, rgba(0,212,255,0.06) 0%, transparent 60%),
            radial-gradient(circle at 40% 70%, rgba(0,252,255,0.04) 0%, transparent 60%),
            radial-gradient(circle at 80% 75%, rgba(0,255,170,0.04) 0%, transparent 65%);
          filter: blur(22px);
          opacity: 0.9;
          animation: smoke-drift 18s ease-in-out infinite alternate;
          z-index:0;
        }
        @keyframes smoke-drift{
          0%{ transform: translate(0%, 0%) scale(1); opacity:0.35; }
          50%{ transform: translate(-4%, 3%) scale(1.05); opacity:0.45; }
          100%{ transform: translate(5%, -3%) scale(1.1); opacity:0.35; }
        }

        .hammond::after{
          content:'';
          position:absolute;
          left:0; right:0; bottom:0;
          height: 140px;
          background: linear-gradient(
            to bottom,
            rgba(5,5,8,0) 0%,
            rgba(5,5,8,0.7) 45%,
            rgba(5,5,8,1) 100%
          );
          z-index: 4;
          pointer-events:none;
        }

        /* Moon */
        .waxing-moon{
          position:absolute;
          top: calc(var(--navH) + var(--moonTopOffset));
          right: var(--moonRight);
          width: var(--moonSize);
          height: var(--moonSize);
          border-radius:999px;
          pointer-events:none;
          z-index: 6;

          opacity: 1;
          mix-blend-mode: screen;
          filter: none;
          transform: translateZ(0);

          background:
            radial-gradient(circle at 35% 30%, rgba(0,0,0,0.08) 0%, transparent 28%),
            radial-gradient(circle at 65% 55%, rgba(0,0,0,0.06) 0%, transparent 24%),
            radial-gradient(circle at 50% 70%, rgba(0,0,0,0.05) 0%, transparent 34%),
            radial-gradient(circle at 30% 30%,
              rgba(255,255,255,0.98) 0%,
              rgba(234,247,255,0.90) 42%,
              rgba(99,197,218,0.60) 72%,
              rgba(99,197,218,0.22) 100%
            );

          box-shadow:
            0 0 14px rgba(99,197,218,0.70),
            0 0 60px rgba(77,183,255,0.40),
            0 0 140px rgba(40,50,194,0.20);
        }
        .waxing-moon::before{
          content:"";
          position:absolute;
          inset:-16px;
          border-radius:999px;
          background: radial-gradient(circle,
            rgba(99,197,218,0.30) 0%,
            rgba(77,183,255,0.12) 40%,
            rgba(77,183,255,0.00) 72%
          );
          filter: blur(10px);
          pointer-events:none;
        }

        @media (max-width: 900px){
          :root{ --navH: 66px; }
          .waxing-moon{
            --moonSize: 56px;
            --moonRight: 24px;
            --moonTopOffset: 28px;
          }
        }

        .energy-particles{
          position:absolute;
          inset:0;
          z-index:2;
          pointer-events:none;
          overflow:hidden;
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
        }
        .ember{
          position:absolute;
          border-radius:999px;
          mix-blend-mode:screen;
          will-change: transform, opacity;
          animation: ember-rise linear infinite;
        }
        .ember::after{
          content:"";
          position:absolute;
          inset: calc(-1 * var(--glow, 14px));
          border-radius:999px;
          background: radial-gradient(circle, rgba(0,212,255,0.22), rgba(0,212,255,0));
          filter: blur(6px);
          opacity:0.65;
        }
        @keyframes ember-rise{
          0%{ transform: translate3d(0, 24vh, 0) scale(1); opacity:0; }
          8%{ opacity:1; }
          100%{ transform: translate3d(var(--dx, 0px), -120vh, 0) scale(0.8); opacity:0; }
        }

        .hammond-content{ position:relative; z-index:3; padding:2rem; }
        .hammond-layout{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:2.25rem;
          max-width:1100px;
          margin:0 auto;
        }
        .hammond-avatar-wrap{
          width:220px; height:220px;
          border-radius:999px;
          padding:6px;
          background: radial-gradient(circle at 30% 30%,
            var(--sky, 0.45),
            var(--indigo, 0.20),
            rgba(0,0,0,0.35)
          );
          box-shadow: 0 0 30px rgba(99,197,218,0.22), 0 0 60px rgba(40,50,194,0.20);
        }
        .hammond-avatar{
          width:100%; height:100%;
          border-radius:999px;
          object-fit:cover;
          border:2px solid rgba(255,255,255,0.18);
          box-shadow: 0 18px 60px rgba(0,0,0,0.45);
          display:block;
        }

        .hammond-title{
          font-family:'Orbitron', sans-serif;
          font-size: clamp(2.6rem, 7vw, 6rem);
          font-weight:900;
          margin-bottom:0.7rem;
          background: linear-gradient(135deg,
            rgba(127,233,255,1) 0%,
            rgba(127,233,255,1) 45%,
            rgba(242,251,255,1) 45%,
            rgba(242,251,255,1) 55%,
            rgba(127,233,255,1) 55%,
            rgba(127,233,255,1) 100%
          );
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          letter-spacing:0.05em;
        }

        .hammond-subtitle{
          font-size: clamp(1.1rem, 2.8vw, 1.7rem);
          font-weight:300;
          color: var(--energy-glow);
          letter-spacing:0.14em;
          text-transform:uppercase;
          opacity:0.95;
        }

        .hammond-positioning{
          margin-top: 1.25rem;
          max-width: 62ch;
          line-height: 1.55;
          opacity: .88;
          font-size: 1rem;
        }

        .nav-hint{
          margin-top: 1.2rem;
          font-size: 1rem;
          color: var(--plasma-blue);
          animation: bounce 2s ease-in-out infinite;
          text-align:left;
        }
        @keyframes bounce{
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-14px); }
        }
        @media (max-width: 900px){
          .hammond-layout{ flex-direction:column; gap:1.5rem; text-align:center; }
          .nav-hint{ text-align:center; }
          .hammond-avatar-wrap{ width:170px; height:170px; }
          .hammond-positioning{ margin-left:auto; margin-right:auto; }
        }

        /* Projects */
        .projects-grid{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap:3rem;
          max-width:1400px;
          margin:0 auto;
        }
        .project-card{
          background: linear-gradient(135deg, var(--panel) 0%, var(--panel-2) 100%);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow:hidden;
          cursor:pointer;
          transition: all 0.25s ease;
          box-shadow: 0 14px 55px rgba(0,0,0,0.28);
        }
        .project-card:hover{
          transform: translateY(-8px);
          border-color: var(--border-strong);
          box-shadow:
            0 20px 70px rgba(0,0,0,0.35),
            0 0 22px var(--glow-sky),
            0 0 34px var(--glow-lapis);
        }
        .project-thumbnail{
          width:100%;
          height:240px;
          object-fit:cover;
          display:block;
        }
        .project-info{ padding: 1.25rem; }
        .project-title{
          font-family:'Orbitron', sans-serif;
          font-size:1rem;
          margin-bottom:0.5rem;
        }
        .project-description{ opacity:0.9; line-height:1.5; margin-bottom:0.75rem; }
        .project-tags{ display:flex; flex-wrap:wrap; gap:0.5rem; }
        .tag{
          padding:0.28rem 0.7rem;
          border-radius:999px;
          border: 1px solid rgba(99,197,218,0.55);
          background: rgba(99,197,218,0.10);
          color: var(--energy-glow);
          font-size:0.85rem;
        }

        /* Systems in Motion */
        .media-grid{
          display:grid;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .media-card{
          background: linear-gradient(135deg, var(--panel) 0%, var(--panel-2) 100%);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.25rem;
          box-shadow: 0 16px 60px rgba(0,0,0,0.25);
        }
        .media-category{
          display:inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          border: 1px solid rgba(99,197,218,0.55);
          background: rgba(99,197,218,0.10);
          color: var(--energy-glow);
          font-size: 0.9rem;
          margin-bottom: 0.6rem;
        }

        .media-thumbs{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.9rem;
        }

        .thumb{
          border: 1px solid rgba(99,197,218,0.22);
          background: rgba(0,0,0,0.22);
          color: var(--text);
          appearance: none;
          -webkit-appearance: none;
          border-radius: 12px;
          overflow:hidden;
          cursor:pointer;
          text-align:left;
          padding: 0;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .thumb:hover{
          transform: translateY(-3px);
          border-color: rgba(127,233,255,0.70);
          box-shadow: 0 12px 44px rgba(77,183,255,0.16);
        }
        .thumb:focus{ outline: none; }
        .thumb:focus-visible{
          outline: 2px solid rgba(99,197,218,0.65);
          outline-offset: 3px;
        }

        .media-ring{
          border-radius: 14px;
          padding: 6px;
          background: radial-gradient(circle at 30% 30%,
            rgba(127,233,255,0.25),
            rgba(77,183,255,0.10),
            rgba(0,0,0,0)
          );
          box-shadow:
            0 0 28px rgba(127,233,255,0.10),
            0 0 70px rgba(77,183,255,0.10);
        }
        .media-ring-inner{
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(0,0,0,0.20);
        }

        .thumb-poster,
        .thumb-image{
          width:100%;
          height: 150px;
          object-fit: cover;
          display:block;
        }
        .thumb-video{ position:relative; }
        .thumb-play{
          position:absolute;
          inset:auto 12px 12px 12px;
          display:inline-flex;
          align-items:center;
          gap: 0.5rem;
          padding: 0.45rem 0.7rem;
          border-radius: 999px;
          border: 1px solid rgba(99,197,218,0.55);
          background: rgba(40,30,93,0.55);
          color: var(--energy-glow);
          backdrop-filter: blur(10px);
        }
        .thumb-label{
          color: var(--accent-white);
          padding: 0.7rem 0.85rem;
          border-top: 1px solid rgba(99,197,218,0.18);
          opacity: 0.95;
          font-size: 0.95rem;
        }
        .thumb-project{
          color: rgba(234,243,255,0.75);
        }

        /* Modal */
        .modal-overlay{
          position:fixed;
          inset:0;
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:2000;
          padding:2rem;
        }
        .modal-content{
          position:relative;
          max-width:90vw;
          max-height:90vh;
          background: var(--deep-shadow);
          border: 2px solid var(--electric-cyan);
          border-radius:16px;
          padding:2rem;
          box-shadow: 0 0 80px rgba(127,233,255,0.18);
          overflow:auto;
        }
        .modal-close{
          position:absolute;
          top:1rem;
          right:1rem;
          background: rgba(127,233,255,0.14);
          border: 1px solid var(--electric-cyan);
          border-radius:50%;
          width:40px;
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition: all 0.3s;
          z-index:10;
        }
        .modal-close:hover{
          background: var(--electric-cyan);
          box-shadow: 0 0 20px var(--electric-cyan);
        }
        .modal-media{
          width:100%;
          max-width:1200px;
          max-height: 78vh;
          height: auto;
          display: block;
          border-radius: 10px;
          object-fit: contain;
          background: rgba(0,0,0,0.35);
        }

        .code-btn{
          display:inline-flex;
          align-items:center;
          gap: 0.5rem;
          padding: 0.55rem 0.9rem;
          border-radius: 10px;
          border: 1px solid var(--stroke-strong);
          background: rgba(127,233,255,0.10);
          color: var(--electric-cyan);
          text-decoration:none;
          cursor:pointer;
          transition: 0.2s ease;
          user-select:none;
        }
        .code-btn:hover{
          background: var(--electric-cyan);
          color: var(--deep-shadow);
          box-shadow: 0 0 22px rgba(127,233,255,0.35);
        }

        @media (max-width: 768px){
          section{ padding: 5.25rem 1.25rem; }
          nav{ padding: 1rem 1.25rem; }
          .nav-links{ gap: 1.25rem; }
        }
      `}</style>

      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="#hammond"
              className={`nav-link ${
                activeSection === 'hammond' ? 'active' : ''
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${
                activeSection === 'projects' ? 'active' : ''
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#motion"
              className={`nav-link ${
                activeSection === 'motion' ? 'active' : ''
              }`}
            >
              Systems
            </a>
          </li>
        </ul>
      </nav>

      <section id="hammond" className="hammond" ref={hammondRef}>
        <div className="energy-particles">
          {embers.map((e) => (
            <div
              key={e.id}
              className="ember"
              style={{
                left: `${e.left}%`,
                top: `${e.top}%`,
                width: `${e.size}px`,
                height: `${e.size}px`,
                background: e.color,
                opacity: e.alpha,
                animationDuration: `${e.duration}s`,
                animationDelay: `${e.delay}s`,
                ['--dx']: `${e.dx}px`,
                ['--glow']: `${e.glow}px`,
              }}
            />
          ))}
        </div>

        <div className="waxing-moon" aria-hidden="true" />

        <div className="hammond-content">
          <div className="hammond-layout">
            <div className="hammond-avatar-wrap">
              <img
                src={profileImage}
                alt="Michael Hammond"
                className="hammond-avatar"
              />
            </div>

            <div className="hammond-text">
              <h1 className="hammond-title">Michael Hammond</h1>
              <p className="hammond-subtitle">
                Gameplay Engineer | Player Systems &amp; Interactive Experiences
              </p>
              <p className="hammond-positioning">
                Gameplay engineer and designer with 5+ years building
                player-centric systems across combat, AI behavior, progression,
                animation integration, and interactive tools in Unity and
                Unreal. Known for owning features end to end—from design and
                prototyping through implementation, tuning, and polish.
              </p>
              <p className="nav-hint">↓ Scroll to explore ↓</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title" data-shadow="FEATURED PROJECTS">
          Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() =>
                project.media?.length
                  ? setSelectedMedia({ project, mediaIndex: 0 })
                  : null
              }
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumbnail"
              />
              <div className="project-info">
                <h3 className="project-title">
                  <span className="stroke-title">{project.title}</span>
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="motion">
        <h2 className="section-title" data-shadow="SYSTEMS IN MOTION">
          Systems in Motion
        </h2>

        <div className="media-grid">
          {Object.entries(systemBuckets).map(([system, items]) => (
            <div key={system} className="media-card">
              <div className="media-category">{system}</div>

              <div className="media-thumbs">
                {items.map((m, idx) => (
                  <button
                    key={`${system}-${idx}`}
                    className="thumb"
                    onClick={() =>
                      setSelectedMedia({
                        project: m.project,
                        mediaIndex: m._index,
                      })
                    }
                  >
                    <div className="media-ring">
                      <div className="media-ring-inner">
                        {m.type === 'video' || m.type === 'youtube' ? (
                          <div className="thumb-video">
                            <img
                              src={m.poster || m.project.thumbnail}
                              alt={m.label || `${m.project.title} media`}
                              className="thumb-image"
                            />
                            <div className="thumb-play">
                              <Eye size={18} />
                              Watch
                            </div>
                          </div>
                        ) : (
                          <img
                            src={m.src}
                            alt={m.label || `${m.project.title} media`}
                            className="thumb-image"
                          />
                        )}
                      </div>
                    </div>

                    <div className="thumb-label">
                      {m.label || 'Clip'}{' '}
                      <span className="thumb-project">— {m.project.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setSelectedMedia(null)}>
              <X />
            </div>

            <h3
              style={{
                fontFamily: 'Orbitron',
                color: 'var(--electric-cyan)',
                marginBottom: '0.75rem',
                textAlign: 'center',
              }}
            >
              {selectedMedia.project.title}
            </h3>

            <p
              style={{
                textAlign: 'center',
                opacity: 0.85,
                marginBottom: '1rem',
              }}
            >
              {selectedMedia.project.media?.[selectedMedia.mediaIndex]?.label ||
                ''}
            </p>

            {(() => {
              const m = selectedMedia.project.media?.[selectedMedia.mediaIndex];
              if (!m) return null;

              if (m.type === 'image' || m.type === 'gif') {
                return (
                  <img
                    src={m.src}
                    alt={m.label || m.type}
                    className="modal-media"
                  />
                );
              }

              if (m.type === 'youtube') {
                const url = new URL(m.src);
                const id =
                  url.searchParams.get('v') || url.pathname.split('/').pop();

                return (
                  <iframe
                    className="modal-media"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={m.label || 'YouTube video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                );
              }

              return (
                <video
                  className="modal-video"
                  controls
                  autoPlay
                  playsInline
                  poster={m.poster || selectedMedia.project.thumbnail}
                  src={m.src}
                />
              );
            })()}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                marginTop: '1.25rem',
                flexWrap: 'wrap',
              }}
            >
              {selectedMedia.project.github && (
                <a
                  className="code-btn"
                  href={selectedMedia.project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  View GitHub
                </a>
              )}

              {selectedMedia.project.codeDownload && (
                <a
                  className="code-btn"
                  href={selectedMedia.project.codeDownload}
                  download
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={16} />
                  Download Code Sample
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
