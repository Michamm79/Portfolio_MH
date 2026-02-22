import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Eye, Download, X, ExternalLink } from 'lucide-react';

import profileImage from './assets/portfolio.JPG';
import menuTwo from './assets/MallCop_MainMenu2.jpg';
import lobbyFive from './assets/MallCop_Lobby5.jpg';
import mallCopMall from './assets/MallCop_Mall.jpg';
import coreEight from './assets/MallCop_MallCore8.jpg';
import coreTwo from './assets/MallCop_MallCore2.jpg';
import sensorama from './assets/sensorama_external.jpg';
import B52_USAF from './assets/B52training_immersion.jpg';
import B52_internaltraining from './assets/fs_remake.jpg';
import sensorama_Environment from './assets/Sensorama_ElephantPlush.jpg';
import PM_Overview from './assets/pm_overview.jpg';
import PM_PlayerFocus from './assets/pm_tools.jpg';
import PM_Combat from './assets/pm_enemies-combat.jpg';
import ComingSoon from './assets/ComingSoon.jpg';
import roseEmblem from './assets/Rose_Color.png';


export default function GameDevPortfolio() {
  const [activeSection, setActiveSection] = useState('hammond');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const hammondRef = useRef(null);

  const projects = [
    {
      id: 0,
      title: "Regressor's Endgame",
      category: 'Action RPG | ML Progression | Story Systems',
      color: 'blue',
      thumbnail: ComingSoon,
      description: 'In-progress Action RPG focused on readable combat and a regression-driven progression system, exploring ML-assisted build evolution using ML.NET.',
      tags: ['Unreal Engine 5', 'C++', 'Blueprint', 'Action RPG', 'Combat', 'AI', 'Progression', 'Machine Learning', 'ML.NET', 'Tools'],
      github: 'https://github.com/Michamm79/Regressor-s_Endgame',
      codeDownload: 'https://github.com/Michamm79/Regressor-s_Endgame/archive/refs/heads/main.zip',
      media: [{ type: 'image', src: ComingSoon, label: 'Combat Loop & Ability Flow', system: 'Combat' }],
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
      color: 'purple',
      thumbnail: mallCopMall,
      description: 'Unique goal-oriented multiplayer stealth-and-chase game: hooligans complete disruptive minigames under pressure while a taser-wielding Mall Cop hunts them through a high-clarity mall map.',
      tags: ['Unity', 'C#', 'Multiplayer', 'UI/UX', 'Minigames', 'Game Feel', 'Systems'],
      media: [
        { type: 'image', src: coreTwo, label: 'Core Loop — Stealth + Task Timeline', system: 'Gameplay' },
        { type: 'image', src: lobbyFive, label: 'Lobby + Role Selection UI', system: 'UI/UX' },
        { type: 'image', src: coreEight, label: 'Level Layout — Readable Navigation & Sightlines', system: 'Level Design' },
        { type: 'image', src: menuTwo, label: 'Match Setup — Player Onboarding & Controls', system: 'UI/UX' },
      ],
      recruiterHighlights: [
        'Asymmetric multiplayer loop (objectives vs hunter pressure) designed for readable decisions.',
        'UI/UX flows: role select, onboarding, task tracking, and clear in-world objectives.',
        'Tuned "game feel" knobs: chase pacing, detection pressure, and minigame timing.',
      ],
    },
    {
      id: 2,
      title: 'Project Maelstrom',
      category: 'Action-Adventure RPG',
      color: 'pink',
      thumbnail: PM_Overview,
      description: 'Inclusive Action-RPG where players unknowingly exist in a virtual experiment. Multiplayer coming.',
      tags: ['Unity', 'C#', 'Combat Systems', 'AI', 'Cinematics'],
      github: 'https://github.com/Michamm79/Project_Maelstrom',
      codeDownload: 'https://github.com/Michamm79/Project_Maelstrom/archive/refs/heads/main.zip',
      media: [
        { type: 'image', src: PM_PlayerFocus, label: 'Setting up the Scene', system: 'Editor Tools' },
        { type: 'image', src: PM_Combat, label: 'Combat Readability / Threat Zones', system: 'Combat' },
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
      color: 'blue',
      thumbnail: B52_USAF,
      description: 'Large-scale VR training suite with multi-trainee networking (Normcore → Photon migration) built for reliable repeated sessions. Recorded 95% reduction in training time, 33% increase in trainee retention, and 19% decrease in procedural errors',
      tags: ['Unity', 'VR', 'Multiplayer', 'Photon', 'XR Training'],
      media: [
        { type: 'youtube', src: 'https://youtu.be/yfuFpTZCy2g?si=TgEWj1p08yPcPYMQ', poster: B52_USAF, label: 'Training Cockpit (In-Engine)', system: 'Multiplayer' },
        { type: 'youtube', src: 'https://youtu.be/RwfVfCtx3-M?si=CVPqiLuieOj_MsIj', poster: B52_internaltraining, label: 'XR Training Highlights', system: 'Multiplayer' },
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
      color: 'purple',
      thumbnail: sensorama,
      description: 'Experimental VR/AR action-horror prototype where real-world sensor feeds (LiDAR/radar/sonar) influence gameplay threats in real time.',
      tags: ['Unity', 'C#', 'Action Horror', 'Physics Systems', 'Sensor Integration', 'Experimental Gameplay'],
      media: [{ type: 'image', src: sensorama_Environment, label: 'Gameplay Mechanics / Environment', system: 'Research & Development' }],
      recruiterHighlights: [
        'Real-time sensor-to-gameplay mapping (LiDAR/Radar/Sonar) translated into mechanics.',
        'Physics-driven interactions built around miniature scale, tension, and emergent problem-solving.',
        'Cross-disciplinary R&D collaboration bridging hardware constraints and game design.',
      ],
    },
  ];

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
    const palette = [
      'rgba(0, 149, 255,1)',
      'rgba(153, 48, 255,0.80)',
      'rgba(232,121,184,0.75)',
      'rgba(232,224,255,0.70)',
      'rgba(254,192,1,0.65)',
    ];
    return Array.from({ length: 70 }, (_, i) => {
      const dur = 7 + Math.random() * 10;
      const colorIndex = Math.floor(Math.random() * palette.length);
      return {
        id: i,
        left: Math.random() * 100,
        top: 68 + Math.random() * 35,
        size: 1 + Math.random() * 3.5,
        delay: -(Math.random() * dur),
        duration: dur,
        dx: -60 + Math.random() * 120,
        alpha: 0.4 + Math.random() * 0.5,
        color: palette[colorIndex],
        colorCategory: ['A', 'B', 'C', 'D', 'E'][colorIndex], // ADD THIS LINE
        };
    });
  }, []);

  const getYouTubeId = (url) => {
    try {
      const u = new URL(url);
      const v = u.searchParams.get('v');
      if (v) return v;
      const parts = u.pathname.split('/').filter(Boolean);
      return parts[parts.length - 1] || null;
    } catch { return null; }
  };

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --navH: 72px;

          --nebula-deep:   #05030f;
          --nebula-void:   #08051a;
          --nebula-dark:   #0d0a24;

          --star-blue:     #7eb8f7;
          --star-purple:   #b57bee;
          --star-pink:     #e879b8;
          --star-white:    #e8e0ff;
          --cosmic:        #5f01d0;

          --gold:          #c99f28;
          --gold-light:    #fec001;

          --text:          #d8d0f0;
          --text-dim:      rgba(200,185,240,0.72);
          --text-muted:    rgba(160,140,210,0.52);

          --border-nebula: rgba(74,45,138,0.40);
          --border-gold:   rgba(201,159,40,0.45);
          --border-blue:   rgba(126,184,247,0.36);
          --border-purple: rgba(181,123,238,0.36);
          --border-pink:   rgba(232,121,184,0.36);

          --panel:         rgba(8,5,26,0.82);
          --panel-2:       rgba(13,10,36,0.72);

          --shimmer-grad: linear-gradient(
            100deg,
            #8a6914 0%, #fec001 20%, #ffffff 36%,
            #fec001 52%, #8a6914 68%, #fec001 84%, #ffffff 100%
          );
          --name-grad: linear-gradient(
            135deg,
            #e6b000 0%, #e8d5ff 25%, #9a1fff 45%,
            #e6b000 55%, #e8d5ff 75%, #e6b000 100%
          );
          --galaxy-bar: linear-gradient(
            90deg,
            #5f01d0, #9a1fff, #e879b8, #7eb8f7, #b57bee, #fec001, #5f01d0
          );

          --moonSize:      clamp(62px, 5vw, 84px);
          --moonRight:     clamp(14px, 3vw, 68px);
          --moonTopOffset: clamp(14px, 2vh, 26px);
        }

        body {
          background: var(--nebula-deep);
          color: var(--text);
          font-family: 'Cormorant Garamond', serif;
          overflow-x: hidden;
        }
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(74,45,138,0.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,45,138,0.065) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
          z-index: 0;
        }
        body::after {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 18% 62%, rgba(74,45,138,0.16) 0%, transparent 65%),
            radial-gradient(ellipse 50% 42% at 82% 28%, rgba(26,42,108,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 38% 32% at 50% 92%, rgba(95,1,208,0.10) 0%, transparent 55%);
          pointer-events: none;
          z-index: 0;
        }

        .portfolio { position: relative; min-height: 100vh; }
        section { scroll-margin-top: calc(var(--navH) + 18px); }

        /* NAV */
        nav {
          height: var(--navH);
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(1rem, 3vw, 2.5rem);
          background: rgba(5,3,15,0.94);
          backdrop-filter: blur(22px);
          border-bottom: 1px solid var(--border-nebula);
          box-shadow: 0 2px 40px rgba(74,45,138,0.18);
        }
        nav::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--galaxy-bar);
        }
        .nav-brand {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.8rem, 1vw, 1.2rem);
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.82;
          white-space: nowrap;
        }
        .nav-links { display: flex; gap: clamp(1rem, 3vw, 2.5rem); list-style: none; }
        .nav-link {
          background: var(--galaxy-bar);
          background-size: 260% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 5s linear infinite;
          filter: drop-shadow(0 0 4px rgba(254,192,1,0.30));
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: clamp(.6rem, 1.5vw, 1rem);
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 0;
          width: 0; height: 1px;
          background: var(--gold-light);
          box-shadow: 0 0 8px var(--gold);
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: var(--gold); }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active { color: var(--gold-light); }

        /* NEBULA SEAL */
        .nebula-seal {
          position: fixed;
          top: calc(var(--navH) + var(--moonTopOffset));
          right: var(--moonRight);
          width: var(--moonSize);
          height: var(--moonSize);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 999;
        }
        .rose-emblem {
          width: 65%;
          height: 65%;
          position: absolute;
          z-index: 1;
        }
        
        .rose-gradient {
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          
          background: conic-gradient(from
            0deg,
            #5f01d0, 
            #9a1fff, 
            #e879b8, 
            #7eb8f7, 
            #b57bee, 
            #fec001, 
            #5f01d0
          );
          
          filter: saturate(200%);
        }
        
        .rose-details {
          object-fit: contain;
          opacity: 1;
          mix-blend-mode: multiply;
          pointer-events: none;
        }
        
        .nebula-seal::before {
          content: '';
          position: absolute;
          inset: 0;
          filter: saturate(150%);
          border-radius: 50%;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            #5f01d0, #9a1fff, #e879b8, #7eb8f7, #b57bee, #fec001, #5f01d0
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin-ring 5s linear infinite;
          box-shadow: 0 0 18px rgba(181,123,238,0.50), 0 0 42px rgba(95,1,208,0.25);
        }
        @keyframes spin-ring { to { transform: rotate(360deg); } }
        .nebula-seal::after {
          content: '';
          font-size: clamp(25px, 2.2vw, 40px);
          background: linear-gradient(135deg, #7eb8f7 0%, #b57bee 40%, #e8e0ff 55%, #b57bee 70%, #7eb8f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 8px rgba(126,184,247,0.75)) drop-shadow(0 0 18px rgba(181,123,238,0.50));
          position: relative;
          z-index: 1;
        }

        /* SECTION HEADER */
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: clamp(2rem, 4vh, 3rem);
        }
        .section-header::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--border-gold), transparent);
        }
        .section-gem {
          width: 7px; height: 7px;
          transform: rotate(45deg);
          flex-shrink: 0;
          margin-left: clamp(0.25rem, 0.75vh, 2.5rem);
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          box-shadow: 0 0 10px rgba(201,159,40,0.60);
        }
        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1rem, 1.55vw, 1.2rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.20em;
          background: var(--shimmer-grad);
          background-size: 260% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 5s linear infinite;
          filter: drop-shadow(0 0 4px rgba(254,192,1,0.30));
        }
        @keyframes shimmer-sweep {
          0%   { background-position: 0% center; }
          100% { background-position: 260% center; }
        }

        /* HERO */
        .hammond {
          position: relative;
          isolation: isolate;
          height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--nebula-void);
        }
        .hammond::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 62% 46% at 50% 55%, rgba(74,45,138,0.22) 0%, rgba(26,14,60,0.14) 45%, transparent 72%),
            radial-gradient(ellipse 34% 28% at 20% 42%, rgba(95,1,208,0.12) 0%, transparent 58%),
            radial-gradient(ellipse 30% 24% at 80% 64%, rgba(181,123,238,0.08) 0%, transparent 54%);
          animation: nebula-pulse 10s ease-in-out infinite alternate;
          z-index: 0;
        }
        @keyframes nebula-pulse {
          0%   { opacity: 0.6; transform: scale(1); }
          100% { opacity: 1;   transform: scale(1.04); }
        }

        .hero-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.055) 3px, rgba(0,0,0,0.055) 4px);
          pointer-events: none;
          z-index: 1;
          opacity: 0.35;
        }
        .energy-particles {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%);
        }
        .ember {
          position: absolute;
          border-radius: 999px;
          mix-blend-mode: screen;
          will-change: transform, opacity;
          animation: ember-rise linear infinite;
        }
        @keyframes ember-rise {
          0%   { transform: translate3d(0, 22vh, 0) scale(1); opacity: 0; }
          8%   { opacity: 1; }
          35%   { opacity: 1; }
          100% { transform: translate3d(var(--dx, 0px), -115vh, 0) scale(0.65); opacity: 0; }
        }

        .ember[data-color="A"] {
          filter: drop-shadow(0 0 8px rgba(153, 48, 255, 1))
                  drop-shadow(0 0 16px rgba(201, 145, 255, 1));
        }
        .ember[data-color="B"] {
          filter: drop-shadow(0 0 8px rgba(230, 85, 167, 1))
                  drop-shadow(0 0 16px rgba(232,121,184, 1));
        }
        .ember[data-color="C"] {
          filter: drop-shadow(0 0 8px rgba(187, 163, 255, 1))
                  drop-shadow(0 0 16px rgba(232,224,255, 1));
        }
        .ember[data-color="D"] {
          filter: drop-shadow(0 0 8px rgba(0, 149, 255,1))
                  drop-shadow(0 0 16px rgba(115, 197, 255, 1));
        }
        .ember[data-color="E"] {
          filter: drop-shadow(0 0 8px rgba(254, 192, 1, 1))
                  drop-shadow(0 0 16px rgba(255, 220, 100, 1));
        }
      }

      hammond-content { position: relative; z-index: 3; padding: 3rem; }
        .hammond-layout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1.25rem, 4vw, 3.5rem);
          max-width: min(1100px, 95vw);
          margin: 0 auto;
          padding: 0 clamp(0.8rem, 2vw, 1.5rem);
        }

        /* Avatar with spinning galaxy ring */
        .hammond-avatar-wrap {
          position: relative;
          flex-shrink: 0;
          width:  clamp(128px, 18vw, 215px);
          height: clamp(128px, 18vw, 215px);
        }
        .hammond-avatar-wrap::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          padding: 3px;
          filter: saturate(200%);
          background: conic-gradient(
            from 0deg,
            #5f01d0, #9a1fff, #e879b8, #7eb8f7, #b57bee, #fec001, #e8d5ff, #5f01d0
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin-ring 7s linear infinite;
          opacity: 0.88;
        }
        .hammond-avatar-wrap::after {
          content: '';
          position: absolute;
          inset: -14px;
          border-radius: 999px;
          border: 1px solid var(--border-nebula);
          box-shadow: 0 0 22px rgba(101, 42, 232,0.45), inset 0 0 22px rgba(255, 207, 61,0.35);
        }
        .hammond-avatar {
          width:  clamp(128px, 18vw, 215px);
          height: clamp(128px, 18vw, 215px);
          border-radius: 999px;
          object-fit: cover;
          display: block;
          position: relative;
          z-index: 1;
          border: 2px solid rgba(181,123,238,0.28);
        }

        .hammond-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(1.45rem, 5.5vw, 2.5rem);
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1.05;
          margin-bottom: 0.6rem;
          background: var(--name-grad);
          background-size: 280% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 10s linear infinite;
          filter: drop-shadow(0 0 6px rgba(254,192,1, 0.5));
        }
        .hammond-rule {
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, var(--border-gold), var(--border-purple), var(--border-blue), transparent);
          margin: 0.7rem 0;
        }
        .hammond-subtitle {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.60rem, 1.35vw, 0.86rem);
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--star-blue);
          opacity: 0.92;
          white-space: normal;  /* Changed from nowrap */
          max-width: 100%;      /* Add this to let it wrap properly */
          margin-bottom: 12px;
        }
        .hammond-positioni
        ng {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          margin-top: 0.9rem;
          max-width: 58ch;
          line-height: 1.68;
          opacity: 0.84;
          font-size: clamp(0.88rem, 1.25vw, 1.08rem);
          color: var(--text);
        }

        /* Stat tags */
        .hammond-stats {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.28rem, 0.65vw, 0.5rem);
          margin-top: 1.2rem;
        }
        .stat-tag {
          padding: clamp(0.16rem, 0.38vw, 0.24rem) clamp(0.42rem, 0.88vw, 0.72rem);
          border-radius: 3px;
          font-family: 'Cinzel', serif;
          font-size: clamp(0.5rem, 1.2vw, 0.7rem);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .stat-tag:nth-child(4n+1) { border: 1px solid var(--border-blue);   background: rgba(126,184,247,0.07);  color: var(--star-blue); }
        .stat-tag:nth-child(4n+2) { border: 1px solid var(--border-purple); background: rgba(181,123,238,0.07);  color: var(--star-purple); }
        .stat-tag:nth-child(4n+3) { border: 1px solid var(--border-pink);   background: rgba(232,121,184,0.07);  color: var(--star-pink); }
        .stat-tag:nth-child(4n+4) { border: 1px solid var(--border-gold);   background: rgba(201,159,40,0.07);   color: var(--gold-light); }

        .nav-hint {
          margin-top: 1.4rem;
          font-family: 'Cinzel', serif;
          font-size: clamp(0.65rem, 1vw, 0.9rem);
          letter-spacing: 0.20em;
          color: var(--gold);
          opacity: 0.888;
          animation: bounce 2.8s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }

        @media (max-width: 700px) {
          .hammond-layout { flex-direction: column; text-align: center; gap: 1.5rem; }
          .hammond-stats  { justify-content: center; }
          .hammond-subtitle { white-space: normal; }
          .nav-brand      { display: none; }
        }
        @media (max-width: 400px) {
          .nav-links { gap: 1rem; }
          .nav-link  { font-size: 0.6rem; }
        }

        /* SECTIONS */
        section {
          min-height: 100vh;
          padding: clamp(2.5rem, 5vh, 4rem) clamp(4rem, 3vw, 2rem);
          position: relative;
          z-index: 1;
        }
        
        /* Only adjust for very small screens if needed */
        @media (max-width: 480px) {
          section {
            padding: 4rem 4rem;
          }
        }
        @media (max-width: 420px) {
          .media-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 280px) {
          .projects-grid{
            grid-template-columns: 1fr;
          }
        }
      /* PROJECT CARDS */
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: clamp(1rem, 2.5vw, 1.75rem);
        max-width: 1400px;
        margin: 0 auto;
      }
                    
      .project-card {
        background: var(--panel);
        border: 1px solid var(--border-nebula);
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.28s ease;
        padding: clamp(1rem, calc(2.5rem - 0.5vw), 1.5rem);
        position: relative;
      }
      
      .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 34px; height: 2px;
          z-index: 2;
          box-shadow: 0 0 5px var(--star-blue);
        }
        .project-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 34px;
          z-index: 2;
        }
        .project-card[data-color="blue"]::before,
        .project-card[data-color="blue"]::after   { background: var(--star-blue);   box-shadow: 0 0 12px rgba(126,184,247,0.55); }
        .project-card[data-color="purple"]::before,
        .project-card[data-color="purple"]::after { background: var(--star-purple); box-shadow: 0 0 12px rgba(181,123,238,0.55); }
        .project-card[data-color="pink"]::before,
        .project-card[data-color="pink"]::after   { background: var(--star-pink);   box-shadow: 0 0 12px rgba(232,121,184,0.55); }

        .nebula-corner {
          position: absolute;
          top: -24px; right: -24px;
          width: 90px; height: 90px;
          background: radial-gradient(circle, rgba(181,123,238,0.13), transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .project-card:hover {
          box-shadow: 0 0 28px rgba(74,45,138,0.28), 0 20px 60px rgba(0,0,0,0.50);
          transform: translateY(-6px);
        }
        .project-card[data-color="blue"]:hover   { border-color: rgba(126,184,247,0.55); }
        .project-card[data-color="purple"]:hover { border-color: rgba(181,123,238,0.55); }
        .project-card[data-color="pink"]:hover   { border-color: rgba(232,121,184,0.55); }

        .project-thumbnail {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          filter: brightness(0.82) saturate(0.78);
          transition: filter 0.28s ease;
        }
        .project-card:hover .project-thumbnail { filter: brightness(1) saturate(1); }

        .project-info { padding: 1.2rem 1.3rem; position: relative; z-index: 1; }
        .project-category {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.50rem, 0.82vw, 0.62rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--star-purple);
          opacity: 0.80;
          margin-bottom: 0.45rem;
        }
        .project-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(0.76rem, 1.35vw, 0.98rem);
          font-weight: 700;
          letter-spacing: 0.07em;
          margin-bottom: 0.65rem;
          background: var(--shimmer-grad);
          background-size: 240% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 7s linear infinite;
        }
        .project-description {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.88rem, 1.18vw, 0.98rem);
          color: var(--text-dim);
          line-height: 1.6;
          margin-bottom: 0.9rem;
        }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.36rem; }
        .tag {
          padding: 0.18rem 0.55rem;
          border-radius: 12px;
          font-family: 'Cinzel', serif;
          font-size: clamp(0.46rem, 0.68vw, 0.58rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tag:nth-child(4n+1) { border: 1px solid var(--border-blue);   background: rgba(126,184,247,0.07);  color: var(--star-blue); }
        .tag:nth-child(4n+2) { border: 1px solid var(--border-purple); background: rgba(181,123,238,0.07);  color: var(--star-purple); }
        .tag:nth-child(4n+3) { border: 1px solid var(--border-pink);   background: rgba(232,121,184,0.07);  color: var(--star-pink); }
        .tag:nth-child(4n+4) { border: 1px solid var(--border-gold);   background: rgba(201,159,40,0.07);   color: var(--gold-light); }

        /* SYSTEMS IN MOTION */
        .media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: clamp(1rem, 2.5vw, 1.75rem);
          max-width: 1400px;
          margin: 0 auto;
          }
        
        @media (max-width: 420px) {
          .media-grid {
            grid-template-columns: 1fr;
          }
          .projects-grid{
            grid-template-columns: 1fr;
          }
        }
        .media-card {
          background: var(--panel);
          border: 1px solid var(--border-nebula);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.28s ease;
          padding: clamp(1rem, calc(2.5rem - 0.5vw), 1.5rem);
          position: relative;
        }
        .media-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 120px; height: 2px;
          border-radius: 0 0 2px 0;
        }
        .media-card:nth-child(3n+1)::before { background: linear-gradient(to right, var(--star-blue),   transparent); }
        .media-card:nth-child(3n+2)::before { background: linear-gradient(to right, var(--star-purple), transparent); }
        .media-card:nth-child(3n+3)::before { background: linear-gradient(to right, var(--star-pink),   transparent); }

        .media-category {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.58rem, 0.98vw, 0.70rem);
          letter-spacing: 0.20em;
          text-transform: uppercase;
          padding-left: 0.65rem;
          margin-bottom: 1rem;
          background: var(--shimmer-grad);
          background-size: 240% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 6s linear infinite;
        }
        .media-card:nth-child(3n+1) .media-category { border-left: 2px solid var(--star-blue); }
        .media-card:nth-child(3n+2) .media-category { border-left: 2px solid var(--star-purple); }
        .media-card:nth-child(3n+3) .media-category { border-left: 2px solid var(--star-pink); }

        .media-thumbs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
        }
        .thumb {
          border: 1px solid var(--border-nebula);
          background: var(--panel-2);
          color: var(--text);
          appearance: none;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: all 0.22s ease;
        }
        .thumb:hover {
          border-color: rgba(181,123,238,0.55);
          box-shadow: 0 0 20px rgba(74,45,138,0.24);
          transform: translateY(-3px);
        }
        .thumb:focus { outline: none; }
        .thumb:focus-visible { outline: 1px solid var(--star-purple); outline-offset: 2px; }

        .thumb-image {
          width: 100%;
          height: 135px;
          object-fit: cover;
          display: block;
          filter: brightness(0.80) saturate(0.76);
          transition: filter 0.22s ease;
        }
        .thumb:hover .thumb-image { filter: brightness(1) saturate(1); }

        .thumb-video { position: relative; }
        .thumb-play {
          position: absolute;
          inset: auto 10px 10px 10px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem;
          border: 1px solid rgba(181,123,238,0.55);
          border-radius: 3px;
          background: rgba(5,3,15,0.80);
          color: var(--star-purple);
          font-family: 'Cinzel', serif;
          font-size: 0.56rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }
        .thumb-label {
          padding: 0.55rem 0.75rem;
          border-top: 1px solid var(--border-nebula);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.80rem, 1.05vw, 0.90rem);
          color: var(--text-dim);
        }
        .thumb-project { color: var(--text-muted); font-size: 0.80rem; }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5,3,15,0.97);
          backdrop-filter: blur(26px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
        }
        .modal-content {
          position: relative;
          max-height: 95vh;
          padding: 1rem;
          width: 98vw;
          background: var(--panel);
          border: 1px solid rgba(181,123,238,0.52);
          border-radius: 8px;
          box-shadow:
            0 0 60px rgba(74,45,138,0.22),
            0 0 120px rgba(95,1,208,0.11),
            0 40px 100px rgba(0,0,0,0.78);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          overflow: auto;
        }
      }
        .modal-content::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60px; height: 2px;
          background: var(--gold);
          box-shadow: 0 0 12px var(--gold);
        }
        .modal-content::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 60px;
          background: var(--gold);
          box-shadow: 0 0 12px var(--gold);
        }
        .modal-close {
          position: absolute;
          top: 1rem; right: 1rem;
          background: rgba(181,123,238,0.10);
          border: 1px solid var(--border-purple);
          border-radius: 3px;
          width: 36px; height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--star-purple);
          transition: all 0.2s ease;
          z-index: 10;
        }
        .modal-close:hover {
          background: var(--star-purple);
          color: var(--nebula-deep);
          box-shadow: 0 0 20px rgba(181,123,238,0.55);
        }
        .modal-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(0.82rem, 1.75vw, 1.12rem);
          letter-spacing: 0.14em;
          text-align: center;
          text-transform: uppercase;
          background: var(--shimmer-grad);
          background-size: 240% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-sweep 4.5s linear infinite;
        }
        .modal-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--border-gold), transparent);
          margin: 0.2rem 0;
        }
        .media-label {
          text-align: center;
          color: var(--text-dim);
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.95rem;
          font-style: italic;
          letter-spacing: 0.06em;
        }
        .modal-media, .modal-video {
          width: 100%;
          border-radius: 6px;
          object-fit: contain;
          background: rgba(0,0,0,0.45);
          aspect-ratio: 16 / 9;
          border: 1px solid var(--border-nebula);
        }
        .recruiter-highlights {
          background: rgba(74,45,138,0.08);
          border: 1px solid var(--border-nebula);
          border-left: 2px solid var(--gold);
          border-radius: 6px;
          padding: 0.85rem 1.1rem;
        }
        .recruiter-title {
          font-family: 'Cinzel', serif;
          font-size: 0.60rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.6rem;
          text-align: center;
        }
        .recruiter-highlights ul { margin: 0; padding-left: 1.1rem; }
        .recruiter-highlights li {
          font-family: 'Cormorant Garamond', serif;
          color: var(--text-dim);
          margin: 0.3rem 0;
          font-size: 1rem;
          line-height: 1.55;
        }
        .code-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.50rem 0.9rem;
          border: 1px solid rgba(201,159,40,0.55);
          border-radius: 3px;
          background: rgba(201,159,40,0.07);
          color: var(--gold-light);
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }
        .code-btn:hover {
          background: var(--gold);
          color: var(--nebula-deep);
          box-shadow: 0 0 22px rgba(201,159,40,0.40);
        }
        .nebula-footer {
          text-align: center;
          padding: 2rem 1rem;
          border-top: 1px solid var(--border-nebula);
          color: var(--text-muted);
          font-family: 'Cinzel', serif;
          font-size: clamp(0.50rem, 0.78vw, 0.62rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }
        .nebula-footer span { color: var(--gold); }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-brand">✦ White Rose Division ✦</div>
        <ul className="nav-links">
          {[['hammond', 'Home'], ['projects', 'Projects'], ['motion', 'Systems']].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`nav-link ${activeSection === id ? 'active' : ''}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CORNER SEAL */}
      <div className="nebula-seal" aria-hidden="true">
        <div 
          className="rose-emblem rose-gradient"
          style={{
            WebkitMaskImage: `url(${roseEmblem})`,
            maskImage: `url(${roseEmblem})`,
          }}
        ></div>
        <img 
          src={roseEmblem} 
          alt="Rose details"
          className="rose-emblem rose-details"
        />
      </div>

      {/* HERO */}
      <section id="hammond" className="hammond" ref={hammondRef}>
        <div className="hero-scanlines" />
        <div className="energy-particles">
          {embers.map((e) => (
            <div key={e.id} className="ember" 
            data-color={e.colorCategory}
            style={{
              left: `${e.left}%`, top: `${e.top}%`,
              width: `${e.size}px`, height: `${e.size}px`,
              background: e.color, opacity: e.alpha,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
              '--dx': `${e.dx}px`,
            }} />
          ))}
        </div>

        <div className="hammond-content">
          <div className="hammond-layout">
            <div className="hammond-avatar-wrap">
              <img src={profileImage} alt="Michael Hammond" className="hammond-avatar" />
            </div>
            <div className="hammond-text">
              <h1 className="hammond-title">Michael Hammond</h1>
              <div className="hammond-rule" />
              <p className="hammond-subtitle">Gameplay Engineer · Player Systems · Interactive Experiences</p>
              <p className="hammond-positioning">
                Gameplay engineer and designer with 5+ years building player-centric systems across
                combat, AI behavior, progression, animation integration, and interactive tools in
                Unity and Unreal. Known for owning features end to end — from design and
                prototyping through implementation, tuning, and polish.
              </p>
              <div className="hammond-stats">
                {['Gameplay Engineer','5+ Years', 'UE5 Certified', 'Architecting Player Experiences in C++', 'Cross-Platform'].map(s => (
                  <span key={s} className="stat-tag">{s}</span>
                ))}
              </div>
              <p className="nav-hint">✦ Scroll to Explore ✦</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: 'var(--nebula-void)' }}>
        <div className="section-header">
          <div className="section-gem" />
          <h2 className="section-title">Ascension Milestones</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              data-color={project.color}
              onClick={() => project.media?.length ? setSelectedMedia({ project, mediaIndex: 0 }) : null}
            >
              <div className="nebula-corner" />
              <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS IN MOTION */}
      <section id="motion" style={{ background: 'var(--nebula-deep)' }}>
        <div className="section-header">
          <div className="section-gem" />
          <h2 className="section-title">Systems in Motion</h2>
        </div>
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
                    {m.type === 'youtube' ? (
                      <div className="thumb-video">
                        <img src={m.poster || m.project.thumbnail} alt={m.label || `${m.project.title} media`} className="thumb-image" />
                        <div className="thumb-play"><Eye size={13} /> Watch</div>
                      </div>
                    ) : (
                      <img src={m.src} alt={m.label || `${m.project.title} media`} className="thumb-image" />
                    )}
                    <div className="thumb-label">
                      {m.label || 'Clip'} <span className="thumb-project">— {m.project.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="nebula-footer">
        ✦ &nbsp; Gameplay Engineer <span>Michael Hammond</span> &nbsp; ✦
      </div>

      {/* MODAL */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMedia(null)}><X size={16} /></button>
            {(() => {
              const project = selectedMedia.project;
              const m = project.media?.[selectedMedia.mediaIndex];
              return (
                <>
                  <div className="modal-title">{project.title}</div>
                  <div className="modal-divider" />
                  {m?.label && <p className="media-label">{m.label}</p>}
                  {project.recruiterHighlights?.length > 0 && (
                    <div className="recruiter-highlights">
                      <div className="recruiter-title">✦ Recruiter Highlights ✦</div>
                      <ul>{project.recruiterHighlights.map((h, i) => <li key={i}>{h}</li>)}</ul>
                    </div>
                  )}
                  {!m ? null : m.type === 'image' || m.type === 'gif' ? (
                    <img src={m.src} alt={m.label || m.type} className="modal-media" />
                  ) : m.type === 'youtube' ? (
                    (() => {
                      const id = getYouTubeId(m.src);
                      return id ? (
                        <iframe className="modal-media" src={`https://www.youtube.com/embed/${id}`}
                          title={m.label || 'YouTube video'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                      ) : <div style={{ textAlign: 'center', opacity: 0.7 }}>Couldn't parse YouTube link.</div>;
                    })()
                  ) : (
                    <video className="modal-video" controls autoPlay playsInline
                      poster={m.poster || project.thumbnail} src={m.src} />
                  )}
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {project.github && (
                      <a className="code-btn" href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={14} /> View GitHub
                      </a>
                    )}
                    {project.codeDownload && (
                      <a className="code-btn" href={project.codeDownload} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Download size={14} /> Download Code Sample
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