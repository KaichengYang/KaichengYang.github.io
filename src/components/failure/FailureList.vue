<script setup>
import BackForth from '@/components/nav/BackForth.vue'
import { ref, onMounted} from 'vue';

const failures = ref([])

onMounted(() => {
  fetch("/files/failures.json")
  .then(response => response.json())
  .then(data => failures.value = data)
})
</script>

<template>
  <div>
    <hr class="col-span-full my-3">
    <div v-for="failure in failures" :key="failure.msg" class="grid grid-cols-1 md:grid-cols-3">
      <div class="flex font-mono justify-center md:col-span-1">
        <span class="badge w-28 text-white" style="background-color: #867d78;">{{ failure.date }}</span>
      </div>
      <p class="prose text-center md:text-left md:col-span-2">{{ failure.msg }}</p>
      <hr class="col-span-full my-3">
    </div>
  </div>
  <div class="mt-2">
    <BackForth :is_home="false" :target="'/failures'"/>
  </div>
</template>