import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = join(__dirname, '..');
const blogDir = join(rootDir, 'src', 'content', 'blog');
const distDir = join(rootDir, 'dist');

const SITE_URL = 'https://kaichengyang.github.io';

function extractExcerpt(content, maxLen = 160) {
  const plain = content
    .replace(/^#{1,6}\s+.*$/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/[*_`~]+/g, '')
    .replace(/\n{2,}/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
  if (plain.length <= maxLen) return plain;
  return plain.slice(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

// Read the built index.html as template
const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

// Read and parse all published blog posts
const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));

const posts = files
  .map(file => {
    const raw = readFileSync(join(blogDir, file), 'utf-8');
    const { data, content } = matter(raw);
    const slug = basename(file, '.md');
    return { ...data, slug, content };
  })
  .filter(post => post.status === 'published');

let count = 0;

for (const post of posts) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const description = post.excerpt || extractExcerpt(post.content);
  const title = post.title;

  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${title}</title>`
  );

  // Replace existing og:title
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${title}" />`
  );

  // Replace existing og:description
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${description}" />`
  );

  // Add og:url and og:type after og:description
  const ogDescTag = `<meta property="og:description" content="${description}" />`;
  html = html.replace(
    ogDescTag,
    `${ogDescTag}\n    <meta property="og:url" content="${postUrl}" />\n    <meta property="og:type" content="article" />`
  );

  // Add twitter:title and twitter:description after twitter:site
  const twitterSiteTag = '<meta name="twitter:site" content="@yang3kc" />';
  let twitterInsert = `\n    <meta name="twitter:title" content="${title}" />\n    <meta name="twitter:description" content="${description}" />`;

  // Add image tags if post has an image
  if (post.image) {
    const imageUrl = `${SITE_URL}${post.image}`;
    html = html.replace(
      ogDescTag,
      `${ogDescTag}\n    <meta property="og:image" content="${imageUrl}" />`
    );
    // Use summary_large_image for posts with images
    html = html.replace(
      /<meta name="twitter:card" content=".*?" \/>/,
      `<meta name="twitter:card" content="summary_large_image" />`
    );
    twitterInsert += `\n    <meta name="twitter:image" content="${imageUrl}" />`;
  }

  html = html.replace(twitterSiteTag, `${twitterSiteTag}${twitterInsert}`);

  // Write to dist/blog/<slug>/index.html
  const outDir = join(distDir, 'blog', post.slug);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  count++;
}

console.log(`Blog meta pages generated for ${count} post(s)`);
