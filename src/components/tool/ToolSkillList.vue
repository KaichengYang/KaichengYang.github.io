<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ToolList from '@/components/tool/ToolList.vue';
import SkillList from '@/components/skill/SkillList.vue';

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false,
  },
});

// data
const views = {
  tools: { name: '🛠️ Tools' },
  skills: { name: '🤖 Skills' },
};

const route = useRoute();
const view = ref(route.hash === '#skills' ? 'skills' : 'tools');
</script>

<template>
  <div class="flex flex-wrap justify-center gap-1">
    <template v-for="(meta, key) in views" :key="key">
      <button class="btn btn-sm btn-outline btn-primary" :class="{'btn-active': view === key}" @click="view = key">{{ meta.name }}</button>
    </template>
  </div>
  <ToolList v-if="view === 'tools'" :is_home="is_home" />
  <SkillList v-else :is_home="is_home" />
</template>
