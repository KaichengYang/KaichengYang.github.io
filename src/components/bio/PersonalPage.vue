<script setup>
import { ref, onMounted, inject, computed } from 'vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'

const bio = ref({
  short: '',
  long: ''
})
const showToast = ref(false)
const team = inject('team', ref({}))

// Computed property to get contact links from team data
const contact_links = computed(() => {
  if (!team.value.pi) return []

  const links = []

  // Add email link if exists
  if (team.value.pi.email) {
    links.push({
      name: 'Email',
      icon: {prefix: 'fas', icon: 'envelope'},
      link: `mailto:${team.value.pi.email}`
    })
  }

  // Add CV link if exists
  if (team.value.pi.cv_link) {
    links.push({
      name: 'CV',
      icon: {prefix: 'far', icon: 'file-pdf'},
      link: team.value.pi.cv_link
    })
  }

  // Add all other links from team data
  if (team.value.pi.links) {
    team.value.pi.links.forEach(link => {
      links.push({
        name: link.name,
        icon: link.icon,
        link: link.url
      })
    })
  }

  return links
})

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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- photo -->
        <div class="col-span-full md:col-span-1 mt-8">
          <div class="flex justify-center">
            <img :src="team.pi?.photo || '/photos/avatar_01.png'" :alt="team.pi?.name || 'Kai-Cheng Yang'" class="rounded-full w-48 h-48 object-cover">
          </div>
          <div class="flex justify-center">
            <a :href="team.pi?.photo || '/photos/avatar_01.png'" download>
              <button class="btn btn-outline btn-primary mt-4 mr-2">
                <font-awesome-icon :icon="['fas', 'download']" />
                Download photo</button>
            </a>
            <router-link to="/photos">
              <button class="btn btn-outline btn-primary mt-4">More photos</button>
            </router-link>
          </div>

          <!-- Contact Links -->
          <div class="flex justify-center mt-4 flex-wrap gap-2">
            <template v-for="link in contact_links" :key="link.name">
              <a :href="link.link" class="text-primary" :target="link.name === 'Email' ? '_self' : '_blank'" :title="link.name">
                <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" class="text-2xl" />
              </a>
            </template>
          </div>
        </div>

        <!-- Personal Information -->
        <div class="col-span-full md:col-span-2">
          <div class="prose">

            <h1 class="text-3xl font-bold mt-8 mb-4">{{ team.pi?.name || 'Kai-Cheng Yang' }}</h1>
            <p>
              Kai-Cheng Yang (pronounced KY-cheng YAHNG) is an Assistant Professor in the School of Computing at Binghamton University and leads the Yang Lab.
              He also goes by Kevin.
              Before joining Binghamton University, he was a postdoctoral researcher at Northeastern University.
              He obtained his Ph.D. in Informatics from Indiana University.
            </p>
            <p>
              Here is his <a href="/files/cv.pdf" class="link">CV</a>.
              You can learn more about his research by exploring his <router-link to="/pubs" class="link">publications</router-link>.
              He also writes <a href="https://yang3kc.substack.com" class="link" target="_blank">blogs</a> sometimes.
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