<template>
  <hr class="col-span-full my-3">
  <div v-for="pub in pub_chunk_to_show" :key="pub.id" class="grid grid-cols-1 md:grid-cols-7 md:gap-x-4">
    <!-- date  -->
    <div class="font-mono text-center flex justify-center col-span-full md:col-span-1">
        <span class="badge text-white w-28 float-right mt-1" style="background-color: #867d78">{{ pub.date }}</span>
    </div>
    <!-- main info -->
    <div class="col-span-full md:col-span-5">
      <PubsBlock :pub_obj="pub" :is_home="is_home"/>
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
  <BackForth :is_home="is_home" :target="'/pubs'"/>
</template>

<script>
import { defineComponent } from 'vue';
import BackForth from '@/components/nav/BackForth.vue';
import PubsBlock from '@/components/pubs/PubsBlock.vue';
import bibtexParse from '@orcid/bibtex-parse-js';

export default defineComponent({
  name: 'PubsList',
  components: {
    BackForth,
    PubsBlock,
  },
  props: {
    is_home: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      pub_list: [],
      authors: {},
    };
  },
  computed: {
    pub_chunk_to_show() {
      return this.get_pub_chunk_to_show();
    },
  },
  created() {
    Promise.all([
      fetch('/files/pubs/authors.json').then(response => response.json()),
      fetch('/files/pubs/pubs_index.json').then(response => response.json()),
      fetch('/files/media.json').then(response => response.json()),
    ]).then(([authors, pub_file_names, media]) => {
      this.authors = authors;
      pub_file_names.forEach(pub_file_name => {
        fetch(`/files/pubs/${pub_file_name}`)
          .then(response => response.json())
          .then(pub => {
            pub.bibtex = bibtexParse.toJSON(pub.bibtex_string)[0];
            pub.id = pub.bibtex.citationKey;
            pub.authors.forEach(author => {
              author.info = this.authors[author.id];
            });
            pub.media = [];
            media.forEach(media_item => {
              if (media_item.project_id == pub.id) {
                pub.media.push(media_item);
              }
            });
            this.pub_list.push(pub);
          });
      });
    });
  },
  methods: {
    get_pub_chunk_to_show() {
      this.pub_list.sort((a, b) => new Date(b.date) - new Date(a.date));
      if (this.is_home) {
        return this.pub_list.filter(pub => pub.highlight.length > 0);
      } else {
        return this.pub_list;
      }
    }
  },
  updated() {
    _altmetric_embed_init();
  },
});

</script>