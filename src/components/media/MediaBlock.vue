<script setup>
import { ref } from 'vue';

// props
const props = defineProps({
  media: {
    type: Object,
    required: true,
  },
});

// data
const background_color = ref({
  date: "#867d78",
  interview: "#006298",
  quotation: "#006298",
  coverage: "#ac4142",
});

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-7 md:gap-x-1">
    <!-- outlet logo small -->
    <div class="col-span-full mb-2 flex justify-center md:hidden">
      <img :src="'/logos/' + media.outlet + '.png'" alt="logo" style="height: 30px;">
    </div>
    <!-- date normal -->
    <div class="font-mono col-span-1 text-center max-md:hidden">
      <span class="badge mt-1 text-white w-28" :style="`background-color: ${background_color['date']};`">{{ media.date }}</span>
    </div>
    <!-- title -->
    <div class="prose col-span-full md:col-span-4 text-center md:text-left">
      <a :href="media.url" target="_blank" class="link">{{ media.title }} <font-awesome-icon :icon="['fas', 'link']" /></a>
    </div>
    <!-- outlet logo normal -->
    <div class="max-md:hidden md:col-span-2 mr-2">
      <img :src="'/logos/' + media.outlet + '.png'" class="float-right" alt="logo" style="height: 30px;">
    </div>
    <!-- date small -->
    <div class="font-mono col-span-full text-center md:hidden">
      <span class="badge mt-1 text-white w-28" :style="`background-color: ${background_color['date']};`">{{ media.date }}</span>
    </div>
    <!-- type -->
    <div class="font-mono col-span-full md:col-span-1 text-center">
      <span v-if="media.type == 'interview'" class="badge mt-1 text-white w-28" :style="`background-color: ${background_color['interview']};`">Interview</span>
      <span v-if="media.type == 'quotation'" class="badge mt-1 text-white w-28" :style="`background-color: ${background_color['quotation']};`">Quotation</span>
      <span v-if="media.type == 'coverage' && media.ref" class="badge mt-1 text-white w-28" :style="`background-color: ${background_color['coverage']};`">Featuring</span>
    </div>
    <!-- ref -->
    <div class="prose col-span-full md:col-span-4 text-center md:text-left">
      <template v-if="media.type == 'coverage' && media.ref">
        <template v-for="(ref, index) in media.ref" :key="index">
          <template v-if="index > 0"> and </template>
          <a :href="ref.link.url" target="_blank" class="text-gray-400 font-normal hover:decoration-2"> {{ ref.title }}</a>
        </template>
      </template>
    </div>
    <!-- media outlet name normal -->
    <div class="md:col-span-2 prose max-md:hidden mr-2">
      <p class="text-right">{{ media.outlet }}</p>
    </div>
    <hr class="col-span-full my-3">
  </div>
</template>