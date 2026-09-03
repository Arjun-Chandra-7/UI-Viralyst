import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { name: 'desktop_1440', width: 1440, height: 900 },
  { name: 'desktop_1920', width: 1920, height: 1080 },
  { name: 'desktop_1280', width: 1280, height: 800 },
  { name: 'tablet_768', width: 768, height: 1024 },
  { name: 'mobile_390', width: 390, height: 844 }
];

const OUT_DIR = path.resolve('visual-results/local');
fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  console.log('=== CAPTURING LOCAL CHECKPOINTS ===');
  const browser = await chromium.launch({ headless: true });

  for (const vp of VIEWPORTS) {
    console.log(`\n--- Capturing local at viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();

    // Listen to console to catch any errors
    page.on('console', msg => {
      if (msg.type() === 'error') console.log(`[Browser Console Error] ${msg.text()}`);
    });
    page.on('pageerror', err => console.log(`[Browser Page Error] ${err.message}`));

    // 1. Intro sequence capture (only needed on 1440)
    if (vp.name === 'desktop_1440') {
      console.log('Capturing intro sequence frames...');
      await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
      await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_intro_t0.png`) });
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_intro_logo.png`) });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_intro_reveal.png`) });
      await page.waitForTimeout(3000);
    } else {
      await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(4500);
    }

    // 2. Hero Settled
    console.log('Capturing hero settled...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_hero_settled.png`) });

    // 3. Books Section
    console.log('Capturing books section...');
    await page.evaluate(() => {
      const el = document.querySelector('.books, section.books');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_section_books.png`) });

    // 4. Flow Section
    console.log('Capturing flow section...');
    await page.evaluate(() => {
      const el = document.querySelector('.flow, section.flow');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_section_flow.png`) });

    // 5. Box Sequence
    console.log('Capturing box sequence...');
    await page.evaluate(() => {
      const el = document.querySelector('.box, section.box');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_section_box.png`) });

    // 6. Genre Section
    console.log('Capturing genre section...');
    await page.evaluate(() => {
      const el = document.querySelector('.genre, section.genre');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_section_genre.png`) });

    // 7. Benefits Section
    console.log('Capturing benefits section...');
    await page.evaluate(() => {
      const el = document.querySelector('.benefits, section.benefits');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_section_benefits.png`) });

    // 8. FAQ Section & Interaction
    console.log('Capturing FAQ section & interaction...');
    await page.evaluate(() => {
      const el = document.querySelector('.faq, section.faq');
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_section_faq.png`) });

    // Click FAQ item
    try {
      const faqItem = await page.$('.faq [data-accordion], .faq details');
      if (faqItem) {
        await faqItem.click();
        await page.waitForTimeout(600);
        await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_faq_opened.png`) });
      }
    } catch (e) {}

    // 9. Footer
    console.log('Capturing footer...');
    await page.evaluate(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_footer.png`) });

    // 10. Menu open state
    console.log('Capturing menu interaction...');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    try {
      const toggle = await page.$('[data-menu-toggle]');
      if (toggle) {
        await toggle.click();
        await page.waitForTimeout(600);
        await page.screenshot({ path: path.join(OUT_DIR, `${vp.name}_menu_open.png`) });
      }
    } catch (e) {}

    await context.close();
  }

  console.log('Local capture complete. All files saved to visual-results/local/');
  await browser.close();
})();
