<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'

const bio = ref({
  short: '',
  long: ''
})
const showToast = ref(false)

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

onMounted(() => {
  fetch('/files/bios.json')
    .then(response => response.json())
    .then(data => {
      bio.value = data
    })
})

const copyToClipboard = (bioText) => {
  navigator.clipboard.writeText(bioText).then(() => {
    console.log('Bio copied to clipboard!')
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }).catch(err => {
    console.error('Failed to copy: ', err)
  })
}
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      
      <h1 class="text-4xl font-bold my-8 text-center">Kai-Cheng Yang</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- photo -->
        <div class="col-span-full md:col-span-1">
          <h2 class="text-2xl font-bold text-center mb-2 mt-4">Photo</h2>
          <div class="flex justify-center">
            <img src="/photos/avatar_01.png" alt="Kai-Cheng Yang" class="w-2/3 h-auto rounded-lg">
          </div>
          <div class="flex justify-center">
            <a href="/photos/avatar_01.png" download>
              <button class="btn btn-outline btn-primary mt-4 mr-2">
                <font-awesome-icon :icon="['fas', 'download']" />
                Download photo</button>
            </a>
            <router-link to="/photos">
              <button class="btn btn-outline btn-primary mt-4">More photos</button>
            </router-link>
          </div>
          
          <!-- CV Download -->
          <div class="flex justify-center mt-4">
            <a href="/files/cv.pdf" target="_blank">
              <button class="btn btn-primary">
                <font-awesome-icon :icon="['fas', 'file-pdf']" />
                Download CV
              </button>
            </a>
          </div>
          
          <!-- Contact Links -->
          <div class="flex justify-center mt-4 flex-wrap gap-2">
            <template v-for="link in contact_links" :key="link.name">
              <a :href="link.link" class="text-primary" target="_blank" :title="link.name">
                <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" class="text-2xl" />
              </a>
            </template>
          </div>
        </div>

        <!-- Personal Information -->
        <div class="col-span-full md:col-span-2">
          <h2 class="text-2xl font-bold mb-4 mt-4">About Kai-Cheng</h2>
          <div class="prose">
            <p>
              Kai-Cheng Yang (pronounced KY-cheng YAHNG) is an Assistant Professor in the School of Computing at Binghamton University.
              Before joining Binghamton University, he was a postdoctoral researcher at Northeastern University.
              He obtained his Ph.D. in Informatics from Indiana University.
            </p>
            <p>
              His research focuses on creating safe, fair, and trustworthy online information platforms by identifying how malicious actors and flawed systems distort information flow and developing effective countermeasures.
              His work spans social bots, misinformation, and algorithmic biases.
              Currently, he's exploring how generative AI is being misused in these contexts and how to harness this technology to protect against these threats.
            </p>
            <p>
              His work has been covered by various media outlets, and he has developed several tools for research and education.
              He also maintains a collection of <router-link to="/hiddencurriculum" class="link">hidden curriculum</router-link> resources for students and researchers.
            </p>
          </div>
        </div>

        <!-- short bio -->
        <div class="col-span-full text-center md:text-left mt-8">
          <h2 class="text-2xl font-bold mb-2 text-center">Short bio</h2>
          <div class="col-span-full flex justify-center">
            <p class="prose" id="short-bio">
              {{ bio.short }}
            </p>
          </div>
          <div class="flex justify-center">
            <button class="btn btn-outline btn-primary mt-2" @click="copyToClipboard(bio.short)">
              <font-awesome-icon :icon="['far', 'copy']" />
              Copy short bio</button>
          </div>
        </div>
        
        <!-- longer bio -->
        <div class="col-span-full text-center md:text-left">
          <h2 class="text-2xl font-bold mb-2 mt-8 text-center">Longer bio</h2>
          <p class="prose">
            {{ bio.long }}
          </p>
          <div class="flex justify-center">
            <button class="btn btn-outline btn-primary mt-2" @click="copyToClipboard(bio.long)">
              <font-awesome-icon :icon="['far', 'copy']" />
              Copy longer bio</button>
          </div>
        </div>
      </div>

    </div>
    <!-- toast  -->
    <div v-if="showToast" class="toast">
      <div class="alert alert-warning">
        <div class="flex-1">
          <span class="text-white">Bio copied to clipboard!</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>