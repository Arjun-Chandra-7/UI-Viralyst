# Typography Forensics — Aardvark Book Club

## 1. Type Hierarchy and Font Families
The site employs three primary type families:

1. **Degular** (Adobe Type / Web font)
   - Roles: Body copy, navigation links, button text, subheaders, badges, microcopy.
   - Weights: 500 (Medium), 600 (SemiBold), 700 (Bold).
   - Base style: Clean, geometric grotesque with distinctive quirks.

2. **Champ** (ExtraBold)
   - Roles: Display headings, hero title, section titles (`u-heading-xxl`, `u-heading-l`, `u-heading-m`, `u-heading-s`).
   - Weight: 700 / 800 (ExtraBold).
   - Base style: High-impact editorial retro display serif/serif-slab with personality.

3. **Hello Organichand Webfont**
   - Roles: Handwritten accents, annotations, easter eggs, organic decorative callouts.
   - Weight: 400 (Regular).
   - Base style: Casual expressive monoline script.

## 2. Fluid Typography Calculation Model
The core responsive typography engine is computed in `slater.css`:

```css
:root {
  --size-unit: 16;
  --size-container-ideal: 1920;
  --size-container-min: 992px;
  --size-container-max: 3840px;
  --size-container: clamp(var(--size-container-min), 100vw, var(--size-container-max));
  --size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)));
}

body {
  font-size: var(--size-font);
}
```

This ensures that at:
- **1920px viewport**: font-size = 16.00px
- **1728px viewport**: font-size = 14.40px
- **1440px viewport**: font-size = 12.00px
- **1366px viewport**: font-size = 11.38px
- **1280px viewport**: font-size = 10.67px
- **1024px viewport**: font-size = 8.53px

On tablets (`max-width: 991px`):
- `--size-container-ideal`: 834
- `--size-container-min`: 768px
- `--size-container-max`: 991px

On mobile landscape (`max-width: 767px`):
- `--size-container-ideal`: 550
- `--size-container-min`: 480px
- `--size-container-max`: 767px

On mobile portrait (`max-width: 479px`):
- `--size-container-ideal`: 402
- `--size-container-min`: 320px
- `--size-container-max`: 479px

## 3. Measured Heading and Text Classes (At 1440px desktop)
| Class / Element | Font Family | Size (em) | Computed Size (px) | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| `.hero__title.u-heading-xxl` | Champ | 10em | 120px | 108px (0.9) | -0.02em (-2.4px) | `#000` |
| `.u-heading-l` | Champ | 6.5em | 78px | 74px (0.95) | -0.02em | `#000` |
| `.u-heading-m` | Champ | 3.5em | 42px | 42px (1.0) | -0.01em | `#000` |
| `.u-heading-s` | Champ | 2.5em | 30px | 32px (1.06) | normal | `#000` |
| `.hero__paragraph.u-paragraph-regular` | Degular | 1.5em | 18px | 25.2px (1.4) | normal | `#000` |
| `.hero__handwritten-text` | Hello Organichand | 2em | 24px | 24px (1.0) | normal | `#000` |
| `.button-alt__text` | Degular 700 | 1.125em | 13.5px | 16px | 0.05em | `#fff` |
| `.header__nav-link` | Degular 600 | 1.25em | 15px | 20px | normal | `#000` |
| `.footer__bottom-text` | Degular 500 | 1em | 12px | 18px | normal | `#000` |
