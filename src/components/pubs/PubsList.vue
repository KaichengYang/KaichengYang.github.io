<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import BackForth from '@/components/nav/BackForth.vue';
import PubsBlock from '@/components/pubs/PubsBlock.vue';

// props
const props = defineProps({
  is_home: {
    type: Boolean,
    default: true,
  },
});

// data
const isHome = props.is_home;
const authors = ref({});
const pub_list = inject('pub_list', ref([]));

// computed
const pubChunkToShow = computed(() => {
  pub_list.value.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (isHome) {
    return pub_list.value.filter(pub => pub.highlight.length > 0);
  } else {
    return pub_list.value;
  }
});

// methods
onMounted(() => {
  // init altmetric
  _altmetric_embed_init();
});

</script>

<template>
  <hr class="col-span-full my-3">
  <div v-for="pub in pubChunkToShow" :key="pub.id" class="grid grid-cols-1 md:grid-cols-7 md:gap-x-4">
    <!-- date  -->
    <div class="font-mono text-center flex justify-center col-span-full md:col-span-1">
        <span class="badge text-white w-28 float-right mt-1" style="background-color: #867d78">{{ pub.date }}</span>
    </div>
    <!-- main info -->
    <div class="col-span-full md:col-span-5">
      <PubsBlock :pub_obj="pub" :is_home="isHome"/>
    </div>
    <!-- altmetric small -->
    <div class="col-span-full flex justify-center mt-2 md:hidden">
      <template v-if="pub.altmetric">
        <div data-badge-type="2" :data-doi="pub.altmetric.doi_id" :data-arxiv-id="pub.altmetric.arxiv_id" data-link-target='_blank' data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover="right"></div>
      </template>
    </div>
    <!-- altmetric normal -->
    <div class="col-span-1 max-md:hidden flex justify-center">
      <template v-if="pub.altmetric">
        <div data-badge-type="donut" :data-doi="pub.altmetric.doi_id" :data-arxiv-id="pub.altmetric.arxiv_id" data-link-target='_blank' data-hide-no-mentions="true" class="altmetric-embed" data-badge-popover="right"></div>
      </template>
    </div>
    <hr class="col-span-full my-3">
  </div>
  <BackForth :is_home="isHome" :target="'/pubs'"/>
</template>
