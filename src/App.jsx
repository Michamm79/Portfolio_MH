import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ExternalLink, Download, Eye } from 'lucide-react';

import SunEmblem   from './assets/SunEmblem.png';
import profileImage from './assets/portfolio.JPG';
import ComingSoon   from './assets/ComingSoon.jpg';
import mallCopMall  from './assets/MallCop_Mall.jpg';
import coreTwo      from './assets/MallCop_MallCore2.jpg';
import coreEight    from './assets/MallCop_MallCore8.jpg';
import lobbyFive    from './assets/MallCop_Lobby5.jpg';
import menuTwo      from './assets/MallCop_MainMenu2.jpg';
import B52_USAF          from './assets/B52training_immersion.jpg';
import B52_internaltraining from './assets/fs_remake.jpg';
import sensorama         from './assets/sensorama_external.jpg';
import sensorama_Environment from './assets/Sensorama_ElephantPlush.jpg';
import PM_Overview   from './assets/pm_overview.jpg';
import PM_PlayerFocus from './assets/pm_tools.jpg';
import PM_Combat     from './assets/pm_enemies-combat.jpg';

// ─────────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 0,
    title: 'Valtara',
    category: 'Exploration · Procedural World · Companion AI',
    color: 'green',
    thumbnail: ComingSoon,
    description: 'A post-apocalyptic exploration game. You are a robot named Barley. Seven artifacts of humanitys greatest myths are scattered across a procedurally generated world, each watched over by a guardian with their own conditions. A fox travels with you. Location-contextual artifact placement, guardian gate system, and a companion whose behavior tells you everything if you are paying attention.',
    tags: ['Unity','C#','Procedural Generation','Companion AI','ScriptableObjects','In Development'],
    github: 'https://github.com/Michamm79/Valtara',
    codeDownload: 'https://github.com/Michamm79/Valtara/archive/refs/heads/main.zip',
    media: [{ type:'image', src: ComingSoon, label:'Barley and Fox — World Preview', system:'Exploration' }],
    recruiterHighlights: [
      'Location-contextual artifact placement — each of seven curated artifacts is tied to a specific biome type. The procedural world arranges differently each playthrough, but the mythological logic always holds.',
      'Guardian gate system — artifacts are not found, they are given, eventually, by someone who needed to see something first. Each guardian has unique unlock conditions; the fox signals what kind of encounter is approaching.',
      'Fox behavioral state system driven by proximity triggers — tail movement, ear position, distance from Barley, and movement direction all reflect the situation without UI indicators. Observation is the mechanic.',
      'World state memory tracks collection count and notifies late guardians when the threshold is reached. They are not surprised.',
    ],
  },
  {
    id: 1,
    title: "Evigheden",
    category: 'Designer-Driven Architecture · ScriptableObjects',
    color: 'blue',
    thumbnail: ComingSoon,
    description: 'A dark survival gauntlet built around a behavior-driven rune system. A classifier silently tracks how the player fights from levels 3–5 — aggression, dodge frequency, stealth, defense, mobility — and at level 5 surfaces a personalized Specialized Rune recommendation alongside alternatives. Six archetypes, one secret. Standard Runes are found, lost, and taken throughout the world. Regressor\'s Endgame resets everything when the death threshold is crossed.',
    tags: ['Unity','C#','ScriptableObjects','Behavior Classifier','Designer Tooling','PC','In Development'],
    github: 'https://github.com/Michamm79/Evigheden',
    codeDownload: 'https://github.com/Michamm79/Evigheden/archive/refs/heads/main.zip',
    media: [{ type:'image', src: ComingSoon, label:'Rune Authoring & Inspector Workflow', system:'Designer Tooling' }],
    recruiterHighlights: [
      'Behavior Classifier runs levels 3–5, tracking combat patterns across six dimensions — aggression, dodge frequency, stealth, defensive play, sprint momentum, and precision. At level 5 it surfaces the Specialized Rune that best reflects how the player actually fights.',
      'Six Specialized Rune archetypes (Berserker, Sentinel, Phantom, Duelist, Vanguard, Acrobat) plus a secret seventh with performance-gated unlock conditions. Each is defined entirely in a ScriptableObject asset — no code per archetype.',
      'Two-tier rune economy: Specialized Runes are granted once and tied to identity; Standard Runes are found in the world, losable, and transferable between players.',
      'Reevaluation system allows archetype switching with a difficulty-scaled penalty — free on Easy/Medium, punishing on Hard, locked entirely in Regressor\'s Endgame.',
    ],
  },
  {
    id: 1,
    title: 'Mall Cop Madhouse',
    category: 'Asymmetric Multiplayer · Stealth / Chase',
    color: 'purple',
    thumbnail: mallCopMall,
    description: 'Asymmetric stealth-and-chase game: Hooligans complete disruptive tasks while a taser-wielding Mall Cop hunts them down and carries them to the jail zone.',
    tags: ['Unity','C#','Photon Pun','Multiplayer','Asymmetric','UI/UX'],
    media: [
      { type:'image', src: coreTwo,   label:'Core Loop — Stealth + Task Timeline',      system:'Gameplay' },
      { type:'image', src: lobbyFive, label:'Lobby + Role Selection UI',                system:'UI/UX' },
      { type:'image', src: coreEight, label:'Level Layout — Navigation & Sightlines',   system:'Level Design' },
      { type:'image', src: menuTwo,   label:'Match Setup — Player Onboarding & Controls',system:'UI/UX' },
    ],
    recruiterHighlights: [
      'Asymmetric multiplayer loop (objectives vs hunter pressure) designed for readable decisions.',
      'Two-phase Photon RPC capture system with master-client authority to prevent race conditions.',
      'UI/UX flows: role select, onboarding, task tracking, and clear in-world objectives.',
    ],
  },
  {
    id: 2,
    title: 'Project Maelstrom',
    category: 'Exploration RPG · Crafting Systems · Pack AI',
    color: 'pink',
    thumbnail: PM_Overview,
    description: 'Original exploration RPG built around a signature two-orb crafting system. Players collect materials throughout the world and choose to transmute them directly into tools and weapons, or alchemically decompose them into elemental components for deeper crafting combinations. Coordinated pack AI governs enemy encounters as the world opens up.',
    tags: ['Unity','C#','ScriptableObjects','Crafting Systems','Pack AI','In Development'],
    github: 'https://github.com/Michamm79/Project_Maelstrom',
    codeDownload: 'https://github.com/Michamm79/Project_Maelstrom/archive/refs/heads/main.zip',
    media: [
      { type:'image', src: PM_PlayerFocus, label:'Crafting Pipeline — Orb System Overview', system:'Crafting' },
      { type:'image', src: PM_Combat,      label:'Enemy Encounters — Pack Behavior',        system:'Combat' },
    ],
    recruiterHighlights: [
      'Two-orb crafting pipeline: transmutation pairs materials into tools and weapons; alchemy decomposes materials into elements for deeper combinations — all data-driven on ScriptableObject assets.',
      'Element pool architecture aggregates quantities across decomposed materials; alchemy is gated behind player progression and unlocks a second crafting layer.',
      'Weighted randomized item spawn system within designer-defined collider zones, with minimum separation validation and graceful falloff when space runs out.',
      'Special items gated behind dual conditions — player level and active quest — neither alone sufficient to reveal the item.',
    ],
  },
  {
    id: 3,
    title: 'B-52 Training Suite — USAF',
    category: 'VR Training · Multiplayer · USAF',
    color: 'blue',
    thumbnail: B52_USAF,
    description: 'Large-scale dual-engine VR training platform — built simultaneously in Unity and Unreal — that cut B-52 crew training time by 95%, recognized in an official USAF whitepaper.',
    tags: ['Unity','UE5','VR','Photon','XR Training','Checklist Systems'],
    media: [
      { type:'youtube', src:'https://youtu.be/yfuFpTZCy2g?si=TgEWj1p08yPcPYMQ', poster: B52_USAF,            label:'Training Cockpit (In-Engine)', system:'Multiplayer' },
      { type:'youtube', src:'https://youtu.be/RwfVfCtx3-M?si=CVPqiLuieOj_MsIj', poster: B52_internaltraining, label:'XR Training Highlights',       system:'Multiplayer' },
    ],
    recruiterHighlights: [
      'Inspector-serialized ChecklistManager: each step owns its own verification type (Audio / Confirm / Interact), target object ID, and interaction mode.',
      'Multi-trainee Photon networking with synchronized session state and master-client authority.',
      '95% reduction in training time — up to 75% increase in crew retention — 19% fewer procedural errors.',    ],
  },
  {
    id: 4,
    title: 'Sensorama R&D',
    category: 'VR · Sensor Integration · Environmental AI',
    color: 'purple',
    thumbnail: sensorama,
    description: 'Research project that piped live sensor data (LiDAR, radar, heat signature) from physical hardware into a game world, making AI creatures react to real space in real time.',
    tags: ['Unity','C#','LiDAR','Environmental AI','OSU VR Lab','Experimental'],
    media: [{ type:'image', src: sensorama_Environment, label:'Gameplay Mechanics / Environment', system:'Research & Development' }],
    recruiterHighlights: [
      'Buffered point-cloud ingestion with a fixed 64-point-per-frame cap to prevent hitches.',
      'Sphere-overlap alerts decouple sensor data from AI behavior — creatures decide independently.',
      'Cross-disciplinary R&D bridging hardware constraints and real-time game design.',
    ],
  },
];

// ─────────────────────────────────────────────
// HUB SECTIONS
// ─────────────────────────────────────────────
const SECTIONS = [
  { id:'work',       label:'Work',    desc:'Creature AI, GAS combat, VR multiplayer and sensor-driven worlds.' },
  { id:'experience', label:'Exp', desc:'8+ years — King Crow Studios, OSU Kesterson VR Lab, and VedX Solutions. Shipped titles on Steam.' },
  { id:'skills',     label:'Skills',  desc:'C++, C#, GAS, Behavior Trees, multiplayer, 3D art, and more.' },
  { id:'about',      label:'About',   desc:'Background, education, and what drives the work.' },
  { id:'contact',    label:'Contact', desc:"Email, phone, GitHub, LinkedIn — let's connect." },
];

