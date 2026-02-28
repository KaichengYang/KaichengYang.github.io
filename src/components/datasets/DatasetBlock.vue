<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PubBlock from '@/components/pubs/PubsBlock.vue'

// props
defineProps({
  dataset_obj: {
    type: Object,
    required: true
  }
})

// data
const icon_mapping = {
  "GitHub": {
    prefix: "fab",
    icon: "github"
  },
  "default": {
    prefix: "fas",
    icon: "link"
  },
  "Download": {
    prefix: "fas",
    icon: "download"
  },
}

// modal state
const show_modal = ref(false);

const openModal = () => {
  show_modal.value = true;
};

const closeModal = () => {
  show_modal.value = false;
};

const handleEscKey = (event) => {
  if (event.key === 'Escape' && show_modal.value) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey);
});

// methods
const get_icon = (link_name) => {
  return icon_mapping[link_name] || icon_mapping["default"]
}

</script>

<template>
  <div class="text-center md:text-left">
    <h1 class="text-2xl font-bold">{{ dataset_obj.title }}</h1>
    <p class="text-lg prose">{{ dataset_obj.msg }}</p>
    <span v-if="dataset_obj.pub">
      <a class="link" @click="openModal">
        <font-awesome-icon :icon="['fas', 'file']" />
        Publication
      </a>
      <dialog :class="{'modal modal-open': show_modal}" @close="closeModal">
        <div class="modal-box w-11/12 max-w-3xl bg-white">
          <div class="not-prose py-2">
            <PubBlock :pub_obj="dataset_obj.pub" />
          </div>
          <div class="modal-action">
            <button class="btn btn-outline btn-primary" @click="closeModal">
              <font-awesome-icon :icon="['far', 'circle-xmark']" />
              Close
            </button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop" @click="closeModal">
          <button>close</button>
        </form>
      </dialog>
      <span v-if="dataset_obj.links && dataset_obj.links.length"> | </span>
    </span>
    <span v-for="(link, index) in dataset_obj.links" :key="link.url">
      <a :href="link.url" class="link" target="_blank">
        <font-awesome-icon :icon="[get_icon(link.name).prefix, get_icon(link.name).icon]" />
        {{ link.name }}
      </a>
      <span v-if="index != dataset_obj.links.length - 1"> | </span>
    </span>
  </div>
</template>
