import React, { useState } from 'react';
import { X, ExternalLink, Eye, Mail, Phone, Github, Linkedin } from 'lucide-react';

import MoonEmblem from './assets/MoonV2.png';
import profileImage from './assets/ProfileV2.jpeg';
import ComingSoon from './assets/ComingSoon.jpg';
import mallCopMall from './assets/MallCop_Mall.jpg';
import B52_USAF from './assets/B52training_immersion.jpg';
import sensorama from './assets/sensorama_external.jpg';
import PM_Overview from './assets/pm_overview.jpg';
import Valtara_Visual from './assets/Valtara_Visual.jpg';
import WitchsBrew_Visual from './assets/WitchsBrew_Visual.jpg';
import MobilePrototypes_Visual from './assets/MobilePrototypes_Visual.jpg';
import Velthiros_Visual from './assets/Velthiros_Visual.jpg'

// ─────────────────────────────────────────────
// PROJECT DATA — "Projects" column (in-progress + past dev work)
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 0,
    title: 'Project Maelstrom',
    overline: 'Systems RPG · Pack AI',
    inDevelopment: true,
    thumbnail: PM_Overview,
    description: 'A systems-driven RPG set in a corporate-dystopian world. The amnesiac player navigates five biomes, facing enemies modeled as corporate virus and defense mechanisms. Full crafting and alchemy systems, plus a reactive narrative system tying information accuracy to how the player engages.',
    tags: ['UE5', 'C++', 'Pack AI', 'Crafting'],
    github: 'https://github.com/Michamm79/Project_Maelstrom',
    recruiterHighlights: [
      'Pack-coordination AI: agents share positional awareness to surround, assault, or flank based on player positioning — individual state machines under a higher-level role-allocation layer.',
      'Two-orb crafting pipeline: transmutation pairs materials into tools/weapons; alchemy decomposes materials into elements for deeper combinations.',
      'Information-integrity system: playstyle (combat vs. exploration) determines the accuracy of information uncovered, shaping late-game NPC trust independent of faction choice.',
    ],
  },
  {
    id: 1,
    title: 'Evigheden',
    overline: 'Behavior Classification · GAS',
    inDevelopment: true,
    thumbnail: ComingSoon,
    description: 'A five-axis behavioral telemetry system that assigns players a personalized combat archetype from how they actually play. Sampled at 10Hz across levels 3–5, resolved via similarity scoring against designer-authored vectors — with a swappable classifier interface for a future trained model.',
    tags: ['UE5', 'C++', 'GAS', 'Behavior Classifier'],
    github: 'https://github.com/Michamm79/Evigheden',
    recruiterHighlights: [
      'Five-axis telemetry (aggression, momentum, exploration, verticality, evasiveness) resolves to one of five archetypal runes via similarity scoring.',
      'Each rune archetype is a single ScriptableObject-equivalent asset — designers configure stat multipliers, passives, and finishers without touching code.',
      'Two-tier economy: Specialized Runes are granted once and tied to identity; Standard Runes are found, lost, and transferable.',
    ],
  },
  {
    id: 2,
    title: 'Mobile Prototypes',
    overline: 'Velthiros · Maelstrom Mobile',
    inDevelopment: true,
    thumbnail: Velthiros_Visual,
    description: 'Two separate mobile-native builds, each its own codebase and repo. Velthiros is a trial-based survival RPG — the player is abducted by a demonic entity and forced through a recurring gauntlet of arena trials. Maelstrom Mobile is a touch-first reimagining of Maelstrom\u2019s core loop — pull-based gathering, permanent gauntlet upgrades, and coliseum wave combat.',
    tags: ['JavaScript', 'TypeScript', 'Vite', 'Touch Input'],
    github: 'https://github.com/Michamm79/Velthiros',
    recruiterHighlights: [
      'Velthiros: a hidden weapon unlock triggered by a five-minute idle timer + four-direction combo, shared once across every scene that can surface it.',
      'Maelstrom Mobile: a continuous behavior-telemetry system reads play patterns from frame one, banking the tutorial as roughly half the evidence for an early rune grant.',
      'Both are independent codebases with their own repos and build tooling — not ports of the PC/UE5 originals.',
    ],
  },
  {
    id: 3,
    title: 'Mall Cop Madhouse',
    overline: 'Asymmetric Multiplayer',
    inDevelopment: false,
    thumbnail: mallCopMall,
    description: 'Asymmetric stealth-and-chase: Hooligans complete disruptive tasks while a taser-wielding Mall Cop hunts them down and carries them to the jail zone.',
    tags: ['Unity', 'C#', 'Photon Pun'],
    recruiterHighlights: [
      'Two-phase Photon RPC capture system with master-client authority to prevent race conditions.',
      'Asymmetric multiplayer loop (objectives vs hunter pressure) designed for readable decisions.',
    ],
  },
  {
    id: 4,
    title: 'Sensorama R&D',
    overline: 'Sensor-Driven AI · OSU VR Lab',
    inDevelopment: false,
    thumbnail: sensorama,
    description: 'Research project that piped live sensor data (LiDAR, radar, heat signature) from physical hardware into a game world, making AI creatures react to real space in real time.',
    tags: ['Unity', 'C#', 'LiDAR'],
    recruiterHighlights: [
      'Buffered point-cloud ingestion with a fixed 64-point-per-frame cap to prevent hitches.',
      'Sphere-overlap alerts decouple sensor data from AI behavior — creatures decide independently.',
    ],
  },
];

