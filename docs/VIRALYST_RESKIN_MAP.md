# VIRALYST SEMANTIC RESKIN MAP

## Benchmark Target & Design Authority
- **Reference**: Exact forensic reconstruction of `https://www.aardvarkbookclub.com` locked at tag `REFERENCE_LOCKED` (Commit `3be5021`).
- **Core Principle**: VISUALLY, SPATIALLY, TYPOGRAPHICALLY, AND BEHAVIORALLY IDENTICAL.
- **Rule**: Change only the semantic payload (words, objects, artwork, branding). Layout, CSS, GSAP timelines, easing curves, breakpoints, and fluid math remain 100% frozen.

---

## Global System Locks

| Dimension | Policy | Frozen Parameters |
|---|---|---|
| **Typography** | FROZEN | Degular (Medium, SemiBold, Bold), Champ (ExtraBold), Hello Organichand (Webfont). All font-size, line-height, letter-spacing, and fluid `--size-font` calculations are identical. |
| **Grid & Layout** | FROZEN | 12-column Webflow layout, container max-widths, padding, margins, z-indexes, and section sequence. |
| **Motion Engine** | FROZEN | GSAP 3.15, Slater runtime, Lenis smooth scroll, CustomEase ("energy", "osmo", "path-ease"), elastic dynamics, ScrollTrigger triggers. |
| **Color System** | FROZEN | `#3b308f` (violet), `#F9A220` (yellow/orange), `#6abf4c` (green), `#32225f` (purple), `#c13a1f` (red), `#b6beff` (lavender), `#fcfaf7` (off-white). |
| **Responsive Tiers** | FROZEN | Desktop (>=992px), Tablet (768-991px), Mobile Landscape (480-767px), Mobile Portrait (<480px). |

---

## Section-by-Section Semantic Mapping

### 0. Intro & Page Transition (`.transition`)
```text
REFERENCE SECTION
Purpose: Fullscreen load transition with brand mascot entrance and circular reveal
Visual objects: Violet canvas (#3b308f), stroke SVG transition path, circular mascot logo (Aardvark emblem), yellow expanding ellipse mask
Text geometry: None (pure kinetic transition)
Animation: T+0 to T+2000ms GSAP timeline (`runPageOnceAnimation`): elastic logo entrance, rotation spin-out, stroke draw, ellipse expand
Interaction: Non-interactive automated sequence

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst kinetic platform signature entry sequence
Replacement objects: Viralyst geometric circular brandmark fitting exact 300x300 bounding box
Replacement copy: None
Assets to replace: Inline transition logo SVG path (`.transition__logo-svg`)

LOCKED:
All timeline timings, delay offsets, CustomEase curves ("energy", "circ.out", elastic dynamics), SVG path geometry, ellipse clip-path equations.
```

---

### 1. Header & Mobile Menu (`.header`, `.menu`)
```text
REFERENCE SECTION
Purpose: Main navigation, brand identification, and app authentication entry point
Visual objects: Aardvark Book Club black SVG logo (234x59), pill buttons with sliding background, language switch pill, social icons (Instagram, TikTok), mobile hamburger trigger
Text geometry:
  - "All Books" (9 chars)
  - "Gifting" (7 chars)
  - "FAQ" (3 chars)
  - "Log-in / Sign-up" (16 chars)
  - "en" (2 chars)
Animation: Header drop-in at T+1100ms (`yPercent: -100` -> `0`, duration: 0.5s, delay: 0.5s, ease: energy); mobile menu sliding mask reveal
Interaction: Pill hover animations, language switcher, mobile flyout drawer toggle

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst platform navigation and portal sign-in
Replacement objects: Viralyst authoritative black wordmark SVG matching 234x59 geometry
Replacement copy:
  - "All Books" -> "Signals" (7 chars)
  - "Gifting" -> "Formats" (7 chars)
  - "FAQ" -> "FAQ" (3 chars)
  - "Log-in / Sign-up" -> "Log-in / Sign-up" (16 chars — exact match!)
  - "en" -> "en" (exact match)
Assets to replace: `/assets/696179694070e2fa9eca375f_logo.svg`

LOCKED:
Header height, container padding, button dimensions, hover physics, menu drawer SVG background path (`menu__bg-svg`), mobile toggle icon.
```

---

