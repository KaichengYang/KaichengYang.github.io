import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = join(__dirname, '..');
const blogDir = join(rootDir, 'src', 'content', 'blog');
const distDir = join(rootDir, 'dist');

const SITE_URL = 'https://kaichengyang.github.io';
const FEED_TITLE = "Kaicheng Yang's Blog";
const FEED_DESCRIPTION = 'Blog posts by Kaicheng Yang';

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRFC2822(date) {
  // gray-matter may return a Date object or a string
  if (date instanceof Date) return date.toUTCString();
  return new Date(date + 'T12:00:00Z').toUTCString();
}

function extractExcerpt(content, maxLen = 300) {
  // Strip markdown headings, links, images, bold/italic
  const plain = content
    .replace(/^#{1,6}\s+.*$/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/[*_`~]+/g, '')
    .replace(/\n{2,}/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

// Read and parse all blog markdown files
const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));

const posts = files
  .map(file => {
    const raw = readFileSync(join(blogDir, file), 'utf-8');
    const { data, content } = matter(raw);
    const slug = basename(file, '.md');
    return { ...data, slug, content };
  })
  .filter(post => post.status === 'published')
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const items = posts
  .map(post => {
    const link = `${SITE_URL}/blog/${post.slug}`;
    const description = post.content
      ? escapeXml(extractExcerpt(post.content))
      : '';
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRFC2822(post.date)}</pubDate>${description ? `\n      <description>${description}</description>` : ''}
    </item>`;
  })
  .join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

writeFileSync(join(distDir, 'feed.xml'), feed, 'utf-8');
console.log(`RSS feed generated with ${posts.length} post(s) → dist/feed.xml`);
