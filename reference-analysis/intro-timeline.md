# Intro / Loader Timeline Specification — Frame-Level Reference

## Chronological Breakdown

| Elapsed Time | Target Element | Action / State Change | Tween Properties |
|---|---|---|---|
| **T+0ms** | Full Page | Page load initiated, Lenis stopped | Initial layout render |
| **T+0ms** | `[data-header]` | Initial hidden position | `yPercent: -100` |
| **T+0ms** | `[data-transition-logo]` | Hidden & pre-scaled | `scale: 0, rotate: -64, autoAlpha: 0` |
| **T+0ms** | `[data-transition-wrap] svg path` | Pre-drawn | `drawSVG: '0% 100%'` |
| **T+0ms** | `[data-hero-bg]` | Ellipse mask closed | `clipPath: ellipse(20% 0% at 100% 100%)` |
| **T+0ms** | `[data-hero-title] .split-word` | Words primed | `yPercent: -10, xPercent: 40, scaleY: 0.1, scaleX: 0.85, rotate: 8, opacity: 0` |
| **T+0ms** | `[data-hero-paragraph]` | Paragraph hidden | `opacity: 0, y: -0.75em` |
| **T+0ms** | `[data-button-alt]` | Button hidden | `opacity: 0, y: -0.75em` |
| **T+0ms** | `[data-hero-visual]` | Mascot hidden | `opacity: 0, y: 5em, rotate: -43` |
| **T+0ms** | `[data-hero-handwritten-text] .split-char` | Script chars hidden | `opacity: 0, rotate: 22, x: -0.25em, y: 0.5em` |
| **T+0ms** | `[data-hero-sequence]` | Canvas container primed | `opacity: 0, scale: 1.15, rotate: 6` |
| **T+50ms** | `[data-transition-logo]` | Logo enters center stage | `to({ scale: 1, rotate: 0, autoAlpha: 1, duration: 0.65, ease: "elastic.out(1,0.72)" })` |
| **T+500ms** | `[data-transition-logo]` | Logo spins & exits | `to({ scale: 0, rotate: 64, autoAlpha: 0, duration: 0.60, ease: "elastic.in(1,0.72)" })` |
| **T+650ms** | `[data-transition-wrap] svg path` | Transition SVG morphs out | `to({ strokeWidth: "8%", drawSVG: "100% 100%", duration: 1.25, ease: "circ.out" })` |
| **T+1100ms** ("start+=1.1") | `[data-header]` | Header drops into view | `to({ yPercent: 0, duration: 0.5, delay: 0.5, ease: "energy" })` |
| **T+1300ms** (delay 0.2s) | `[data-hero-bg]` | Hero yellow background expands | `to({ clipPath: "ellipse(150% 130% at 100% 100%)", duration: 1.1, ease: "circ.out" })` |
| **T+1350ms** (delay 0.25s) | `[data-hero-title] .split-word` | Headline words bounce in sequentially | `to({ yPercent: 0, xPercent: 0, scaleY: 1, scaleX: 1, rotate: 0, opacity: 1, duration: 0.875, stagger: 0.088, ease: "elastic.out(1,0.72)" })` |
| **T+1550ms** (delay 0.45s) | `[data-hero-paragraph]` | Subheading paragraph fades up | `to({ opacity: 1, y: "0em", duration: 0.35, ease: "energy" })` |
| **T+1550ms** (delay 0.45s) | `[data-hero-handwritten-text] .split-char` | Handwritten script chars bounce in | `to({ opacity: 1, rotate: 0, x: "0em", y: "0em", duration: 0.75, stagger: 0.016, ease: "elastic.out(1,0.75)" })` |
| **T+1600ms** (delay 0.50s) | `[data-hero-sequence]` | Hero 120-frame canvas reveals | `to({ opacity: 1, scale: 1, rotate: 0, duration: 0.85, ease: "expo.out" })` |
| **T+1600ms** (delay 0.50s) | `[data-hero-visual]` | Hero mascot bounces into place | `to({ opacity: 1, y: "0em", rotate: -21, duration: 0.75, ease: "elastic.out(1,0.72)" })` |
| **T+1625ms** (delay 0.525s) | `[data-button-alt]` | CTA button pops up | `to({ opacity: 1, y: "0em", duration: 0.35, ease: "energy" })` |
| **T+2000ms** | Window | Intro sequence completes | Lenis smooth scroll active, user interactions enabled |
