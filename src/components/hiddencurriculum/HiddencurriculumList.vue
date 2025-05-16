<script setup>
import BackForth from '@/components/nav/BackForth.vue'
import { ref, onMounted } from 'vue';


</script>

<template>
  <div>
    <p>
      I'm listing my collection of hidden curriculum below.
      These are resources that one would not typically find in classes or textbooks but are useful for one's research and career.
      The list contains tools, blogs, videos, and all sorts of resources that I found useful.
      Some were built or created by myself, and some were built by others.
    </p>
    <BackForth :is_home="false" :target="'/hiddencurriculum'" />
  </div>
</template>