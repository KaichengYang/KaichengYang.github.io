<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
import NewsList from '@/components/news/NewsList.vue'
</script>

<template>
  <Navbar />
  <div class="container mx-auto max-w-screen-lg">
    <h1 class="text-4xl font-bold my-4 text-center">News</h1>
    <NewsList :is_home="false" />
  </div>
  <Footer />
</template>