### 2. Section 1: Hero (`.hero.is--bg-yellow`)
```text
REFERENCE SECTION
Purpose: Primary landing declaration, value proposition, and hero visual demonstration
Visual objects: Yellow organic background SVG, XXL display headline, body paragraph, large CTA button, handwritten regional shipping callout, 3D unboxing canvas / fallback image, interactive logo easter egg button
Text geometry:
  - H1: "Unbox stories worth talking about" (4 words, 32 chars, 2 lines)
  - Paragraph: "Join the book club that’s anything but traditional. Choose up to 3 new reads every month, delivered to your door. Then dive into the stories, and the conversations." (165 chars, 3 lines)
  - Button: "Log-in / Sign-up now" (20 chars)
  - Handwritten: "Shipping to the USA & Canada" (28 chars, 1 line)
  - Easter Egg Pop-up: "Want to join the Club?" (22 chars) / "Sign-up now!" (12 chars)
Animation: SplitText word drop with elastic overshoot, handwritten character stagger, canvas sequence playback / scroll scrub
Interaction: Hover pill states, easter egg pop-up toggle

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst AI short-form content intelligence platform introduction
Replacement objects:
  - Hero visual: Short-form video artifact cluster (vertical reel frames, kinetic hook tags, waveform indicators) occupying the exact 630x789 canvas footprint
  - Easter egg mascot icon: Viralyst circular emblem
Replacement copy:
  - H1: "Know what works. Make more of it." (34 chars, 4 words, 2 lines — identical text geometry!)
  - Paragraph: "Join the intelligence network that decodes short-form video. Track high-performing hooks every month, extract winning formats, and turn audience signals into breakout reels." (172 chars — exact line density!)
  - Button: "Log-in / Sign-up now" (20 chars — exact match!)
  - Handwritten: "Tracking TikTok, Reels & Shorts" (31 chars — identical geometry!)
  - Easter Egg Pop-up: "Ready to scale views?" (21 chars) / "Sign-up now!" (12 chars)
Assets to replace:
  - `/assets/69b9afc474f523151b7c0941_package-visual.webp` (and responsive variants)
  - Easter egg button SVG paths

LOCKED:
Dual-column flex layout, fluid typography `--size-font`, SplitText GSAP parameters, canvas container dimensions, yellow background SVG curves.
```

---

### 3. Section 2: Books Carousel (`.books.is--bg-white`)
```text
REFERENCE SECTION
Purpose: Showcase current month's curated selection in an interactive carousel
Visual objects: White background, Large heading, subtitle, handwritten annotation, prev/next circular controls, 6 card items with distinct background colors, ear-tab cards, book cover mockups, title, blurb, genre pills, "Read more" buttons
Text geometry:
  - H2: "Our Sept books" (14 chars)
  - Paragraph: "We drop new books on the 1st of every month. Call us creatures of habit." (72 chars)
  - Handwritten: "Discover hidden gems and buzzy new releases" (43 chars)
  - 6 Cards: Title (1-3 words), Rich paragraph (150-250 chars), 1-3 genre tags
Animation: Horizontal dragging with InertiaPlugin and ScrollTrigger parallax, handwritten text inview reveal
Interaction: Slider drag, prev/next arrows, card CTA clicks

VIRALYST SUBSTITUTION
New semantic meaning: Monthly curated breakout content opportunities and winning format drops
Replacement objects: 6 vertical reel artifact cards (9:16 vertical video frame silhouettes matching exact dimensions and ear-tab geometry, rich visual hooks)
Replacement copy:
  - H2: "This Month’s Signals" (20 chars)
  - Paragraph: "We drop fresh viral breakdowns on the 1st of every month. Proven, repeatable, dialed." (85 chars)
  - Handwritten: "Discover breakout hooks and high-retention formats" (50 chars)
  - Card 1: "The Loophole Hook" | "Reverse-chronological storytelling meets contrast pacing in this breakout interview format. Analyzing how an unexpected opening statement drives 3x average completion rates across lifestyle niches." | Tags: "Narrative", "Retention", "High Re-watch"
  - Card 2: "Speed Blueprint" | "A rapid-fire, high-density breakdown format where complex tactics are distilled into 30-second kinetic sequences with rhythmic micro-cuts and on-screen tactile proof." | Tags: "Education"
  - Card 3: "The Silent Anchor" | "No speaking for the first 3 seconds, relying purely on high-contrast visual curiosity and text motion before delivering an asymmetric payoff that sparks heavy comment debate." | Tags: "Visual Hook", "Debate", "Organic Reach"
  - Card 4: "Micro-Docu Sprint" | "Cinematic color grading combined with documentary voiceover style. Bridges personal founder vulnerability with tactical business takeaways for outsized authority." | Tags: "Storytelling", "Authority", "Brand Lift"
  - Card 5: "Friction Pivot" | "Disproving an accepted industry norm in the first 2 seconds. Triggers immediate comment defense mechanisms while holding viewer watch time through systematic evidence." | Tags: "Contrarian", "Engagement"
  - Card 6: "The Tease Loop" | "Seamless audio and visual looping where the final sentence connects back to the opening hook without interruption, driving repeated playback loops effortlessly." | Tags: "Loop Format", "Viral Pacing"
Assets to replace:
  - 6 book cover PNGs in `/assets/` (`earlymazywood.png`, `crone.png`, `thesecretdinner.png`, `blacktail.png`, `scion.png`, `fruitfly.png` + responsive variants)

LOCKED:
Slider card geometry, ear-shaped top curve SVGs (`books-slider__item-bg-ears`), card color backgrounds (`#32225f`, `#6abf4c`, `#000000`, `#c13a1f`, `#00102c`, `#3d3195`), dragging mechanics, pill tag styles.
```

---

### 4. Section 3: Flow (`.flow.is--inner-clip.is--bg-soft-pink`)
```text
REFERENCE SECTION
Purpose: Explain the 4-step service cycle with step illustration cards
Visual objects: Soft-pink container with inner clip path, Section heading, subtitle, 4 card columns with step badges ("Step #1" to "Step #4"), illustrative raster artworks, step titles, descriptions, center circular emblem
Text geometry:
  - H2: "How it works" (12 chars)
  - Paragraph: "Consider us your professional book curator" (42 chars)
  - 4 Step titles: 14-19 chars each
  - 4 Step descriptions: 86-105 chars each
