# Reference Specification — Aardvark Book Club Forensic Reconstruction

## 1. Executive Summary & Forensic Findings
- **Target Site**: https://www.aardvarkbookclub.com
- **Architecture**: Webflow frontend enhanced with custom GSAP 3.15 motion choreography (`slater.app/18601/54937.js`), Lenis smooth-scrolling, SplitText, CustomEase, and dual WebP canvas image sequence players.
- **Color Palette Tokens**:
  - `--black`: `#000000`
  - `--white`: `#ffffff`
  - `--yellow`: `#ffd24a` (Hero background, CTA accents)
  - `--pale-yellow`: `#faed8f` (Secondary button backgrounds)
  - `--bright-pink`: `#fd48f2` (Genre section background)
  - `--magenta`: `#ff008c` (Button Alt background, tag badges)
  - `--violet`: `#3b308f`
  - `--soft-pink`: `#fdeded` / `#fde8ee` (Flow background)
  - `--wine`: `#670a2e`
  - `--cyan`: `#1ce8ed`
  - `--periwinkle`: `#9982de`
  - `--orange`: `#f9a220`

- **Typography System**:
  - Headings: `Champ ExtraBold`
  - Body & UI: `Degular` (Medium 500, SemiBold 600, Bold 700)
  - Script & Annotations: `Hello Organichand Webfont`
  - Icons: `webflow-icons`

- **Layout Grid**:
  - 12-column fluid grid on desktop (`--grid-columns: 12`, `--grid-margin: 1.5em`)
  - 5-column fluid grid on tablet (`--grid-columns: 5`, `--grid-margin: 1em`)
  - Container padding and margins expressed in fluid `em` units that dynamically recalculate with `--size-font`.

- **Animation & Motion**:
  - Initial Loader: Full-screen intro sequence with SVG drawing, bouncy logo reveal, circular clip-path reveal, and staggered SplitText word drop.
  - Hero Canvas Sequence: 120-frame WebP playback via HTML5 Canvas.
  - Box Unboxing Sequence: 120-frame WebP playback pinned to viewport and scrubbed by scroll progress.
  - Footer Parallax: Mascot rotation and translation scrubbed as footer enters viewport.
  - Buttons: Magnetic / character dip and spring wave effect on hover.
  - FAQ Accordion: Smooth height interpolation using `cubic-bezier(0.32, 0.72, 0, 1)`.

This specification serves as the ground-truth benchmark for the implementation phase.
