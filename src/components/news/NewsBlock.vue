<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import PubBlock from '@/components/pubs/PubsBlock.vue';
import ToolBlock from '@/components/tool/ToolBlock.vue';
const props = defineProps({
  news_obj: {
    type: Object,
    required: true
  }
});

// modal state
const show_modal = ref(null);

// methods to control modal
const openModal = (projectObj) => {
  show_modal.value = projectObj;
};

const closeModal = () => {
  console.log('close');
  show_modal.value = null;
};

// ESC key handler
const handleEscKey = (event) => {
  if (event.key === 'Escape' && show_modal.value) {
    closeModal();
  }
};

// Add/remove ESC key listener
onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey);
});
</script>

<template>

  <template v-for="(msg, idx) in news_obj.msgs" :key="idx">
    <template v-if="msg.type == 'string'">{{ msg.msg }}&nbsp;</template>
    <template v-else-if="msg.type == 'pub' || msg.type == 'tool'">
      <a @click="openModal(msg.project)" class="link">{{ msg.project.title }}</a>
      <template v-if="msg.punctuation">{{ msg.punctuation }}</template>&nbsp;
    </template>
    <template v-else><a :href="msg.link" target="_blank" class="link">{{ msg.msg }} <font-awesome-icon :icon="['fas', 'link']"/></a>
    <template v-if="msg.punctuation">{{ msg.punctuation }}</template>&nbsp;</template>
  </template>

  <dialog v-if="show_modal" :class="{'modal modal-open': show_modal !== null}" @close="closeModal">
    <div class="modal-box w-11/12 max-w-3xl bg-white">
      <div v-if="show_modal && show_modal.type == 'pub'" class="not-prose py-2">
        <PubBlock :pub_obj="show_modal" />
      </div>
      <div v-else-if="show_modal && show_modal.type == 'tool'" class="not-prose py-2">
        <ToolBlock :tool_obj="show_modal" />
      </div>
      <div class="modal-action">
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