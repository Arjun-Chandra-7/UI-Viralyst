import { chromium } from 'playwright';

const VIEWPORTS = [
  { name: 'desktop_1920x1080', width: 1920, height: 1080 },
  { name: 'desktop_1728x1117', width: 1728, height: 1117 },
  { name: 'desktop_1440x900', width: 1440, height: 900 },
  { name: 'laptop_1366x768', width: 1366, height: 768 },
  { name: 'laptop_1280x800', width: 1280, height: 800 },
  { name: 'ipad_1024x768', width: 1024, height: 768 },
  { name: 'tablet_768x1024', width: 768, height: 1024 },
  { name: 'mobile_430x932', width: 430, height: 932 },
  { name: 'mobile_393x852', width: 393, height: 852 },
  { name: 'mobile_390x844', width: 390, height: 844 },
  { name: 'mobile_375x812', width: 375, height: 812 }
];

(async () => {
  console.log('=== RUNNING FULL 11-VIEWPORT RESPONSIVE VALIDATION ===');
  const browser = await chromium.launch({ headless: true });
  let hasErrors = false;

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1
    });

    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', err => consoleErrors.push(err.message));

    await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);

    const metrics = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const fontSize = window.getComputedStyle(document.body).fontSize;
      const sections = Array.from(document.querySelectorAll('section')).map(s => ({
        cls: s.className,
        h: s.offsetHeight,
        w: s.offsetWidth
      }));
      return { docW, winW, fontSize, sections };
    });

    const overflow = metrics.docW > metrics.winW;
    const errors = consoleErrors.length;
    console.log(`[${vp.name}] ${vp.width}x${vp.height}: overflow=${overflow} (scrollW: ${metrics.docW}, winW: ${metrics.winW}), fontSize=${metrics.fontSize}, sections=${metrics.sections.length}, errors=${errors}`);

    if (overflow || errors > 0) {
      console.log(`  WARNING on ${vp.name}: overflow=${overflow}, consoleErrors=${JSON.stringify(consoleErrors)}`);
      hasErrors = true;
    }

    await context.close();
  }

  await browser.close();
  if (hasErrors) {
    console.log('Test completed with warnings/errors.');
    process.exit(1);
  } else {
    console.log('ALL 11 VIEWPORTS PASSED WITH ZERO OVERFLOW AND ZERO ERRORS!');
  }
})();
