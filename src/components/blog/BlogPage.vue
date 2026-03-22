<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
import BlogList from '@/components/blog/BlogList.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      <h1 class="text-4xl font-bold my-4 text-center">
        Blog
        <a href="/feed.xml" target="_blank" title="RSS Feed" class="ml-2 text-orange-500 hover:text-orange-600">
          <font-awesome-icon :icon="['fas', 'rss']" class="text-2xl align-middle" />
        </a>
      </h1>
      <BlogList />
    </div>
    <Footer />
  </div>
</template>