Animation: ScrollTrigger horizontal stagger, step card pop, clip-path mask
Interaction: Scroll-linked motion

VIRALYST SUBSTITUTION
New semantic meaning: The 4-step Viralyst Content Intelligence Engine workflow
Replacement objects: 4 step illustrations rendered in matching silhouette, color harmony, and editorial illustration aesthetic
Replacement copy:
  - H2: "How it works" (12 chars — exact match!)
  - Paragraph: "Consider us your AI short-form intelligence team" (48 chars)
  - Step 1: "Step #1" / "Scan the feeds" (14 chars) / "Every week our system ingests tens of thousands of top-performing reels across TikTok, Instagram, and Shorts." (110 chars)
  - Step 2: "Step #2" / "Decode the signals" (18 chars) / "We analyze hooks, pacing, audio cues, and visual structures to isolate why each video held viewer attention." (108 chars)
  - Step 3: "Step #3" / "Receive your brief" (18 chars) / "Get tailored scripts and production blueprints calibrated directly to your brand tone and content pillars." (107 chars)
  - Step 4: "Step #4" / "Scale what works" (16 chars) / "Produce high-converting content with confidence, track performance signals, and refine the loop continuously." (109 chars)
Assets to replace:
  - `/assets/69849eba6ebf97ec498a7a57_01_step-illustration.webp`
  - `/assets/69849eba1f866c516a514ade_02_step-illustration.webp`
  - `/assets/69849ebaea8f91077664d474_03_step-illustration.webp`
  - `/assets/6a354b17bd64236c99a93c7e_Step%20Illustration.webp`
  - `/assets/696a059da09e3c123fba6a5a_logo-circle.svg`

LOCKED:
Card layout, typography hierarchy, step number styling, inner-clip curve CSS, ScrollTrigger scrub choreography.
```

---

### 5. Section 4: The Box (`.box`)
```text
REFERENCE SECTION
Purpose: Physical box presentation and mobile app distribution
Visual objects: 120-frame scroll-scrubbed canvas unboxing sequence, title SVG (`box-title.svg`), floating editorial copy, handwritten note, App Store & Google Play download buttons, pop-up easter egg
Text geometry:
  - Title: SVG typography ("THE BOX")
  - Body: "Each box includes a bookmark per book and postcard with a challenge to win a free credit!" (90 chars)
  - Handwritten: "Made for readers by readers" (27 chars)
  - Buttons: App Store & Google Play badges
Animation: ScrollTrigger canvas frame sequence playback (0-119), text fade/translate
Interaction: Scroll scrub, store link clicks, pop-up toggle

VIRALYST SUBSTITUTION
New semantic meaning: "The Intelligence Brief" — unpacking the actionable content intelligence deliverable
Replacement objects:
  - Title SVG: "THE BRIEF" in identical stylized Degular/Champ typographic treatment
