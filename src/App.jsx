import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Eye, Download, X, ExternalLink } from 'lucide-react';

import profileImage from './assets/portfolio.JPG';
import menuTwo from './assets/MallCop_MainMenu2.jpg';
import lobbyFive from './assets/MallCop_Lobby5.jpg';
import mallCopMall from './assets/MallCop_Mall.jpg';
import coreEight from './assets/MallCop_MallCore8.jpg';
import mallFour from './assets/MallCop_Mall4.jpg';
import coreTwo from './assets/MallCop_MallCore2.jpg';
import sensorama from './assets/sensorama_external.jpg';
import B52_USAF from './assets/B52training_immersion.jpg';
import B52_internaltraining from './assets/fs_remake.jpg';
import sensorama_Environment from './assets/Sensorama_ElephantPlush.jpg';
import PM_Overview from './assets/pm_overview.jpg';
import PM_PlayerFocus from './assets/pm_tools.jpg';
import PM_Combat from './assets/pm_enemies-combat.jpg';
import ComingSoon from './assets/ComingSoon.jpg';

export default function GameDevPortfolio() {
  const [activeSection, setActiveSection] = useState('hammond');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const hammondRef = useRef(null);

  // ✅ PROJECTS ARRAY (this is the one you were asking about)
  const projects = [
    {
      id: 0,
      title: 'Regressor’s Endgame',
      category: 'Action RPG | ML Progression | Story Systems',
      thumbnail: ComingSoon,
      description:
        'In-progress Action RPG focused on readable combat and a regression-driven progression system, exploring ML-assisted build evolution using ML.NET.',
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
      github: 'https://github.com/Michamm79/Regressor-s_Endgame',
      // IMPORTANT: replace this with your actual repo zip link if you want it to download a zip
      // This format is correct:
      // https://github.com/<USER>/<REPO>/archive/refs/heads/main.zip
      codeDownload:
        'https://github.com/Michamm79/Regressor-s_Endgame/archive/refs/heads/main.zip',

      media: [
        {
          type: 'image',
          src: ComingSoon,
          label: 'Combat Loop & Ability Flow',
          system: 'Combat',
        },
      ],
      recruiterHighlights: [
        'Modular combat + ability framework built for fast iteration and designer-friendly tuning.',
        'Progression system designed around long-term build evolution (regression loops + adaptive class growth).',
        'Tooling + data-driven architecture to keep features scalable as content expands.',
      ],
    },

    {
      id: 1,
      title: 'Mall Cop Madhouse',
      category: 'Multiplayer | Asymmetric | Minigame Stealth / Chase',
      thumbnail: mallCopMall,
      description:
        'Unique goal-oriented multiplayer stealth-and-chase game: hooligans complete disruptive minigames under pressure while a taser-wielding Mall Cop hunts them through a high-clarity mall map.',
      tags: [
        'Unity',
        'C#',
        'Multiplayer',
        'UI/UX',
        'Minigames',
        'Game Feel',
        'Systems',
      ],
      media: [
        {
          type: 'image',
          src: coreTwo,
          label: 'Core Loop — Stealth + Tasks Under Pressure',
          system: 'Gameplay',
        },
        {
          type: 'image',
          src: lobbyFive,
          label: 'Lobby + Role Selection UI',
          system: 'UI/UX',
        },
        {
          type: 'image',
          src: coreEight,
          label: 'Level Layout — Readable Navigation & Sightlines',
          system: 'Level Design',
        },
        {
          type: 'image',
          src: menuTwo,
          label: 'Match Setup — Player Onboarding & Controls',
          system: 'UI/UX',
        },
        {
          type: 'image',
          src: mallFour,
          label: 'Environment Showcase — Stylized Visual Clarity',
          system: 'Presentation',
        },
      ],
      recruiterHighlights: [
        'Asymmetric multiplayer loop (objectives vs hunter pressure) designed for readable decisions.',
        'UI/UX flows: role select, onboarding, task tracking, and clear in-world objectives.',
        'Tuned “game feel” knobs: chase pacing, detection pressure, and minigame timing.',
      ],
    },

    {
      id: 2,
      title: 'Project Maelstrom',
      category: 'Action-Adventure RPG',
      thumbnail: PM_Overview,
      description:
        'Inclusive Action-RPG where players unknowingly exist in a virtual experiment. Multiplayer coming.',
      tags: ['Unity', 'C#', 'Combat Systems', 'AI', 'Cinematics'],
      github: 'https://github.com/Michamm79/Project_Maelstrom',
      codeDownload:
        'https://github.com/Michamm79/Project_Maelstrom/archive/refs/heads/main.zip',
      media: [
        {
          type: 'image',
          src: PM_PlayerFocus,
          label: 'Setting up the Scene',
          system: 'Editor Tools',
        },
        {
          type: 'image',
          src: PM_Combat,
          label: 'Combat Readability / Threat Zones',
          system: 'Combat',
        },
      ],
      recruiterHighlights: [
        'Owned end-to-end gameplay systems: controller, combat loop, progression, encounter pacing.',
        'Data-driven abilities/upgrades built for rapid iteration and balance passes.',
        'Enemy coordination to reduce dog-piling and improve player readability.',
      ],
    },

    {
      id: 3,
      title: 'B52 Training Suite USAF',
      category: 'VR/USAF - Large-Scale Production',
      thumbnail: B52_USAF,
      description:
        'Large-scale VR training suite with multi-trainee networking (Normcore → Photon migration) built for reliable repeated sessions.',
      tags: ['Unity', 'VR', 'Multiplayer', 'Photon', 'XR Training'],
      media: [
        {
          type: 'youtube',
          src: 'https://youtu.be/RwfVfCtx3-M?si=OlzIGy4tvBD3d2dA',
          poster: B52_USAF,
          label: 'Training Cockpit (In-Engine)',
          system: 'Multiplayer',

        },
        {
          type: 'youtube',
          src: 'https://youtu.be/Rwhttps://youtu.be/RwfVfCtx3-M?si=HzuSHQE7rvOb72JxfVfCtx3-M?si=avruqaIDuuu474D6',
          poster: B52_internaltraining,
          label: 'XR Training Highlights',
          system: 'Multiplayer',
        },
      ],
      recruiterHighlights: [
        'Multi-trainee networking + synchronized state with reliability-first constraints.',
        'Collaborated across disciplines; shipped stable features under deadlines.',
        'Performance/robustness improvements for repeated sessions across variable setups.',
      ],
    },

    {
      id: 4,
      title: 'Sensorama R&D Project',
      category: 'VR/AR & Robotics',
      thumbnail: sensorama,
      description:
        'Experimental VR/AR action-horror prototype where real-world sensor feeds (LiDAR/radar/sonar) influence gameplay threats in real time.',
      tags: [
        'Unity',
        'C#',
        'Action Horror',
        'Physics Systems',
        'Sensor Integration',
        'Experimental Gameplay',
      ],
      media: [
        {
          type: 'image',
          src: sensorama_Environment,
          label: 'Gameplay Mechanics / Environment',
          system: 'Research & Development',
        },
      ],
      recruiterHighlights: [
        'Real-time sensor-to-gameplay mapping (LiDAR/Radar/Sonar) translated into mechanics.',
        'Physics-driven interactions built around miniature scale, tension, and emergent problem-solving.',
        'Cross-disciplinary R&D collaboration bridging hardware constraints and game design.',
      ],
    },
  ];

  // Group media into system buckets (Combat / UI/UX / etc.)
  const systemBuckets = useMemo(() => {
    const buckets = {};
    projects.forEach((p) => {
      (p.media || []).forEach((m, i) => {
        const key = m.system || 'Other';
        if (!buckets[key]) buckets[key] = [];
        buckets[key].push({ ...m, project: p, _index: i });
      });
    });
    return buckets;
  }, [projects]);

  // Active nav link highlight based on scroll
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

  // Embers effect
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

  // Helper: youtube id extraction
  const getYouTubeId = (url) => {
    try {
      const u = new URL(url);
      const v = u.searchParams.get('v');
      if (v) return v;
      const parts = u.pathname.split('/').filter(Boolean);
      return parts[parts.length - 1] || null;
    } catch {
      return null;
    }
  };

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

          --title-grad: linear-gradient(135deg,
            #bfefff 0%,
            var(--sky) 32%,
            #7adfff 48%,
            var(--lapis) 100%
          );

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

        /* ✅ so clicking nav anchors doesn't hide headings under fixed nav */
        section{ scroll-margin-top: calc(var(--navH) + 18px); }

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
          margin-bottom: 2.25rem;
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
            0 2px 0 rgba(99,197,218,0.18),
            0 8px 0px rgba(40,50,194,0.22),
            0 11px 0px rgba(40,30,93,0.35);
        }

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

          mix-blend-mode: screen;
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
          border: 5px solid var(--border);
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
          object-position:center;
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
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap:3rem;
          max-width:1400px;
          margin:0 auto;
        }
        .media-card{
          background: linear-gradient(135deg, var(--panel) 0%, var(--panel-2) 100%);
          border: 5px solid var(--border);
          border-radius: 14px;
          padding: 1.25rem;
          box-shadow: 0 16px 60px rgba(0,0,0,0.25);
          transition: all 0.25s ease;
        }
        .media-card:hover{
          transform: translateY(-8px);
          border-color: var(--border-strong);
          box-shadow:
            0 20px 70px rgba(0,0,0,0.35),
            0 0 22px var(--glow-sky),
            0 0 34px var(--glow-lapis);
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

        .media-label{
          text-align:center; /* ✅ fixed typo */
          opacity:0.85;
          margin-bottom:0.75rem;
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

        /* ✅ make modal scrollable + not cut off */
        .modal-content{
          position:relative;
          width: min(1100px, 92vw);
          max-height: 92vh;
          background: var(--deep-shadow);
          border: 2px solid var(--electric-cyan);
          border-radius:16px;
          padding: 1.25rem;
          box-shadow: 0 0 80px rgba(127,233,255,0.18);

          display:flex;
          flex-direction:column;
          gap: 0.75rem;

          overflow: auto;  /* ✅ key fix */
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

        .modal-media,
        .modal-video{
          width: 100%;
          border-radius: 10px;
          object-fit: contain;
          background: rgba(0,0,0,0.35);
          aspect-ratio: 16 / 9;
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

        .recruiter-highlights{
          margin: 0.75rem auto 0.5rem;
          max-width: 720px;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(99,197,218,0.28);
          border-radius: 12px;
          background: rgba(4,10,18,0.55);
        }
        
        .recruiter-title{
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.85rem;
          opacity: 0.9;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        
        .recruiter-highlights ul{
          margin: 0;
          padding-left: 1.1rem;
        }
        
        .recruiter-highlights li{
          opacity: 0.9;
          margin: 0.25rem 0;
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
              className={`nav-link ${activeSection === 'hammond' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#motion"
              className={`nav-link ${activeSection === 'motion' ? 'active' : ''}`}
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
              <img src={profileImage} alt="Michael Hammond" className="hammond-avatar" />
            </div>

            <div className="hammond-text">
              <h1 className="hammond-title">Michael Hammond</h1>
              <p className="hammond-subtitle">
                Gameplay Engineer | Player Systems &amp; Interactive Experiences
              </p>
              <p className="hammond-positioning">
                Gameplay engineer and designer with 5+ years building player-centric systems across
                combat, AI behavior, progression, animation integration, and interactive tools in
                Unity and Unreal. Known for owning features end to end—from design and prototyping
                through implementation, tuning, and polish.
              </p>
              <p className="nav-hint">↓ Scroll to explore ↓</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() =>
                project.media?.length ? setSelectedMedia({ project, mediaIndex: 0 }) : null
              }
            >
              <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
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
        <h2 className="section-title">Systems in Motion</h2>

        <div className="media-grid">
          {Object.entries(systemBuckets).map(([system, items]) => (
            <div key={system} className="media-card">
              <div className="media-category">{system}</div>

              <div className="media-thumbs">
                {items.map((m, idx) => (
                  <button
                    key={`${system}-${idx}`}
                    className="thumb"
                    onClick={() => setSelectedMedia({ project: m.project, mediaIndex: m._index })}
                    type="button"
                  >
                    <div className="media-ring">
                      <div className="media-ring-inner">
                        {m.type === 'youtube' ? (
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

      {/* MODAL */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setSelectedMedia(null)}>
              <X />
            </div>

            {(() => {
              const project = selectedMedia.project;
              const m = project.media?.[selectedMedia.mediaIndex];

              return (
                <>
                  <h3
                    style={{
                      fontFamily: 'Orbitron',
                      color: 'var(--electric-cyan)',
                      marginBottom: '0.25rem',
                      textAlign: 'center',
                    }}
                  >
                    {project.title}
                  </h3>

                  {m?.label && <p className="media-label">{m.label}</p>}

                  {project.recruiterHighlights?.length > 0 && (
                    <div className="recruiter-highlights">
                      <div className="recruiter-title">Recruiter Highlights</div>
                      <ul>
                        {project.recruiterHighlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!m ? null : m.type === 'image' || m.type === 'gif' ? (
                    <img src={m.src} alt={m.label || m.type} className="modal-media" />
                  ) : m.type === 'youtube' ? (
                    (() => {
                      const id = getYouTubeId(m.src);
                      return id ? (
                        <iframe
                          className="modal-media"
                          src={`https://www.youtube.com/embed/${id}`}
                          title={m.label || 'YouTube video'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div style={{ textAlign: 'center', opacity: 0.85 }}>
                          Couldn’t parse YouTube link.
                        </div>
                      );
                    })()
                  ) : (
                    <video
                      className="modal-video"
                      controls
                      autoPlay
                      playsInline
                      poster={m.poster || project.thumbnail}
                      src={m.src}
                    />
                  )}

                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      justifyContent: 'center',
                      marginTop: '1rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    {project.github && (
                      <a
                        className="code-btn"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        View GitHub
                      </a>
                    )}

                    {project.codeDownload && (
                      <a
                        className="code-btn"
                        href={project.codeDownload}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download size={16} />
                        Download Code Sample
                      </a>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
