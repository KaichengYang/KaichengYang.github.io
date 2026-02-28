<script setup>
import { inject } from 'vue';
import DatasetBlock from '@/components/datasets/DatasetBlock.vue'
import BackForth from '@/components/nav/BackForth.vue'

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false
  }
});

// data
const datasets = inject('dataset_list');
</script>

<template>
  <div class="flex flex-col gap-4">
    <hr class="col-span-full my-3">
    <template v-for="dataset in datasets" :key="dataset.id">
      <DatasetBlock v-if="!is_home || dataset.highlight.length" :dataset_obj="dataset" />

      <hr v-if="!is_home || dataset.highlight.length" class="col-span-full my-3">
    </template>

  </div>
  <div class="mt-2  ">
    <BackForth :is_home="is_home" :target="'/datasets'" target_name="datasets"/>
  </div>
</template>