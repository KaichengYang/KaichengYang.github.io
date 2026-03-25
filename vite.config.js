import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import anchor from 'markdown-it-anchor'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(anchor, { permalink: false })

        // Open external links in new tabs
        const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options)
        }
        md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
          const href = tokens[idx].attrGet('href')
          if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
            tokens[idx].attrSet('target', '_blank')
            tokens[idx].attrSet('rel', 'noopener noreferrer')
          }
          return defaultRender(tokens, idx, options, env, self)
        }
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})