Replacement copy:
  - Body: "Each brief includes complete hook variations, pacing timestamps, visual storyboard cards, and audio tags." (105 chars)
  - Handwritten: "Engineered for creators by creators" (35 chars)
Assets to replace:
  - `/assets/69c6d9f6cb0f4ec3190ce451_box-title.svg`
  - Canvas static fallback if necessary

LOCKED:
120-frame canvas configuration, scroll range (`data-scroll-start="top 85%"`, `data-scroll-end="bottom 80%"`), App Store / Google Play button shapes, pop-up mechanics.
```

---

### 6. Section 5: Genre Library (`.genre.is--bright-pink`)
```text
REFERENCE SECTION
Purpose: Explore book catalog across 11 literary genres with dynamic cover grid
Visual objects: Bright pink background, section title, subtitle, 11 interactive genre pills, floating multi-column gallery of 44 book cover thumbnails, easter egg button
Text geometry:
  - H2: "Choose from" (11 chars)
  - Paragraph: "We've got a book for every kind of reader" (41 chars)
  - 11 Categories: Horror, Science Fiction, Romance, Thriller, Literary Fiction, Fantasy, Gothic Fiction, Historical Fiction, Magical Realism, Contemporary Fiction, and more!
Animation: Floating column parallax, cover shuffle on hover/selection
Interaction: Category hover/selection dynamically switches active cover thumbnail group

VIRALYST SUBSTITUTION
New semantic meaning: Content Pillars and Creative Formats
Replacement objects: 44 vertical video frame thumbnails (9:16 aspect) mapping to the 11 content pillars
Replacement copy:
  - H2: "Formats for" (11 chars — exact character match!)
  - Paragraph: "We've got proven blueprints for every niche" (43 chars — exact geometry!)
  - 11 Categories:
    1. Founder Led
    2. Tech & SaaS
    3. E-Commerce
    4. Educational
    5. Culture & News
    6. B2B Insights
    7. Personal Brand
    8. Documentary
    9. Teardowns
    10. Lifestyle
    11. and more!
Assets to replace:
  - The 44 genre book images in `/public/assets/`

LOCKED:
Pink background color (`#ff487a`), 11-category interaction script (`data-genre-interaction`), column widths, transforms, hover detection, layout geometry.
```

---

### 7. Section 6: Benefits (`.benefits`)
```text
REFERENCE SECTION
Purpose: Core membership perks visualized via physics-enabled badges
Visual objects: Rotating circular typographic ribbon (`benefits-text-eng.svg`), central spinning logo circle (`logo-circle-big.svg`), 5 physics pill badges ("Range of genres", "Free shipping", "Affordable", "High quality hardcovers", "Curated books")
Text geometry: 5 short perk labels (1-3 words)
Animation: Matter.js 2D physics / momentum hover effect, continuous 360-degree rotation of circular ribbon
Interaction: Interactive collision and momentum drag/kick on pills

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst Core Platform Advantages
Replacement objects:
  - Circular ribbon SVG: "GROW FASTER / GUESS LESS / TOTAL CLARITY"
  - Center logo: Viralyst circular emblem
Replacement copy:
  - 5 Pills: "Multi-platform signals", "Weekly briefs", "Hook scoring", "High-retention formats", "Zero guesswork"
Assets to replace:
  - `/assets/69b2c25bdf51e00864bcf4f1_benefits-text-eng.svg`
  - `/assets/696a402939e1e6124f2c2b39_logo-circle-big.svg`

LOCKED:
Matter.js physics canvas boundaries, pill border-radius, rotation speeds, font sizes, collision parameters.
```

---

### 8. Section 7: FAQ (`.faq.is--bg-white`)
```text
REFERENCE SECTION
Purpose: Answer common membership, shipping, and pricing questions
Visual objects: White background, H2, accordion items with animated plus/minus icons, rich text answer panels, easter egg button
Text geometry:
  - H2: "Common questions" (16 chars)
  - Q1: 51 chars / A1: 213 chars
  - Q2: 37 chars / A2: 155 chars
  - Q3: 23 chars / A3: 147 chars
