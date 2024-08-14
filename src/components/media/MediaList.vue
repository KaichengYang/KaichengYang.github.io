<template>
  <hr class="col-span-full my-3">
  <div v-for="media in media_to_show" :key="media.title" class="grid grid-cols-1 md:grid-cols-7 md:gap-x-1">
    <!-- outlet logo small -->
    <div class="col-span-full mb-2 flex justify-center md:hidden">
      <img :src="'/logos/' + media.outlet + '.png'" alt="logo" style="height: 30px;">
    </div>
    <!-- date normal -->
    <div class="font-mono col-span-1 text-center max-md:hidden">
      <span class="badge mt-1 text-white w-28" style="background-color: #867d78;">{{ media.date }}</span>
    </div>
    <!-- title -->
    <div class="prose col-span-full md:col-span-4 text-center md:text-left">
      <a :href="media.url" target="_blank" class="link">{{ media.title }} <font-awesome-icon :icon="['fas', 'link']" /></a>
    </div>
    <!-- outlet logo normal -->
    <div class="max-md:hidden md:col-span-2 mr-2">
      <img :src="'/logos/' + media.outlet + '.png'" class="float-right" alt="logo" style="height: 30px;">
    </div>
    <!-- date small -->
    <div class="font-mono col-span-full text-center md:hidden">
      <span class="badge mt-1 text-white w-28" style="background-color: #867d78;">{{ media.date }}</span>
    </div>
    <!-- type -->
    <div class="font-mono col-span-full md:col-span-1 text-center">
      <span v-if="media.type == 'interview'" class="badge mt-1 text-white w-28" style="background-color: #006298;">Interview</span>
      <span v-if="media.type == 'quotation'" class="badge mt-1 text-white w-28" style="background-color: #006298;">Quotation</span>
      <span v-if="media.type == 'coverage' && media.ref" class="badge mt-1 text-white w-28" style="background-color: #ac4142;">Featuring</span>
    </div>
    <!-- ref -->
    <div class="prose col-span-full md:col-span-4 text-center md:text-left">
      <template v-if="media.type == 'coverage' && media.ref">
        <template v-for="(ref, index) in media.ref" :key="index">
          <template v-if="index > 0"> and </template>
          <a :href="ref.link.url" target="_blank" class="text-gray-400 font-normal hover:decoration-2"> {{ ref.title }}</a>
        </template>
      </template>
    </div>
    <!-- media outlet name normal -->
    <div class="md:col-span-2 prose max-md:hidden mr-2">
      <p class="text-right">{{ media.outlet }}</p>
    </div>
    <hr class="col-span-full my-3">
  </div>
  <BackForth :is_home="is_home" target="/media"/>
</template>

<script>
import { defineComponent } from 'vue';
import BackForth from '@/components/nav/BackForth.vue';

export default defineComponent({
  name: 'MediaList',
  components: {
    BackForth
  },
  props: {
    is_home: {
      type: Boolean,
      default: true
    },
    view: {
      type: String,
      default: "year"
    }
  },
  data() {
    return {
      media_list: [],
      tools_list: [],
      pubs_list: [],
      media_list_with_attr: [],
      color_map: {
        "date": {"color": "#867d78"},
        "outlet": {"color": "#ac4142"}
      }
    };
  },
  created() {
    Promise.all([
      fetch('/files/media.json').then(response => response.json()),
      fetch('/files/tools.json').then(response => response.json()),
      fetch('/files/refs.json').then(response => response.json())
    ]).then(([mediaData, toolsData, refsData]) => {
      this.media_list = mediaData;
      this.tools_list = toolsData;
      this.pubs_list = refsData;
      // Do something else here after all fetches are complete
      this.media_list_with_attr = this.assign_projects_to_media(this.pubs_list, this.tools_list, this.media_list);
    });
  },
  computed: {
    media_to_show() {
      let temp_media_list = this.media_list.filter(media => media.toshow);
      if (this.is_home) {
        return temp_media_list.filter(media => media.highlight).slice(0, 5);
      } else {
        return temp_media_list;
      }
    }
  },
  methods: {
    assign_projects_to_media(refs_json, tools_json, media_json) {
      media_json.forEach(function (media) {
        let ref_list = [];
        tools_json.forEach(function (tool) {
          if (media.project_id && media.project_id.indexOf(tool.id) >= 0) {
            ref_list.push({
              "title": tool.title,
              "link": tool.links[0]
            });
          }
        });
        refs_json.forEach(function (ref) {
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
    }
  }
});
</script>

<style scoped>
</style>