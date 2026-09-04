# VIRALYST NATIVE RECOMPOSITION SPECIFICATION

## 1. Book-Like Artifacts to Remove
1. **The Cardboard Unboxing Box**:
   - Pinned 120-frame canvas animation rendering cardboard shipping box flaps.
   - All references to "unboxing", "shipping", "credits", and "boxes".
2. **Book-Cover Silhouettes & Physical Spines**:
   - Any artwork mimicking paper thickness, book spines, or hardcover dust jackets.
   - Report covers pretending to be books in the carousel and pattern library.
3. **Mascot Animal Ears**:
   - 45 inline SVG elements across popups and card tops rendering cartoon aardvark ears (`.pop-up__overlay-left-ear`, `.pop-up__overlay-right-ear`, `.choice-slider__item-bg-ears`).
4. **Reference Pastel Color Sequence**:
   - The pastel yellow → pink → wine sequence inherited directly from Aardvark.

---

## 2. Exact Replacement Objects (Viralyst Primitives)

### Primitive 1: Pure Reel Frame
- **Aspect Ratio**: 9:16 vertical media card.
- **Anatomy**:
  - Full-bleed kinetic visual layer (photographic, typography, or UI texture).
  - Floating hook callout pill with detection dot (`HOOK: CONTRARIAN`).
  - Tactile caption bar fragment peeling from the bottom.
  - Active audio waveform indicator and scrub line (`00:18 / 00:32`).
  - Zero book thickness, zero spines, zero page edges.

### Primitive 2: Signal
- **Role**: Visual representation of an extracted short-form feature.
- **Form Factors**:
  - Detection badges: `[HOOK]`, `[PACE: 0.8s]`, `[AUDIO SYNC]`, `[RETENTION SPIKE]`.
  - Handwritten annotations using Hello Organichand font.
  - Technical HUD brackets: `[ · ]` replacing cartoon mascot ears.

### Primitive 3: Content Stack
- **Role**: A deck of 3-4 overlapping Reel frames offset in z-space and rotation (-8deg to +8deg).
- **Behavior**: Frames peek from behind each other, suggesting an active feed of analyzed content.

### Primitive 4: Content Blueprint
- **Role**: The deliverable replacing the subscription box.
- **Anatomy**:
  - Structured production sheet showing hook phrasing, visual cue storyboard, audio sync track, and camera action notes.
  - Unfolds and separates into constituent layers during scroll.

---

## 3. New Hero Object: The Moving Reel Stack
- **Concept**: Three oversized 9:16 vertical media frames arranged in a dynamic, asymmetrical stack.
  - **Back Frame (Left)**: Tilted -7deg, displaying raw video footage frame with cut markers.
  - **Middle Frame (Right)**: Tilted +6deg, displaying audio frequency spectrogram and cadence markers.
  - **Front Frame (Center)**: Upright, bold focus Reel displaying an active hook breakdown (`SIGNAL 01: CONTRARIAN OPEN`), scrub bar, and glowing detection reticle.
- **Motion Choreography**:
  - Intro: Frames enter with staggered z-depth and settle into position matching the existing 1.2s ease curve.
  - Floating Signal Stickers: `PROVEN FORMAT`, `SIGNAL DETECTED`, and the circular Viralyst V-mark float dynamically around the stack.
- **Dimensions & Mass**: Matches the reference visual mass and center of gravity (`cx=630, cy=800` in 1260x1578 container), maintaining perfect compositional balance with the H1 headline.

---

## 4. Signature Box-Sequence Replacement: Signal Deconstruction → Blueprint Assembly
- **Location**: Section 4 (formerly `<section class="box">`).
- **Concept**: A short-form video freezes mid-playback, splits into separate analytical layers that peel outward in 3D space, and reassembles into an actionable Content Blueprint.
- **Choreography Timeline (Scroll-Linked via GSAP & ScrollTrigger)**:
  - **Progress 0% - 20% (Entry & Freeze)**:
    - A full Reel frame enters center stage and pins in viewport. Playhead freezes with an analytical pulse.
    - Title reveals: `DECONSTRUCTING THE REEL`.
  - **Progress 20% - 50% (Layer Separation / Peel)**:
    - The Reel physically separates into 4 distinct floating planes:
      1. **Visual Plane (Left)**: Storyboard frames with scene bounding boxes.
      2. **Hook Pill (Top)**: Peels upward with highlighted transcript words.
      3. **Waveform Strip (Right)**: Audio frequency track stretches horizontally out of the frame.
      4. **Timeline Strip (Bottom)**: Cut markers and retention drop-off curve project forward.
  - **Progress 50% - 80% (Signal Identification)**:
    - Viralyst HUD brackets and annotations snap onto each layer: `[SIGNAL: 0.8s CUT]`, `[SIGNAL: AUDIO MATCH]`, `[SIGNAL: CURIOSITY GAP]`.
  - **Progress 80% - 100% (Blueprint Assembly)**:
    - The floating planes glide together and lock into a crisp **Viralyst Content Blueprint** document ready for creator execution.
    - Handwritten callout settles: `Hooks. Structure. Visuals. Audio. Ready to shoot.`

---