Animation: GSAP accordion height tween, icon rotation
Interaction: Click accordion header to toggle expand/collapse

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst Platform FAQ
Replacement objects: Identical native SVG accordion icons
Replacement copy:
  - H2: "Common questions" (16 chars — exact match!)
  - Q1: "How does Viralyst discover winning content so fast?" (51 chars)
    A1: "Our engine tracks millions of public short-form videos across TikTok, Reels, and Shorts daily, analyzing view velocity, audience retention patterns, and audio momentum before trends peak." (189 chars)
  - Q2: "What platforms and niches does Viralyst support?" (48 chars)
    A2: "We track TikTok, Instagram Reels, and YouTube Shorts across B2B, tech, commerce, education, and lifestyle. Contact us at hello@viralyst.io for custom niche intelligence." (171 chars)
  - Q3: "How do I get started with Viralyst?" (35 chars)
    A3: "You can create an account directly on our website. Connect your target niches, choose your content pillars, and unlock your first batch of curated opportunities immediately." (174 chars)
Assets to replace: None (clean HTML/CSS accordion)

LOCKED:
Accordion styling, border lines, typography, expand/collapse duration and easing.
```

---

### 9. Section 8: Gift & Press (`.gift`)
```text
REFERENCE SECTION
Purpose: Gift subscriptions and social proof / media mentions
Visual objects: Curved text banner along SVG path ("A gift outside of the box"), paragraph, CTA button "Shop gifts!", handwritten "Mentioned by", 4 press publication logos (Publishers Weekly, MSNBC, Book Riot, Travel + Leisure), floating package visual
Text geometry:
  - Curved title: "A gift outside of the box" (25 chars)
  - Paragraph: "Gift a subscription and they can pick their own books. No spying on shelves needed. Order today and instantly receive an e-gift card to print out or forward. If you’re lucky, they might let you borrow a copy." (210 chars)
  - Button: "Shop gifts!" (11 chars)
  - Handwritten: "Mentioned by" (12 chars)
Animation: Textpath curve animation, package visual parallax
Interaction: CTA button click

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst for Teams & Enterprise Intelligence
Replacement objects: Publication & media logos, team package visual
Replacement copy:
  - Curved title: "Built for teams who move fast" (29 chars)
  - Paragraph: "Equip your creative team or agency with collective intelligence. Share format blueprints, manage collaborative brief boards, and keep your entire content team aligned on what works today. Ready to scale together?" (212 chars — exact length match!)
  - Button: "Explore Teams" (13 chars)
  - Handwritten: "Recognized by" (13 chars)
Assets to replace:
  - `/assets/69b9afc474f523151b7c0941_package-visual.webp`
  - Press logos if desired, or keep exact dimensions

LOCKED:
SVG curve path, typography size, button layout, press logo flex row alignment.
```

---

### 10. Section 9: Badge Marquee (`.badge`)
```text
REFERENCE SECTION
Purpose: Promotional announcement marquee
Visual objects: Continuous scrolling ticker ribbon
Text geometry: "1st book only  w/ code SUMMER (USA-only)!"
Animation: Infinite CSS marquee loop
Interaction: None

VIRALYST SUBSTITUTION
New semantic meaning: Limited platform intelligence promotion
Replacement objects: Same marquee container
Replacement copy: "Start analyzing free with code VIRAL2026 — 14-day full platform access!" (71 chars)
Assets to replace: None

LOCKED:
Marquee velocity, font styling, ribbon height, background colors.
```

---

### 11. Section 10: Members’ Choice Winners (`.choice.is--outer-clip.is--bg-yellow`)
```text
REFERENCE SECTION
Purpose: Community-voted best books of the year showcase
Visual objects: Yellow background with outer clip path, section title, paragraph, handwritten note, year pill navigation ("20 26", "20 25", "20 24", "20 23"), book carousel with heart badge illustration, confetti/emoji rain trigger
Text geometry:
  - H2: "Members’ Choice Winners" (23 chars)
  - Paragraph: "Every year Aardvarkians vote on their favourite reads and we celebrate with a special reprinting. These titles have won our hearts and minds over the last few years." (165 chars)
  - Handwritten: "Next voting round: Fall 2026" (28 chars)
  - 5 Book cards with titles and covers
Animation: Floating plop-in elements, emoji rain physics, slider drag
Interaction: Year tab filtering, carousel drag, easter egg button

VIRALYST SUBSTITUTION
New semantic meaning: "Hall of Fame: Top Performing Formats" — annual community-validated breakout blueprints
Replacement objects: 5 award-winning vertical reel blueprints with high-impact cover artwork
Replacement copy:
  - H2: "Top Performing Formats" (22 chars — exact match!)
  - Paragraph: "Every quarter our community highlights the highest-retention short-form formats. These proven blueprints generated the strongest organic reach across all tracked categories." (175 chars — exact density!)
  - Handwritten: "Next report drop: Fall 2026" (27 chars — exact match!)
  - Format Titles:
    1. "The Asymmetric Hook"
    2. "The Kinetic Breakdown"
    3. "The Paradox Story"
    4. "The Micro-Experiment"
    5. "The Audio Anchor"
