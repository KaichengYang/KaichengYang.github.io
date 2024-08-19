<script setup>
import { computed, inject } from 'vue';
import BackForth from '@/components/nav/BackForth.vue';
import NewsBlock from '@/components/news/NewsBlock.vue';

// props
const props = defineProps({
  is_home: {
    type: Boolean,
    default: true
  }
});

// data
const news_list = inject('news_list');
const color_text_map = {
  "date": {"color": "#867d78"},
  "new_pub": {"color": "#ac4142", "text": "Publication"},
  "new_tool": {"color": "#4A3C31", "text": "Tool"},
  "new_preprint": {"color": "#66435A", "text": "Preprint"},
  "personal_news": {"color": "#006298", "text": "General"},
  "talk": {"color": "#4A3C31", "text": "Talk"},
  "general": {"color": "#006298", "text": "General"},
  "media": {"color": "#DF3603", "text": "Media"},
};

// methods
const news_to_show = computed(() => {
  news_list.value.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (props.is_home) {
    return news_list.value.slice(0, 5);
  } else {
    return news_list.value;
  }
});

const box_style = (item) => {
  let color = color_text_map[item]['color'];
  return {
    "background-color": color
  };
};
</script>

<template>
  <hr class="col-span-full my-3">
  <div v-for="news in news_to_show" :key="news.msg" class="grid grid-cols-1 md:grid-cols-6">
    <div class="flex font-mono justify-center md:col-span-2">
      <span class="badge w-28 text-white" :style="box_style('date')">{{ news.date }}</span>
      <span v-if="news.type" class="badge w-32 ml-2 text-white" :style="box_style(news.type)">{{ color_text_map[news.type]['text'] }}</span>
    </div>
    <div class="prose text-center md:text-left md:col-span-4">
      <NewsBlock :news_obj="news" />
    </div>
    <hr class="col-span-full my-3">
  </div>
  <div class="mt-2">
    <BackForth :is_home="is_home" :target="'/news'"/>
  </div>
</template>