// ORBIT_ORDER: maps clock position → SECTIONS index
// clock: 0=top, 1=upper-right, 2=lower-right, 3=lower-left, 4=left
// Idle ring: Work(top), History(upper-right), Contact(lower-right), About(lower-left), Skills(left)
const ORBIT_ORDER = [0, 1, 4, 3, 2];

const SECTION_ICONS = {
  work:       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  experience: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  skills:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  about:      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  contact:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
};

// Code snippets for Work cards
const CODE_SNIPPETS = {
  evigheden_runes: {
    file: 'RuneData.cs', lang: 'csharp',
    code: `using UnityEngine;

// Single Rune ScriptableObject — designers configure
// every behavior on one asset, no code per archetype
[CreateAssetMenu(fileName = "NewRune", menuName = "Evigheden/Rune")]
public class RuneData : ScriptableObject
{
    [Header("Identity")]
    public string runeName;
    [TextArea] public string description;
    public Sprite icon;

    [Header("Stat Modifiers")]
    public float healthMultiplier    = 1f;
    public float damageMultiplier    = 1f;
    public float moveSpeedMultiplier = 1f;
    public float dodgeCooldownMod    = 0f;

    [Header("Dodge Behavior")]
    public DodgeStyle dodgeStyle;     // Roll | Dash | Blink | Phase
    public float     dodgeDistance;
    public float     iFrameDuration;

    [Header("Combo Finisher")]
    public FinisherType finisher;     // Cleave | Pierce | Knockback | Detonate
    public float        finisherDamage;
    public GameObject   finisherVFX;

    [Header("Passive")]
    public PassiveTrigger passiveTrigger;  // OnHit | OnDodge | OnKill | OnLowHP
    public PassiveEffect  passiveEffect;
    public float          passiveValue;

    [Header("Presentation")]
    public Color     auraColor;
    public AudioClip equipSound;
}

public class RuneController : MonoBehaviour
{
    [SerializeField] private RuneData equippedRune;
    private CharacterStats stats;

    public void EquipRune(RuneData rune)
    {
        if (equippedRune != null) UnapplyRune(equippedRune);
        equippedRune = rune;
        ApplyRune(rune);
    }

    private void ApplyRune(RuneData r)
    {
        stats.ApplyMultiplier(StatType.Health,    r.healthMultiplier);
        stats.ApplyMultiplier(StatType.Damage,    r.damageMultiplier);
        stats.ApplyMultiplier(StatType.MoveSpeed, r.moveSpeedMultiplier);
        DodgeSystem.SetStyle(r.dodgeStyle, r.dodgeDistance, r.iFrameDuration);
        ComboSystem.SetFinisher(r.finisher, r.finisherDamage, r.finisherVFX);
        PassiveSystem.Register(r.passiveTrigger, r.passiveEffect, r.passiveValue);
        AudioSource.PlayClipAtPoint(r.equipSound, transform.position);
    }
}`,
    bullets: [
      'Each Specialized Rune archetype is a single ScriptableObject asset — stat multipliers, passive triggers, and class-specific bonuses all configured through the Inspector. Designers author one asset and the entire archetype is defined.',
      'CreateAssetMenu means right-click in the Project window → Create → Evigheden → Rune. No engineering involvement to add a new archetype.',
      'The Behavior Classifier reads these assets at the Level 5 assignment gate — it scores the player across six combat dimensions and selects the rune whose archetype best matches how they actually played.',
      'Header attributes group fields in the Inspector so the authoring experience stays readable as the rune library grows.',
    ],
  },
  maelstrom: {
    file: 'OrbContainer.cs', lang: 'csharp',
    code: `using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

// Runtime component managing the two orb slots
// and the player's alchemic element pool.
// No UI dependencies — state changes fire UnityEvents;
// the UI layer subscribes and updates independently.
public class OrbContainer : MonoBehaviour
{
    public enum Hand { Left, Right }

    public int playerLevel = 1;
    public int alchemyUnlockLevel = 5;
    public Transform spawnPoint;

    private MaterialSO leftOrb;
    private MaterialSO rightOrb;
    private Dictionary<ElementSO, int> elementPool = new();

    public UnityEvent OnOrbContentsChanged;
    public UnityEvent OnElementPoolChanged;
    public bool AlchemyUnlocked => playerLevel >= alchemyUnlockLevel;

    public bool AddMaterialToOrb(Hand hand, MaterialSO material)
    {
        if (material == null) return false;
        if (hand == Hand.Left)  { if (leftOrb  != null) return false; leftOrb  = material; }
        else                    { if (rightOrb != null) return false; rightOrb = material; }
        OnOrbContentsChanged?.Invoke();
        return true;
    }

    public GameObject TryTransmute()
    {
        var recipe = TransmutationSystem.FindRecipe(leftOrb, rightOrb, playerLevel);
        if (recipe == null) return null;
        leftOrb = rightOrb = null;
        OnOrbContentsChanged?.Invoke();
        return Spawn(recipe.resultPrefab);
    }

    public bool DecomposeMaterialAt(Hand hand)
    {
        if (!AlchemyUnlocked) return false;
        MaterialSO target = hand == Hand.Left ? leftOrb : rightOrb;
        if (target == null) return false;
        foreach (var comp in target.elementComposition)
        {
            if (!elementPool.ContainsKey(comp.element)) elementPool[comp.element] = 0;
            elementPool[comp.element] += comp.quantity;
        }
        ClearOrb(hand);
        OnElementPoolChanged?.Invoke();
        return true;
    }

    public GameObject TryAlchemize(AlchemyRecipe recipe)
    {
        if (recipe == null || !AlchemyUnlocked) return null;
        if (!AlchemySystem.ConsumeElements(recipe, elementPool)) return null;
        OnElementPoolChanged?.Invoke();
        return Spawn(recipe.resultPrefab);
    }

    private GameObject Spawn(GameObject prefab)
    {
        Transform t = spawnPoint != null ? spawnPoint : transform;
        return Object.Instantiate(prefab, t.position, t.rotation);
    }
}`,
    bullets: [
      'Two orb slots sit on the player at all times. Materials fill them; what happens next is the player\'s choice — transmute into a tool or decompose into elements.',
      'Transmutation is order-independent: (stick, stone) and (stone, stick) match the same recipe. The lookup normalizes the pair before searching.',
      'Alchemy decomposes an orb material into its constituent elements, which accumulate in a pool. Alchemy itself is gated behind player level — it unlocks a second crafting layer.',
      'OrbContainer has zero UI dependencies. All state changes fire UnityEvents; the UI subscribes and reacts independently, keeping the crafting logic clean.',
    ],
  },
  maelstrom_boss: {
    file: 'BossCinematicSystem.cs', lang: 'csharp',
    code: `using System.Collections;
using UnityEngine;
using Cinemachine;

public class BossCinematicSystem : MonoBehaviour
{
    [SerializeField] private CinemachineVirtualCamera dramaCam;
    [SerializeField] private Animator bossAnimator;
    [SerializeField] private ParticleSystem[] impactVFX;
    [SerializeField] private float shakeIntensity = 1.8f;

    private bool hitFrameReached = false;

    public IEnumerator PlayEntrance()
    {
        // Cut to drama cam
        dramaCam.Priority = 20;
        yield return new WaitForSeconds(0.18f);

        // Trigger entrance animation
        bossAnimator.SetTrigger("EntranceTrigger");

        // Wait for Animation Event at the impact frame
        yield return new WaitUntil(() => hitFrameReached);

        // Fire VFX and screen shake simultaneously
        foreach (ParticleSystem vfx in impactVFX)
        {
            vfx.Play();
        }
        CameraShake.Instance.Shake(shakeIntensity, 0.45f);

        // Hold, then return control to gameplay camera
        yield return new WaitForSeconds(1.2f);
        dramaCam.Priority = 0;
        hitFrameReached = false;
    }

    // Called by Animation Event on the impact frame
    public void OnHitFrame()
    {
        hitFrameReached = true;
    }
}`,
    bullets: [
      'A single coroutine owns the entire sequence — camera cut, animation trigger, VFX, shake, and return to gameplay all run in declared order with no scattered event subscriptions.',
      'The hit-frame wait uses an Animation Event callback rather than a fixed timer, so the impact beat always lands on the correct frame regardless of frame rate.',
      'All VFX fire in a single loop rather than individual calls — adding more impact particles means one extra array entry in the Inspector, no code change.',
      'Camera priority swap is non-destructive — the gameplay camera resumes automatically when the drama cam drops back to 0, keeping the system stateless.',
    ],
  },
  maelstrom_cinematic: {
    file: 'BossCinematicDirector.cs', lang: 'csharp',
    code: `using System;
using System.Collections;
using UnityEngine;

public class BossCinematicDirector : MonoBehaviour
{
    [SerializeField] private CinematicSequence sequence;
    [SerializeField] private CinematicCamera cam;
    [SerializeField] private VFXController vfx;
    [SerializeField] private AudioSource audioSource;

    public void Play(BossActor boss)
    {
        StartCoroutine(RunSequence(boss));
    }

    private IEnumerator RunSequence(BossActor boss)
    {
        foreach (CinematicBeat beat in sequence.beats)
        {
            switch (beat.type)
            {
                case BeatType.Camera:
                    cam.MoveTo(beat.cameraTarget, beat.duration);
                    break;
                case BeatType.Animation:
                    boss.Animator.CrossFade(beat.animState, 0.15f);
                    break;
                case BeatType.Physics:
                    boss.Rigidbody.AddForce(beat.impulse, ForceMode.Impulse);
                    break;
                case BeatType.VFX:
                    vfx.Play(beat.effectId, beat.worldPosition);
                    break;
                case BeatType.Audio:
                    audioSource.PlayOneShot(beat.clip);
                    break;
            }

            if (beat.waitForEnd)
            {
                yield return new WaitForSeconds(beat.duration);
            }
        }
        OnSequenceComplete?.Invoke();
    }

    public event Action OnSequenceComplete;
}`,
    bullets: [
      'Each beat in the sequence is a data-driven instruction — camera move, animation crossfade, physics impulse, VFX spawn, or audio cue — authored in the Inspector, not hardcoded.',
      'WaitForEnd per beat lets some steps run in parallel (fire VFX and audio together) while others block until they finish before the next beat fires.',
      'The director knows nothing about specific boss behaviors — it just drives a sequence. Any boss or encounter can hand it a different CinematicSequence asset.',
      'OnSequenceComplete fires when the full sequence ends, letting the boss AI resume control cleanly without the director needing to know what comes next.',
    ],
  },
  valtara_artifacts: {
    file: 'ArtifactSpawnSystem.cs', lang: 'csharp',
    code: `using System.Collections.Generic;
using UnityEngine;

// Each artifact is tied to a specific biome type.
// The world arranges differently each playthrough —
// the mythological logic does not.
public class ArtifactSpawnSystem : MonoBehaviour
{
    public List<ArtifactDefinition> artifacts;
    public List<BiomeZone> availableZones;
    private int collectionCount = 0;

    void Start() => PlaceAllArtifacts();

    void PlaceAllArtifacts()
    {
        foreach (var artifact in artifacts)
        {
            BiomeZone zone = FindZoneForBiome(artifact.requiredBiome);
            if (zone == null) continue;

            var instance = Instantiate(
                artifact.worldPrefab,
                zone.GetSpawnPosition(),
                Quaternion.identity
            );
            var pickup = instance.AddComponent<ArtifactPickup>();
            pickup.Initialize(artifact, this);
        }
    }

    BiomeZone FindZoneForBiome(BiomeType biome)
    {
        var matches = availableZones.FindAll(
            z => z.biomeType == biome && !z.occupied
        );
        if (matches.Count == 0) return null;
        var selected = matches[Random.Range(0, matches.Count)];
        selected.occupied = true;
        return selected;
    }

    public void NotifyArtifactCollected(ArtifactDefinition artifact)
    {
        collectionCount++;
        // The last two guardians will know.
        // They wanted to see what would arrive.
        if (collectionCount >= artifacts.Count - 2)
            NotifyLateGuardians();
    }

    void NotifyLateGuardians()
    {
        // They are not surprised.
        // GuardianEvents.OnCollectionThresholdReached?.Invoke(collectionCount);
    }
}`,
    bullets: [
      'Each artifact carries a required BiomeType. The procedural generator produces zones tagged by biome — the artifact placement system matches them at runtime. Excalibur will always be in urban decay.',
      'Zone selection is randomized among all matching unoccupied zones, so artifact position varies even within the same biome type across playthroughs.',
      'Collection count drives late-guardian awareness. When all but the last two artifacts have been found, the remaining guardians are notified. The comment says everything: they are not surprised.',
      'ArtifactPickup is attached at runtime rather than baked into the prefab, keeping the prefab clean and the collection logic centralized.',
    ],
  },
  valtara_fox: {
    file: 'FoxBehaviorSystem.cs', lang: 'csharp',
    code: `using UnityEngine;
using UnityEngine.Events;

// Fox does not speak. Fox does not need to.
// A player paying attention will notice that Fox
// behaves differently approaching different situations.
// None of this is explained. All of it means something.
public class FoxBehaviorSystem : MonoBehaviour
{
    public enum FoxState
    {
        Idle, Following, Curious, Excited,
        Wary, Alert, Hiding, Joyful, Reverent
    }

    public Transform barley;
    public Animator foxAnimator;
    public float awarenessRadius = 15f;
    public LayerMask triggerMask;
    public UnityEvent<FoxState> OnStateChanged;

    private FoxState currentState = FoxState.Following;
    private FoxContextTrigger activeContext;

    void Update()
    {
        DetectContext();
        UpdateBehavior();
    }

    void DetectContext()
    {
        var nearby = Physics.OverlapSphere(
            transform.position, awarenessRadius, triggerMask
        );
        FoxContextTrigger strongest = null;
        int highestPriority = -1;

        foreach (var col in nearby)
        {
            var trigger = col.GetComponent<FoxContextTrigger>();
            if (trigger != null && trigger.priority > highestPriority)
            {
                highestPriority = trigger.priority;
                strongest = trigger;
            }
        }

        if (strongest != activeContext)
        {
            activeContext = strongest;
            TransitionTo(strongest?.triggeredState ?? FoxState.Following);
        }
    }

    void TransitionTo(FoxState newState)
    {
        if (newState == currentState) return;
        currentState = newState;
        foxAnimator?.SetInteger("FoxState", (int)currentState);
        OnStateChanged?.Invoke(currentState);
    }

    // Called for scripted story moments — Mel's encounter,
    // Enkidu's flower crown, Iskandar's race.
    public void SetStateForStoryMoment(FoxState state)
        => TransitionTo(state);
}`,
    bullets: [
      'FoxContextTrigger is a component dropped on any GameObject in the world — artifact zones, guardian areas, story beats. Set the triggered state and priority. Fox reacts automatically with no code changes per encounter.',
      'Priority system ensures story moments override ambient environmental triggers. Mel\'s encounter zone has higher priority than a nearby artifact trigger.',
      'SetStateForStoryMoment() handles scripted cinematic beats — Fox running up to Mel while the Monster roars, Fox going still near Enkidu — without disrupting the proximity detection system.',
      'UnityEvent<FoxState> fires on every transition. Audio, VFX, and UI systems subscribe independently. FoxBehaviorSystem knows nothing about any of them.',
    ],
  },
  mallcop: {
    file: 'CaptureManager.cs', lang: 'csharp',
    code: `using UnityEngine;
using Photon.Pun;

// Two-phase capture: tase+carry first,
// then jail delivery scores the point
[PunRPC]
public void RPC_BeginCapture(
    int hooliganActorId, int jailZoneId)
{
    var hooligan = playerRegistry[hooliganActorId];
    hooligan.SetCaptured(true);
    hooligan.AttachToCarrier(_mallCopTransform);
    jailZones[jailZoneId].ReserveSlot(hooliganActorId);
}

[PunRPC]
public void RPC_BookIn(
    int hooliganActorId, int jailZoneId)
{
    var hooligan = playerRegistry[hooliganActorId];
    hooligan.SetCaptured(false);
    jailZones[jailZoneId].BookIn(hooliganActorId);
    captureCount++;
    if (captureCount >= capturesRequired)
        photonView.RPC("RPC_MallCopWins", RpcTarget.All);
}

public void InitiateCapture(int hooliganId)
{
    // Only master client validates — prevents double-capture
    if (!PhotonNetwork.IsMasterClient) return;
    int zone = GetNearestJailZone();
    photonView.RPC("RPC_BeginCapture",
        RpcTarget.All, hooliganId, zone);
}`,
    bullets: [
      'Two-phase RPC: BeginCapture fires on tase (attaches Hooligan, reserves slot), BookIn fires on delivery — prevents slot claiming before arrival.',
      'Master client authority on InitiateCapture eliminates the race condition where two clients try to capture the same player.',
      'AttachToCarrier handles physics parenting — carried player moves with the cop on all clients without a separate sync stream.',
      'Win check inside RPC_BookIn runs on all clients simultaneously — no polling loop needed.',
    ],
  },
  b52: {
    file: 'ChecklistManager.cs', lang: 'csharp',
    code: `using System;
using UnityEngine;

// Each step owns its verification type —
// Audio, Confirm button, or cockpit Interact
[Serializable]
public class ChecklistStep
{
    public string          stepId;
    public string          instruction;
    public VerificationType verifyType;    // Audio | Confirm | Interact
    public string          targetObjectId; // which cockpit object to touch
    public InteractMode    interactMode;   // Toggle | Hold | Rotate | Press
    public Sprite          referenceImage; // optional diagram shown in UI
    public bool            isComplete;
}

public class ChecklistManager : MonoBehaviour
{
    [SerializeField] List<ChecklistStep> steps;
    private int currentIndex;

    public void ReportInteraction(string objectId)
    {
        var step = steps[currentIndex];
        if (step.verifyType != VerificationType.Interact) return;
        if (step.targetObjectId != objectId)              return;
        CompleteStep(step);
    }

    public void ReportConfirm() // called by UI confirm / audio end
    {
        var step = steps[currentIndex];
        if (step.verifyType == VerificationType.Audio    ||
            step.verifyType == VerificationType.Confirm)
            CompleteStep(step);
    }

    private void CompleteStep(ChecklistStep step)
    {
        step.isComplete = true;
        currentIndex++;
        OnStepCompleted?.Invoke(step);
        if (currentIndex >= steps.Count)
            OnChecklistComplete?.Invoke();
    }

    public event Action<ChecklistStep> OnStepCompleted;
    public event Action                OnChecklistComplete;
}`,
    bullets: [
      'Each step carries its own VerificationType — Audio (listen then confirm), Confirm (button gate), or Interact (touch specific cockpit object the right way).',
      'Interact steps validate by object ID and interaction mode — wrong switch or wrong action silently fails, matching real procedural training fidelity.',
      'ReferenceImage field lets the UI display a cockpit diagram alongside the instruction with no coupling back to the checklist logic.',
      'Fully serialized in the Unity Inspector — training authors reorder or replace steps without any code changes.',
    ],
  },
  sensorama: {
    file: 'SensorDataMapper.cs', lang: 'csharp',
    code: `using System.Collections.Generic;
using UnityEngine;

public class SensorDataMapper : MonoBehaviour
{
    [SerializeField] private float threatRadius = 1.5f;
    [SerializeField] private LayerMask creatureMask;
    private Queue<Vector3> sensorBuffer = new();

    public void IngestPointCloud(Vector3[] points)
    {
        foreach (var pt in points)
            sensorBuffer.Enqueue(pt);
    }

    private void FixedUpdate()
    {
        int limit = Mathf.Min(sensorBuffer.Count, 64);
        for (int i = 0; i < limit; i++)
            AlertNearbyCreatures(sensorBuffer.Dequeue());
    }

    private void AlertNearbyCreatures(Vector3 origin)
    {
        var hits = Physics.OverlapSphere(
            origin, threatRadius, creatureMask);
        foreach (var col in hits)
            col.GetComponent<CreatureAI>()?
               .OnEnvironmentThreat(origin);
    }
}`,
    bullets: [
      'LiDAR sends point clouds in irregular bursts — queued data is handled in fixed 64-point chunks per frame to avoid hitches.',
      'The per-frame cap keeps performance stable even when the sensor dumps a large burst at once.',
      'Sphere overlap finds any creature near each hit point and sends an alert — the sensor system doesn\'t know anything about AI behavior.',
      'Each creature decides for itself how to react, keeping the sensor and AI systems fully decoupled.',
    ],
  },
  typescript_state: {
    file: 'GameStateManager.ts', lang: 'typescript',
    code: `type GamePhase =
    'lobby' | 'loading' | 'playing'
  | 'round_end' | 'game_over';

class Observable<T> {
  private listeners = new Set<((e: StateChangeEvent<T>) => void)>();
  private _value: T;

  constructor(initial: T) { this._value = initial; }
  get value(): T { return this._value; }

  set(next: T): void {
    const e = { prev: this._value, next, timestamp: Date.now() };
    this._value = next;
    this.listeners.forEach(fn => fn(e));
  }

  subscribe(fn: (e: StateChangeEvent<T>) => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}

export class GameStateManager {
  readonly phase = new Observable<GamePhase>('lobby');
  private static instance: GameStateManager;

  static getInstance(): GameStateManager {
    return this.instance ??= new GameStateManager();
  }

  transitionTo(next: GamePhase): void {
    const allowed: Record<GamePhase, GamePhase[]> = {
      lobby:     ['loading'],
      loading:   ['playing'],
      playing:   ['round_end'],
      round_end: ['playing', 'game_over'],
      game_over: ['lobby']
    };
    if (!allowed[this.phase.value].includes(next)) return;
    this.phase.set(next);
  }
}`,
  bullets: [
    'Observable<T> is generic — the same class handles a GamePhase, score, player list, anything. TypeScript enforces correctness at compile time.',
    'subscribe() returns its own unsubscribe function — callers clean up with one call, no manual listener tracking needed.',
    'transitionTo() validates against an allowed-moves map — illegal state transitions are silently rejected, the game can never reach an undefined phase.',
    'Lazy singleton via nullish coalescing assignment (??=) — one instance, created only when first needed, no boilerplate.',
  ],
  },

};

