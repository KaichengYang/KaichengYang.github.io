<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Bio from '@/components/bio/Bio.vue'
import NewsList from '@/components/news/NewsList.vue'
import PubsList from '@/components/pubs/PubsList.vue'
import MediaList from '@/components/media/MediaList.vue'
import Footer from '@/components/nav/Footer.vue'
import ToolList from '@/components/tool/ToolList.vue'
</script>

<template>
  <Navbar />
  <div class="container mx-auto max-w-screen-lg">

    <!-- Bio -->
    <Bio />

    <div class="divider divider-primary" />

    <!-- News  -->
    <h2 class="text-4xl font-medium mb-4 flex justify-center" id="news">News</h2>
    <NewsList :is_home="true" />

    <div class="prose text-center mt-4">
      You can also checkout <router-link to="/failures" class="link">my failures</router-link>
    </div>

    <div class="divider divider-primary" />

    <!-- Pubs -->
    <h2 class="text-4xl font-medium mb-2 flex justify-center" id="pubs">Selected publications</h2>
    <p class="prose mb-4 text-center">
      See the longer list <router-link to="/pubs" class="link">here</router-link> or full list from my <a href="https://scholar.google.com/citations?hl=en&user=tqb96X8AAAAJ&view_op=list_works&sortby=pubdate" target="_blank" class="link"> <font-awesome-icon :icon="['fab', 'google-scholar']" class="text-medium" /> Google Scholar</a> page
    </p>
    <PubsList :is_home="true" />

    <div class="divider divider-primary" />

    <!-- Media -->
    <h2 class="text-4xl font-medium mb-4 flex justify-center" id="media">Selected media coverage</h2>
    <MediaList :is_home="true" />

    <div class="divider divider-primary" />

    <!-- Tools -->
    <h2 class="text-4xl font-medium mb-4 flex justify-center" id="tools">Selected tools</h2>
    <ToolList :is_home="true" />

  </div>
  <Footer />
</template>