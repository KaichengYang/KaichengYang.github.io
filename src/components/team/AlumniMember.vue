<script setup>
import { computed } from 'vue'

const props = defineProps({
  alumni: {
    type: Object,
    required: true
  }
})

const hasLinks = computed(() => {
  return props.alumni.cv_link ||
         props.alumni.email ||
         (props.alumni.links && props.alumni.links.length > 0)
})
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center gap-2 py-2 border-b border-gray-200">
    <!-- Name (with optional link) -->
    <div class="font-semibold text-lg">
      <router-link v-if="alumni.website" :to="alumni.website" class="link hover:text-primary">
        {{ alumni.name }}
      </router-link>
      <span v-else>{{ alumni.name }}</span>
    </div>

    <!-- Current Position -->
    <div v-if="alumni.current_position" class="text-gray-600 md:flex-1">
      {{ alumni.current_position }}
    </div>

    <!-- Years -->
    <div v-if="alumni.year" class="text-gray-500">
      {{ alumni.year }}
    </div>

  </div>
</template>
