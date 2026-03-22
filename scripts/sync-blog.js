import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs'
import { join, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SOURCE_DIR = join(__dirname, '..', '..', '..', '..', 'knowledge_base', 'blog', 'published')
const DEST_DIR = join(__dirname, '..', 'src', 'content', 'blog')

// Fields to strip from frontmatter
const STRIP_FIELDS = ['linear', 'type']

function cleanFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return content

  const frontmatter = match[1]
  const body = content.slice(match[0].length)

  const cleanedLines = frontmatter
    .split('\n')
    .filter(line => {
      const key = line.split(':')[0].trim()
      return !STRIP_FIELDS.includes(key)
    })
    .join('\n')

  return `---\n${cleanedLines}\n---${body}`
}

function rewriteObsidianImages(content) {
  // Convert ![[image.png]] to ![](/images/blog/image.png)
  return content.replace(/!\[\[([^\]]+)\]\]/g, (_, filename) => {
    return `![](/images/blog/${filename})`
  })
}

// Ensure destination exists
if (!existsSync(DEST_DIR)) {
  mkdirSync(DEST_DIR, { recursive: true })
}

if (!existsSync(SOURCE_DIR)) {
  console.log(`Source directory not found: ${SOURCE_DIR}`)
  console.log('No blog posts to sync.')
  process.exit(0)
}

const files = readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'))

if (files.length === 0) {
  console.log('No published blog posts found.')
  process.exit(0)
}

let synced = 0
for (const file of files) {
  const sourcePath = join(SOURCE_DIR, file)
  const destPath = join(DEST_DIR, file)

  let content = readFileSync(sourcePath, 'utf-8')
  content = cleanFrontmatter(content)
  content = rewriteObsidianImages(content)

  writeFileSync(destPath, content, 'utf-8')
  synced++
  console.log(`  Synced: ${file}`)
}

console.log(`\nSynced ${synced} blog post(s) to src/content/blog/`)
