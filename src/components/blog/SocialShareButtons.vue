<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  slug: String
})

const copied = ref(false)

const url = computed(() => window.location.origin + '/blog/' + props.slug)

const shareLinks = computed(() => [
  {
    name: 'Twitter',
    icon: { prefix: 'fab', icon: 'twitter' },
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(props.title)}&url=${encodeURIComponent(url.value)}`
  },
  {
    name: 'Bluesky',
    icon: { prefix: 'fab', icon: 'bluesky' },
    href: `https://bsky.app/intent/compose?text=${encodeURIComponent(props.title + ' ' + url.value)}`
  },
  {
    name: 'LinkedIn',
    icon: { prefix: 'fab', icon: 'linkedin' },
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url.value)}`
  },
  {
    name: 'Email',
    icon: { prefix: 'fas', icon: 'envelope' },
    href: `mailto:?subject=${encodeURIComponent(props.title)}&body=${encodeURIComponent(url.value)}`
  }
])

async function copyLink() {
  await navigator.clipboard.writeText(url.value)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="flex items-center gap-3 mt-6 pt-4 border-t border-base-300">
    <span class="text-sm text-gray-400">Share:</span>
    <a
      v-for="link in shareLinks"
      :key="link.name"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      :title="'Share on ' + link.name"
      class="text-primary hover:opacity-70 transition-opacity"
    >
      <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" class="text-xl" />
    </a>
    <button
      @click="copyLink"
      :title="copied ? 'Copied!' : 'Copy link'"
      class="text-primary hover:opacity-70 transition-opacity"
    >
      <font-awesome-icon :icon="['fas', 'link']" class="text-xl" />
    </button>
    <span v-if="copied" class="text-sm text-success">Copied!</span>
  </div>
</template>
