# Viralyst Motion Upgrade

## Major visual upgrades

- Replaced the phone-like hero cluster with a five-object CSS-3D Reel Field using authored editorial specimens, real perspective, depth-specific pointer response, and a temporary V-Lens analysis pass.
- Rebuilt “See what’s inside the reel” as a pinned intact-Reel sequence. Analysis is revealed only inside the scanned region before Signal Ribbons and related Reels expose a shared pattern.
- Turned How It Works into one continuously evolving object: context inputs → discovery field → multimodal scan → physical content blueprint.
- Upgraded Current Signals with depth-aware specimen focus and quiet-neighbour behavior.
- Replaced the old benefits composition with five moving modality artifacts that converge around one Reel.
- Rebuilt Manager around surfaced Pattern, Hook, and Visual Direction objects instead of a chat panel.
- Replaced the bottom static product card with a layered 3D Content Codex production artifact.

## Animation and interaction systems

- Coordinated GSAP/ScrollTrigger timelines, CSS 3D perspective, masked scan planes, restrained scroll-velocity response, magnetic CTAs, active navigation state, and a contextual desktop cursor (`OPEN`, `INSPECT`, `EXPLORE`).
- A small shared motion-token vocabulary controls interaction timing and easing.
- Mobile uses fewer Reel objects, simpler depth, and touch-native behavior; the custom cursor is desktop-only.

## Performance decisions

- No Three.js, WebGL renderer, autoplaying video wall, or new heavy dependency.
- Motion is transform/opacity/clip-path based, grouped into section-level timelines, and disabled or flattened under `prefers-reduced-motion`.
- The signature scanner uses lightweight DOM/SVG layers instead of multiple canvases; no permanent render loops are added beyond pointer interpolation while settling and the desktop cursor.

## Files changed

- `index.html`
- `src/styles/motion-upgrade.css`
- `public/scripts/motion-upgrade.js`
- `VIRALYST_MOTION_UPGRADE.md`

## Remaining limitations

- Reel art is authored from gradients, typography, SVG, and interface fragments because no production Viralyst video library is present in this repository.