// ─────────────────────────────────────────────
// RELEASED — playable right now, own link
// ─────────────────────────────────────────────
const RELEASED = [
  {
    title: 'Valtara',
    thumbLabel: 'VLT',
    desc: 'Playable vertical slice — procedural exploration, UE5.8.',
    link: 'https://graysongamedev.itch.io/valtara',
    linkLabel: 'Play on itch.io',
    thumbnail: Valtara_Visual,
  },
  {
    title: "Witch's Brew",
    thumbLabel: 'WB',
    desc: 'Discovery-mixing pixel game, procedurally rendered.',
    link: 'https://github.com/Michamm79/WitchsBrew',
    linkLabel: 'View repo',
    thumbnail: WitchsBrew_Visual,
  },
  {
    title: 'B-52 Training Suite',
    thumbLabel: 'B52',
    desc: 'USAF-whitepaper-certified VR training platform.',
    link: 'https://youtu.be/yfuFpTZCy2g',
    linkLabel: 'Watch demo',
    thumbnail: B52_USAF,
  },
  {
    title: 'Velthiros',
    thumbLabel: 'VLT-M',
    desc: 'Trial-based mobile action RPG — abducted, ranked, made to entertain.',
    link: 'https://michamm79.github.io/Velthiros/',
    linkLabel: 'Play in browser',
    thumbnail: MobilePrototypes_Visual,
  },
  {
    title: 'Project Maelstrom Mobile',
    thumbLabel: 'PMM',
    desc: 'Touch-first orb crafting — gather, transmute, alchemise.',
    link: 'https://michamm79.github.io/Project-Maelstrom-Mobile/',
    linkLabel: 'Play in browser',
    thumbnail: MobilePrototypes_Visual,
  },
];

// ─────────────────────────────────────────────
// PUBLISHED TITLES — real Steam storefronts
// ─────────────────────────────────────────────
const PUBLISHED = [
  {
    title: 'Hive Slayer',
    thumbLabel: 'HS',
    role: 'King Crow Studios · VR wave shooter',
    desc: 'Free-to-play VR bug shooter for Oculus Rift S and HTC Vive. 94% positive on Steam.',
    link: 'https://store.steampowered.com/app/910190/Hive_Slayer/',
    linkLabel: 'Play free on Steam',
  },
  {
    title: 'Necroball',
    thumbLabel: 'NB',
    role: 'King Crow Studios · Competitive party sport',
    desc: 'Fast-paced local/online multiplayer sport where necromancers control hordes of minions. 91% positive on Steam.',
    link: 'https://store.steampowered.com/app/563410/',
    linkLabel: 'View on Steam',
  },
];

// ─────────────────────────────────────────────
// EXPERIENCE (full detail — feeds both the condensed
// right column and the full Experience section)
// ─────────────────────────────────────────────
const EXPERIENCE_FULL = [
  {
    company: 'King Crow Studios',
    role: 'Gameplay Engineer',
    dates: 'March 2022 — January 2026 · Remote',
    bullets: [
      'Architected a data-driven checklist engine that dynamically verified procedural compliance for a real-time, multi-user VR training platform (Unity). This direct technical implementation cut crew training cycle times by 95% and was officially recognized in a USAF Whitepaper for reducing human procedural errors by 19%.',
      'Designed and deployed session/room-based multiplayer infrastructure utilizing Photon PUN across multiple client training programs, engineering strict authoritative state synchronization and optimized RPC pipelines for stable, low-latency replication under concurrent live loads across VR, desktop, and mobile platforms simultaneously.',
      'Contributed core gameplay engineering systems post-release to shipped Steam titles Necroball (Oct 2021, 91% positive) and Hive Slayer (Oct 2020, 94% positive, Free-to-Play), focusing on performance optimization, responsive game feel, and stable build deployment pipelines.',
      'Architected a suite of custom Unity Inspector and Unreal Engine editor tools driven by decoupled ScriptableObject systems. This design framework allowed non-technical content designers to rapidly author, iterate, and balance complex combat data and enemy variables safely in-editor, boosting production velocity by removing engineering dependencies.',
    ],
    metric: '-95% training time (USAF)',
  },
  {
    company: 'VedX Solutions',
    role: 'VR Experience Developer',
    dates: 'January 2021 — January 2022 · Remote',
    bullets: [
      'Architected real-time VR simulations and interactive software (Unity, C#) for research clients, engineering a reusable component-based interaction framework — grab, socket, and multi-axis mechanical constraints — grounded in 3D spatial math.',
      'Designed and implemented a combat system for a VR prototype, including a timing-based sliding parry requiring precise real-time input handling.',
    ],
  },
  {
    company: 'Oregon State University — Kesterson VR Immersion Lab',
    role: 'Assistant Instructor & Lab Technician',
    dates: 'August 2017 — June 2020',
    bullets: [
      "Led development of Sensorama, a cross-institutional R&D capstone collaboration with the University of Stuttgart's robotics program: engineered a simulated real-time sensor-fusion pipeline (LiDAR, radar, and thermal data patterns) driving systemic AI creature behavior within a game environment.",
      'Designed and prototyped functional 3D action-RPG frameworks within both Unreal Engine and Unity, developing modular player ability pipelines, responsive hit-registration mechanics, and state-machine-driven creature AI combat behaviors.',
      'Modeled 3D environmental assets and props in Maya and Blender, while providing technical mentorship, code review, and real-time engine orientation to students integrating assets into VR pipelines.',
    ],
  },
];

