<template>
  <div class="text-center md:text-left">
    <!-- title -->
    <p><b>{{ pub_obj.bibtex.entryTags.title }}</b></p>
    <!-- authors  -->
    <p>
      🧑‍💻️
      <span v-for="(author, index) in pub_obj.authors" :key="author.id" >
        <a :href="author.info.link" target="_blank" class="underline text-primary" :class="{'font-bold': author.annotation && author.annotation.includes('highlight')}">
          <font-awesome-icon v-if="author.annotation && author.annotation.includes('highlight')" :icon="['fas', 'circle-user']" />
          <font-awesome-icon v-else :icon="['far', 'circle-user']" />
          {{ author.info.abbr_name }}
          <!-- <font-awesome-icon v-if="author.annotation && author.annotation.includes('corresponding_author')" :icon="['far', 'envelope']" /> -->
        </a>
        <span v-if="author.annotation && author.annotation.includes('corresponding_author')"></span>
        <span v-if="index != pub_obj.authors.length - 1"> | </span>
      </span>
    </p>
    <!-- venue  -->
    <p v-if="pub_obj.bibtex.entryTags.booktitle">🏠 {{ pub_obj.bibtex.entryTags.booktitle }} ({{ pub_obj.bibtex.entryTags.year }})</p>
    <p v-else>🏠 {{ pub_obj.bibtex.entryTags.journal }} ({{ pub_obj.bibtex.entryTags.year }})</p>
    <!-- links -->
    <span v-if="pub_obj.links">
      🔗
      <span v-for="(link, index) in pub_obj.links" :key="index">
        <a v-bind:href="link.url" target="_blank" class="link">
          <font-awesome-icon v-if="link.name === 'DOI' || link.name === 'arXiv' || link.name === 'OSF'" :icon="['far', 'file-pdf']" />
          <font-awesome-icon v-else-if="link.name === 'Dataset'" :icon="['fas', 'database']" />
          <font-awesome-icon v-else-if="link.name === 'GitHub'" :icon="['fab', 'github']" />
          <font-awesome-icon v-else :icon="['fas', 'link']" />
          {{ link.name }} </a>
        <span v-if="index != pub_obj.links.length - 1"> | </span>
      </span>
      <br>
    </span>
    <!-- media -->
    <span v-if="pub_obj.media_list.length > 0">
      🗞
      <span v-for="(media, index) in pub_obj.media_list" :key="index">
        <a v-bind:href="media.url" target="_blank" class="link"> {{ media.outlet }} </a>
        <span v-if="index != pub_obj.media_list.length - 1"> | </span>
      </span>
      <br>
    </span>
    <!-- abstract and bibtex -->
    <template v-if="!is_home">
      🛠️
      <button class="btn btn-xs btn-outline btn-primary mr-1" @click="openModal(pub_obj.id, 'bibtex')">Bibtex</button>
      <button class="btn btn-xs btn-outline btn-primary" @click="openModal(pub_obj.id, 'abstract')">Abstract</button>
      <dialog :class="{'modal modal-open': show_modal === pub_obj.id && show_modal_type === 'bibtex'}" @close="closeModal">
        <div class="modal-box w-11/12 max-w-4xl">
          <div class="mockup-code bg-base-200 text-primary">
            <pre class="whitespace-pre-wrap"><code>{{ pub_obj.bibtex_string }}</code></pre>
          </div>
          <div class="modal-action">
            <button class="btn btn-outline btn-primary" @click="copyToClipboard(pub_obj.bibtex_string, 'Bibtex')">
              <font-awesome-icon :icon="['far', 'copy']" />
              Copy Bibtex</button>
            <button class="btn btn-outline btn-primary" @click="closeModal">
              <font-awesome-icon :icon="['far', 'circle-xmark']" />
              Close</button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop" @click="closeModal">
          <button>close</button>
        </form>
      </dialog>
      <dialog :class="{'modal modal-open': show_modal === pub_obj.id && show_modal_type === 'abstract'}" @close="closeModal">
        <div class="modal-box w-11/12 max-w-4xl">
          <p class="prose">{{ pub_obj.abstract }}</p>
          <div class="modal-action">
            <button class="btn btn-outline btn-primary" @click="copyToClipboard(pub_obj.abstract, 'Abstract')">
              <font-awesome-icon :icon="['far', 'copy']" />
              Copy Abstract</button>
            <button class="btn btn-outline btn-primary" @click="closeModal">
              <font-awesome-icon :icon="['far', 'circle-xmark']" />
              Close</button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop" @click="closeModal">
          <button>close</button>
        </form>
      </dialog>
    </template>
  </div>
  <div v-if="showToast" class="toast">
    <div class="alert alert-warning">
      <div class="flex-1">
        <span class="text-white">{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PubsBlock',
  props: {
    pub_obj: {
      type: Object,
      required: true
    },
    is_home: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      show_modal: null,
      show_modal_type: null,
      showToast: false,
      toastMessage: ''
    };
  },
  methods: {
    openModal(id, type) {
      this.show_modal = id;
      this.show_modal_type = type;
      console.log(this.show_modal);
    },
    closeModal() {
      this.show_modal = null;
    },
    copyToClipboard(content, content_type) {
      navigator.clipboard.writeText(content).then(() => {
        this.showToast = true;
        this.toastMessage = `${content_type} copied to clipboard!`;
        console.log(this.toastMessage);
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }
});
</script>