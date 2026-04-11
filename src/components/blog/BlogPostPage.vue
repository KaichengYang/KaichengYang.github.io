<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
import SocialShareButtons from '@/components/blog/SocialShareButtons.vue'
import { useBlogPosts } from '@/composables/useBlogPosts.js'

const route = useRoute()
const { getPost } = useBlogPosts()

const post = computed(() => getPost(route.params.slug))
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      <div v-if="post" class="mx-4 my-8">
        <router-link to="/blog" class="link text-sm mb-4 inline-block">&larr; Back to blog</router-link>
        <h1 class="text-4xl font-bold mt-2 mb-2">{{ post.title }}</h1>
        <div class="flex items-center gap-3 mb-6">
          <span class="text-gray-400">{{ post.date }}</span>
          <span v-if="post.updated" class="text-gray-400">(Updated: {{ post.updated }})</span>
          <span v-for="tag in post.tags" :key="tag" class="badge badge-outline badge-sm">{{ tag }}</span>
        </div>
        <div class="prose max-w-none">
          <component :is="post.component" />
        </div>
        <SocialShareButtons :title="post.title" :slug="post.slug" />
      </div>
      <div v-else class="text-center mt-16">
        <p class="text-xl text-gray-500">Post not found.</p>
        <router-link to="/blog" class="link mt-4 inline-block">&larr; Back to blog</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>