Assets to replace:
  - Choice slider book cover images
  - `choice-heart-illustration.svg`

LOCKED:
Year tab navigation, outer-clip geometry, emoji rain particle system, slider layout.
```

---

### 12. Section 11: Exclusive Showcase (`.exclusive.is--bg-white`)
```text
REFERENCE SECTION
Purpose: Exclusive original anthology drop ("One Bad Night & Other Stories")
Visual objects: White background, H2, badge "Horror anthology by Aardvark authors. No, you can't get it anywhere else.", Goodreads rating pill, CTA "Add to box!", showcase card with cover image, book title, anniversary blurb, author roster, testimonial carousel with star ratings and reviews
Text geometry:
  - H2: "Aardvark Exclusive" (18 chars)
  - Subtitle: "Horror anthology by Aardvark authors. No, you can't get it anywhere else." (73 chars)
  - Rating: "Goodreads Rating 4.0" (20 chars)
  - Button: "Add to box!" (11 chars)
  - Title: "One Bad Night & Other Stories" (29 chars)
  - Description: "Aardvark Book Club launched in October 2022, and we’re celebrating our three-year anniversary with this original horror anthology featuring past 8 Aardvark authors." (166 chars)
  - Authors roster: 8 names
  - 3 Testimonial quotes
Animation: Slider transitions, star icon renders, cover parallax
Interaction: Carousel controls, CTA click

VIRALYST SUBSTITUTION
New semantic meaning: "Viralyst Exclusive: The 100M Views Playbook" — proprietary creator blueprint
Replacement objects: Hardbound playbook vertical artifact visual, rating stars, contributor roster
Replacement copy:
  - H2: "Viralyst Exclusive" (18 chars — exact match!)
  - Subtitle: "Proprietary playbook by top viral creators. No, you can't find it anywhere else." (80 chars)
  - Rating: "Creator Rating 4.9" (18 chars)
  - Button: "Claim brief!" (12 chars)
  - Title: "The 100M Views Playbook" (23 chars)
  - Description: "Viralyst launched to decode short-form video, and we’ve distilled our complete intelligence database into an exhaustive blueprint breaking down 100 multi-million view hooks." (175 chars)
  - Contributor Roster: "Alex Vance, David Mercer, Maya Chen, Kieran Patel, Chloe Moreau, James Thorne, Sarah Lin, Marcus Sterling"
  - Testimonial 1: "“An absolutely phenomenal breakdown of short-form retention mechanics. Completely changed how we script hooks.” - Tristan"
  - Testimonial 2: "“Not a single wasted page. The pacing teardown alone unlocked our first million-view reel.” - Brittany"
  - Testimonial 3: "“The most actionable creator intelligence resource available anywhere.” - Jordan"
Assets to replace:
  - `/assets/6a424be60e9268be5e54b22e_6a4245f0000948e7e39bb2eb_onebadnight2.webp`

LOCKED:
Two-column exclusive layout, rating pill geometry, author chip formatting, testimonial slider controls and stars.
```

---

### 13. Footer (`.footer`)
```text
REFERENCE SECTION
Purpose: Site closing, brand impact, footer navigation, legal notices
Visual objects: Large white Aardvark wordmark SVG (`aardvark-logo.svg`, 295x74), link columns, social media links, copyright notice, legal links
Text geometry:
  - Logo: 295x74 white vector
  - Links: "All Books", "Gifting", "FAQ", "Log-in / Sign-up"
  - Legal: "© 2026 Aardvark Book Club. All rights reserved.", "Privacy Policy", "Terms of Use"
Animation: Parallax reveal on page scroll (`data-footer-parallax=""`)
Interaction: Link navigation

VIRALYST SUBSTITUTION
New semantic meaning: Viralyst platform footer
Replacement objects: Large white Viralyst wordmark SVG fitting exact 295x74 visual footprint
Replacement copy:
  - Links: "Signals", "Formats", "FAQ", "Log-in / Sign-up"
  - Legal: "© 2026 Viralyst Inc. All rights reserved.", "Privacy Policy", "Terms of Use"
Assets to replace:
  - `/assets/696d10ebb91f9b8707240373_aardvark-logo.svg`

LOCKED:
Footer height, padding, column alignments, typography, parallax mechanics.
```
