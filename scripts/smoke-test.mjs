import { readFileSync, existsSync } from 'fs';

const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

function fileExists(path) {
  return existsSync(`dist${path}`);
}

function readFile(path) {
  return readFileSync(`dist${path}`, 'utf-8');
}

// 1. Critical pages exist
const requiredPages = [
  '/index.html',
  '/en/index.html',
  '/404.html',
  '/sitemap-index.xml',
  '/robots.txt',
];
for (const page of requiredPages) {
  check(fileExists(page), `Missing page: ${page}`);
}

// 2. Service pages exist (both languages)
const services = ['aesthetic-podiatry', 'pediatric-care', 'post-surgical', 'professional-care', 'senior-care', 'sports-medicine'];
for (const s of services) {
  check(fileExists(`/services/${s}/index.html`), `Missing UK service page: ${s}`);
  check(fileExists(`/en/services/${s}/index.html`), `Missing EN service page: ${s}`);
}

// 3. Homepage content checks
const ukHome = fileExists('/index.html') ? readFile('/index.html') : '';
const enHome = fileExists('/en/index.html') ? readFile('/en/index.html') : '';

check(ukHome.includes('lang="uk"'), 'UK homepage missing lang="uk"');
check(enHome.includes('lang="en"'), 'EN homepage missing lang="en"');
check(ukHome.includes('PRO STOPY'), 'UK homepage missing brand name');
check(enHome.includes('PRO STOPY'), 'EN homepage missing brand name');
check(ukHome.includes('hreflang'), 'UK homepage missing hreflang tags');
check(enHome.includes('hreflang'), 'EN homepage missing hreflang tags');
check(ukHome.includes('application/ld+json'), 'UK homepage missing JSON-LD');
check(enHome.includes('application/ld+json'), 'EN homepage missing JSON-LD');

// 4. Pages are not suspiciously small (likely broken)
if (ukHome) check(ukHome.length > 5000, `UK homepage too small (${ukHome.length} chars), likely broken`);
if (enHome) check(enHome.length > 5000, `EN homepage too small (${enHome.length} chars), likely broken`);

// 5. robots.txt points to correct domain
if (fileExists('/robots.txt')) {
  const robots = readFile('/robots.txt');
  check(robots.includes('prostopy.com'), 'robots.txt missing prostopy.com');
  check(robots.includes('sitemap'), 'robots.txt missing sitemap reference');
}

// Results
if (errors.length > 0) {
  console.error(`\n❌ Smoke test FAILED (${errors.length} error${errors.length > 1 ? 's' : ''}):\n`);
  errors.forEach((e) => console.error(`  • ${e}`));
  console.error('');
  process.exit(1);
} else {
  console.log(`\n✅ Smoke test passed (${requiredPages.length + services.length * 2 + 8} checks)\n`);
}
