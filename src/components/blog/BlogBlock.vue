<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card bg-base-100 mb-4">
    <div class="card-body px-2 py-4">
      <div class="flex items-baseline gap-3">
        <span class="text-sm text-gray-400 whitespace-nowrap">{{ post.date }}</span>
        <router-link :to="`/blog/${post.slug}`" class="link text-xl font-semibold hover:text-primary">
          {{ post.title }}
        </router-link>
      </div>
      <p v-if="post.excerpt" class="text-gray-600 mt-1">{{ post.excerpt }}</p>
      <div v-if="post.tags.length" class="flex flex-wrap gap-1 mt-2">
        <span v-for="tag in post.tags" :key="tag" class="badge badge-outline badge-sm">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