## 5. Pattern Library Visuals (Section 10)
- **Concept**: Replaces Members' Choice awards with **The Pattern Library**.
- **Objects**: 4 oversized, high-contrast Reel format cards:
  1. `PATTERN 01: CONTRARIAN HOOK` (Opens with counter-intuitive premise).
  2. `PATTERN 02: FAST DEMO` (Tactile walkthrough with 0.8s micro-cuts).
  3. `PATTERN 03: STORY → PAYOFF` (Asymmetric narrative with twist payoff).
  4. `PATTERN 04: MYTH → PROOF` (Debunking assumptions with immediate visual proof).
- **Cards Anatomy**: Dark ink cards with vibrant accent borders, live timeline scrubbers, signal tags, and circular format badges replacing author portraits.

---

## 6. Content Territories Visuals (Section 5)
- **Concept**: Replaces book genre catalog with **Content Territories**.
- **Niches**: `FOUNDER LED`, `TECH & SAAS`, `E-COMMERCE`, `EDUCATIONAL`, `CULTURE & NEWS`, `B2B INSIGHTS`, `PERSONAL BRAND`, `DOCUMENTARY`, `TEARDOWNS`, `LIFESTYLE`, `ENTERTAINMENT`.
- **44 Media Cards**: Pure 9:16 vertical video thumbnails with play reticles, category badges, sound bars, and progress lines across 4 reverse-parallax scrolling columns.

---

## 7. The Viralyst Native Palette
```text
INK:            #09090B  (Deepest obsidian ink black)
MILK:           #F5F2EA  (Warm editorial cream canvas)
HOT PINK:       #FF2D8D  (Vibrant creator culture energy)
SIGNAL RED:     #FF4D3D  (Tactical alert & high-contrast hook)
ELECTRIC VIOLET:#7057FF  (Analytical intelligence core)
MEDIA CYAN:     #20D5E5  (Audio waveform & kinetic timeline)
ACID LIME:      #CBFF4A  (High-visibility performance accent)
```

---

## 8. Section Color Assignments (Recomposed Rhythm)
| Section | Background | Text / Headings | Accent / Objects | Editorial Mood |
|---|---|---|---|---|
| **Header / Nav** | Transparent / `#09090B` | `#F5F2EA` (Milk) | `#7057FF` / `#CBFF4A` | Sleek, technical, unobtrusive |
| **Section 1: Hero** | `#F5F2EA` (Milk) | `#09090B` (Ink) | `#FF2D8D` / `#7057FF` | Clean, high-impact editorial |
| **Section 2: Signals** | `#09090B` (Ink) | `#F5F2EA` (Milk) | `#20D5E5` / `#CBFF4A` | Darkroom intelligence deck |
| **Section 3: Flow** | `#7057FF` (Electric Violet) | `#F5F2EA` (Milk) | `#CBFF4A` (Acid Lime) | Vibrant, kinetic process stage |
| **Section 4: Deconstruction** | `#09090B` (Ink) | `#F5F2EA` (Milk) | `#20D5E5` / `#FF2D8D` | Cinematic studio deconstruction |
| **Section 5: Territories** | `#FF2D8D` (Hot Pink) | `#F5F2EA` (Milk) | `#09090B` (Ink) | High-energy creator culture |
| **Section 6: Benefits** | `#CBFF4A` (Acid Lime) | `#09090B` (Ink) | `#7057FF` (Violet) | High-contrast physics playground |
| **Section 7: FAQ** | `#F5F2EA` (Milk) | `#09090B` (Ink) | `#7057FF` (Violet) | Clean, readable product truth |
| **Section 8: Whole Reel** | `#09090B` (Ink) | `#F5F2EA` (Milk) | `#FF4D3D` (Signal Red) | Technical analytical matrix |
| **Section 9: Ticker** | `#FF4D3D` (Signal Red) | `#09090B` (Ink) | `#F5F2EA` (Milk) | Bold creator manifesto |
| **Section 10: Patterns** | `#7057FF` (Electric Violet) | `#F5F2EA` (Milk) | `#20D5E5` / `#CBFF4A` | Blueprint format gallery |
| **Section 11: Blueprint** | `#F5F2EA` (Milk) | `#09090B` (Ink) | `#FF2D8D` (Hot Pink) | Master intelligence document |
| **Footer** | `#09090B` (Ink) | `#F5F2EA` (Milk) | `#CBFF4A` (Acid Lime) | Authoritative platform base |

---

## 9. Brand Signature Motif: The Signal Trace
- A micro-waveform pattern with 4-5 frequency bars or a laser-thin detection stroke.
- Applied to:
  - Transition overlay logo pulse.
  - Active card status indicators.
  - Underline accents on highlighted editorial terms (`Curiosity gap`, `Rapid proof`).
  - Timeline progress indicator dots.

---

## 10. Responsive Object Behavior
- **Desktop (1920, 1440, 1280)**: Full 3-card Reel Stack in Hero; 4-layer 3D separation in Deconstruction; 4-column gallery in Territories.
- **Tablet (768)**: Fluid scale of Reel stack with proportional offset; Deconstruction retains 4 layers with vertical stack offset; 2-column Territories grid.
- **Mobile (390, 375, 430)**: Front Reel hero card dominates with 2 subtle offset peek cards; Deconstruction separates along a single vertical axis with staggered opacity/translate; 2-column compact gallery.
