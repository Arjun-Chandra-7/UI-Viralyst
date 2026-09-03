# VIRALYST DEFINITIVE DESIGN SPECIFICATION

## 1. Final Palette (Viralyst V2)
The palette transitions away from chaotic high-saturation candy colors to an authoritative, high-contrast editorial system:

```text
OBSIDIAN:       #09090B  (Deepest obsidian black base)
BONE:           #F3F0E9  (Warm tactile cream canvas)
VIRAL RED:      #FF3B45  (Primary brand energy & hook alert)
ELECTRIC ROSE:  #FF2878  (Secondary brand accent & visual pop)
SIGNAL VIOLET:  #6257FF  (Analytical intelligence layer)
MEDIA BLUE:     #2997FF  (Audio waveform & kinetic timeline)
SOFT SILVER:    #D8D8DE  (Subtle structural borders & dividers)
SIGNAL LIME:    #C6FF4A  (Micro-accent only, <5% visual presence)
```

### Proportions:
- **60% Neutral**: Obsidian `#09090B` & Bone `#F3F0E9`.
- **25% Primary Brand**: Viral Red `#FF3B45` & Electric Rose `#FF2878`.
- **12% Secondary Accent**: Signal Violet `#6257FF` & Media Blue `#2997FF`.
- **3% Micro-Accent**: Signal Lime `#C6FF4A` (detection dots, playheads).

### Section Color Progression:
1. **Hero**: `BONE (#F3F0E9)` with Obsidian typography & Viral Red primary CTA.
2. **Reel Deck (Section 2)**: `OBSIDIAN (#09090B)` darkroom deck with Media Blue & Electric Rose accents.
3. **How It Works (Section 3)**: `BONE (#F3F0E9)` clean sequential intelligence stage.
4. **Signature Deconstruction (Section 4)**: `OBSIDIAN (#09090B)` cinematic studio floor.
5. **What Viralyst Reads (Section 5)**: `SIGNAL VIOLET (#6257FF)` multi-dimensional analytical orbit.
6. **Benefits (Section 6)**: `BONE (#F3F0E9)` with Obsidian & Viral Red physics pills.
7. **FAQ (Section 7)**: `BONE (#F3F0E9)` high-legibility editorial text.
8. **Manager (Section 8)**: `OBSIDIAN (#09090B)` structured prompt & response studio.
9. **Brand Ticker (Section 9)**: `VIRAL RED (#FF3B45)` high-voltage brand manifesto.
10. **Pattern Library (Section 10)**: `OBSIDIAN (#09090B)` format blueprint gallery.
11. **Codex (Section 11)**: `BONE (#F3F0E9)` master content architecture.
12. **Footer**: `OBSIDIAN (#09090B)` authoritative platform base.

---

## 2. Final Typography System

### Display / Headlines: **Bricolage Grotesque**
- Weights: 700 (Bold), 800 (ExtraBold).
- Characteristics: Expressive, digital, modern grotesque with sharp optical punctuation.
- Replaces Degular and removes all publishing/novel connotations.

### Interface & Body: **Instrument Sans**
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold).
- Characteristics: Balanced, precise geometric sans with exceptional screen legibility.
- Replaces Champ.

### Technical Metadata & Annotations: **IBM Plex Mono**
- Weights: 400 (Regular), 600 (SemiBold).
- Styling: Uppercase, letter-spacing +0.06em, subtle -4° to -8° rotation on floating chips.
- Replaces the childish marker handwriting font (Hello Organichand).

---

## 3. The Signature Object: The Signal Core

### Conceptual Anatomy:
The Signal Core is a single 9:16 vertical media artifact composed of 5 physical composite planes in 2.5D/3D space:
```text
           [05] CAPTION LAYER (Kinetic text ribbons)
                     ╱
         [04] HOOK / TRANSCRIPT (Curiosity premise)
                    ╱
        [03] VISUAL FRAME (High-density video scene)
                   ╱
       [02] EDIT / PACING TIMELINE (0.8s cut markers)
                  ╱
      [01] AUDIO FREQUENCY WAVE (Speech cadence sync)
```

### Closed State:
- Appears as a pristine, monolithic short-form video frame with razor-sharp Obsidian bezel, subtle glass reflection, and quiet status indicator.

