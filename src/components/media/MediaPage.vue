<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import MediaList from '@/components/media/MediaList.vue'
import Footer from '@/components/nav/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="container mx-auto max-w-screen-lg">
    <h1 class="text-4xl font-bold my-4 text-center">Interviews, quotations, and media coverage</h1>
    <MediaList :is_home="false" />
  </div>
  <Footer />
</template>
