<template>
  <Navbar />
  <div class="container mx-auto max-w-screen-lg">
    <h1 class="text-4xl font-bold mt-4 text-center">Selected publications</h1>
    <p class="prose mb-4 text-center">
      See <a href="https://scholar.google.com/citations?hl=en&user=tqb96X8AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" class="link"> <font-awesome-icon :icon="['fab', 'google-scholar']" class="text-medium" /> Google Scholar</a> for full list of publications
    </p>
    <PubsList :is_home="false" />
  </div>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import PubsList from '@/components/pubs/PubsList.vue'
import Footer from '@/components/nav/Footer.vue'
</script>