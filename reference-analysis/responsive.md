# Responsive Forensics — Aardvark Book Club

## 1. Measured Multi-Viewport Matrix
Measured across 11 target viewports using automated Playwright browser profiling:

| Viewport | Document Height | HTML Font-Size | Body Font-Size | Hero Title Size | Nav Visible | Toggle Visible |
|---|---|---|---|---|---|---|
| **1920×1080** | 16,554 px | 16 px | 16.00 px | 160.00 px | Yes (Inline) | Yes (Menu Button) |
| **1728×1117** | 15,299 px | 16 px | 14.40 px | 144.00 px | Yes (Inline) | Yes (Menu Button) |
| **1440×900**  | 12,666 px | 16 px | 12.00 px | 120.00 px | Yes (Inline) | Yes (Menu Button) |
| **1366×768**  | 11,784 px | 16 px | 11.38 px | 113.83 px | Yes (Inline) | Yes (Menu Button) |
| **1280×800**  | 11,264 px | 16 px | 10.67 px | 106.67 px | Yes (Inline) | Yes (Menu Button) |
| **1024×768**  | 9,418 px  | 16 px | 8.53 px  | 85.33 px  | Yes (Inline) | Yes (Menu Button) |
| **768×1024**  | 11,450 px | 16 px | 14.73 px | 88.40 px  | No (Hidden)  | Yes (Mobile Menu) |
| **430×932**   | 11,130 px | 16 px | 17.11 px | 55.62 px  | No (Hidden)  | Yes (Mobile Menu) |
| **393×852**   | 10,209 px | 16 px | 15.64 px | 50.84 px  | No (Hidden)  | Yes (Mobile Menu) |
| **390×844**   | 10,126 px | 16 px | 15.52 px | 50.45 px  | No (Hidden)  | Yes (Mobile Menu) |
| **375×812**   | 9,766 px  | 16 px | 14.93 px | 48.51 px  | No (Hidden)  | Yes (Mobile Menu) |

## 2. Breakpoints & Media Query Archetypes
1. **Desktop (>= 992px)**:
   - Primary navigation links (`.header__nav`) are rendered inline.
   - Fluid typography scales directly from `100vw / 120`.
   - Hero sequence canvas is active with desktop WebP source.
   - Dual-column hero layout with text on left and canvas sequence on right.

2. **Tablet (768px - 991px)**:
   - Inline navigation links hide; hamburger toggle becomes primary navigation access.
   - Fluid typography scales with `--size-container-ideal: 834`.
   - Layout stacks vertically in Hero, Flow, and Benefits.

3. **Mobile Landscape (480px - 767px)**:
   - Fluid typography scales with `--size-container-ideal: 550`.
   - Book slider switches to single-column swipeable cards.
   - Box sequence switches to mobile-optimized frame sequence.

4. **Mobile Portrait (< 480px)**:
   - Fluid typography scales with `--size-container-ideal: 402`.
   - Hero heading title shrinks to `3.25em` to prevent excessive word wrapping.
   - Footer layout stacks into single-column vertical flow.
