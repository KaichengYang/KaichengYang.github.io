<script setup>
import DatasetsList from '@/components/datasets/DatasetsList.vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      <h1 class="text-4xl font-bold my-4 text-center">Datasets & Benchmarks</h1>
      <DatasetsList />
    </div>
    <Footer />
  </div>
</template>