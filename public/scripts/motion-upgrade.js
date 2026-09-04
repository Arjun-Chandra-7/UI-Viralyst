(() => {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const waveform = (count = 20) => Array.from({ length: count }, (_, i) =>
    `<i style="--h:${8 + ((i * 13) % 29)}px"></i>`).join('');

  const reelMarkup = (index, caption, accent = '') => `
    <div class="reel-plane reel-plane--${index}" data-reel-plane data-cursor="OPEN">
      <article class="v-reel ${accent}">
        <div class="v-reel__art"></div>
        ${index === 1 ? '<svg class="v-reel__trace" viewBox="0 0 200 38"><path d="M1 25 C22 4 35 34 56 15 S91 3 108 22 S144 36 162 12 S185 8 199 18"/></svg>' : ''}
        <div class="v-reel__meta"><span class="v-reel__id">REEL 0${index}</span><span class="v-reel__time">00:${String(index * 3 + 5).padStart(2, '0')}</span></div>
        <div class="v-reel__caption">${caption}</div>
        <div class="v-reel__progress"></div>
        ${index === 1 ? '<div class="v-reel__analysis"><span>HOOK</span><span>CAPTION</span><span>AUDIO</span><span>CUT</span></div><div class="v-reel__scan"></div>' : ''}
      </article>
    </div>`;

  function buildHero() {
    const visual = q('[data-hero-visual]');
    if (!visual) return;
    visual.innerHTML = `
      <div class="reel-field" data-reel-field data-cursor="EXPLORE" aria-label="A dimensional field of short-form content specimens">
        <div class="reel-field__world">
          <div class="reel-field__orbit"></div>
          ${reelMarkup(4, 'RESET THE <em>FRAME</em>')}
          ${reelMarkup(2, 'SAY THE PART<br>THEY <em>SKIP</em>')}
          ${reelMarkup(5, 'AUDIO LEADS<br>THE <em>CUT</em>')}
          ${reelMarkup(3, 'PROOF BEFORE<br><em>CONTEXT</em>')}
          ${reelMarkup(1, 'THE FIRST FRAME<br><em>CHANGES EVERYTHING</em>', 'is-primary')}
          <div class="reel-field__status">FIELD / 05 SIGNALS</div>
        </div>
      </div>`;

    const field = q('[data-reel-field]');
    const world = q('.reel-field__world', field);
    const planes = qa('[data-reel-plane]', field);
    if (!window.gsap || reduced) return;

    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .fromTo('.header', { yPercent: -110 }, { yPercent: 0, duration: .8 }, 0)
      .fromTo('.hero__eyebrow', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: .8 }, .18)
      .fromTo('.hero__title', { clipPath: 'inset(0 0 100% 0)', yPercent: 14 }, { clipPath: 'inset(0 0 0% 0)', yPercent: 0, duration: 1.05 }, .22)
      .fromTo(['.hero__paragraph', '.hero__actions-wrap', '.hero__proof-strip'], { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .09 }, .48)
      .fromTo(planes, { z: -360, rotationY: i => i % 2 ? 32 : -32, scale: .76, opacity: 0 }, { z: 0, rotationY: 0, scale: 1, opacity: 1, duration: 1.15, stagger: .075 }, .08)
      .to('.reel-plane--1', { z: 42, duration: .65, ease: 'back.out(1.25)' }, 1.05)
      .set('.v-reel__scan', { opacity: 1 }, 1.28)
      .to('.v-reel__scan', { top: '108%', duration: 1.35, ease: 'power2.inOut' }, 1.28)
      .to('.v-reel__analysis', { opacity: 1, duration: .22 }, 1.58)
      .to('.v-reel__analysis', { opacity: 0, duration: .42 }, 2.35)
      .to('.v-reel__scan', { opacity: 0, duration: .2 }, 2.58)
      .to('.reel-plane--1', { z: 0, duration: .7 }, 2.5);

    if (!finePointer) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const render = () => {
      cx += (tx - cx) * .075;
      cy += (ty - cy) * .075;
      world.style.transform = `rotateX(${cy * -3.8}deg) rotateY(${cx * 5.2}deg)`;
      planes.forEach((plane, i) => {
        const depth = 1 - i * .12;
        plane.style.marginLeft = `${cx * 11 * depth}px`;
        plane.style.marginTop = `${cy * 8 * depth}px`;
      });
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > .002) raf = requestAnimationFrame(render);
      else raf = 0;
    };
    const move = event => {
      const rect = field.getBoundingClientRect();
      tx = ((event.clientX - rect.left) / rect.width - .5) * 2;
      ty = ((event.clientY - rect.top) / rect.height - .5) * 2;
      if (!raf) raf = requestAnimationFrame(render);
    };
    field.addEventListener('pointermove', move, { passive: true });
    field.addEventListener('pointerleave', () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(render); });
  }

  function buildScanner() {
    const wrap = q('[data-box-sequence]');
    if (!wrap) return;
    wrap.removeAttribute('data-box-sequence');
    wrap.classList.add('v-scan-wrap');
    wrap.innerHTML = `
      <div class="box__sticky">
        <div class="v-scan-stage" data-cursor="INSPECT">
          <span class="scan-progress">RAW REEL &nbsp;→&nbsp; SHARED PATTERN</span>
          <div class="scan-companion scan-companion--a"></div>
          <div class="scan-companion scan-companion--b"></div>
          <div class="scan-reel">
            <div class="scan-reel__raw"></div>
            <div class="scan-analysis">
              <div class="scan-analysis__item scan-analysis__item--words"><strong>WORDS / HOOK</strong>“Nobody tells you this part.”</div>
              <div class="scan-analysis__item scan-analysis__item--captions"><strong>CAPTIONS / 00:01.2</strong>Emphasis lands with vocal stress.</div>
              <div class="scan-analysis__item scan-analysis__item--visual"><strong>VISUAL / RESET</strong>Proof frame arrives before context.</div>
              <div class="scan-analysis__item scan-analysis__item--audio"><strong>AUDIO / CADENCE</strong><div class="mini-wave">${waveform(28)}</div></div>
              <div class="scan-analysis__item scan-analysis__item--edit"><strong>EDIT / PACING</strong>| 0.8 &nbsp; | 1.4 &nbsp; | 0.7 &nbsp; | 1.2</div>
            </div>
          </div>
          <div class="scan-plane"></div>
          <div class="signal-ribbon">
            <svg viewBox="0 0 150 430" preserveAspectRatio="none"><path d="M4 10 C85 55 22 105 92 150 S32 245 115 286 S69 370 144 420"/><circle cx="90" cy="149" r="6"/><circle cx="114" cy="286" r="6"/></svg>
          </div>
          <div class="shared-pattern">SHARED PATTERN</div>
        </div>
      </div>`;
    if (!window.gsap || reduced) return;
    const reel = q('.scan-reel', wrap);
    const analysis = q('.scan-analysis', wrap);
    const plane = q('.scan-plane', wrap);
    const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: 'top top', end: 'bottom bottom', scrub: .45, invalidateOnRefresh: true } });
    tl
      .fromTo(reel, { rotateY: -5, rotateX: 2, scale: .96 }, { rotateY: 0, rotateX: 0, scale: 1, duration: .15, ease: 'none' })
      .to(plane, { opacity: 1, top: '14%', duration: .12, ease: 'power2.out' }, .15)
      .to(plane, { top: '88%', duration: .34, ease: 'none' }, .31)
      .to(analysis, { clipPath: 'inset(0 0 0% 0)', duration: .34, ease: 'none' }, .31)
      .to(plane, { opacity: 0, duration: .08 }, .65)
      .to('.signal-ribbon', { opacity: 1, duration: .12 }, .66)
      .fromTo('.signal-ribbon path', { drawSVG: '0%' }, { drawSVG: '100%', duration: .14, ease: 'none' }, .66)
      .to(reel, { xPercent: -23, rotateY: 5, duration: .18 }, .78)
      .to('.scan-companion--a', { x: '-255%', y: '-54%', rotateY: 14, rotateZ: -7, opacity: 1, duration: .16 }, .80)
      .to('.scan-companion--b', { x: '112%', y: '-42%', rotateY: -16, rotateZ: 7, opacity: 1, duration: .16 }, .83)
      .to('.shared-pattern', { opacity: 1, y: -8, duration: .1 }, .90);
  }

  function buildSystemFlow() {
    const content = q('#how-it-works .flow__content');
    if (!content) return;
    const flowRoot = q('[data-call-out]', content);
    if (flowRoot) flowRoot.removeAttribute('data-call-out');
    content.classList.add('is-system-flow');
    content.innerHTML = `
      <div class="system-flow">
        <div class="system-flow__steps">
          <article class="system-step is-active"><span class="system-step__index">01 / LEARN</span><h3>Explore the signals</h3><p>Brand, audience, and existing content lock into one working context.</p></article>
          <article class="system-step"><span class="system-step__index">02 / FIND</span><h3>Find relevant content</h3><p>Related Reel specimens are filtered around the central object.</p></article>
          <article class="system-step"><span class="system-step__index">03 / READ</span><h3>Read multimodal signals</h3><p>Words, visuals, captions, audio, and edit rhythm are read together.</p></article>
          <article class="system-step"><span class="system-step__index">04 / MAKE</span><h3>Make content blueprints</h3><p>The strongest shared structures become a shoot-ready direction.</p></article>
        </div>
        <div class="system-flow__stage" data-cursor="EXPLORE">
          <span class="system-input system-input--a">BRAND / DISTINCT</span><span class="system-input system-input--b">AUDIENCE / CURIOUS</span><span class="system-input system-input--c">CONTENT / PROOF-LED</span>
          <div class="system-satellite system-satellite--a"></div><div class="system-satellite system-satellite--b"></div><div class="system-satellite system-satellite--c"></div>
          <div class="system-core"><div class="system-core__v"></div></div><div class="system-lens"></div>
          <div class="system-blueprint"><h4>CONTENT BLUEPRINT</h4><div class="blueprint-row"><b>HOOK</b><span>Show the result before context.</span></div><div class="blueprint-row"><b>BEAT 01</b><span>Frame the contradiction.</span></div><div class="blueprint-row"><b>BEAT 02</b><span>Deliver tactile proof.</span></div><div class="blueprint-row"><b>VISUAL</b><span>Macro detail; hard reset.</span></div><div class="blueprint-row"><b>AUDIO</b><span>Pause at the reveal.</span></div></div>
        </div>
      </div>`;
    if (!window.gsap || reduced) return;
    const steps = qa('.system-step', content);
    const setStep = value => {
      const active = Math.min(3, Math.floor(value * 4));
      steps.forEach((step, i) => step.classList.toggle('is-active', i === active));
    };
    const tl = gsap.timeline({ scrollTrigger: { trigger: content, start: 'top top', end: 'bottom bottom', scrub: .45, onUpdate: self => setStep(self.progress) } });
    tl.to('.system-input', { opacity: 1, x: 0, y: 0, stagger: .04, duration: .22 })
      .to('.system-input', { x: i => i === 1 ? -90 : 90, y: i => i === 2 ? -100 : 80, opacity: 0, duration: .16 }, .22)
      .to('.system-satellite', { opacity: 1, scale: 1, stagger: .04, duration: .18 }, .25)
      .to('.system-satellite', { rotateY: i => i % 2 ? -11 : 11, z: -35, duration: .18 }, .40)
      .to('.system-lens', { opacity: 1, top: '76%', duration: .24, ease: 'none' }, .48)
      .to(['.system-satellite', '.system-lens'], { opacity: 0, duration: .14 }, .70)
      .to('.system-core', { xPercent: -66, rotateY: 8, scale: .87, duration: .2 }, .72)
      .to('.system-blueprint', { opacity: 1, rotate: 0, duration: .22, ease: 'power3.out' }, .75);
  }

  function buildReads() {
    const section = q('[data-benefits]');
    if (!section) return;
    section.removeAttribute('data-benefits');
    section.className = 'benefits reads-system';
    section.innerHTML = `
      <div class="reads-stage">
        <header class="reads-stage__title"><span class="modality__label">[ MULTIMODAL / ONE READ ]</span><h2>What Viralyst reads.</h2><p>Five signal types converge around the same intact piece of content.</p></header>
        <div class="reads-core" data-cursor="OPEN"></div>
        <article class="modality modality--visual" data-cursor="INSPECT"><span class="modality__label">01 / VISUAL</span><h3>Frame changes</h3><div class="artifact-line"><i style="--w:22%;--h:24px"></i><i style="--w:30%;--h:18px"></i><i style="--w:16%;--h:24px"></i></div></article>
        <article class="modality modality--words" data-cursor="INSPECT"><span class="modality__label">02 / WORDS</span><h3>“Nobody tells you…”</h3><div class="artifact-line"><i style="--w:60%;--h:3px"></i><i style="--w:18%;--h:3px"></i></div></article>
        <article class="modality modality--captions" data-cursor="INSPECT"><span class="modality__label">03 / CAPTIONS</span><h3>Timed emphasis</h3><div class="artifact-line"><i style="--w:18%;--h:8px"></i><i style="--w:38%;--h:8px"></i><i style="--w:15%;--h:8px"></i></div></article>
        <article class="modality modality--audio" data-cursor="INSPECT"><span class="modality__label">04 / AUDIO</span><h3>Cadence strand</h3><div class="mini-wave">${waveform(20)}</div></article>
        <article class="modality modality--edit" data-cursor="INSPECT"><span class="modality__label">05 / EDIT</span><h3>Cut velocity</h3><div class="artifact-line"><i style="--w:14%;--h:5px"></i><i style="--w:25%;--h:5px"></i><i style="--w:9%;--h:5px"></i><i style="--w:31%;--h:5px"></i></div></article>
      </div>`;
    if (!window.gsap || reduced) return;
    const modalities = qa('.modality', section);
    const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top top', end: 'bottom bottom', scrub: .5, onUpdate: self => { const active = Math.min(4, Math.floor(self.progress * 5)); modalities.forEach((item, i) => item.classList.toggle('is-active', i === active)); } } });
    modalities.forEach((item, i) => tl.to(item, { opacity: 1, scale: 1, z: 45, duration: .11 }, i * .12).to(item, { opacity: .38, scale: .88, z: -45, duration: .1 }, i * .12 + .12));
    tl.to(modalities, { x: 0, y: 0, z: 20, scale: .55, opacity: .9, duration: .22, stagger: .018 }, .78).to('.reads-core', { scale: 1.1, rotateY: 5, duration: .2 }, .80);
  }

  function buildManager() {
    const section = q('#manager');
    const inner = q('.manager-section__inner', section || document);
    if (!inner) return;
    const curveText = q('[data-tagline-curve-text]', section);
    if (curveText) curveText.textContent = 'ASK → SURFACE → MAKE • ASK → SURFACE → MAKE • ASK → SURFACE → MAKE';
    inner.classList.add('manager-system');
    inner.innerHTML = `
      <div><span class="manager-section__badge">[ MANAGER / CREATIVE DIRECTION ]</span><h2 class="manager-question">What should we <em>make next?</em></h2><p class="u-paragraph-large">Manager connects an observed pattern to an executable hook and visual direction.</p><a data-button-alt href="#login" class="button-alt w-inline-block"><span class="button-alt__text-wrap"><span class="button-alt__bg"></span><span class="button-alt__text-outer"><span class="button-alt__text">Open Manager</span></span></span></a></div>
      <div class="manager-orbit" data-cursor="EXPLORE"><div class="manager-object manager-object--pattern" data-cursor="WHY THIS?"><span class="manager-object__hint">WHY THIS?</span></div><div class="manager-object manager-object--hook" data-cursor="VIEW SIGNALS"><span class="manager-object__hint">VIEW SIGNALS</span></div><div class="manager-object manager-object--reel" data-cursor="OPEN"><span class="manager-object__hint">OPEN DIRECTION</span></div></div>`;
    if (!window.gsap || reduced) return;
    gsap.from('.manager-object', { scrollTrigger: { trigger: section, start: 'top 72%' }, y: 70, z: -160, rotateX: 14, opacity: 0, stagger: .12, duration: .8, ease: 'power3.out' });
  }

  function buildCodex() {
    const section = q('.exclusive.exclusive-midnight');
    const inner = q('.exclusive__inner', section || document);
    if (!inner) return;
    inner.classList.add('codex-system');
    inner.innerHTML = `
      <div class="codex-copy"><span class="modality__label">[ CONTENT CODEX / SHOOT-READY ]</span><h2>From signal to production.</h2><p class="u-paragraph-large">A layered production artifact combining hook architecture, shot direction, edit timing, and acoustic cadence.</p><a data-button-alt href="#login" class="button-alt w-inline-block" data-cursor="OPEN"><span class="button-alt__text-wrap"><span class="button-alt__bg"></span><span class="button-alt__text-outer"><span class="button-alt__text">Build a blueprint</span></span></span></a></div>
      <div class="content-codex" data-cursor="EXPLORE"><div class="codex-layer codex-layer--timeline"><span class="codex-label">EDIT TIMELINE / 00:18</span><div class="codex-big">CUT / HOLD / RESET</div></div><div class="codex-layer codex-layer--shot"><span class="codex-label">SHOTBOARD / VISUAL DIRECTION</span><div class="codex-big">MACRO PROOF<br>BEFORE CONTEXT</div></div><div class="codex-layer codex-layer--hook"><span class="codex-label">HOOK ARCHITECTURE / CONTRARIAN</span><div class="codex-big">“THE PART NOBODY SHOWS YOU.”</div></div><div class="codex-layer codex-layer--wave"><span class="codex-label">AUDIO NOTE / PAUSE AT REVEAL</span><div class="codex-bars">${waveform(34)}</div></div></div>`;
    if (!window.gsap || reduced) return;
    gsap.from('.codex-layer', { scrollTrigger: { trigger: section, start: 'top 75%' }, x: i => (i - 1.5) * 90, y: i => 170 - i * 80, z: -250, opacity: 0, rotateZ: i => i % 2 ? 18 : -18, stagger: .08, duration: 1, ease: 'power3.out' });
  }

  function enhanceSignals() {
    qa('[data-books-slider-item]').forEach(item => item.setAttribute('data-cursor', 'OPEN'));
    if (!window.gsap || reduced) return;
    qa('.books-slider__item').forEach(item => {
      item.addEventListener('pointermove', event => {
        if (!finePointer) return;
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        gsap.to(q('.signal-jacket-cover', item), { x: x * 8, y: y * 6, rotateY: x * 3, rotateX: y * -2, duration: .45, ease: 'power2.out', overwrite: true });
      }, { passive: true });
      item.addEventListener('pointerleave', () => gsap.to(q('.signal-jacket-cover', item), { x: 0, y: 0, rotateY: 0, rotateX: 0, duration: .6, ease: 'power3.out', overwrite: true }));
    });
  }

  function initNavigation() {
    const header = q('.header');
    if (!header) return;
    addEventListener('scroll', () => header.classList.toggle('is-motion-compact', scrollY > 80), { passive: true });
    const links = qa('.header__nav a[href^="#"]');
    const sections = links.map(link => q(link.getAttribute('href'))).filter(Boolean);
    const darkSections = new Set(['reads-system', 'exclusive-midnight']);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('is-section-active', link.getAttribute('href') === `#${entry.target.id}`));
      header.classList.toggle('is-on-dark', [...darkSections].some(name => entry.target.classList.contains(name)));
    }), { rootMargin: '-35% 0px -55%' });
    [...new Set([...sections, q('.reads-system'), q('.exclusive-midnight')].filter(Boolean))].forEach(section => observer.observe(section));
  }

  function initScrollVelocity() {
    if (!window.ScrollTrigger || !window.gsap || reduced) return;
    const headerCopy = q('.books__header-content');
    if (!headerCopy) return;
    let settle;
    ScrollTrigger.create({
      trigger: '#signals',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: self => {
        const skew = Math.max(-1.2, Math.min(1.2, self.getVelocity() / -1800));
        gsap.to(headerCopy, { skewX: skew, duration: .16, ease: 'power2.out', overwrite: true });
        settle?.kill();
        settle = gsap.delayedCall(.09, () => gsap.to(headerCopy, { skewX: 0, duration: .45, ease: 'power3.out', overwrite: true }));
      }
    });
  }

  function initCursorAndMagnetism() {
    if (!finePointer || reduced) return;
    const cursor = document.createElement('div');
    cursor.className = 'v-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.append(cursor);
    document.body.classList.add('has-v-cursor');
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    const loop = () => { cx += (x - cx) * .22; cy += (y - cy) * .22; cursor.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`; requestAnimationFrame(loop); };
    loop();
    addEventListener('pointermove', event => { x = event.clientX; y = event.clientY; cursor.classList.add('is-visible'); }, { passive: true });
    addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
    document.addEventListener('pointerover', event => {
      const target = event.target.closest('[data-cursor],a,button');
      const label = target?.dataset.cursor || (target?.matches('.button-alt,[data-button-alt]') ? 'OPEN' : '');
      cursor.dataset.label = label;
      cursor.classList.toggle('is-label', Boolean(label));
    });
    document.addEventListener('pointerout', event => { if (!event.relatedTarget?.closest?.('[data-cursor],a,button')) cursor.classList.remove('is-label'); });
    qa('.button-alt,[data-button-alt]').forEach(button => {
      button.addEventListener('pointermove', event => { const rect = button.getBoundingClientRect(); gsap.to(button, { x: (event.clientX - rect.left - rect.width / 2) * .12, y: (event.clientY - rect.top - rect.height / 2) * .16, duration: .25, ease: 'power2.out' }); });
      button.addEventListener('pointerleave', () => gsap.to(button, { x: 0, y: 0, duration: .45, ease: 'back.out(2)' }));
    });
  }

  function cleanupCopy() {
    qa('.footer__form-title').forEach(el => el.textContent = 'Get the Viralyst field notes');
    qa('.form__submit, .button-alt__text').forEach(el => { if (el.textContent.trim() === 'Subscribe') el.textContent = 'Get field notes'; });
    const signup = q('.pop-up__overlay-title');
    if (signup) signup.textContent = 'Ready to know what works?';
  }

  function init() {
    buildHero();
    buildScanner();
    buildSystemFlow();
    buildReads();
    buildManager();
    buildCodex();
    enhanceSignals();
    cleanupCopy();
    initNavigation();
    initScrollVelocity();
    initCursorAndMagnetism();
    if (window.ScrollTrigger) requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
