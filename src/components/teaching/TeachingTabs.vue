<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TeachingList from '@/components/teaching/TeachingList.vue';
import MaterialList from '@/components/teaching/MaterialList.vue';

// props
defineProps({
  is_home: {
    type: Boolean,
    default: false,
  },
});

// data
const views = {
  courses: { name: '🎓 Courses' },
  materials: { name: '📚 Materials' },
};

const route = useRoute();
const view = ref(route.hash === '#materials' ? 'materials' : 'courses');
</script>

<template>
  <div class="flex flex-wrap justify-center gap-1">
    <template v-for="(meta, key) in views" :key="key">
      <button class="btn btn-sm btn-outline btn-primary" :class="{'btn-active': view === key}" @click="view = key">{{ meta.name }}</button>
    </template>
  </div>
  <TeachingList v-if="view === 'courses'" :is_home="is_home" />
  <MaterialList v-else :is_home="is_home" />
</template>
