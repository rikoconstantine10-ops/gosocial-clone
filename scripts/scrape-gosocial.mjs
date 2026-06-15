import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const BASE_URL = 'https://gosocial.co.id';
const OUT_DIR = '/home/ubuntu/gosocial-clone/docs/research';
const ASSETS_DIR = '/home/ubuntu/gosocial-clone/public';

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(`${OUT_DIR}/components`, { recursive: true });
fs.mkdirSync(`${ASSETS_DIR}/images`, { recursive: true });

function download(url, dest) {
  return new Promise((resolve) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return download(res.headers.location, dest).then(resolve);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', () => resolve(null));
  });
}

async function scrape() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' });
  const page = await context.newPage();

  console.log('Navigating to gosocial.co.id...');
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Screenshot full page desktop
  await page.screenshot({ path: `${OUT_DIR}/homepage-desktop-1440.png`, fullPage: true });
  console.log('Screenshot desktop done');

  // Extract page content
  const data = await page.evaluate(() => {
    return {
      title: document.title,
      metaDesc: document.querySelector('meta[name=description]')?.content,
      fonts: [...new Set([...document.querySelectorAll('*')].slice(0,300).map(el => getComputedStyle(el).fontFamily))].slice(0,10),
      colors: {
        bg: getComputedStyle(document.body).backgroundColor,
        text: getComputedStyle(document.body).color,
        primary: getComputedStyle(document.querySelector('a') || document.body).color,
      },
      images: [...document.querySelectorAll('img')].map(img => ({ src: img.src, alt: img.alt, w: img.naturalWidth, h: img.naturalHeight })).filter(i => i.src),
      links: [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => h.includes('gosocial.co.id')))],
      navLinks: [...document.querySelectorAll('nav a, header a')].map(a => ({ text: a.textContent.trim(), href: a.href })).filter(a => a.text),
      headings: [...document.querySelectorAll('h1,h2,h3')].slice(0,20).map(h => ({ tag: h.tagName, text: h.textContent.trim().slice(0,100) })),
      sections: [...document.querySelectorAll('section, .section, [class*="section"]')].slice(0,15).map(s => ({
        classes: s.className.toString().slice(0,80),
        text: s.textContent.trim().slice(0,200)
      })),
      cssVars: (() => {
        const styles = getComputedStyle(document.documentElement);
        const vars = {};
        ['--primary', '--secondary', '--accent', '--background', '--text', '--color-primary', '--color-brand'].forEach(v => {
          const val = styles.getPropertyValue(v).trim();
          if (val) vars[v] = val;
        });
        return vars;
      })()
    };
  });

  fs.writeFileSync(`${OUT_DIR}/homepage-data.json`, JSON.stringify(data, null, 2));
  console.log('Data extracted:', JSON.stringify({ title: data.title, images: data.images.length, links: data.links.length, navLinks: data.navLinks.length }));

  // Mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: `${OUT_DIR}/homepage-mobile-390.png`, fullPage: true });
  console.log('Screenshot mobile done');

  // Download images
  let downloaded = 0;
  for (const img of data.images.slice(0, 20)) {
    try {
      const filename = path.basename(img.src.split('?')[0]) || `img-${downloaded}.jpg`;
      await download(img.src, `${ASSETS_DIR}/images/${filename}`);
      downloaded++;
    } catch(e) {}
  }
  console.log(`Downloaded ${downloaded} images`);

  // Now scrape service pages
  const servicePages = data.links.filter(l => l.includes('/service') || l.includes('/layanan')).slice(0, 5);
  const pageData = {};
  for (const url of servicePages) {
    try {
      console.log('Scraping:', url);
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(2000);
      const content = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelector('h1')?.textContent?.trim(),
        headings: [...document.querySelectorAll('h1,h2,h3')].map(h => h.textContent.trim()).slice(0,10),
        body: document.body.innerText.slice(0, 2000)
      }));
      pageData[url] = content;
      const slug = url.split('/').pop() || 'index';
      await page.screenshot({ path: `${OUT_DIR}/${slug}-desktop.png` });
    } catch(e) { console.log('Error scraping', url, e.message); }
  }

  fs.writeFileSync(`${OUT_DIR}/service-pages.json`, JSON.stringify(pageData, null, 2));
  console.log('Service pages scraped:', Object.keys(pageData).length);

  await browser.close();
  console.log('SCRAPE DONE');
}

scrape().catch(e => { console.error('SCRAPE ERROR:', e.message); process.exit(1); });
