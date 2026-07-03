<script setup>
import ToolSkillList from '@/components/tool/ToolSkillList.vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      <h1 class="text-4xl font-bold my-4 text-center">Tools &amp; skills</h1>
      <ToolSkillList />
    </div>
    <Footer />
  </div>
</template>