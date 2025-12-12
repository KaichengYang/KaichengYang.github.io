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
      <router-link v-if="alumni.internal_route" :to="alumni.internal_route" class="link hover:text-primary">
        {{ alumni.name }}
      </router-link>
      <span v-else>{{ alumni.name }}</span>
    </div>

    <!-- Current Position -->
    <div v-if="alumni.current_position" class="text-gray-600 md:flex-1">
      {{ alumni.current_position }}
    </div>

    <!-- Years -->
    <div v-if="alumni.year" class="text-sm text-gray-500">
      {{ alumni.year }}
    </div>

    <!-- Links (icons) -->
    <div v-if="hasLinks" class="flex gap-2">
      <a v-if="alumni.cv_link" :href="alumni.cv_link" target="_blank"
         class="btn btn-circle btn-outline btn-xs" title="CV">
        <font-awesome-icon :icon="['far', 'file-pdf']" />
      </a>

      <a v-if="alumni.email" :href="`mailto:${alumni.email}`"
         class="btn btn-circle btn-outline btn-xs" title="Email">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>

      <a v-for="link in alumni.links" :key="link.name"
         :href="link.url" target="_blank"
         class="btn btn-circle btn-outline btn-xs" :title="link.name">
        <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" />
      </a>
    </div>
  </div>
</template>
