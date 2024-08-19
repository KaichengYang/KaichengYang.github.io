<script setup>
import { computed, inject } from 'vue';
import BackForth from '@/components/nav/BackForth.vue';
import MediaBlock from '@/components/media/MediaBlock.vue';

// props
const props = defineProps({
  is_home: {
    type: Boolean,
    default: true
  },
  view: {
    type: String,
    default: "year"
  }
});

// data
const media_list = inject('media_list');

// computed
const media_to_show = computed(() => {
  let temp_media_list = media_list.value.filter(media => media.toshow);
  if (props.is_home) {
    return temp_media_list.filter(media => media.highlight).slice(0, 5);
  } else {
    return temp_media_list;
  }
});

</script>

<template>
  <hr class="col-span-full my-3">
  <!-- {{ pub_list }} -->
  <MediaBlock v-for="media in media_to_show" :key="media.title" :media="media" />
  <BackForth :is_home="is_home" target="/media"/>
</template>