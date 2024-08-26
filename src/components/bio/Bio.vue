<script setup>
import { ref } from 'vue'

const contact_links = ref([
  {
    name: 'Email',
    icon: {prefix: 'fas', icon: 'envelope'},
    link: 'mailto:yang3kc@gmail.com'
  },
  {
    name: 'Google Scholar',
    icon: {prefix: 'fab', icon: 'google-scholar'},
    link: 'https://scholar.google.com/citations?hl=en&user=tqb96X8AAAAJ&view_op=list_works&sortby=pubdate'
  },
  {
    name: 'ResearchGate',
    icon: {prefix: 'fab', icon: 'researchgate'},
    link: 'https://www.researchgate.net/profile/Kai-Cheng-Yang-3'
  },
  {
    name: 'LinkedIn',
    icon: {prefix: 'fab', icon: 'linkedin'},
    link: 'https://www.linkedin.com/in/kaicheng-yang-43477213b/'
  },
  {
    name: 'Twitter',
    icon: {prefix: 'fab', icon: 'twitter'},
    link: 'https://twitter.com/yang3kc'
  },
  {
    name: 'Substack',
    icon: {prefix: 'fas', icon: 'bookmark'},
    link: 'https://yang3kc.substack.com'
  }
])

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
  <!-- avatar -->
    <div id="avatar_container" class="col-span-1 flex flex-col items-center justify-center">
      <!-- photo -->
      <div id="avatar" class="mx-auto">
        <img src="/photos/avatar_01.png" alt="Avatar" class="avatar rounded-full">
      </div>
      <!-- info -->
      <div id="avatar_info" class="text-center">
        <h2 class="text-2xl font-medium">Kai-Cheng Yang, Ph.D.</h2>
        <p id="title" class="text-xl text-gray-500">Postdoctoral researcher</p>
        <p id="title" class="text-xl text-gray-500">Northeastern University</p>
      </div>
      <!-- contact -->
      <div id="contact_container" class="mt-1">
        <template v-for="link in contact_links" :key="link.name">
          <a :href="link.link" class="text-primary mr-1" target="_blank">
            <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" class="text-2xl" />
          </a>
        </template>
      </div>
    </div>
    <!-- bio -->
    <div id="bio" class="md:col-span-2 mt-2 mx-4 prose">
      <p>
        Hi! I'm Kai-Cheng Yang (pronounced KY-cheng YAHNG). You can also call me Kevin.
        I'm a postdoctoral researcher at Northeastern University working with <a class="link" href="https://lazerlab.net" target="_blnak">David Lazer</a>.
        I obtained my Ph.D. in Informatics from <a class="link" href="https://luddy.indiana.edu/" target="_blank">
            Luddy School of Informatics, Computing, and Engineering</a>
        in Indiana University Bloomington, advised by <a class="link" href="http://cnets.indiana.edu/fil/" target="_blank">Filippo Menczer</a>.
      </p>
      <p>
        My research focuses on creating safe, fair, and trustworthy online information platforms by identifying how malicious actors and flawed systems distort information flow and developing effective countermeasures.
        My work spans social bots, misinformation, and algorithmic biases.
        Currently, I'm exploring how generative AI is being misused in these contexts and how to harness this technology to protect against these threats.
      </p>
      <p>
        You can check out my <a class="link" href="#pubs">publications</a> to learn more.
        These works have been <a class="link" href="#media">covered</a> by various media outlets.
        You might also find some of my <a class="link" href="#tools">tools</a> useful.
      </p>
    </div>
  </div>
</template>

<style scoped>
.avatar {
    width: 200px;
    height: auto;
    display: block;
}
</style>