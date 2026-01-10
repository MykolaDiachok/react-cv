import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { chromium } from 'playwright';

/**
 * Generates a static PDF from the already-built Astro site.
 *
 * Contract:
 * - Input: `dist/` folder must exist (run after `astro build`).
 * - Output: writes `dist/mykola diachok.pdf` and `public/mykola diachok.pdf`.
 *
 * Why both outputs?
 * - `dist/mykola diachok.pdf` ensures the deployed artifact contains the PDF.
 * - `public/mykola diachok.pdf` keeps a stable local path for dev preview and makes it easy to commit if desired.
 */

const root = resolve(process.cwd());
const distDir = resolve(root, 'dist');
const publicDir = resolve(root, 'public');

const pdfFileDist = resolve(distDir, 'mykola diachok.pdf');
const pdfFilePublic = resolve(publicDir, 'mykola diachok.pdf');

const distIndex = resolve(distDir, 'resume-print', 'index.html');

const ensureDir = (filePath) => {
  mkdirSync(dirname(filePath), { recursive: true });
};

if (!existsSync(distIndex)) {
  throw new Error(
    `dist/resume-print/index.html not found at ${distIndex}. Run \`npm run build\` before generating the PDF.`,
  );
}

const fileUrl = new URL(`file:///${distIndex.replace(/\\/g, '/')}`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

await page.goto(fileUrl.toString(), { waitUntil: 'networkidle' });

// Make sure the page uses correct media styles when generating PDF.
await page.emulateMedia({ media: 'print' });

const pdfBuffer = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
});

await browser.close();

ensureDir(pdfFileDist);
writeFileSync(pdfFileDist, pdfBuffer);

ensureDir(pdfFilePublic);
writeFileSync(pdfFilePublic, pdfBuffer);

console.log(`Generated PDF:\n- ${pdfFileDist}\n- ${pdfFilePublic}`);
