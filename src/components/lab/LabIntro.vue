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
    name: 'Twitter',
    icon: {prefix: 'fab', icon: 'twitter'},
    link: 'https://twitter.com/yang3kc'
  },
  {
    name: 'Blue Sky',
    icon: {prefix: 'fab', icon: 'bluesky'},
    link: 'https://bsky.app/profile/yang3kc.bsky.social'
  }
])

</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <!-- lab logo/image -->
      <div id="lab_container" class="col-span-1 flex flex-col items-center justify-center">
        <!-- lab image -->
        <div id="lab_image" class="mx-auto">
          <img src="/photos/avatar_01.png" alt="Yang Lab" class="lab-image rounded-lg">
        </div>
        <!-- lab info -->
        <div id="lab_info" class="text-center">
          <h2 class="text-3xl font-bold text-primary">Yang Lab</h2>
          <p id="affiliation" class="text-xl text-gray-500">School of Computing</p>
          <p id="affiliation" class="text-xl text-gray-500">Binghamton University</p>
        </div>
        <!-- contact -->
        <div id="contact_container" class="mt-3">
          <template v-for="link in contact_links" :key="link.name">
            <a :href="link.link" class="text-primary mr-2" target="_blank">
              <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" class="text-2xl" />
            </a>
          </template>
        </div>
      </div>
      <!-- lab description -->
      <div id="lab_description" class="md:col-span-2 mt-2 mx-4 prose">
        <p>
          Welcome to Yang Lab! We are a research group in the School of Computing at Binghamton University, 
          led by <router-link to="/kaicheng" class="link">Dr. Kai-Cheng Yang</router-link>.
        </p>
        <p>
          Our lab focuses on creating safe, fair, and trustworthy online information platforms by identifying 
          how malicious actors and flawed systems distort information flow and developing effective countermeasures.
          Our work spans social bots, misinformation, and algorithmic biases.
        </p>
        <p>
          Currently, we're exploring how generative AI is being misused in these contexts and how to harness 
          this technology to protect against these threats. We combine computational methods, data science, 
          and social science approaches to address critical challenges in online information ecosystems.
        </p>
        <p>
          Check out our <a class="link" href="#pubs">publications</a> to learn more about our research.
          Our work has been <a class="link" href="#media">covered</a> by various media outlets.
          You might also find some of our <a class="link" href="#tools">tools</a> useful for your own research.
        </p>
      </div>
    </div>
    <div role="alert" class="alert alert-info mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-info">
        We are actively recruiting motivated Ph.D. students! If you are interested in joining our lab, 
        please send an email with your CV and a short statement of purpose to yang3kc@gmail.com.
      </span>
    </div>
  </div>
</template>

<style scoped>
.lab-image {
    width: 200px;
    height: auto;
    display: block;
}
</style>