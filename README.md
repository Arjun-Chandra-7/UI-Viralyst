# VIRALYST — Autonomous Social Media Management UI

An Awwwards-inspired, cheerful, interactive web application for **VIRALYST** — an automated social media management engine designed for startups, freelancers, individuals, and established businesses.

Inspired by [Aardvark Book Club](https://www.aardvarkbookclub.com), this design pairs retro-modern indie craftsmanship with joyful pastel color palettes, tactile pop buttons with drop shadows, layered organic waves, and a natural-language AI Manager.

---

## 🎨 Visual Identity & Inspiration

- **Typography**: 
  - Headlines: *Obviously Extended Black* (from the Obviously type family by OH no Type Co), paired with Syne 800 and Archivo Black as wide-stance fallbacks.
  - Body: *Plus Jakarta Sans* / *Inter* for clean, legible reading.
  - Handwritten Accents: *Caveat* for friendly editorial annotations (*"Goodbye agency fees 👋"*, *"100% on-brand"*).
- **Color Palettes**:
  - **Warm Yellow Palette** (from design reference): `#FFF8D6`, `#FAED8F` (Butter Yellow), `#FDE047`, `#FACC15`, `#F59E0B` (Amber), `#EA580C` (Orange).
  - **Soft Pink / Orchid Wave Palette**: `#FDF2F8`, `#FCE7F3`, `#F472B6`, `#EC4899`, `#DB2777`.
  - **Cyan / Mint Turquoise Wave Palette**: `#ECFEFF`, `#CFFAFE`, `#67E8F9`, `#22D3EE`, `#06B6D4`.
  - **Base & Contrasts**: Rich deep ink (`#12111A`), pure white, and tactile drop-shadow borders (`box-shadow: 0 6px 0px 0px #12111A`).
- **Tactile Pop Elements**:
  - Pill badges (`Culture & Education`, `Automated Pipeline`, `No Burnout`, `10x Virality`, `GSAP & Transitions`).
  - Tactile press physics with spring offsets.
  - Layered multi-tone SVG waves that roll behind heroes and footers.
  - Rotating curved SVG `<textPath>` marquee ("★ VIRALYST ★ AUTOMATED REELS THAT POP ★").
  - 3D-angled floating smartphone mockup running the interactive **VIRALFEED** video reel player with live like counters, comments, and audio visualizer.

---

## 🚀 Product Architecture

### 1. Intro Screen & Public Landing Page
- **Cute & Lovely Intro Screen**: Playful mascot greeting, cheerful stickers, and smooth reveal.
- **Landing Page**:
  - Multi-shade warm wave hero section with pill tags.
  - Bold Obviously headline: *"EXPAND ONLINE. WITHOUT MAKING REELS 24/7."*
  - The Big Primary Button: **[ Enter VIRALYST ✦ ]** which transitions straight into the client workspace.
  - Interactive smartphone mockup showcasing automated reels.
  - Arched circular text marquee.
  - Side-by-side comparison: *Traditional Agency ($4,500/mo & burnout)* vs *VIRALYST (Autopilot & 10x output)*.

### 2. Client Command Center (5 Core Sections)
1. **HOME (Command Center)**:
   - *"Tell me what matters right now."*
   - Current status 4-badge pipeline: Content being worked on (2), Waiting for approval (1), Scheduled (4), Published (3).
   - This week performance direction (+31% reach spike, reels created/approved/published).
   - What VIRALYST recommends next (3–5 actionable cards).
   - Recent content preview with 1-tap review triggers.
   - Important actions bar.

2. **MANAGER (AI Bot)**:
   - Natural-language interface to the entire VIRALYST system.
   - Rich interactive chat cards:
     - *"What's performing best?"* → educational breakdowns ranking + suggested action + buttons (*Create it*, *Show analysis*, *Ignore*).
     - *"Make me 3 reel ideas for this week"* → 3 clickable idea cards with *Use idea #1/2/3*.
     - *"Make the hook more aggressive"* → live script refinement.
     - *"Schedule this for Friday"* → automated calendar confirmation.
     - *"Why did you choose this script?"* → strategic rationale breakdown.

3. **CREATE (Studio)**:
   - Simple prompt box: *"What do you want to make?"*
   - Optional fine-tune controls: Goal, Topic, Target Audience, Content Style, Desired Duration, CTA, and File attachments.
   - Clean, delightful *"Creating your reel"* animation without exposing internal machinery.
   - VIRALYST Suggestions (*"Why meetings destroy productivity"*, *"The hidden cost of tool overload"*, etc.) with 1-click *Create this* buttons.

4. **CONTENT (Unified Workspace)**:
   - Single-page content management.
   - Tabs: *All*, *In Progress*, *Ready for Review*, *Scheduled*, *Published*, *Archived*.
   - Content Detail Modal with vertical playable video preview, post text, scheduled dates, and Version History toggle (*V1*, *V2*, *Final*).
   - Actions: *Approve & Schedule*, *Request Changes*, and *Ask Manager*.

5. **PERFORMANCE (High-Impact Metrics)**:
   - Answers: *"Is this shit working?"*
   - Top-level cards: Views (248.5K, +28%), Reach (+31%), Engagement, Followers Gained, Shares (+42%), Saves (+19%).
   - Simple ranking: #1 Reel, #2 Reel, #3 Reel.
   - *"What is working"* and *"What isn't working"* plain-English intelligence cards.
   - *"Recommended next moves"* with direct *Create content from this* buttons.

### 3. Essentials
- **Login Modal**: Minimal & direct (*"Welcome to VIRALYST"*, email, password, login).
- **First-Time Setup Wizard**: 4 clean steps (Company details → Growth goals → Content guardrails → Preparing workspace).
- **Settings Modal**: Clean & boring (Account, Brand, Content Preferences, Publishing, Notifications, Team).
- **Notifications Drawer**: Minimal, jargon-free notifications.
- **Help & Concierge Support**: Instant AI Manager assist & human concierge contact.

---

## 🛠️ Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3.4** with custom design token architecture
- **Lucide Icons**
- **Canvas Confetti** for delight micro-interactions
- **SVG Curved TextPath & Wave Morph Generators**

---

## 💻 Getting Started Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
