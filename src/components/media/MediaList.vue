<script setup>
import { ref, computed, onMounted } from 'vue';
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
const media_list = ref([]);
const tools_list = ref([]);
const pubs_list = ref([]);
const media_list_with_attr = ref([]);

// computed
const media_to_show = computed(() => {
  let temp_media_list = media_list.value.filter(media => media.toshow);
  if (props.is_home) {
    return temp_media_list.filter(media => media.highlight).slice(0, 5);
  } else {
    return temp_media_list;
  }
});

// methods
const fetchData = async () => {
  const [mediaData, toolsData, refsData, pubIndex] = await Promise.all([
    fetch('/files/media.json').then(response => response.json()),
    fetch('/files/tools.json').then(response => response.json()),
    fetch('/files/refs.json').then(response => response.json()),
    fetch('/files/pubs/pubs_index.json').then(response => response.json())
  ]);
  media_list.value = mediaData;
  tools_list.value = toolsData;
  pubs_list.value = refsData;
  pubIndex.forEach(
    pub_file_name => {
      fetch(`/files/pubs/${pub_file_name}`)
        .then(response => response)
        .then(pub => {
          pubs_list.push(pub);
        });
    }
  );
  media_list_with_attr.value = assign_projects_to_media(pubs_list.value, tools_list.value, media_list.value);
};

const assign_projects_to_media = (refs_json, tools_json, media_json) => {
  media_json.forEach(media => {
    let ref_list = [];
    tools_json.forEach(tool => {
      if (media.project_id && media.project_id.indexOf(tool.id) >= 0) {
        ref_list.push({
          "title": tool.title,
          "link": tool.links[0]
        });
      }
    });
    refs_json.forEach(ref => {
      if (media.project_id && media.project_id.indexOf(ref.id) >= 0) {
        ref_list.push({
          "title": ref.title,
          "link": ref.links[0]
        });
      }
    });

    if (ref_list.length > 0) {
      media["ref"] = ref_list;
    }
  });
  return media_json;
};

onMounted(fetchData);

</script>

<template>
  <hr class="col-span-full my-3">
  <MediaBlock v-for="media in media_to_show" :key="media.title" :media="media" />
  <BackForth :is_home="is_home" target="/media"/>
</template>