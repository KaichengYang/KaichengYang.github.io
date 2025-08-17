<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import LabIntro from '@/components/lab/LabIntro.vue'
import NewsList from '@/components/news/NewsList.vue'
import PubsList from '@/components/pubs/PubsList.vue'
import MediaList from '@/components/media/MediaList.vue'
import Footer from '@/components/nav/Footer.vue'
import ToolList from '@/components/tool/ToolList.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">

      <!-- Lab Introduction -->
      <LabIntro />

      <div class="divider divider-primary" />

      <!-- News  -->
      <h2 class="text-4xl font-medium mb-4 flex justify-center" id="news">News</h2>
      <p class="prose mb-4 text-center">
        Follow us on <a href="https://twitter.com/yang3kc" class="link"><font-awesome-icon :icon="['fab', 'twitter']" class="mr-1" target="_blank"/>Twitter/X</a> and <a href="https://bsky.app/profile/yang3kc.bsky.social" class="link"><font-awesome-icon :icon="['fab', 'bluesky']" class="mr-1" target="_blank"/>Blue Sky</a> for updates
      </p>
      <NewsList :is_home="true" />

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
  </div>
</template>