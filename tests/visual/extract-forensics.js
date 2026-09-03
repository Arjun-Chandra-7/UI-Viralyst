import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  console.log('Launching browser for deep forensic extraction...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  // Listen to network to catch all fonts, images, webflow assets
  const networkAssets = [];
  page.on('response', (res) => {
    const url = res.url();
    const type = res.request().resourceType();
    networkAssets.push({ url, type, status: res.status() });
  });

  await page.goto('https://www.aardvarkbookclub.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  // Wait for initial loader / settle
  await page.waitForTimeout(6000);

  // Extract forensic data
  const forensics = await page.evaluate(() => {
    const getClassName = (el) => {
      if (!el.className) return '';
      if (typeof el.className === 'string') return el.className;
      if (typeof el.className.baseVal === 'string') return el.className.baseVal;
      return '';
    };

    // 1. Root & Body computed styles
    const rootStyles = window.getComputedStyle(document.documentElement);
    const bodyStyles = window.getComputedStyle(document.body);

    const cssVars = {};
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        for (let j = 0; j < sheet.cssRules.length; j++) {
          const rule = sheet.cssRules[j];
          if (rule.selectorText === ':root' || rule.selectorText === 'html' || rule.selectorText === 'body') {
            for (let k = 0; k < rule.style.length; k++) {
              const name = rule.style[k];
              if (name.startsWith('--')) {
                cssVars[name] = rule.style.getPropertyValue(name).trim();
              }
            }
          }
        }
      } catch (e) {}
    }

    // 2. All @font-face rules
    const fontFaces = [];
    for (let i = 0; i < document.styleSheets.length; i++) {
      try {
        const sheet = document.styleSheets[i];
        for (let j = 0; j < sheet.cssRules.length; j++) {
          const rule = sheet.cssRules[j];
          if (rule.type === CSSRule.FONT_FACE_RULE) {
            fontFaces.push({
              family: rule.style.getPropertyValue('font-family'),
              weight: rule.style.getPropertyValue('font-weight'),
              style: rule.style.getPropertyValue('font-style'),
              src: rule.style.getPropertyValue('src'),
              display: rule.style.getPropertyValue('font-display')
            });
          }
        }
      } catch (e) {}
    }

    // 3. Section map & geometry
    const docHeight = document.documentElement.scrollHeight;
    const docWidth = document.documentElement.scrollWidth;

    const sections = [];
    const elementsToMeasure = document.querySelectorAll(
      'header, nav, section, footer, main, [data-header], [data-intro-home], [data-hero-sequence], [data-transition-wrap], [class*="section"], [class*="hero"], [class*="nav"], [class*="footer"]'
    );

    elementsToMeasure.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      const cName = getClassName(el);
      const sel = el.id ? `#${el.id}` : (cName ? `.${cName.trim().split(/\s+/).join('.')}` : el.tagName.toLowerCase());
      
      sections.push({
        index: idx,
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        className: cName || null,
        selector: sel,
        dataAttrs: Object.fromEntries(Object.entries(el.dataset)),
        rect: {
          x: Math.round(rect.x + window.scrollX),
          y: Math.round(rect.y + window.scrollY),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        },
        styles: {
          display: style.display,
          position: style.position,
          top: style.top,
          backgroundColor: style.backgroundColor,
          color: style.color,
          padding: `${style.paddingTop} ${style.paddingRight} ${style.paddingBottom} ${style.paddingLeft}`,
          margin: `${style.marginTop} ${style.marginRight} ${style.marginBottom} ${style.marginLeft}`,
          zIndex: style.zIndex,
          overflow: style.overflow
        }
      });
    });

    // 4. All Images
    const images = [];
    document.querySelectorAll('img').forEach((img, i) => {
      const rect = img.getBoundingClientRect();
      const style = window.getComputedStyle(img);
      images.push({
        index: i,
        src: img.src,
        currentSrc: img.currentSrc,
        alt: img.alt,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        renderedWidth: Math.round(rect.width),
        renderedHeight: Math.round(rect.height),
        rect: {
          x: Math.round(rect.x + window.scrollX),
          y: Math.round(rect.y + window.scrollY),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        },
        objectFit: style.objectFit,
        objectPosition: style.objectPosition,
        borderRadius: style.borderRadius,
        className: getClassName(img)
      });
    });

    // 5. All SVGs
    const svgs = [];
    document.querySelectorAll('svg').forEach((svg, i) => {
      const rect = svg.getBoundingClientRect();
      svgs.push({
        index: i,
        viewBox: svg.getAttribute('viewBox'),
        width: svg.getAttribute('width') || Math.round(rect.width),
        height: svg.getAttribute('height') || Math.round(rect.height),
        className: getClassName(svg),
        outerHTML: svg.outerHTML.slice(0, 1000)
      });
    });

    // 6. Canvas & Sequence elements
    const canvases = [];
    document.querySelectorAll('canvas, [data-hero-sequence], [data-box-sequence], [data-frames]').forEach((el) => {
      canvases.push({
        tag: el.tagName.toLowerCase(),
        dataset: Object.fromEntries(Object.entries(el.dataset)),
        rect: el.getBoundingClientRect()
      });
    });

    // 7. Typography inventory across all heading and paragraph tags
    const typography = [];
    const textEls = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span, [class*="heading"], [class*="text"]');
    const seenType = new Set();
    textEls.forEach((el) => {
      const text = el.innerText?.trim();
      if (!text || text.length === 0) return;
      const s = window.getComputedStyle(el);
      const key = `${s.fontFamily}|${s.fontSize}|${s.fontWeight}|${s.lineHeight}|${s.letterSpacing}|${s.color}`;
      if (!seenType.has(key)) {
        seenType.add(key);
        typography.push({
          sample: text.slice(0, 50),
          tag: el.tagName.toLowerCase(),
          className: getClassName(el),
          fontFamily: s.fontFamily,
          fontSize: s.fontSize,
          fontWeight: s.fontWeight,
          fontStyle: s.fontStyle,
          lineHeight: s.lineHeight,
          letterSpacing: s.letterSpacing,
          textTransform: s.textTransform,
          color: s.color
        });
      }
    });

    return {
      docDimensions: { width: docWidth, height: docHeight },
      bodyStyles: {
        fontFamily: bodyStyles.fontFamily,
        fontSize: bodyStyles.fontSize,
        backgroundColor: bodyStyles.backgroundColor,
        color: bodyStyles.color,
        lineHeight: bodyStyles.lineHeight
      },
      cssVars,
      fontFaces,
      sections,
      images,
      svgs,
      canvases,
      typography
    };
  });

  // Save network assets
  fs.writeFileSync('reference-analysis/network-assets.json', JSON.stringify(networkAssets, null, 2));
  fs.writeFileSync('reference-analysis/forensics-1440.json', JSON.stringify(forensics, null, 2));

  // Save full rendered DOM HTML
  const renderedHTML = await page.content();
  fs.writeFileSync('reference-analysis/rendered-dom.html', renderedHTML);

  console.log('Forensics extraction complete.');
  console.log(`Document height: ${forensics.docDimensions.height}px, width: ${forensics.docDimensions.width}px`);
  console.log(`Measured ${forensics.sections.length} section elements`);
  console.log(`Found ${forensics.fontFaces.length} @font-face declarations`);
  console.log(`Found ${forensics.images.length} images`);
  console.log(`Found ${forensics.svgs.length} SVGs`);
  console.log(`Found ${forensics.canvases.length} canvas/sequence elements`);
  console.log(`Found ${forensics.typography.length} distinct typography signatures`);

  await browser.close();
})();