// condensed cards for the Experience column in the work section
const EXPERIENCE = EXPERIENCE_FULL.map((e) => ({
  company: e.company.split(' — ')[0],
  role: e.role,
  dates: e.dates,
  summary: e.bullets[0],
  metric: e.metric,
}));

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────
const SKILLS = [
  ['Languages', 'C++ (Expert) · C# (Expert) · Blueprint · TypeScript · JavaScript · Lua · Python (Beginner)'],
  ['Engines & Frameworks', 'Unreal Engine 5 · Unity (8+ yrs) · Gameplay Ability System (GAS) · Zenject / Vcontainment'],
  ['Gameplay & Combat', 'Data-Driven Combat Frameworks · Combo Systems · Technical Pacing · Encounter Structure · Balance & Tuning'],
  ['AI & Creature Systems', 'Coordinated Multi-Agent AI · State Machines · Engagement Slot Allocation'],
  ['Architecture & Tooling', 'ScriptableObject Architecture · Custom Inspector Tooling · Extensible Developer Tooling · Modular State Machines'],
  ['Networking & Platforms', 'Multiplayer Architecture · Authoritative State Sync (Photon) · VR / AR / XR · Cross-Platform Deployment'],
  ['3D Art & Asset Pipelines', 'Maya · Blender · Animation Systems · Environment Modeling · Asset Optimization'],
  ['Web & Infrastructure', 'React · Node.js · HTML/CSS · Vercel · SVG/CSS Motion Animation'],
  ['Workflow & Versioning', 'Git · Plastic SCM · Perforce · Agile/Scrum Methodologies · Cross-Discipline Collaboration · Mentorship (Sensorama Team Lead, Lab Assistant Instructor)'],
];

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
const ABOUT = {
  bio: [
    'Gameplay Engineer & Systems Designer with 8+ years of experience architecting extensible interactive frameworks. I specialize in building data-driven player mechanics, synchronized multiplayer architecture, and custom developer tooling that accelerates team production velocity by keeping design teams close to the asset data.',
    'The driving philosophy behind my work is bridging deep technical execution with systemic responsiveness. I focus on creating interconnected worlds where every combat encounter, AI decision, and environment interaction feels naturally responsive — designing robust architecture that scales smoothly while preserving the invisible nuances of great game feel.',
  ],
  credentials: [
    { org: 'Epic Games & Coursera', detail: 'Game Design & Development with UE Professional Certificate' },
    { org: 'Oregon State University', detail: 'B.A. Digital Communication Arts', sub: 'Game Development Specialization · Minor: History & Education' },
  ],
};

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
const CONTACT_ICONS = { mail: Mail, phone: Phone, github: Github, linkedin: Linkedin };
const CONTACT_LINKS = [
  { href: 'mailto:hammondsk.09@gmail.com', label: 'hammondsk.09@gmail.com', kind: 'mail' },
  { href: 'tel:+15419731430', label: '(541) 973-1430', kind: 'phone' },
  { href: 'https://github.com/Michamm79', label: 'github.com/Michamm79', kind: 'github', target: '_blank' },
  { href: 'https://www.linkedin.com/in/michamm', label: 'LinkedIn Profile', kind: 'linkedin', target: '_blank' },
];

// ─────────────────────────────────────────────
// STARS background (carried from original)
// ─────────────────────────────────────────────
const STARS = Array.from({ length: 140 }, (_, i) => {
  const rr = Math.random();
  let color;
  if (rr < 0.3) color = '#ff2d8f';
  else if (rr < 0.55) color = '#2b8cff';
  else if (rr < 0.7) color = '#c084fc';
  else color = '#ffffff';
  const sz = rr < 0.1 ? 2 + Math.random() : 0.6 + Math.random() * 1.2;
  return {
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: sz,
    opacity: 0.2 + Math.random() * 0.7,
    color,
  };
});

