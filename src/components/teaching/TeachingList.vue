<script setup>
import { inject } from 'vue';
import TeachingBlock from '@/components/teaching/TeachingBlock.vue'
import BackForth from '@/components/nav/BackForth.vue'

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false
  }
});

// data
const teaching = inject('teaching_list');
</script>

<template>
  <div class="flex flex-col gap-4">
    <hr class="col-span-full my-3">
    <template v-for="course in teaching" :key="course.id">
      <TeachingBlock :course_obj="course" />
      <hr class="col-span-full my-3">
    </template>
  </div>
  <div class="mt-2">
    <BackForth :is_home="is_home" :target="'/teaching'" target_name="teaching"/>
  </div>
</template>