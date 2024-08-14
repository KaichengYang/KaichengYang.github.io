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
          <li><router-link to="/" class="btn btn-ghost text-white text-xl font-medium py-2">Home</router-link></li>
          <li><router-link to="/pubs" class="btn btn-ghost text-white text-xl font-medium py-2">Publications</router-link></li>
          <li><router-link to="/news" class="btn btn-ghost text-white text-xl font-medium py-2">News</router-link></li>
          <li><router-link to="/media" class="btn btn-ghost text-white text-xl font-medium py-2">Media</router-link></li>
          <li><a href="/files/cv.pdf" class="btn btn-ghost text-white text-xl font-medium py-2">CV</a></li>
          <li><router-link to="/about" class="btn btn-ghost text-white text-xl font-medium py-2">About</router-link></li>
        </ul>
      </div>
      <!-- normal menu  -->
      <div class="container mx-auto max-w-screen-lg flex items-center justify-center">
        <div class="items-center hidden md:flex">
            <router-link to="/" class="btn btn-ghost text-white text-xl font-medium mr-1 py-2">Home</router-link>
            <router-link to="/pubs" class="btn btn-ghost text-white text-xl font-medium mr-1 py-2">Publications</router-link>
            <router-link to="/news" class="btn btn-ghost text-white text-xl font-medium mr-1 py-2">News</router-link>
            <router-link to="/media" class="btn btn-ghost text-white text-xl font-medium mr-1 py-2">Media</router-link>
            <a href="/files/cv.pdf" class="btn btn-ghost text-white text-xl font-medium py-2">CV</a>
            <router-link to="/about" class="btn btn-ghost text-white text-xl font-medium py-2">About</router-link>
        </div>
      </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>