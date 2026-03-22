const modules = import.meta.glob('../content/blog/*.md', { eager: true })

function extractExcerpt(component) {
  // We'll use the first ~160 chars of the raw markdown body as excerpt
  // This is extracted from frontmatter's excerpt field if available
  return null
}

function getAllPosts() {
  const posts = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').pop().replace('.md', '')
    const fm = mod.frontmatter || {}

    return {
      slug,
      title: fm.title || slug,
      date: fm.date || '',
      tags: fm.tags || [],
      excerpt: fm.excerpt || '',
      status: fm.status || 'published',
      component: mod.default,
    }
  })

  // Only show published posts, sorted by date descending
  return posts
    .filter(p => p.status === 'published')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

export function useBlogPosts() {
  const posts = getAllPosts()

  function getPost(slug) {
    return posts.find(p => p.slug === slug) || null
  }

  return { posts, getPost }
}
