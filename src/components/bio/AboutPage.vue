<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'

const bio = ref({
  short: '',
  long: ''
})
const showToast = ref(false)

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
  <Navbar />
  <div class="container mx-auto max-w-screen-lg">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <!-- photo -->
      <div class="col-span-full md:col-span-1">
        <h2 class="text-2xl font-bold text-center mb-2 mt-8">Photo</h2>
        <div class="flex justify-center">
          <img src="/photos/avatar_01.png" alt="Avatar" class="w-2/3 h-auto">
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
      </div>

      <!-- short bio -->
      <div class="col-span-full md:col-span-2 text-center md:text-left">
        <h2 class="text-2xl font-bold mb-2 mt-8 text-center">Short bio</h2>
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

    <div class="divider divider-primary" />
    <div class="col-span-full">
      <h1 class="text-4xl font-bold my-4 text-center">About this website</h1>
      <div class="text-center md:text-left">
        <p class="prose">
          I created this website myself with the help of AI coding assistants.
        </p>
        <p class="prose">
          It's currently implemented as a <a class="link" href="https://vuejs.org/">Vue.js</a> app, with <a class="link" href="https://tailwindcss.com/">Tailwind CSS</a> and <a class="link" href="https://daisyui.com/">daisyUI</a> for styling.
          The icons are from <a class="link" href="https://fontawesome.com/">Font Awesome</a>.
        It also uses <a class="link" href="https://github.com/ORCID/bibtexParseJs">@orcid/bibtexParseJs</a> to parse the BibTeX files.
        </p>
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
</template>