const modules = import.meta.glob('../content/blog/*.md', { eager: true })

function extractExcerpt(component) {
  // We'll use the first ~160 chars of the raw markdown body as excerpt
  // This is extracted from frontmatter's excerpt field if available
  return null
}

function getAllPosts() {
  const posts = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').pop().replace('.md', '')

    return {
      slug,
      title: mod.title || slug,
      rawDate: mod.date || '',
      date: mod.date ? new Date(mod.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
      tags: mod.tags || [],
      rawUpdated: mod.updated || '',
      updated: mod.updated ? new Date(mod.updated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
      excerpt: mod.excerpt || '',
      status: mod.status || 'published',
      image: mod.image || '',
      component: mod.default,
    }
  })

  // Only show published posts, sorted by date descending
  return posts
    .filter(p => p.status === 'published')
    .sort((a, b) => (b.rawDate || '').localeCompare(a.rawDate || ''))
}

export function useBlogPosts() {
  const posts = getAllPosts()

  function getPost(slug) {
    return posts.find(p => p.slug === slug) || null
  }

  return { posts, getPost }
}