// ─────────────────────────────────────────────
// UTILITY
// ─────────────────────────────────────────────
function getYouTubeId(url) {
  try {
    const u = new URL(url);
    const v = u.searchParams.get('v');
    if (v) return v;
    const parts = u.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || null;
  } catch { return null; }
}

// ─────────────────────────────────────────────
// STARS background
// ─────────────────────────────────────────────
const STARS = Array.from({ length: 200 }, (_, i) => {
  const rr = Math.random();
  let color, shadow;
  if      (rr < .06) { color = '#f7eb63'; shadow = '0 0 6px rgba(238,203,44,.9)'; }
  else if (rr < .11) { color = '#b7edff'; shadow = '0 0 5px rgba(183,237,255,.7)'; }
  else if (rr < .16) { color = '#cc00ee'; shadow = '0 0 5px rgba(204,0,238,.7)'; }
  else               { color = '#ffffff'; shadow = 'none'; }
  const sz = rr < .04 ? 2.4+Math.random()*.8 : rr < .10 ? 1.4+Math.random()*.6 : .4+Math.random()*.9;
  return { id: i, left: Math.random()*100, top: Math.random()*100, size: sz, opacity: .14+Math.random()*.76, color, shadow };
});

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('work');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const hubWrapRef  = useRef(null);
  const centerRef   = useRef(null);
  const bubblesRef  = useRef([]);

  // ── sizing helpers ──
  const hubSize    = useCallback(() => Math.min(680, Math.max(320, window.innerWidth * 0.62)), []);
  const bubbleSize = useCallback(() => Math.max(58, Math.round(88 * hubSize() / 680)), [hubSize]);
  const orbitR     = useCallback(() => Math.round(248 * hubSize() / 680), [hubSize]);

  function orbitPos(clockIdx) {
    const hs = hubSize(), cx = hs / 2, r = orbitR(), bs = bubbleSize();
    const angle = -Math.PI / 2 + clockIdx * (2 * Math.PI / SECTIONS.length);
    return { left: Math.round(cx + r * Math.cos(angle) - bs / 2), top: Math.round(cx + r * Math.sin(angle) - bs / 2) };
  }

  function railPos(sectionIdx) {
    const hs = hubSize(), bs = bubbleSize();
    const railRight = hs - bs - 12;
    const totalH    = SECTIONS.length * bs + (SECTIONS.length - 1) * 8;
    const startY    = (hs - totalH) / 2;
    return { left: railRight, top: Math.round(startY + sectionIdx * (bs + 8)) };
  }

  // ── apply sizes ──
  const applyLayout = useCallback((toRail) => {
    const hs    = hubSize();
    const scale = hs / 680;
    const bs    = bubbleSize();
    const cs    = Math.max(260, Math.round(400 * scale));

    if (hubWrapRef.current) {
      hubWrapRef.current.style.width  = hs + 'px';
      hubWrapRef.current.style.height = hs + 'px';
      const ring1   = hubWrapRef.current.querySelector('.hub-ring-1');
      const ring2   = hubWrapRef.current.querySelector('.hub-ring-2');
      const ringTech= hubWrapRef.current.querySelector('.hub-ring-tech');
      if (ring1)    { ring1.style.width    = ring1.style.height    = Math.round(500*scale)+'px'; }
      if (ring2)    { ring2.style.width    = ring2.style.height    = Math.round(548*scale)+'px'; }
      if (ringTech) { ringTech.style.width = ringTech.style.height = Math.round(368*scale)+'px'; }
    }
    if (centerRef.current) {
      centerRef.current.style.width  = cs + 'px';
      centerRef.current.style.height = cs + 'px';
      // expose circle size as CSS var so inner content can scale
      centerRef.current.style.setProperty('--cs', cs + 'px');
    }
    bubblesRef.current.forEach((b, i) => {
      if (!b) return;
      b.style.width  = bs + 'px';
      b.style.height = bs + 'px';
      const pos = orbitPos(ORBIT_ORDER.indexOf(i));
      b.style.left = pos.left + 'px';
      b.style.top  = pos.top  + 'px';
    });
  }, [hubSize, bubbleSize, orbitR]);

  // ── init & resize ──
  useEffect(() => {
    applyLayout(false);
  }, []);

  // ── section toggle ──
  const selectSection = (id) => {
    setActiveSection(id);
    setTimeout(() => applyLayout(true), 0);
  };
  const resetHub = () => {
    setActiveSection(null);
    setTimeout(() => applyLayout(false), 0);
  };
  const toggleSection = (id) => {
    if (activeSection === id) resetHub();
    else selectSection(id);
  };

  const activeSec = SECTIONS.find(s => s.id === activeSection);

  // ── media modal ──
  const openMedia = (project, mediaIndex = 0) => setSelectedMedia({ project, mediaIndex });

  return (
    <div style={{ minHeight:'100vh', background:'#000', color:'#fff', fontFamily:"'EB Garamond', serif", overflowX:'hidden' }}>

      {/* ── FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; overflow-y:scroll; }
        body { background:#000; }
        :root {
          --gold:#eecb2c; --gold-hi:#f7eb63;
          --magenta:#cc00ee; --magenta-dim:#8800aa;
          --ice:#b7edff; --black-ice:#2BCFFF;
          --ink:#000; --ink-mid:#06040e; --ink-lift:#0c0818; --ink-panel:#110d1e;
          --white:#fff; --white-dim:#B3B3B3;
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes spin-slow {
          from{transform:translate(-50%,-50%) rotate(0deg)}
          to  {transform:translate(-50%,-50%) rotate(360deg)}
        }
        @keyframes card-in { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes label-in{ from{opacity:0;transform:translateY(4px)}  to{opacity:1;transform:translateY(0)} }

        .hub-bubble {
          position:absolute; border-radius:50%;
          background:radial-gradient(circle at 34% 30%,rgba(10,8,26,.96) 0%,rgba(0,0,0,.98) 100%);
          border:1px solid rgba(238,203,44,.55);
          box-shadow:0 0 12px rgba(238,203,44,.22),0 4px 20px rgba(0,0,0,.7);
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;
          cursor:pointer; z-index:15;
        }
        .hub-bubble:hover  { border-color:rgba(247,235,99,.65); box-shadow:0 0 26px rgba(238,203,44,.22),0 0 60px rgba(238,203,44,.09); transform:scale(1.08); }
        .hub-bubble.active { border-color:rgba(238,203,44,.9); box-shadow:0 0 22px rgba(238,203,44,.45),0 0 50px rgba(238,203,44,.18); }
        .hub-bubble.active:hover { transform:none; }
        .bubble-icon { display:flex; align-items:center; justify-content:center; color:var(--gold); transition:color .25s,filter .25s; }
        .bubble-icon svg { width:27px; height:27px; }
        .hub-bubble:hover .bubble-icon, .hub-bubble.active .bubble-icon { color:var(--gold-hi); filter:drop-shadow(0 0 5px rgba(247,235,99,.75)); }
        .bubble-label { font-family:'Cinzel',serif; font-size:.4rem; letter-spacing:.09rem; text-transform:uppercase; color:rgba(238,203,44,1); transition:color .25s; }
        .hub-bubble:hover .bubble-label, .hub-bubble.active .bubble-label { color:var(--gold-hi); }

        .hub-ring { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); border-radius:50%; pointer-events:none; transition:opacity .5s; }
        .hub-ring-1 { border:2px solid rgba(175,250,255,.75); }
        .hub-ring-2 { border:1px solid rgba(255,110,180,.75); }
        .hub-ring-tech {
          border:1px solid rgba(204,0,238,.08);
          animation:spin-slow 70s linear infinite;
        }
        .hub-ring-tech::before, .hub-ring-tech::after {
          content:''; position:absolute; width:6px; height:6px; border-radius:50%;
          background:var(--gold); box-shadow:0 0 8px rgba(238,203,44,.7);
        }
        .hub-ring-tech::before { top:-3px; left:50%; margin-left:-3px; }
        .hub-ring-tech::after  { bottom:-3px; left:50%; margin-left:-3px; }
        .section-active-hub .hub-ring,
        .section-active-hub .hub-ring-tech { opacity:.25; }

        .top-bar {
          position:fixed; top:0; left:0; right:0; height:52px;
          z-index:100; display:flex; align-items:center; justify-content:space-between;
          padding:0 2rem; background:rgba(0,0,0,.84);
          border-bottom:1px solid rgba(238,203,44,.16); backdrop-filter:blur(16px);
          transform:translateY(-100%); opacity:0;
          transition:transform .45s cubic-bezier(.4,0,.2,1),opacity .45s ease;
          pointer-events:none;
        }
        .top-bar.visible { transform:translateY(0); opacity:1; pointer-events:auto; }
        .top-bar-name { font-family:'Cinzel',serif; font-size:.82rem; font-weight:600; letter-spacing:.20em; color:#fff; text-transform:uppercase; }
        .top-bar-title { font-size:.58rem; letter-spacing:.18em; text-transform:uppercase; color:var(--gold); }
        .top-bar-close { background:none; border:1px solid rgba(238,203,44,.3); border-radius:50%; width:28px; height:28px; color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:border-color .2s; }
        .top-bar-close:hover { border-color:var(--gold); }

        /* section dropdown */
        .section-dropdown {
          max-height:0; overflow:hidden;
          transition:max-height .55s cubic-bezier(.4,0,.2,1);
          background:var(--ink-mid);
        }
        .section-dropdown.open { max-height:9999px; }
        .section-panel { display:none; padding:2rem clamp(1rem,4vw,3rem) 3rem; animation:card-in .35s ease both; }
        .section-panel.active { display:block; }

        .panel-header { display:flex; align-items:center; gap:.75rem; margin-bottom:1.8rem; padding-bottom:.75rem; border-bottom:1px solid rgba(238,203,44,.14); }
        .panel-icon { color:var(--gold); display:flex; }
        .panel-icon svg { width:18px; height:18px; fill:none; stroke:currentColor; stroke-width:1.5; }
        .panel-title { font-family:'Cinzel',serif; font-size:1rem; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--gold-hi); text-shadow:0 0 18px rgba(247,235,99,.30); }
        .panel-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,540px),1fr)); gap:1.25rem; }
        .panel-card { background:rgba(15,10,30,.7); border:1px solid rgba(238,203,44,.12); border-radius:6px; padding:1.1rem 1.25rem; }

        /* project cards */
        .project-card-hub {
          background:rgba(8,5,20,.85); border:1px solid rgba(238,203,44,.12); border-radius:8px;
          cursor:pointer; overflow:hidden; transition:border-color .22s,box-shadow .22s,transform .22s;
        }
        .project-card-hub:hover { border-color:rgba(238,203,44,.35); box-shadow:0 0 28px rgba(238,203,44,.10); transform:translateY(-3px); }
        .card-hub-header { padding:1rem 1.2rem .6rem; }
        .card-hub-overline { font-family:'Cinzel',serif; font-size:.46rem; letter-spacing:.14em; text-transform:uppercase; color:var(--magenta); margin-bottom:.3rem; }
        .card-hub-title { font-family:'Cinzel',serif; font-size:.9rem; font-weight:600; color:var(--gold-hi); margin-bottom:.4rem; letter-spacing:.06em; }
        .card-hub-desc { font-size:.88rem; color:rgba(255,255,255,.65); line-height:1.6; margin-bottom:.5rem; }
        .card-hub-tags { display:flex; flex-wrap:wrap; gap:.3rem; }
        .card-hub-tag { font-family:'Cinzel',serif; font-size:.42rem; letter-spacing:.08em; text-transform:uppercase; padding:.18rem .45rem; border-radius:3px; border:1px solid rgba(238,203,44,.25); color:rgba(238,203,44,.75); background:rgba(238,203,44,.04); }

        .card-images-strip { display:flex; gap:6px; overflow-x:auto; padding:6px 0; scrollbar-width:thin; scrollbar-color:rgba(238,203,44,.3) transparent; }
        .card-images-strip img { height:105px; flex-shrink:0; border-radius:4px; border:1px solid rgba(238,203,44,.15); object-fit:cover; cursor:pointer; transition:border-color .2s,transform .2s; }
        .card-images-strip img:hover { border-color:rgba(238,203,44,.55); transform:scale(1.03); }

        .card-body-hub { display:grid; grid-template-columns:1fr 1fr; gap:0; }
        @media(max-width:680px){ .card-body-hub { grid-template-columns:1fr; } }
        .card-code-col { padding:.75rem 1rem 1rem; border-top:1px solid rgba(238,203,44,.08); background:rgba(0,0,0,.35); overflow:auto; }
        .code-file-tab { display:flex; align-items:center; gap:.45rem; margin-bottom:.55rem; }
        .code-lang-dot { width:10px; height:10px; border-radius:50%; flex-shrink:0; }
        .code-lang-dot.csharp { background:#9b59b6; box-shadow:0 0 6px rgba(155,89,182,.7); }
        .code-lang-dot.cpp    { background:#0095d5; box-shadow:0 0 6px rgba(0,149,213,.7); }
        .code-lang-dot.typescript { background:#3178c6; box-shadow:0 0 6px rgba(49,120,198,.7); }
        .code-file-name { font-family:'JetBrains Mono',monospace; font-size:.58rem; color:rgba(255,255,255,.55); letter-spacing:.04em; }
        .card-code-pre { font-family:'JetBrains Mono',monospace; font-size:.62rem; line-height:1.7; color:#c9d1d9; white-space:pre; overflow-x:auto; }
        .card-detail-col { padding:.75rem 1rem 1rem; border-top:1px solid rgba(238,203,44,.08); border-left:1px solid rgba(238,203,44,.06); }
        .card-detail-title { font-family:'Cinzel',serif; font-size:.54rem; letter-spacing:.12em; text-transform:uppercase; color:var(--gold); margin-bottom:.6rem; }
        .card-detail-item { font-size:.82rem; color:rgba(255,255,255,.62); line-height:1.6; padding:.3rem 0; border-bottom:1px solid rgba(238,203,44,.06); }
        .card-detail-item:last-child { border-bottom:none; }

        /* media card buttons */
        .media-open-btn { display:inline-flex; align-items:center; gap:.4rem; margin:.6rem 1.2rem .8rem; padding:.35rem .75rem; border:1px solid rgba(238,203,44,.3); border-radius:3px; background:rgba(238,203,44,.06); color:var(--gold); font-family:'Cinzel',serif; font-size:.48rem; letter-spacing:.10em; text-transform:uppercase; cursor:pointer; transition:all .2s; }
        .media-open-btn:hover { background:rgba(238,203,44,.14); border-color:var(--gold); }

        /* experience */
        .exp-entry { padding:1rem 0; border-bottom:1px solid rgba(238,203,44,.10); }
        .exp-entry:last-child { border-bottom:none; }
        .exp-company { font-family:'Cinzel',serif; font-size:.80rem; font-weight:600; color:var(--gold-hi); letter-spacing:.08em; }
        .exp-role { font-size:.78rem; color:var(--ice); margin:.18rem 0; letter-spacing:.06em; }
        .exp-dates { font-size:.70rem; color:rgba(255,255,255,.45); letter-spacing:.06em; margin-bottom:.5rem; }
        .exp-bullet { font-size:.85rem; color:rgba(255,255,255,.68); line-height:1.65; padding:.22rem 0 .22rem 1rem; border-left:2px solid rgba(238,203,44,.20); margin:.3rem 0; }

        /* skills */
        .skill-group-label { font-family:'Cinzel',serif; font-size:.62rem; letter-spacing:.12em; text-transform:uppercase; color:var(--gold); margin-bottom:.4rem; }
        .skill-group-items { font-size:.82rem; color:rgba(255,255,255,.65); line-height:1.7; }

        /* contact */
        .contact-links { display:flex; flex-direction:column; gap:.6rem; margin-top:1rem; }
        .contact-link { display:inline-flex; align-items:center; gap:.6rem; color:rgba(255,255,255,.75); text-decoration:none; font-size:.88rem; transition:color .2s; }
        .contact-link svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:1.5; color:var(--gold); flex-shrink:0; }
        .contact-link:hover { color:var(--gold-hi); }

        .panel-text { font-size:.92rem; color:rgba(255,255,255,.70); line-height:1.75; max-width:70ch; margin-bottom:1rem; }

        /* scroll indicator */
        .scroll-indicator { display:flex; flex-direction:column; align-items:center; gap:.3rem; margin-top:-.75rem; opacity:0; pointer-events:none; transition:opacity .4s; cursor:pointer; }
        .scroll-indicator.visible { opacity:1; pointer-events:auto; }
        .scroll-indicator-text { font-family:'Cinzel',serif; font-size:.62rem; letter-spacing:.16em; text-transform:uppercase; color:var(--black-ice); text-shadow:0 0 8px rgba(43,207,255,1); }
        .scroll-indicator svg { width:25px; height:25px; fill:none; stroke:var(--black-ice); stroke-width:2; stroke-linecap:round; filter:drop-shadow(0 0 4px rgba(43,207,255,.6)); margin-bottom: .5rem}

        @media (max-width: 600px) {
          .hub-bubble .bubble-label { font-size:.38rem; }
          .card-body-hub { grid-template-columns: 1fr; }
          .panel-grid { grid-template-columns: 1fr; }
        }
        .gold-line-wrap { width:100%; max-width:860px; margin:0 auto; padding:0 2rem; opacity:0; transition:opacity .4s; }
        .gold-line-wrap.visible { opacity:1; }
        .gold-line { height:1px; background:linear-gradient(to right,transparent,rgba(238,203,44,.65),rgba(204,0,238,.45),transparent); }

        /* modal */
        .modal-overlay { position:fixed; inset:0; background:rgba(5,3,15,.97); backdrop-filter:blur(26px); display:flex; align-items:center; justify-content:center; z-index:2000; padding:2rem; }
        .modal-content { position:relative; max-height:95vh; width:min(98vw,900px); background:rgba(8,5,26,.92); border:1px solid rgba(181,123,238,.52); border-radius:8px; box-shadow:0 0 60px rgba(74,45,138,.22),0 40px 100px rgba(0,0,0,.78); display:flex; flex-direction:column; gap:.75rem; overflow:auto; padding:1.5rem; }
        .modal-close { position:absolute; top:1rem; right:1rem; background:rgba(181,123,238,.10); border:1px solid rgba(181,123,238,.4); border-radius:3px; width:36px; height:36px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#b57bee; transition:all .2s; z-index:10; }
        .modal-close:hover { background:#b57bee; color:#05030f; }
        .modal-title { font-family:'Cinzel',serif; font-size:clamp(.82rem,1.75vw,1.1rem); letter-spacing:.14em; text-align:center; text-transform:uppercase; color:var(--gold-hi); }
        .modal-divider { height:1px; background:linear-gradient(to right,transparent,rgba(238,203,44,.4),transparent); margin:.2rem 0; }
        .media-label-modal { text-align:center; color:rgba(200,185,240,.72); font-style:italic; font-size:.95rem; }
        .modal-media { width:100%; border-radius:6px; object-fit:contain; background:rgba(0,0,0,.45); aspect-ratio:16/9; border:1px solid rgba(74,45,138,.4); }
        .recruiter-box { background:rgba(74,45,138,.08); border:1px solid rgba(74,45,138,.35); border-left:2px solid var(--gold); border-radius:6px; padding:.85rem 1.1rem; }
        .recruiter-box-title { font-family:'Cinzel',serif; font-size:.60rem; letter-spacing:.22em; text-transform:uppercase; color:var(--gold); margin-bottom:.6rem; text-align:center; }
        .recruiter-box ul { margin:0; padding-left:1.1rem; }
        .recruiter-box li { color:rgba(200,185,240,.72); margin:.3rem 0; font-size:1rem; line-height:1.55; }
        .code-btn-modal { display:inline-flex; align-items:center; gap:.5rem; padding:.50rem .9rem; border:1px solid rgba(201,159,40,.55); border-radius:3px; background:rgba(201,159,40,.07); color:#fec001; text-decoration:none; font-family:'Cinzel',serif; font-size:.62rem; letter-spacing:.12em; text-transform:uppercase; transition:all .2s; }
        .code-btn-modal:hover { background:#c99f28; color:#05030f; }
      `}</style>

      {/* ── BACKGROUND ── */}
      <div style={{ position:'fixed', inset:0, background:'radial-gradient(ellipse 90% 70% at 50% 44%,#0e0828 0%,#060418 40%,#030210 70%,#000 100%)', zIndex:0 }} />
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:1 }}>
        {/* nebulae */}
        {[
          {x:18,y:22,s:520,c:'rgba(30,10,120,.40)',r:-18},{x:75,y:65,s:480,c:'rgba(60,0,140,.32)',r:16},
          {x:50,y:14,s:420,c:'rgba(238,203,44,.09)',r:0}, {x:82,y:78,s:460,c:'rgba(204,0,238,.18)',r:30},
          {x:50,y:50,s:600,c:'rgba(40,8,100,.22)',r:0},
        ].map((n,i) => (
          <div key={i} style={{ position:'fixed', borderRadius:'50%', filter:'blur(70px)',
            width:n.s, height:Math.round(n.s*.54), left:`${n.x}%`, top:`${n.y}%`,
            background:`radial-gradient(ellipse,${n.c} 0%,transparent 70%)`,
            transform:`translate(-50%,-50%) rotate(${n.r}deg)` }} />
        ))}
        {STARS.map(s => (
          <div key={s.id} style={{ position:'fixed', borderRadius:'50%', width:s.size, height:s.size,
            left:`${s.left}%`, top:`${s.top}%`, background:s.color, opacity:s.opacity, boxShadow:s.shadow }} />
        ))}
      </div>
      
      {/* ── TOP BAR ── */}
      <div className={`top-bar ${activeSection ? 'visible' : ''}`}>
        <div style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
          <span className="top-bar-name">Michael Hammond</span>
          <div style={{ width:1, height:14, background:'rgba(238,203,44,.20)', margin:'0 .5rem' }} />
          <span className="top-bar-title">Gameplay Engineer</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
        {/* <a href={ResumePDF} download="MichaelHammond_Resume.pdf" target="_blank" rel="noopener noreferrer"
           style={{
              fontFamily:"'Cinzel',serif", fontSize:'.62rem', letterSpacing:'.14em',
              textTransform:'uppercase', color:'var(--gold)', textDecoration:'none',
              border:'1px solid rgba(238,203,44,.35)', borderRadius:'3px',
              padding:'.35rem .7rem', transition:'all .2s', display:'inline-flex',
              alignItems:'center', gap:'.4rem', whiteSpace:'nowrap'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-hi)'; e.currentTarget.style.color = 'var(--gold-hi)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(238,203,44,.35)'; e.currentTarget.style.color = 'var(--gold)'; }}>
            <Download size={11} /> Résumé
          </a> */}
          <button className="top-bar-close" onClick={resetHub}><X size={12} /></button>
        </div>
      </div>        
      {/* ── HUB PAGE ── */}
      <div style={{ position:'relative', zIndex:10, display:'flex', flexDirection:'column', alignItems:'center',
        paddingTop: activeSection ? 'calc(52px + 4vh)' : '6vh', paddingBottom:'3rem',
        transition:'padding-top .45s cubic-bezier(.4,0,.2,1)' }}>

        {/* HUB WRAP */}
        <div ref={hubWrapRef} className={activeSection ? 'section-active-hub' : ''}
          style={{ position:'relative', width:680, height:680, flexShrink:0 }}>

          {/* rings */}
          <div className="hub-ring hub-ring-1" style={{ width:500, height:500 }} />
          <div className="hub-ring hub-ring-2" style={{ width:548, height:548 }} />
          <div className="hub-ring hub-ring-tech" style={{ width:368, height:368 }} />

          {/* center circle */}
          <div ref={centerRef} style={{
            position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
            width:330, height:330, borderRadius:'50%', '--cs':'330px',
            background:'radial-gradient(circle at 38% 36%,rgba(20,10,50,.96) 0%,rgba(4,2,14,.98) 100%)',
            border:'1px solid rgba(238,203,44,.8)',
            boxShadow:'0 0 36px rgba(238,203,44,.46),0 0 80px rgba(204,0,238,.52),inset 0 0 24px rgba(204,0,238,.2)',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
            overflow:'hidden', zIndex:10,
          }}>
{/* emblem — original inline SVG, scales with circle via --cs */}
<div style={{ width:'calc(var(--cs, 330px) * 0.36)', height:'calc(var(--cs, 330px) * 0.36)',
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
              filter:'drop-shadow(0 0 10px rgba(238,203,44,.65)) drop-shadow(0 0 22px rgba(204,0,238,.50)) drop-shadow(0 0 40px rgba(204,0,238,.25))' }}>
              <svg viewBox="0 0 100 100" style={{ width:'100%', height:'100%' }}>
                <circle cx="50" cy="50" r="13" fill="none" stroke="#eecb2c" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="5" fill="#f7eb63" />
                <g stroke="#eecb2c" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="50" y1="4"  x2="50" y2="24" />
                  <line x1="50" y1="76" x2="50" y2="96" />
                  <line x1="4"  y1="50" x2="24" y2="50" />
                  <line x1="76" y1="50" x2="96" y2="50" />
                </g>
                <g stroke="#cc00ee" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
                  <line x1="22" y1="22" x2="34" y2="34" />
                  <line x1="78" y1="22" x2="66" y2="34" />
                  <line x1="22" y1="78" x2="34" y2="66" />
                  <line x1="78" y1="78" x2="66" y2="66" />
                </g>
              </svg>
            </div>            <div style={{ fontFamily:"'Cinzel',serif",
              fontSize:'calc(var(--cs, 330px) * 0.058)', fontWeight:700, letterSpacing:'.10em',
              color:'#fff', textShadow:'0 0 24px rgba(247,235,99,.42)', lineHeight:1.2, textTransform:'uppercase',
              textAlign:'center', marginTop:'calc(var(--cs, 330px) * 0.02)' }}>
              Michael<br/>Hammond
            </div>
            <div style={{ fontSize:'calc(var(--cs, 330px) * 0.040)', letterSpacing:'.16em',
              color:'var(--magenta)', textTransform:'uppercase',
              marginTop:'calc(var(--cs, 330px) * 0.01)', textAlign:'center',
              textShadow:'0 0 12px rgba(204,0,238,.60)' }}>
              Gameplay Engineer
            </div>
            {activeSec && (
              <div style={{ marginTop:'calc(var(--cs, 330px) * 0.025)',
                padding:'.75rem .8rem', borderTop:'2px solid rgba(238,203,44,.28)',
                textAlign:'center', animation:'label-in .3s ease both', width:'80%' }}>
                <div style={{ fontFamily:"'Cinzel',serif",
                  fontSize:'calc(var(--cs, 330px) * 0.040)', fontWeight:600,
                  letterSpacing:'.14em', textTransform:'uppercase', color:'var(--gold-hi)',
                  marginBottom:'.25rem' }}>
                  {activeSec.label}
                </div>
                <div style={{ fontSize:'calc(var(--cs, 330px) * 0.036)',
                  color:'rgba(255,255,255,.80)', lineHeight:1.5,
                  maxWidth:200, margin:'0 auto',
                  textShadow:'0 0 6px rgba(255,255,255,.20)' }}>
                  {activeSec.desc}
                </div>
              </div>
            )}
            {activeSection && (
              <button onClick={resetHub} style={{ position:'absolute', top:10, right:12, width:22, height:22,
                borderRadius:'50%', background:'rgba(0,0,0,.3)', border:'1px solid rgba(238,203,44,.3)',
                display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:'#fff',
                zIndex:30, fontSize:10 }}>✕</button>
            )}
          </div>

          {/* bubbles */}
          {SECTIONS.map((sec, i) => (
            <div key={sec.id}
              ref={el => bubblesRef.current[i] = el}
              className={`hub-bubble ${activeSection === sec.id ? 'active' : ''}`}
              style={{ width:88, height:88}}
              onClick={() => toggleSection(sec.id)}>
              <div className="bubble-icon">{SECTION_ICONS[sec.id]}</div>
              <div className="bubble-label">{sec.label}</div>
            </div>
          ))}
        </div>

        {/* scroll indicator */}
        <div className={`scroll-indicator ${activeSection ? 'visible' : ''}`}
          onClick={() => document.getElementById('sectionDropdown')?.scrollIntoView({ behavior:'smooth', block:'start' })}>
          <span className="scroll-indicator-text">Scroll for details</span>
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>

        {/* gold divider */}
        <div className={`gold-line-wrap ${activeSection ? 'visible' : ''}`}>
          <div className="gold-line" />
        </div>

        {/* ── SECTION CONTENT ── */}
        <div id="sectionDropdown" className={`section-dropdown ${activeSection ? 'open' : ''}`}
          style={{ width:'100%', maxWidth:920 }}>

          {/* WORK */}
          <div className={`section-panel ${activeSection === 'work' ? 'active' : ''}`} data-section="work">
            <div className="panel-header">
              <div className="panel-icon">{SECTION_ICONS.work}</div>
              <div className="panel-title">Featured Work</div>
            </div>
            <div className="panel-grid">

              {/* Valtara */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>
                <div className="card-hub-header">
                  <div className="card-hub-overline">Exploration · Procedural World · Companion AI · In Development</div>
                  <div className="card-hub-title">Valtara — Artifact Hunter</div>
                  <div className="card-hub-desc">A post-apocalyptic exploration game. You are a robot named Barley. Seven artifacts of humanity's greatest myths are scattered across a procedurally generated world, each watched over by a guardian with their own conditions. A fox travels with you. Location-contextual artifact placement, guardian gate system, and a companion whose behavior tells you everything if you are paying attention.</div>
                  <div className="card-hub-tags">{['Unity', 'C#', 'Procedural Generation', 'Companion AI', 'In Development'].map(t => <span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <CodeCard snippets={[CODE_SNIPPETS.valtara_artifacts, CODE_SNIPPETS.valtara_fox]} />
              </div>

              {/* Evigheden — Rune Architecture */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>
                <div className="card-hub-header">
                  <div className="card-hub-overline">Designer-Driven Architecture · ScriptableObjects · In Development</div>
                  <div className="card-hub-title">Evigheden — Rune System</div>
                  <div className="card-hub-desc">A fully data-driven rune architecture built on ScriptableObject assets — designers configure every behavior (stat multipliers, dodge style, combo finisher, passives, VFX) entirely through Inspector-editable fields. Entirely new rune archetypes can be authored and deployed without a single line of additional code.</div>
                  <div className="card-hub-tags">{['Unity', 'C#', 'ScriptableObjects', 'Designer Tooling', 'PC'].map(t => <span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <CodeCard snippet={CODE_SNIPPETS.evigheden_runes} />
              </div>

              {/* Project Maelstrom */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>                <div className="card-hub-header">
                  <div className="card-hub-overline">Creature AI · Pack Coordination</div>
                  <div className="card-hub-title">Project Maelstrom</div>
                  <div className="card-hub-desc">A pack AI system where creatures work together — flanking, applying pressure, and falling back as a coordinated unit.</div>
                  <div className="card-hub-tags">{['Unity','C#','Pack AI','Encounter Design'].map(t=><span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <div className="card-images-strip" style={{padding:'0 1rem 6px'}}>
                  {[PM_Overview, PM_Combat, PM_PlayerFocus].map((src,i)=>(
                    <img key={i} src={src} alt="Project Maelstrom" onClick={()=>openMedia(PROJECTS[2], i===2?1:i)} />
                  ))}
                </div>
                <CodeCard snippets={[CODE_SNIPPETS.maelstrom, CODE_SNIPPETS.maelstrom_boss, CODE_SNIPPETS.maelstrom_cinematic]} />
              </div>

              {/* Mall Cop Madhouse */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>                <div className="card-hub-header">
                  <div className="card-hub-overline">Asymmetric Multiplayer · Capture Mechanics · Photon PUN</div>

                  <div className="card-hub-title">Mall Cop Madhouse</div>
                  <div className="card-hub-desc">Asymmetric stealth-and-chase: Hooligans complete disruptive tasks while the taser-wielding Mall Cop hunts, carries, and books them into jail to score.</div>
                  <div className="card-hub-tags">{['Unity','C#','Photon Pun','Asymmetric','Multiplayer'].map(t=><span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <div className="card-images-strip" style={{padding:'0 1rem 6px'}}>
                  {[coreEight, lobbyFive, coreTwo].map((src,i)=>(
                    <img key={i} src={src} alt="Mall Cop Madhouse" onClick={()=>openMedia(PROJECTS[1], i===0?2:i===1?1:0)} />
                  ))}
                </div>
                <CodeCard snippet={CODE_SNIPPETS.mallcop} />
              </div>

              {/* B-52 */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>                <div className="card-hub-header">
                  <div className="card-hub-overline">VR Training · Multiplayer · USAF Whitepaper</div>
                  <div className="card-hub-title">B-52 Training Suite — USAF</div>
                  <div className="card-hub-desc">Dual-engine VR training platform (Unity + UE5) that cut B-52 crew training time by 95%, with a data-driven checklist system for procedural verification.</div>
                  <div className="card-hub-tags">{['Unity + UE5','Photon','VR','Checklist Systems'].map(t=><span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <div className="card-images-strip" style={{padding:'0 1rem 6px'}}>
                  <img src={B52_USAF} alt="B-52 cockpit" onClick={()=>openMedia(PROJECTS[3],0)} />
                  <img src={B52_internaltraining} alt="B-52 training" onClick={()=>openMedia(PROJECTS[3],1)} />
                </div>
                <CodeCard snippet={CODE_SNIPPETS.b52} />
              </div>

              {/* Sensorama */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>                <div className="card-hub-header">
                  <div className="card-hub-overline">Sensor Integration · Environmental AI · OSU VR Lab</div>
                  <div className="card-hub-title">Sensorama R&D</div>
                  <div className="card-hub-desc">Research project piping live LiDAR, radar, and heat signature data into a game world — AI creatures react to real physical space in real time.</div>
                  <div className="card-hub-tags">{['Unity','LiDAR','Environmental AI','OSU VR Lab'].map(t=><span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <div className="card-images-strip" style={{padding:'0 1rem 6px'}}>
                  <img src={sensorama} alt="Sensorama" onClick={()=>openMedia(PROJECTS[4],0)} />
                  <img src={sensorama_Environment} alt="Sensorama environment" onClick={()=>openMedia(PROJECTS[4],0)} />
                </div>
                <CodeCard snippet={CODE_SNIPPETS.sensorama} />
              </div>

              {/* TypeScript — Game State Manager */}
              <div className="project-card-hub" onClick={(e) => {
  if (e.target.closest('.media-open-btn') || e.target.closest('.card-images-strip')) return;
  e.currentTarget.querySelector('.media-open-btn')?.click();
}}>                <div className="card-hub-header">
                  <div className="card-hub-overline">TypeScript · OOP · Design Patterns</div>
                  <div className="card-hub-title">Game State Manager</div>
                  <div className="card-hub-desc">A typed, reactive state system with a validated phase machine — each transition checks against an allowed-moves map, so the game can never enter an illegal state.</div>
                  <div className="card-hub-tags">{['TypeScript', 'OOP', 'Observer', 'State Machine'].map(t => <span key={t} className="card-hub-tag">{t}</span>)}</div>
                </div>
                <CodeCard snippet={CODE_SNIPPETS.typescript_state} />
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className={`section-panel ${activeSection === 'experience' ? 'active' : ''}`} data-section="experience">
            <div className="panel-header">
              <div className="panel-icon">{SECTION_ICONS.experience}</div>
              <div className="panel-title">Professional Experience</div>
            </div>
            <div className="exp-entry">
              <div className="exp-company">King Crow Studios</div>
              <div className="exp-role">Gameplay Engineer & Systems Designer</div>
              <div className="exp-dates">March 2022 — December 2025 · Remote</div>
              <div className="exp-bullet">Co-built the USAF B-52 VR training platform in Unity and Unreal — recognized in an official USAF whitepaper (95% reduction in training time, 19% reduction in errors).</div>
              <div className="exp-bullet">Built room-based multiplayer infrastructure on Photon PUN with RPC-driven state synchronization — engineered for stability under sustained live load across VR, desktop, and mobile simultaneously.</div>
              <div className="exp-bullet">Built and integrated coordinated AI behavior systems — state-machine agents with role-based group tactics (flanking, support, pressure) driven by a higher-level coordinator, tunable by designers through a hybrid code/ScriptableObject architecture.</div>              <div className="exp-bullet">Contributed to <em>Necroball</em> (Oct 2021, 91% positive) and <em>Hive Slayer</em> (Oct 2020, 94% positive, Free-to-Play) — both shipped to Steam.</div>
              <div className="exp-bullet">Built ScriptableObject-driven designer tooling allowing non-technical team members to author and tune gameplay content without engineering involvement.</div>
            </div>
            <div className="exp-entry">
              <div className="exp-company">VedX Solutions</div>
              <div className="exp-role">Game Development Intern — Remote</div>
              <div className="exp-dates">January 2021 — January 2022</div>
              <div className="exp-bullet">Designed and engineered VR hydroponic simulation to implement in a virtual reality-based education program.</div>
            </div>
            <div className="exp-entry">
              <div className="exp-company">Oregon State University — Kesterson VR Immersion Lab</div>
              <div className="exp-role">Virtual Reality Lab Technician</div>
              <div className="exp-dates">September 2018 — June 2020</div>
              <div className="exp-bullet">Built RPG prototypes with full creature systems, combat, and AI adversaries in both UE and Unity.</div>
              <div className="exp-bullet">Led a drone R&D project integrating LiDAR, radar, and machine learning for real-time environmental mapping.</div>
              <div className="exp-bullet">Created 3D assets in Maya and Blender, and mentored students in VR development.</div>
            </div>
          </div>

          {/* SKILLS */}
          <div className={`section-panel ${activeSection === 'skills' ? 'active' : ''}`} data-section="skills">
            <div className="panel-header">
              <div className="panel-icon">{SECTION_ICONS.skills}</div>
              <div className="panel-title">Technical Proficiencies</div>
            </div>
            <div className="panel-grid">
              {[
                ['AI & Creature Systems',  'Behavior Trees · Blackboards · Pack AI · State Machines · Engagement Slots · Adaptive Difficulty'],
                ['Combat & Encounters',    'GAS · Combo Systems · Encounter Pacing · Boss Cinematics · Multiplayer Balancing'],
                ['Languages',              'C++ (Expert) · C# (Expert) · Python · Blueprint · JavaScript · TypeScript · Lua'],
                ['Engines & Tools',        'Unreal Engine 5 · Unity (8+ yrs) · Photon · Git · Plastic SCM · Visual Studio'],
                ['Platforms',              'VR / AR / MR · Android · PC · Cross-Platform Multiplayer'],
                ['3D & Art',               'Maya · Blender · Rigging · Animation · Environment Modeling · Krita'],
                ['Web & Tools',            'React · HTML/CSS · JavaScript · Node.js · Vercel · SVG/CSS Animation'],
                ['Collaboration',          'Cross-Discipline · Rapid Prototyping · Playtesting · Designer Tooling · Mentorship'],
              ].map(([label, items]) => (
                <div key={label} className="panel-card">
                  <div className="skill-group-label">{label}</div>
                  <div className="skill-group-items">{items}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className={`section-panel ${activeSection === 'about' ? 'active' : ''}`} data-section="about">
            <div className="panel-header">
              <div className="panel-icon">{SECTION_ICONS.about}</div>
              <div className="panel-title">About</div>
            </div>
            <div style={{ display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap' }}>
              <img src={profileImage} alt="Michael Hammond" style={{ width:140, height:140, borderRadius:'50%',
                objectFit:'cover', border:'1px solid rgba(238,203,44,.4)',
                boxShadow:'0 0 20px rgba(238,203,44,.20)', flexShrink:0 }} />
              <div style={{ flex:1, minWidth:240 }}>
                <p className="panel-text">Gameplay Engineer and Designer with 8+ years building complete interactive systems — synchronized multiplayer architecture, AI behaviors that make NPCs feel vibrant and alive, and tools that let design teams move fast without tedious back-and-forth.</p>
                <p className="panel-text">The connecting thread has been a genuine interest in what makes a virtual world feel real — both functionally and in the essence of what makes them come alive and respond in ways players feel even when they can't articulate why.</p>
              </div>
            </div>
            <div className="exp-entry" style={{ borderTop:'1px solid rgba(238,203,44,.10)', marginTop:'1.2rem' }}>
              <div className="exp-company">Epic Games & Coursera — Game Design & Development with UE</div>
              <div className="exp-role">Professional Certificate</div>
            </div>
            <div className="exp-entry">
              <div className="exp-company">Oregon State University — B.A. Digital Communication Arts</div>
              <div className="exp-role">Game Development Specialization · Minor: History & Education</div>
            </div>
          </div>

          {/* CONTACT */}
          <div className={`section-panel ${activeSection === 'contact' ? 'active' : ''}`} data-section="contact">
            <div className="panel-header">
              <div className="panel-icon">{SECTION_ICONS.contact}</div>
              <div className="panel-title">Get in Touch</div>
            </div>
            <p className="panel-text">Actively looking for gameplay engineering roles. If you're building something with passion — AI that thinks, exhilarating combat, multiplayer built to last — I'd love to talk.</p>
            <div className="contact-links">
              <a href="mailto:hammondsk.09@gmail.com" className="contact-link">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hammondsk.09@gmail.com
              </a>
              <a href="tel:+15419731430" className="contact-link">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 .1 1.18 2 2 0 0 1 2.09 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (541) 973-1430
              </a>
              <a href="https://github.com/Michamm79" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                github.com/Michamm79
              </a>
              <a href="https://www.linkedin.com/in/michamm" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://michaelhammond.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                michaelhammond.vercel.app
              </a>
            </div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.76rem', color:'#fff', marginTop:'1.2rem',
              letterSpacing:'.10em', textTransform:'uppercase' }}>
              Oregon · Available Immediately · Remote
            </div>
          </div>

        </div>{/* /section-dropdown */}
      </div>{/* /hub-page */}

      {/* ── MEDIA MODAL ── */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMedia(null)}><X size={16} /></button>
            {(() => {
              const { project, mediaIndex } = selectedMedia;
              const m = project.media?.[mediaIndex];
              return (
                <>
                  <div className="modal-title">{project.title}</div>
                  <div className="modal-divider" />
                  {m?.label && <p className="media-label-modal">{m.label}</p>}
                  {project.recruiterHighlights?.length > 0 && (
                    <div className="recruiter-box">
                      <div className="recruiter-box-title">✦ Recruiter Highlights ✦</div>
                      <ul>{project.recruiterHighlights.map((h,i) => <li key={i}>{h}</li>)}</ul>
                    </div>
                  )}
                  {m && (m.type === 'image' || m.type === 'gif') ? (
                    <img src={m.src} alt={m.label || 'media'} className="modal-media" />
                  ) : m?.type === 'youtube' ? (
                    (() => {
                      const id = getYouTubeId(m.src);
                      return id
                        ? <iframe className="modal-media" src={`https://www.youtube.com/embed/${id}`}
                            title={m.label || 'YouTube'} allowFullScreen
                            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" />
                        : <div style={{textAlign:'center',opacity:.7}}>Couldn't parse YouTube link.</div>;
                    })()
                  ) : m ? (
                    <video className="modal-media" controls autoPlay playsInline poster={m.poster || project.thumbnail} src={m.src} />
                  ) : null}
                  <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginTop:'.5rem' }}>
                    {project.github && (
                      <a className="code-btn-modal" href={project.github} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}>
                        <ExternalLink size={14} /> View GitHub
                      </a>
                    )}
                    {project.codeDownload && (
                      <a className="code-btn-modal" href={project.codeDownload} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}>
                        <Download size={14} /> Download Code
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

// ─────────────────────────────────────────────
// CODE CARD sub-component
// ─────────────────────────────────────────────
function CodeCard({ snippet, snippets }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  // Accept either a single snippet or an array
  const list = snippets || [snippet];
  const active = list[tab];

  const highlight = (code) => {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  return (
    <div>
      <button className="media-open-btn" onClick={() => setOpen(v => !v)}>
        <Eye size={12} /> {open ? 'Hide Code' : 'View Code & Details'}
      </button>
      {open && (
        <div style={{ animation:'card-in .25s ease both' }}>
          {list.length > 1 && (
            <div style={{ display:'flex', gap:0, borderBottom:'1px solid rgba(238,203,44,.12)', marginBottom:0 }}>
              {list.map((s, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setTab(i); }} style={{
                  padding:'.3rem .85rem', background: tab===i ? 'rgba(238,203,44,.10)' : 'transparent',
                  border:'none', borderBottom: tab===i ? '2px solid var(--gold)' : '2px solid transparent',
                  color: tab===i ? 'var(--gold-hi)' : 'rgba(255,255,255,.45)',
                  fontFamily:"'JetBrains Mono',monospace", fontSize:'.55rem',
                  cursor:'pointer', transition:'all .18s', letterSpacing:'.04em',
                }}>
                  {s.file}
                </button>
              ))}
            </div>
          )}
          <div className="card-body-hub">
            <div className="card-code-col">
              <div className="code-file-tab">
              <div className={`code-lang-dot ${active.lang === 'cpp' ? 'cpp' : active.lang === 'typescript' ? 'typescript' : 'csharp'}`} />
                <span className="code-file-name">{active.file}</span>
              </div>
              <pre className="card-code-pre" dangerouslySetInnerHTML={{ __html: highlight(active.code) }} />
            </div>
            <div className="card-detail-col">
              <div className="card-detail-title">What's going on here</div>
              {active.bullets.map((b,i) => <div key={i} className="card-detail-item">{b}</div>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}