// ─────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&display=swap');
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    html { overflow-x: hidden; }
    body { background:#050308; overflow-x: hidden; }

    :root {
      --neon-pink:#ff2d8f;
      --neon-blue:#2b8cff;
      --neon-purple:#a855f7;
      --neon-purple-bright:#c084fc;
      --ice:#b7edff;
      --gold:#eecb2c;
    }

    .nav {
      position: sticky; top: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.1rem 2.5rem;
      background: rgba(5,3,8,0.78);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(168,85,247,0.18);
    }
    .nav-name { font-family:'Cinzel',serif; font-weight:700; font-size:.95rem; letter-spacing:.16em; text-transform:uppercase; color:#fff; }
    .nav-links { display:flex; gap:2.1rem; list-style:none; }
    .nav-links a {
      font-family:'Cinzel',serif; font-size:.68rem; letter-spacing:.13em; text-transform:uppercase;
      color:rgba(255,255,255,.68); text-decoration:none; transition:color .2s; position:relative; cursor:pointer;
    }
    .nav-links a:hover { color:#fff; }
    .nav-links a::after {
      content:''; position:absolute; left:0; right:0; bottom:-6px; height:2px;
      background:linear-gradient(90deg,var(--neon-pink),var(--neon-purple),var(--neon-blue));
      transform:scaleX(0); transition:transform .25s ease;
    }
    .nav-links a:hover::after { transform:scaleX(1); }

    .hero {
      position:relative; min-height:82vh; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; overflow:hidden;
      padding:4rem 1.5rem 5rem; font-family:'EB Garamond',serif;
    }
    .hero-bg {
      position:absolute; inset:0; z-index:0;
      background:
        radial-gradient(ellipse 60% 50% at 30% 20%, rgba(255,45,143,.35) 0%, transparent 60%),
        radial-gradient(ellipse 55% 60% at 75% 30%, rgba(43,140,255,.30) 0%, transparent 60%),
        radial-gradient(ellipse 70% 60% at 50% 85%, rgba(168,85,247,.30) 0%, transparent 65%),
        linear-gradient(180deg,#0a0614 0%,#050308 55%,#050308 100%);
    }
    .hero-bg::after {
      content:''; position:absolute; inset:0;
      background:linear-gradient(180deg,transparent 0%,transparent 60%,#050308 100%);
    }
    .hero-content { position:relative; z-index:2; max-width:820px; }
    .hero-eyebrow {
      font-family:'Cinzel',serif; font-size:.72rem; letter-spacing:.35em; text-transform:uppercase;
      color:var(--neon-purple-bright); margin-bottom:1.4rem;
      text-shadow:0 0 12px rgba(192,132,252,.8),0 0 28px rgba(192,132,252,.4);
    }
    .hero-name {
      font-family:'Cinzel',serif; font-weight:800; font-size:clamp(2.8rem,8vw,5.2rem); line-height:1.02;
      letter-spacing:.02em; text-transform:uppercase;
      background:linear-gradient(90deg,var(--neon-pink) 0%,var(--neon-purple-bright) 45%,var(--neon-blue) 100%);
      -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
      filter:drop-shadow(0 0 14px rgba(255,45,143,.55)) drop-shadow(0 0 30px rgba(168,85,247,.45)) drop-shadow(0 0 55px rgba(43,140,255,.30));
      margin-bottom:1.1rem;
    }
    .hero-tagline {
      font-family:'Cinzel',serif; font-size:clamp(.95rem,1.6vw,1.15rem); letter-spacing:.09em;
      color:rgba(255,255,255,.85); margin-bottom:2.6rem; text-shadow:0 0 18px rgba(255,255,255,.12);
    }
    .hero-ctas { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
    .btn {
      font-family:'Cinzel',serif; font-size:.72rem; letter-spacing:.14em; text-transform:uppercase;
      padding:.85rem 1.9rem; border-radius:4px; text-decoration:none; display:inline-flex;
      align-items:center; gap:.5rem; transition:transform .18s ease, box-shadow .18s ease; cursor:pointer; border:none;
    }
    .btn-primary {
      background:linear-gradient(90deg,var(--neon-pink),var(--neon-purple)); color:#fff;
      box-shadow:0 0 18px rgba(255,45,143,.55), 0 0 40px rgba(255,45,143,.25);
    }
    .btn-primary:hover { transform:translateY(-2px); box-shadow:0 0 28px rgba(255,45,143,.75), 0 0 60px rgba(255,45,143,.35); }
    .btn-adventure {
      border:1px solid rgba(43,140,255,.55); color:var(--ice); background:rgba(43,140,255,.06);
      box-shadow:0 0 16px rgba(43,140,255,.35), inset 0 0 12px rgba(43,140,255,.08);
    }
    .btn-adventure:hover {
      border-color:var(--ice); background:rgba(183,237,255,.12);
      box-shadow:0 0 26px rgba(43,140,255,.6), 0 0 46px rgba(168,85,247,.3), inset 0 0 14px rgba(183,237,255,.15);
      transform:translateY(-2px);
    }
    .cta-band {
      position:relative; z-index:2; margin-top:3.2rem; padding:1.1rem 2rem;
      background:linear-gradient(90deg, rgba(255,45,143,.14), rgba(168,85,247,.14), rgba(43,140,255,.14));
      border-top:1px solid rgba(255,255,255,.1); border-bottom:1px solid rgba(255,255,255,.1);
      box-shadow:0 0 30px rgba(168,85,247,.18); display:inline-flex; align-items:center; gap:1rem; border-radius:6px;
    }
    .cta-band span { font-family:'Cinzel',serif; font-size:.78rem; letter-spacing:.08em; color:rgba(255,255,255,.9); }

    .work { background:#000; padding:4.5rem 2rem 6rem; border-top:1px solid rgba(168,85,247,.14); font-family:'EB Garamond',serif; }
    .work-header { text-align:center; margin-bottom:3.2rem; }
    .work-title {
      font-family:'Cinzel',serif; font-weight:700; font-size:1.6rem; letter-spacing:.12em; text-transform:uppercase;
      background:linear-gradient(90deg,var(--neon-pink),var(--neon-purple-bright),var(--neon-blue));
      -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
      filter:drop-shadow(0 0 16px rgba(168,85,247,.35)); margin-bottom:.6rem;
    }
    .work-sub { font-size:.9rem; color:rgba(255,255,255,.5); }

    .columns {
      display:grid; grid-template-columns:1fr 1.35fr 1fr; gap:0; max-width:1400px; margin:0 auto;
      border:1px solid rgba(168,85,247,.14); border-radius:10px; overflow:hidden; background:rgba(8,5,16,.5);
    }
    @media (max-width:980px) { .columns { grid-template-columns:1fr; } .col { border-right:none !important; border-bottom:1px solid rgba(168,85,247,.14); } }
    .col { padding:2rem 1.6rem; }
    .col-released { border-right:1px solid rgba(168,85,247,.14); }
    .col-middle { border-right:1px solid rgba(168,85,247,.14); background:rgba(255,255,255,.012); }

    .col-label { display:flex; align-items:center; gap:.5rem; font-family:'JetBrains Mono',monospace; font-size:.95rem; letter-spacing:.04em; margin-bottom:1.6rem; padding-bottom:.9rem; border-bottom:1px solid rgba(255,255,255,.08); }
    .col-label .tag { color:rgba(255,255,255,.35); font-size:.85rem; }
    .col-label .name { font-weight:700; text-transform:uppercase; letter-spacing:.08em; }
    .col-released .name { color:var(--neon-pink); text-shadow:0 0 12px rgba(255,45,143,.6),0 0 26px rgba(255,45,143,.3); }
    .col-middle .name { color:var(--neon-purple-bright); text-shadow:0 0 12px rgba(168,85,247,.6),0 0 26px rgba(168,85,247,.3); }
    .col-exp .name { color:var(--ice); text-shadow:0 0 12px rgba(183,237,255,.6),0 0 26px rgba(183,237,255,.3); }

    .rel-card { display:flex; gap:.9rem; padding:.9rem 0; border-bottom:1px solid rgba(255,255,255,.06); }
    .rel-card:last-child { border-bottom:none; }
    .rel-thumb { width:68px; height:68px; border-radius:6px; flex-shrink:0; overflow:hidden; border:1px solid rgba(255,255,255,.1); background:linear-gradient(135deg, rgba(255,45,143,.3), rgba(168,85,247,.3)); display:flex; align-items:center; justify-content:center; }
    .rel-thumb img { width:100%; height:100%; object-fit:cover; }
    .rel-thumb-fallback { font-family:'JetBrains Mono',monospace; font-size:.6rem; color:rgba(255,255,255,.5); }
    .rel-body { flex:1; min-width:0; }
    .rel-title { font-family:'Cinzel',serif; font-size:.82rem; font-weight:600; color:#fff; margin-bottom:.25rem; }
    .rel-desc { font-size:.82rem; color:rgba(255,255,255,.55); line-height:1.45; margin-bottom:.4rem; }
    .rel-link { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--neon-pink); text-decoration:none; border-bottom:1px solid rgba(255,45,143,.4); }
    .rel-link:hover { color:#ff6bb0; border-color:#ff6bb0; }

    .proj-card { background:rgba(255,255,255,.015); border:1px solid rgba(168,85,247,.14); border-radius:8px; padding:1.1rem 1.2rem; margin-bottom:1rem; transition:border-color .2s, box-shadow .2s, transform .2s; cursor:pointer; }
    .proj-card:hover { border-color:rgba(168,85,247,.5); box-shadow:0 0 24px rgba(168,85,247,.15); transform:translateY(-2px); }
    .proj-overline { font-family:'JetBrains Mono',monospace; font-size:.62rem; letter-spacing:.06em; color:var(--neon-purple-bright); margin-bottom:.35rem; display:flex; align-items:center; gap:.5rem; flex-wrap:wrap; }
    .dev-badge { font-family:'JetBrains Mono',monospace; font-size:.56rem; letter-spacing:.04em; color:var(--neon-pink); background:rgba(255,45,143,.1); border:1px solid rgba(255,45,143,.35); padding:.1rem .4rem; border-radius:3px; text-transform:uppercase; }
    .proj-title { font-family:'Cinzel',serif; font-size:.95rem; font-weight:600; color:#fff; margin-bottom:.45rem; }
    .proj-desc { font-size:.85rem; color:rgba(255,255,255,.55); line-height:1.55; margin-bottom:.6rem; }
    .proj-tags { display:flex; flex-wrap:wrap; gap:.35rem; margin-bottom:.6rem; }
    .proj-tag { font-family:'JetBrains Mono',monospace; font-size:.6rem; padding:.18rem .5rem; border-radius:3px; border:1px solid rgba(43,140,255,.3); color:rgba(183,237,255,.85); background:rgba(43,140,255,.05); }
    .proj-code-toggle { display:inline-flex; align-items:center; gap:.4rem; font-family:'JetBrains Mono',monospace; font-size:.65rem; color:rgba(255,255,255,.4); border-top:1px solid rgba(255,255,255,.06); padding-top:.6rem; margin-top:.2rem; }

    .exp-item { padding:1rem 0; border-bottom:1px solid rgba(255,255,255,.06); position:relative; padding-left:1.1rem; }
    .exp-item:last-child { border-bottom:none; }
    .exp-item::before { content:''; position:absolute; left:0; top:1.35rem; width:6px; height:6px; border-radius:50%; background:var(--ice); box-shadow:0 0 8px rgba(183,237,255,.8); }
    .exp-company { font-family:'Cinzel',serif; font-size:.85rem; font-weight:600; color:#fff; }
    .exp-role { font-size:.78rem; color:var(--neon-pink); margin:.15rem 0; }
    .exp-dates { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:rgba(255,255,255,.4); margin-bottom:.5rem; }
    .exp-summary { font-size:.8rem; color:rgba(255,255,255,.55); line-height:1.5; margin-bottom:.4rem; }
    .exp-metric { display:inline-block; font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--ice); background:rgba(43,140,255,.08); border:1px solid rgba(43,140,255,.25); padding:.2rem .55rem; border-radius:3px; }
    .exp-more { display:block; margin-top:.7rem; font-family:'JetBrains Mono',monospace; font-size:.65rem; color:rgba(255,255,255,.35); text-decoration:none; cursor:pointer; }
    .exp-more:hover { color:var(--ice); }

    .pro-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.1rem; max-width:1400px; margin:0 auto; }
    @media (max-width:980px) { .pro-grid { grid-template-columns:repeat(2,1fr); } }
    @media (max-width:560px) { .pro-grid { grid-template-columns:1fr; } }
    .pro-card { background:rgba(255,255,255,.02); border:1px solid rgba(43,140,255,.16); border-radius:8px; padding:1.3rem 1.2rem; transition:border-color .2s, box-shadow .2s, transform .2s; }
    .pro-card:hover { border-color:rgba(43,140,255,.5); box-shadow:0 0 22px rgba(43,140,255,.16); transform:translateY(-2px); }
    .pro-thumb { width:44px; height:44px; border-radius:6px; background:linear-gradient(135deg, rgba(43,140,255,.3), rgba(168,85,247,.3)); display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-size:.6rem; color:rgba(255,255,255,.6); border:1px solid rgba(255,255,255,.1); margin-bottom:.8rem; }
    .pro-title { font-family:'Cinzel',serif; font-size:.92rem; font-weight:600; color:#fff; margin-bottom:.3rem; }
    .pro-role { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:var(--neon-pink); margin-bottom:.6rem; }
    .pro-desc { font-size:.82rem; color:rgba(255,255,255,.55); line-height:1.5; margin-bottom:.8rem; }
    .pro-link { font-family:'JetBrains Mono',monospace; font-size:.66rem; color:var(--ice); text-decoration:none; border-bottom:1px solid rgba(183,237,255,.4); }
    .pro-link:hover { color:#fff; border-color:#fff; }

    /* ── modal (simplified, matches new palette) ── */
    .modal-overlay { position:fixed; inset:0; background:rgba(5,3,8,.94); backdrop-filter:blur(20px); display:flex; align-items:center; justify-content:center; z-index:2000; padding:2rem; }
    .modal-content { position:relative; max-height:90vh; width:min(96vw,760px); background:rgba(8,5,16,.96); border:1px solid rgba(168,85,247,.35); border-radius:10px; box-shadow:0 0 60px rgba(168,85,247,.2); overflow:auto; padding:2rem; font-family:'EB Garamond',serif; }
    .modal-close { position:absolute; top:1.2rem; right:1.2rem; background:rgba(168,85,247,.1); border:1px solid rgba(168,85,247,.4); border-radius:4px; width:32px; height:32px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--neon-purple-bright); transition:all .2s; }
    .modal-close:hover { background:var(--neon-purple); color:#fff; }
    .modal-title { font-family:'Cinzel',serif; font-size:1.2rem; letter-spacing:.06em; color:#fff; margin-bottom:.3rem; }
    .modal-overline { font-family:'JetBrains Mono',monospace; font-size:.68rem; color:var(--neon-purple-bright); margin-bottom:1.2rem; }
    .modal-desc { font-size:.95rem; color:rgba(255,255,255,.7); line-height:1.65; margin-bottom:1.3rem; }
    .modal-highlights { list-style:none; }
    .modal-highlights li { font-size:.88rem; color:rgba(255,255,255,.65); line-height:1.55; padding:.5rem 0 .5rem 1.1rem; border-left:2px solid rgba(168,85,247,.3); margin-bottom:.5rem; }
    .modal-github { display:inline-flex; align-items:center; gap:.5rem; margin-top:.5rem; padding:.6rem 1.1rem; border:1px solid rgba(43,140,255,.4); border-radius:4px; color:var(--ice); text-decoration:none; font-family:'Cinzel',serif; font-size:.7rem; letter-spacing:.1em; text-transform:uppercase; transition:all .2s; }
    .modal-github:hover { background:rgba(43,140,255,.12); border-color:var(--ice); }

    /* ── carried-over sections, each with a distinct identity ── */
    .sec { padding:5rem 2rem 5.5rem; position:relative; overflow:hidden; }
    .sec-inner { max-width:1100px; margin:0 auto; position:relative; z-index:2; }
    .sec-title {
      font-family:'Cinzel',serif; font-weight:700; font-size:1.5rem; letter-spacing:.12em; text-transform:uppercase;
      text-align:center; margin-bottom:.6rem;
    }
    .sec-sub { text-align:center; font-size:.85rem; color:rgba(255,255,255,.45); margin-bottom:3rem; font-family:'JetBrains Mono',monospace; letter-spacing:.03em; }

    /* Experience — ice/blue, timeline glow */
    .sec-experience { background:#020306; border-top:1px solid rgba(43,140,255,.16); }
    .sec-experience .sec-title { color:var(--ice); text-shadow:0 0 18px rgba(183,237,255,.4); }
    .exp-full-item { padding:1.6rem 0 1.6rem 1.6rem; border-left:2px solid rgba(43,140,255,.25); position:relative; margin-bottom:1.5rem; }
    .exp-full-item::before { content:''; position:absolute; left:-7px; top:1.9rem; width:12px; height:12px; border-radius:50%; background:var(--ice); box-shadow:0 0 12px rgba(183,237,255,.9); }
    .exp-full-company { font-family:'Cinzel',serif; font-size:1.05rem; font-weight:700; color:#fff; letter-spacing:.04em; }
    .exp-full-role { font-size:.9rem; font-weight:600; color:var(--neon-pink); margin-top:.2rem; }
    .exp-full-dates { font-family:'JetBrains Mono',monospace; font-size:.7rem; color:rgba(255,255,255,.4); margin:.3rem 0 .9rem; }
    .exp-full-bullet { font-size:.92rem; line-height:1.65; color:rgba(255,255,255,.75); padding:.35rem 0 .35rem .9rem; border-left:2px solid rgba(43,140,255,.2); margin-bottom:.4rem; }

    /* Skills — purple, grid of tag cards */
    .sec-skills { background:#050308; border-top:1px solid rgba(168,85,247,.16); }
    .sec-skills .sec-title { color:var(--neon-purple-bright); text-shadow:0 0 18px rgba(168,85,247,.4); }
    .skill-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.1rem; }
    .skill-card { padding:1.2rem; border-radius:6px; background:rgba(168,85,247,.04); border:1px solid rgba(168,85,247,.16); border-left:3px solid var(--neon-purple); transition:all .25s ease; }
    .skill-card:hover { border-color:rgba(168,85,247,.4); box-shadow:0 0 16px rgba(168,85,247,.15); }
    .skill-card-label { font-family:'Cinzel',serif; font-size:.85rem; font-weight:700; color:#fff; letter-spacing:.05em; text-transform:uppercase; margin-bottom:.7rem; }
    .skill-tag { font-size:.75rem; padding:.22rem .55rem; border-radius:3px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08); color:rgba(255,255,255,.75); white-space:nowrap; }

    /* About — pink, portrait + bio */
    .sec-about { background:#020103; border-top:1px solid rgba(255,45,143,.16); }
    .sec-about .sec-title { color:var(--neon-pink); text-shadow:0 0 18px rgba(255,45,143,.4); }
    .about-layout { display:flex; gap:2.6rem; align-items:flex-start; flex-wrap:wrap; margin-bottom:2.6rem; }
    .about-portrait-wrap { position:relative; flex-shrink:0; }
    .about-portrait-glow { position:absolute; inset:0; border-radius:50%; background:radial-gradient(circle, rgba(255,45,143,.3) 0%, transparent 70%); transform:scale(1.3); }
    .about-portrait { width:180px; height:180px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,45,143,.5); box-shadow:0 0 26px rgba(255,45,143,.3); position:relative; z-index:2; }
    .about-bio { flex:1; min-width:260px; font-size:1.02rem; line-height:1.7; color:rgba(255,255,255,.85); margin-bottom:1rem; }
    .about-creds { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1.2rem; border-top:1px solid rgba(255,45,143,.15); padding-top:1.8rem; }
    .cred-card { padding:1.1rem; border-radius:6px; background:rgba(255,45,143,.04); border:1px solid rgba(255,45,143,.16); border-left:3px solid var(--neon-pink); }
    .cred-org { font-family:'Cinzel',serif; font-size:.85rem; font-weight:700; color:#fff; text-transform:uppercase; letter-spacing:.03em; }
    .cred-detail { font-size:.8rem; font-weight:600; color:var(--neon-pink); margin-top:.2rem; }
    .cred-sub { font-size:.72rem; color:rgba(255,255,255,.45); margin-top:.25rem; }

    /* Contact — blended pink/blue/purple, glowing CTA */
    .sec-contact { background:#000; border-top:1px solid rgba(168,85,247,.16); text-align:center; }
    .sec-contact .sec-title { background:linear-gradient(90deg,var(--neon-pink),var(--neon-purple-bright),var(--neon-blue)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; filter:drop-shadow(0 0 16px rgba(168,85,247,.35)); }
    .contact-lead { font-size:1.1rem; color:rgba(255,255,255,.8); margin-bottom:2.2rem; max-width:60ch; margin-left:auto; margin-right:auto; }
    .contact-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1rem; max-width:760px; margin:0 auto; }
    .contact-card { display:flex; align-items:center; gap:.75rem; padding:1rem; border-radius:6px; background:rgba(255,255,255,.02); border:1px solid rgba(168,85,247,.16); color:#fff; text-decoration:none; font-size:.9rem; transition:all .25s ease; }
    .contact-card:hover { border-color:rgba(168,85,247,.5); box-shadow:0 0 18px rgba(168,85,247,.18); background:rgba(168,85,247,.05); }
    .contact-card svg { width:18px; height:18px; color:var(--neon-purple-bright); flex-shrink:0; }
  `}</style>
);

// ─────────────────────────────────────────────
// PROJECT MODAL
// ─────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={16} /></button>
        <div className="modal-overline">{project.overline}</div>
        <div className="modal-title">{project.title}</div>
        <p className="modal-desc">{project.description}</p>
        {project.recruiterHighlights?.length > 0 && (
          <ul className="modal-highlights">
            {project.recruiterHighlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {project.github && (
          <a className="modal-github" href={project.github} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={13} /> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#050308', color: '#fff' }}>
      <GlobalStyles />

      {/* background stars, sit behind everything */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {STARS.map((s) => (
          <div key={s.id} style={{
            position: 'fixed', borderRadius: '50%', width: s.size, height: s.size,
            left: `${s.left}%`, top: `${s.top}%`, background: s.color, opacity: s.opacity,
          }} />
        ))}
      </div>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-name">Grayson Hammond</div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-eyebrow">Gameplay Engineer</div>
          <h1 className="hero-name">Grayson Hammond</h1>
          <p className="hero-tagline">Architecting the systems behind the worlds you'll lose yourself in</p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">View my work</a>
            <a href="#work" className="btn btn-adventure">Adventure awaits</a>
          </div>
          <div className="cta-band">
            <span>8+ years · Unreal Engine 5 · Unity · C++ · C#</span>
          </div>
        </div>
      </section>

      {/* ── WORK: three columns ── */}
      <section className="work" id="work">
        <div className="work-header">
          <div className="work-title">Featured Work</div>
          <div className="work-sub">Released builds · Active development · Where it was forged</div>
        </div>

        <div className="columns">
          {/* Released */}
          <div className="col col-released">
            <div className="col-label"><span className="tag">//</span><span className="name">Released</span></div>
            {RELEASED.map((r) => (
              <div className="rel-card" key={r.title}>
                <div className="rel-thumb">
                  {r.thumbnail
                    ? <img src={r.thumbnail} alt={r.title} />
                    : <span className="rel-thumb-fallback">{r.thumbLabel}</span>}
                </div>
                <div className="rel-body">
                  <div className="rel-title">{r.title}</div>
                  <div className="rel-desc">{r.desc}</div>
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="rel-link">{r.linkLabel} →</a>
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="col col-middle">
            <div className="col-label"><span className="tag">//</span><span className="name">Projects</span></div>
            {PROJECTS.map((p) => (
              <div className="proj-card" key={p.id} onClick={() => setActiveProject(p)}>
                <div className="proj-overline">
                  {p.overline}
                  {p.inDevelopment && <span className="dev-badge">In Development</span>}
                </div>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.description.slice(0, 130)}{p.description.length > 130 ? '…' : ''}</div>
                <div className="proj-tags">
                  {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <div className="proj-code-toggle"><Eye size={12} /> View details</div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="col col-exp">
            <div className="col-label"><span className="tag">//</span><span className="name">Experience</span></div>
            {EXPERIENCE.map((e) => (
              <div className="exp-item" key={e.company}>
                <div className="exp-company">{e.company}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-dates">{e.dates}</div>
                <div className="exp-summary">{e.summary}</div>
                {e.metric && <span className="exp-metric">{e.metric}</span>}
                <a href="#experience" className="exp-more">Full history →</a>
              </div>
            ))}
          </div>
        </div>

        {/* Published Titles */}
        <div className="work-header" style={{ marginTop: '4.5rem' }}>
          <div className="work-title">Published Titles</div>
          <div className="work-sub">Shipped titles from studio engagements</div>
        </div>
        <div className="pro-grid">
          {PUBLISHED.map((pub) => (
            <div className="pro-card" key={pub.title}>
              <div className="pro-thumb">{pub.thumbLabel}</div>
              <div className="pro-title">{pub.title}</div>
              <div className="pro-role">{pub.role}</div>
              <div className="pro-desc">{pub.desc}</div>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pro-link">{pub.linkLabel} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="sec sec-experience" id="experience">
        <div className="sec-inner">
          <div className="sec-title">Professional Experience</div>
          <div className="sec-sub">// where the systems were built</div>
          {EXPERIENCE_FULL.map((e) => (
            <div className="exp-full-item" key={e.company}>
              <div className="exp-full-company">{e.company}</div>
              <div className="exp-full-role">{e.role}</div>
              <div className="exp-full-dates">{e.dates}</div>
              {e.bullets.map((b, i) => (
                <div className="exp-full-bullet" key={i}>{b}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="sec sec-skills" id="skills">
        <div className="sec-inner">
          <div className="sec-title">Technical Proficiencies</div>
          <div className="sec-sub">// the toolkit</div>
          <div className="skill-grid">
            {SKILLS.map(([label, items]) => (
              <div className="skill-card" key={label}>
                <div className="skill-card-label">{label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                  {items.split(' · ').map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="sec sec-about" id="about">
        <div className="sec-inner">
          <div className="sec-title">About Me</div>
          <div className="sec-sub">// the person behind the code</div>
          <div className="about-layout">
            <div className="about-portrait-wrap">
              <div className="about-portrait-glow" />
              <img src={profileImage} alt="Grayson Hammond" className="about-portrait" />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              {ABOUT.bio.map((p, i) => (
                <p className="about-bio" key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="about-creds">
            {ABOUT.credentials.map((c) => (
              <div className="cred-card" key={c.org}>
                <div className="cred-org">{c.org}</div>
                <div className="cred-detail">{c.detail}</div>
                {c.sub && <div className="cred-sub">{c.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="sec sec-contact" id="contact">
        <div className="sec-inner">
          <div className="sec-title">Get in Touch</div>
          <div className="sec-sub">// let's build something</div>
          <p className="contact-lead">Available immediately for gameplay engineering, technical design, or systems architecture roles. Let's connect via email, GitHub, or LinkedIn.</p>
          <div className="contact-grid">
            {CONTACT_LINKS.map((link) => {
              const Icon = CONTACT_ICONS[link.kind] || ExternalLink;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel={link.target ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}