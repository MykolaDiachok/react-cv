import { writeFileSync } from 'node:fs';
import { Readable } from 'node:stream';
import { SitemapStream, streamToPromise } from 'sitemap';
const baseUrl = 'https://mykoladiachok.github.io/react-cv';
const links = [
    { url: '/', changefreq: 'monthly', priority: 1 },
    // { url: '/uk', changefreq: 'monthly', priority: 0.8 },
    // { url: '/hr', changefreq: 'monthly', priority: 0.8 },
];
const sitemap = new SitemapStream({ hostname: baseUrl });
const xml = await streamToPromise(Readable.from(links).pipe(sitemap));
writeFileSync('./public/sitemap.xml', xml.toString());
