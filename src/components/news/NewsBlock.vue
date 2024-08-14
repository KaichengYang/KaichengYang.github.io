<template>

<template v-for="msg in news_obj.msgs" :key="msg.msg">
  <template v-if="msg.type == 'string'">{{ msg.msg }}&nbsp;</template>
  <template v-else-if="msg.type == 'paper'">
    <b>{{ msg.msg }}</b> <a :href="msg.link" target="_blank" class="link"><font-awesome-icon :icon="['fas', 'file']" /></a>
    <template v-if="msg.punctuation">{{ msg.punctuation }}</template>&nbsp;
  </template>
  <template v-else><a :href="msg.link" target="_blank" class="link">{{ msg.msg }}</a>
  <template v-if="msg.punctuation">{{ msg.punctuation }}</template>&nbsp;</template>
</template>

</template>

<script setup>
const props = defineProps({
  news_obj: {
    type: Object,
    required: true
  }
});
</script>