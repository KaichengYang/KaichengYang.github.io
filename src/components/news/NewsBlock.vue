<script setup>
import { ref } from 'vue';
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
const openModal = (projectId) => {
  show_modal.value = projectId;
};

const closeModal = () => {
  console.log('close');
  show_modal.value = null;
};
</script>

<template>

  <template v-for="msg in news_obj.msgs" :key="msg.msg">
    <template v-if="msg.type == 'string'">{{ msg.msg }}&nbsp;</template>
    <template v-else-if="msg.type == 'pub' || msg.type == 'tool'">
      <a @click="openModal(news_obj.project ? news_obj.project.id : null)" class="link">{{ news_obj.project.title }}</a>
      <template v-if="msg.punctuation">{{ msg.punctuation }}</template>&nbsp;
    </template>
    <template v-else><a :href="msg.link" target="_blank" class="link">{{ msg.msg }} <font-awesome-icon :icon="['fas', 'link']"/></a>
    <template v-if="msg.punctuation">{{ msg.punctuation }}</template>&nbsp;</template>
  </template>

  <dialog v-if="news_obj.project" :class="{'modal modal-open': show_modal === news_obj.project.id}" @close="closeModal">
    <div class="modal-box w-11/12 max-w-3xl bg-white">
      <div v-if="news_obj.project && news_obj.project.type == 'pub'" class="not-prose py-2">
        <PubBlock :pub_obj="news_obj.project" />
      </div>
      <div v-else-if="news_obj.project && news_obj.project.type == 'tool'" class="not-prose py-2">
        <ToolBlock :tool_obj="news_obj.project" />
      </div>
      <div class="modal-action">
        <button class="btn btn-outline btn-primary" @click="closeModal">
          <font-awesome-icon :icon="['far', 'circle-xmark']" />
          Close</button>
      </div>
    </div>
  </dialog>

</template>