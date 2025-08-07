<script setup>
  import Navbar from '@/components/nav/Navbar.vue'
  import Footer from '@/components/nav/Footer.vue'
  import FailureList from '@/components/failure/FailureList.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      <h1 class="text-4xl font-bold my-4 text-center">Records of failures</h1>
      <p class="text-center prose">
        Following the spirit of <a class="link" href="https://www.nature.com/articles/nj7322-467a" target="_blank">A CV of failures</a>, I'm listing my failures below
      </p>
      <FailureList />
    </div>
    <Footer />
  </div>
</template>