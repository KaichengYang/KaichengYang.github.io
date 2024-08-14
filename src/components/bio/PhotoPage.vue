<template>
  <Navbar />
  <div class="container mx-auto max-w-screen-lg mt-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(photo, index) in photos" :key="index" class="card">
        <div class="flex flex-col items-center">
          <img :src="photo.src" :alt="photo.alt" class="object-cover w-[200px] md:w-[300px]">
          <a :href="photo.src" download>
            <button class="btn btn-outline btn-primary mt-4 mb-8 mr-2">
              <font-awesome-icon :icon="['fas', 'download']" />
              Download photo
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'

const photos = ref([
  { src: '/photos/avatar_01.png', alt: 'Avatar 01' },
  { src: '/photos/avatar_02.png', alt: 'Avatar 02' },
  { src: '/photos/avatar_03.png', alt: 'Avatar 03' },
  { src: '/photos/avatar_11.png', alt: 'Avatar 11' },
  { src: '/photos/avatar_12.png', alt: 'Avatar 12' },
  { src: '/photos/avatar_13.png', alt: 'Avatar 13' },
])
</script>