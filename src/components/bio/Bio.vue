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
    name: 'Blue Sky',
    icon: {prefix: 'fab', icon: 'bluesky'},
    link: 'https://bsky.app/profile/yang3kc.bsky.social'
  },
  {
    name: 'Substack',
    icon: {prefix: 'fas', icon: 'bookmark'},
    link: 'https://yang3kc.substack.com'
  }
])

</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <!-- avatar -->
      <div id="avatar_container" class="col-span-1 flex flex-col items-center justify-center">
        <!-- photo -->
        <div id="avatar" class="mx-auto relative group">
          <router-link to="/photos">
            <img src="/photos/avatar_01.png" alt="Avatar" class="avatar rounded-full cursor-pointer hover:opacity-80 transition-opacity">
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-white text-sm font-medium">Click to view more photos</span>
            </div>
          </router-link>
        </div>
        <!-- info -->
        <div id="avatar_info" class="text-center">
          <h2 class="text-2xl font-medium">Kai-Cheng Yang, Ph.D.</h2>
          <p id="title" class="text-xl text-gray-500">Assistant Professor</p>
          <p id="title" class="text-xl text-gray-500">Binghamton University</p>
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
          Hi! I'm Kai-Cheng Yang (pronounced KY-cheng YAHNG).
          I'm currently an assistant professor in the School of Computing at Binghamton University.
          Before joining Binghamton University, I was a postdoctoral researcher at Northeastern University.
          I obtained my Ph.D. in Informatics from Indiana University.
        </p>
        <p>
          My research focuses on creating safe, fair, and trustworthy online information platforms by identifying how malicious actors and flawed systems distort information flow and developing effective countermeasures.
          My work spans social bots, misinformation, and algorithmic biases.
          Currently, I'm exploring how generative AI is being misused in these contexts and how to harness this technology to protect against these threats.
        </p>
        <p>
          You can check out my <a class="link" href="#pubs">publications</a> to learn more.
          These works have been <a class="link" href="#media">covered</a> by various media outlets.
          You might also find some of my <a class="link" href="#tools">tools</a> and my collection of <router-link to="/hiddencurriculum" class="link">hidden curriculum</router-link> useful.
        </p>
      </div>
    </div>
    <!-- <div role="alert" class="alert alert-primary mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-primary h-6 w-6 shrink-0">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-primary">
        I'm joining Binghamton University Computer Science as an Assistant Professor this Fall.
        I'll recruit 2 motivated Ph.D. students. If you are interested in joining me, please send me an email with your CV and a short statement of purpose.
      </span>
    </div> -->
  </div>
</template>

<style scoped>
.avatar {
    width: 200px;
    height: auto;
    display: block;
}
</style>