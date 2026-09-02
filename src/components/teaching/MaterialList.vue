<script setup>
import { inject } from 'vue';
import MaterialBlock from '@/components/teaching/MaterialBlock.vue'
import BackForth from '@/components/nav/BackForth.vue'

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false
  }
});

// data
const materials = inject('material_list');
</script>

<template>
  <div class="flex flex-col gap-4">
    <hr class="col-span-full my-3">
    <template v-for="material in materials" :key="material.id">
      <MaterialBlock :material_obj="material" />
      <hr class="col-span-full my-3">
    </template>
  </div>
  <div class="mt-2">
    <BackForth :is_home="is_home" :target="'/teaching#materials'" target_name="materials"/>
  </div>
</template>
