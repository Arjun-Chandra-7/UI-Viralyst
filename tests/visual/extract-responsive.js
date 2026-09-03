import { chromium } from 'playwright';
import fs from 'fs';

const viewports = [
  { width: 1920, height: 1080, name: '1920x1080' },
  { width: 1728, height: 1117, name: '1728x1117' },
  { width: 1440, height: 900, name: '1440x900' },
  { width: 1366, height: 768, name: '1366x768' },
  { width: 1280, height: 800, name: '1280x800' },
  { width: 1024, height: 768, name: '1024x768' },
  { width: 768, height: 1024, name: '768x1024' },
  { width: 430, height: 932, name: '430x932' },
  { width: 393, height: 852, name: '393x852' },
  { width: 390, height: 844, name: '390x844' },
  { width: 375, height: 812, name: '375x812' }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = {};

  for (const vp of viewports) {
    console.log(`Analyzing viewport: ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();
    await page.goto('https://www.aardvarkbookclub.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(4000);

    const data = await page.evaluate(() => {
      const htmlStyle = window.getComputedStyle(document.documentElement);
      const bodyStyle = window.getComputedStyle(document.body);
      const header = document.querySelector('header.header');
      const headerStyle = header ? window.getComputedStyle(header) : null;
      const hero = document.querySelector('section.hero');
      const heroTitle = document.querySelector('.hero__title');
      const heroTitleStyle = heroTitle ? window.getComputedStyle(heroTitle) : null;
      const navList = document.querySelector('.header__nav');
      const navToggle = document.querySelector('[data-menu-toggle]');

      const sections = [];
      document.querySelectorAll('header.header, section, footer.footer').forEach(el => {
        const r = el.getBoundingClientRect();
        sections.push({
          tag: el.tagName.toLowerCase(),
          className: el.className,
          y: Math.round(r.y + window.scrollY),
          height: Math.round(r.height),
          width: Math.round(r.width)
        });
      });

      return {
        docHeight: document.documentElement.scrollHeight,
        htmlFontSize: htmlStyle.fontSize,
        bodyFontSize: bodyStyle.fontSize,
        headerHeight: header ? Math.round(header.getBoundingClientRect().height) : null,
        heroTitleFontSize: heroTitleStyle ? heroTitleStyle.fontSize : null,
        heroTitleLineHeight: heroTitleStyle ? heroTitleStyle.lineHeight : null,
        isNavVisible: navList ? window.getComputedStyle(navList).display !== 'none' : false,
        isToggleVisible: navToggle ? window.getComputedStyle(navToggle).display !== 'none' : false,
        sections
      };
    });

    results[vp.name] = data;
    await context.close();
  }

  fs.writeFileSync('reference-analysis/responsive-forensics.json', JSON.stringify(results, null, 2));
  console.log('Saved responsive-forensics.json');
  await browser.close();
})();
