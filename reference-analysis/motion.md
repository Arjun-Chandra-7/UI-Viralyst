# Motion Forensics & GSAP Choreography — Aardvark Book Club

## 1. Custom Easing Curves
Extracted directly from `slater.js`:
```javascript
CustomEase.create("energy", "M0,0 C0.32,0.72 0,1 1,1");
CustomEase.create("osmo", "0.625, 0.05, 0, 1");
CustomEase.create("path-ease", "0.78, 0.18, 0.18, 1");
```

Standard GSAP easings utilized:
- `elastic.out(1, 0.72)` — Used for headline words landing and logo entrance
- `elastic.in(1, 0.72)` — Used for logo exit
- `elastic.out(1, 0.75)` — Used for handwritten text characters and button rebound
- `circ.out` — Used for background clip-path ellipse expansion
- `expo.out` — Used for hero canvas sequence reveal
- `power2.in` — Used for button hover dip keyframe

## 2. Intro / Loader Timeline (`runPageOnceAnimation`)
Detailed sequence:
1. **Initial Setup (T+0)**:
   - Header positioned at `yPercent: -100`
   - Transition SVG path primed at `drawSVG: '0% 100%'`
   - Transition logo positioned at `scale: 0, rotate: -64, autoAlpha: 0`
   - Hero background primed with `clipPath: ellipse(20% 0% at 100% 100%)`
   - Hero headline words split by `SplitText({ type: "words" })` and primed:
     `yPercent: -10, xPercent: 40, scaleY: 0.1, scaleX: 0.85, rotate: 8, opacity: 0`
   - Hero handwritten text split by `SplitText({ type: "chars" })` and primed:
     `opacity: 0, rotate: 22, x: -0.25em, y: 0.5em`
   - Hero sequence canvas primed: `opacity: 0, scale: 1.15, rotate: 6`

2. **Transition Logo Entrance (T+50ms)**:
   - Logo scales up: `scale: 1, rotate: 0, autoAlpha: 1, duration: 0.65, ease: "elastic.out(1,0.72)"`

3. **Transition Logo Exit (T+500ms)**:
   - Logo scales down: `scale: 0, rotate: 64, autoAlpha: 0, duration: 0.6, ease: "elastic.in(1,0.72)"`

4. **SVG Path Stroke Morph (T+650ms)**:
   - `strokeWidth: "8%"`, `drawSVG: '100% 100%'`, duration: 1.25s, ease: "circ.out"

5. **Hero Entrance ("start+=1.1" ~ T+1100ms)**:
   - **Header**: slides down from `yPercent: -100` to `0`, duration: 0.5s, delay: 0.5s, ease: "energy"
   - **Hero Background**: expands `clipPath: ellipse(150% 130% at 100% 100%)`, duration: 1.1s, delay: 0.2s, ease: "circ.out"
   - **Hero Headline Words**: animate in with elastic overshoot, duration: 0.875s, stagger: 0.088s, delay: 0.25s, ease: "elastic.out(1,0.72)"
   - **Hero Paragraph**: opacity: 1, y: 0em, duration: 0.35s, delay: 0.45s, ease: "energy"
   - **Hero CTA Button**: opacity: 1, y: 0em, duration: 0.35s, delay: 0.525s, ease: "energy"
   - **Hero Handwritten Chars**: reveal with bouncy rotation, duration: 0.75s, delay: 0.45s, stagger: 0.016s, ease: "elastic.out(1, 0.75)"
   - **Hero Sequence Canvas**: opacity: 1, scale: 1, rotate: 0, duration: 0.85s, delay: 0.5s, ease: "expo.out"
   - **Hero Mascot Visual**: opacity: 1, y: 0em, rotate: -21deg, duration: 0.75s, delay: 0.5s, ease: "elastic.out(1, 0.72)"

## 3. Scroll Interactions & Scrubbed Animations
### A. Canvas Hero Sequence (`initHeroSequence`)
- Canvas width/height dynamically rendered with `window.devicePixelRatio`.
- Draws 120 frames at 24fps in a loop or responsive to view.
- Frame drawing handles aspect-ratio cover crop (`drawCover`).

### B. Box Unboxing Sequence (`initBoxSequence`)
- Pinned section with `ScrollTrigger`:
  - `trigger`: `[data-box-sequence]`
  - `start`: `'top 85%'`
  - `end`: `'bottom 80%'`
  - `scrub`: true
- Scrub interpolates playhead from frame 0 to frame 119.

### C. Footer Parallax (`initFooterParallax`)
- Trigger: `[data-footer-parallax]`
- `start`: `"clamp(top bottom)"`, `end`: `"clamp(top top)"`, `scrub: 0.2`
- Top & bottom containers translate from `y: -12.5em` to `0em`.
- Mascot visual scales from `0.9` to `1.0`, translates `xPercent: -35` to `0`, `y: 17.5em` to `0em`, rotates from `30deg` to `0deg`.

### D. Interactive CTA Button Alt (`initButtonAlt`)
- Uses `SplitText` on character elements.
- On hover, chars dip down (`yPercent: 55`, `scaleY: 0.3`, `rotate: 17deg`, `ease: "power2.in"` at 20%), then spring back up to (`yPercent: 0`, `scaleY: 1`, `rotate: 0`, `ease: "elastic.out(1, 0.72)"`).
