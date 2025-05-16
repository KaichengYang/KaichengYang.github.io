<script setup>
  import Navbar from '@/components/nav/Navbar.vue'
  import Footer from '@/components/nav/Footer.vue'
  import HiddencurriculumList from '@/components/hiddencurriculum/HiddencurriculumList.vue'
</script>

<template>
  <Navbar />
  <div class="container mx-auto max-w-screen-lg">
    <h1 class="text-4xl font-bold my-4 text-center">Hidden Curriculum</h1>
    <HiddencurriculumList />
  </div>
  <Footer />
</template>