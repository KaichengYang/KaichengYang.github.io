<script setup>
import { useBlogPosts } from '@/composables/useBlogPosts.js'
import BlogBlock from '@/components/blog/BlogBlock.vue'

const { posts } = useBlogPosts()
</script>

<template>
  <div class="mx-4">
    <div v-if="posts.length === 0" class="text-center text-gray-500 mt-8">
      <p>No blog posts yet. Check back soon!</p>
    </div>
    <div v-else>
      <BlogBlock v-for="post in posts" :key="post.slug" :post="post" />
    </div>
  </div>
</template>
