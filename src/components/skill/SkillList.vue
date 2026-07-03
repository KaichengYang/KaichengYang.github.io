<script setup>
import { inject } from 'vue';
import SkillBlock from '@/components/skill/SkillBlock.vue'
import BackForth from '@/components/nav/BackForth.vue'

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false
  }
});

// data
const skills = inject('skill_list');
</script>

<template>
  <div class="flex flex-col gap-4">
    <hr class="col-span-full my-3">
    <template v-for="skill in skills" :key="skill.id">
      <SkillBlock v-if="!is_home || skill.highlight" :skill_obj="skill" />

      <hr v-if="!is_home || skill.highlight" class="col-span-full my-3">
    </template>

  </div>
  <div class="mt-2  ">
    <BackForth :is_home="is_home" :target="'/tools#skills'" target_name="skills"/>
  </div>
</template>
