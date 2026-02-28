<script setup>
import { ref } from 'vue';

const pages = ref([
  {name: 'Home', path: '/', is_external: false},
  {name: 'Publications', path: '/pubs', is_external: false},
  {name: 'News', path: '/news', is_external: false},
  {name: 'Media', path: '/media', is_external: false},
  {name: 'Tools', path: '/tools', is_external: false},
  {name: 'Datasets', path: '/datasets', is_external: false},
  {name: 'Teaching', path: '/teaching', is_external: false},
  {name: 'Team', path: '/team', is_external: false},
]);
</script>

<template>
  <div class="navbar bg-primary">
      <!-- drop down menu  -->
      <div class="dropdown md:hidden">
        <div tabindex="0" role="button" class="text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </div>
        <ul tabindex="0" class="menu dropdown-content bg-primary rounded-xl z-[1] mt-6 w-auto p-2 drop-shadow-md">
          <li v-for="page in pages" :key="page.path">
            <router-link v-if="!page.is_external" :to="page.path" class="btn btn-ghost text-white text-xl font-medium py-2">{{ page.name }}</router-link>
            <a v-else :href="page.path" class="btn btn-ghost text-white text-xl font-medium py-2">{{ page.name }}</a>
          </li>
        </ul>
      </div>
      <!-- normal menu  -->
      <div class="container mx-auto max-w-screen-lg flex items-center justify-center">
        <div class="items-center hidden md:flex">
          <template v-for="page in pages" :key="page.path">
            <router-link v-if="!page.is_external" :to="page.path" class="btn btn-ghost text-white text-xl font-medium mr-1 py-2">{{ page.name }}</router-link>
            <a v-else :href="page.path" class="btn btn-ghost text-white text-xl font-medium mr-1 py-2">{{ page.name }}</a>
          </template>
        </div>
      </div>
  </div>
</template>