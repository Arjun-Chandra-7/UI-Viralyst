import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const REF_DIR = path.resolve('visual-results/reference');
const LOCAL_DIR = path.resolve('visual-results/local');
const DIFF_DIR = path.resolve('visual-results/diff');
const OVERLAY_DIR = path.resolve('visual-results/overlay');

fs.mkdirSync(DIFF_DIR, { recursive: true });
fs.mkdirSync(OVERLAY_DIR, { recursive: true });

function readPNG(filePath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath).pipe(new PNG());
    stream.on('parsed', function () {
      resolve(this);
    });
    stream.on('error', reject);
  });
}

function writePNG(png, filePath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filePath);
    png.pack().pipe(stream);
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

(async () => {
  console.log('=== VISUAL REGRESSION & PIXEL DIFF COMPARISON ===');

  if (!fs.existsSync(REF_DIR) || !fs.existsSync(LOCAL_DIR)) {
    console.error('Both reference and local screenshot directories must exist.');
    process.exit(1);
  }

  const refFiles = fs.readdirSync(REF_DIR).filter(f => f.endsWith('.png'));
  const localFiles = fs.readdirSync(LOCAL_DIR).filter(f => f.endsWith('.png'));

  const commonFiles = refFiles.filter(f => localFiles.includes(f));
  console.log(`Found ${commonFiles.length} common checkpoint images to compare.`);

  const results = [];

  for (const filename of commonFiles) {
    const refPath = path.join(REF_DIR, filename);
    const localPath = path.join(LOCAL_DIR, filename);
    const diffPath = path.join(DIFF_DIR, filename);
    const overlayPath = path.join(OVERLAY_DIR, filename);

    try {
      const imgRef = await readPNG(refPath);
      const imgLoc = await readPNG(localPath);

      // Handle dimension mismatch by clamping or matching
      const width = Math.min(imgRef.width, imgLoc.width);
      const height = Math.min(imgRef.height, imgLoc.height);

      const diff = new PNG({ width, height });
      const overlay = new PNG({ width, height });

      // Build 50/50 blend overlay
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (width * y + x) << 2;
          const rIdx = (imgRef.width * y + x) << 2;
          const lIdx = (imgLoc.width * y + x) << 2;

          overlay.data[idx] = Math.round((imgRef.data[rIdx] + imgLoc.data[lIdx]) / 2);
          overlay.data[idx + 1] = Math.round((imgRef.data[rIdx + 1] + imgLoc.data[lIdx + 1]) / 2);
          overlay.data[idx + 2] = Math.round((imgRef.data[rIdx + 2] + imgLoc.data[lIdx + 2]) / 2);
          overlay.data[idx + 3] = 255;
        }
      }

      // Pixelmatch comparison
      // crop buffers to match width/height
      const refCropped = new PNG({ width, height });
      const locCropped = new PNG({ width, height });
      PNG.bitblt(imgRef, refCropped, 0, 0, width, height, 0, 0);
      PNG.bitblt(imgLoc, locCropped, 0, 0, width, height, 0, 0);

      const numDiffPixels = pixelmatch(
        refCropped.data,
        locCropped.data,
        diff.data,
        width,
        height,
        { threshold: 0.1 }
      );

      const totalPixels = width * height;
      const diffPercent = ((numDiffPixels / totalPixels) * 100).toFixed(2);

      await writePNG(diff, diffPath);
      await writePNG(overlay, overlayPath);

      results.push({
        checkpoint: filename.replace('.png', ''),
        width,
        height,
        diffPixels: numDiffPixels,
        totalPixels,
        diffPercent: parseFloat(diffPercent)
      });

      console.log(`[DIFF] ${filename}: ${numDiffPixels} diff pixels (${diffPercent}% divergence)`);
    } catch (err) {
      console.error(`Error comparing ${filename}:`, err);
    }
  }

  fs.writeFileSync('visual-results/diff-summary.json', JSON.stringify(results, null, 2));
  console.log('\nDiff comparison complete. Saved visual-results/diff-summary.json');
})();
