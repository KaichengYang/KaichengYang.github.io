<script setup>
import { inject } from 'vue';
import ToolBlock from '@/components/tool/ToolBlock.vue'
import BackForth from '@/components/nav/BackForth.vue'

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false
  }
});

// data
const tools = inject('tool_list');
</script>

<template>
  <div class="flex flex-col gap-4">
    <hr class="col-span-full my-3">
    <template v-for="tool in tools" :key="tool.id">
      <ToolBlock v-if="!is_home || tool.highlight" :tool_obj="tool" />

      <hr v-if="!is_home || tool.highlight" class="col-span-full my-3">
    </template>

  </div>
  <div class="mt-2  ">
    <BackForth :is_home="is_home" :target="'/tools'" />
  </div>
</template>