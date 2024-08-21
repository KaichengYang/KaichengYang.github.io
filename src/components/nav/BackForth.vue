<template>
  <div class="flex justify-center">
    <template v-if="is_home">
      <router-link :to="target" class="text-primary">More {{ target_name }} <font-awesome-icon :icon="['fas', 'circle-arrow-right']" /></router-link>
    </template>
    <template v-else>
      <router-link to="/" class="text-primary"><font-awesome-icon :icon="['fas', 'circle-arrow-left']" /> Back to home</router-link>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  is_home: {
    type: Boolean,
    default: true
  },
  target: {
    type: String,
    default: "/"
  },
  target_name: {
    type: String,
    default: ""
  }
});
</script>