### Analyzed / Open State:
- The 5 planes separate along the Z-axis (`translateZ(40px to 160px)`, `rotateX(12deg)`, `rotateY(-18deg)`), revealing how Viralyst extracts and understands each structural layer.

---

## 4. Hero Composition: The Monolithic Signal Core
- **Left Column**:
  - H1: `Know what works. Make more of it.` (Bricolage Grotesque 800).
  - Paragraph: `Viralyst studies the content around your brand, finds what keeps working, and turns those signals into what you should make next.` (Instrument Sans 400).
  - CTA Button: `ENTER VIRALYST` with directional vector glyph.
  - Signal Tag: `[SCANNING: TIKTOK • REELS • SHORTS]` in IBM Plex Mono.
- **Right Column**:
  - Oversized Signal Core artifact with subtle interactive mouse-driven parallax (`±4deg` tilt).
  - Layered peek planes showing video frame, audio cadence, and hook transcript.

---

## 5. The Reel Deck (Section 2)
Replaces generic cards with 6 art-directed short-form content archetypes:
1. `REEL 01: THE CONTRARIAN OPEN` (Typography-led hook with immediate proof).
2. `REEL 02: THE TACTILE DEMO` (0.8s micro-cuts with extreme product close-ups).
3. `REEL 03: THE CONTEXT PIVOT` (Talking-head with auto-captions and sudden angle reset).
4. `REEL 04: THE SCREEN TEARDOWN` (Screen-recording breakdown with kinetic cursor).
5. `REEL 05: THE ASYMMETRIC STORY` (B-roll narrative with unexpected punchline payoff).
6. `REEL 06: THE INFINITE LOOP` (Audio cadence matched to start frame for seamless replays).

---

## 6. What Viralyst Reads (Section 5 — Replaces Broken Territories Cloud)
- **Eliminates**: The overflowing text cloud, novel genres, and 100vw text spills.
- **New Architecture: The Signal Orbit**:
  - Center: The Signal Core.
  - 5 Orbiting Dimension Cards:
    1. `VISUAL` (Scene composition, motion vectors, visual density).
    2. `TRANSCRIPT` (Hook syntax, curiosity gap, question phrasing).
    3. `CAPTIONS` (Word pacing, color emphasis, display timing).
    4. `AUDIO` (Speech cadence, music energy, SFX punctuation).
    5. `PACING` (Cut frequency, retention drop-off prevention, shot length).
  - Scroll-controlled progress: As user scrolls, each dimension orbits forward, highlights its specific data, then smoothly returns to the core.
  - Mobile (<= 768px): Transforms automatically into a vertical stacked feed with 0px horizontal overflow.

---

## 7. Signature Animation: Reel → Signal Core → Pattern → Content Direction (Section 4)
- Replaces the laggy canvas sequence with a GPU-accelerated CSS 3D + GSAP ScrollTrigger timeline:
  - `will-change: transform, opacity`.
  - Zero layout reads in the scroll tick (`onUpdate`).
  - No continuous CPU rasterization loops.
  - Fluid 60FPS on 1440x900 and mobile.

---

## 8. How It Works (Section 3)
A continuous four-stage evolution of the SAME Signal Core:
1. `01 / UNDERSTAND`: Core absorbs brand context, voice constraints, and target audience.
2. `02 / DISCOVER`: Surrounding content feeds converge on the core.
3. `03 / DECODE`: Core separates in 3D into its 5 structural layers.
4. `04 / CREATE`: Layers assemble into an actionable production blueprint.

---

## 9. Manager Section (Section 8)
- Prominently features the question:
  `"WHAT SHOULD WE MAKE NEXT?"`
- Viralyst surfaces a structured production answer:
  - `PATTERN`: Fast Demo with Contrarian Hook.
  - `OPENING LINE`: *"Stop writing hooks like it's 2023."*
  - `VISUAL CUE`: *Macro cut on hands within 0.6 seconds.*
  - `AUDIO SYNC`: *142 BPM rhythmic track.*

---

## 10. Performance & Engineering Strategy
- Cap all canvas DPR at `Math.min(window.devicePixelRatio, 1.5)`.
- Use CSS 3D transforms (`transform: translate3d`) for layer separation to offload all rendering to the GPU compositor.
- Lazy-load offscreen images with native `loading="lazy"` and explicit `width`/`height` attributes to prevent layout shifts.
- Zero network 404s; assert `document.documentElement.scrollWidth <= window.innerWidth + 1`.
