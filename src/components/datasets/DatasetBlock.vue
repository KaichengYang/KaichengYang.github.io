<script setup>

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

// methods
const get_icon = (link_name) => {
  return icon_mapping[link_name] || icon_mapping["default"]
}

</script>

<template>
  <div class="text-center md:text-left">
    <h1 class="text-2xl font-bold">{{ dataset_obj.title }}</h1>
    <p class="text-lg prose">{{ dataset_obj.msg }}</p>
    <span v-if="dataset_obj.pub_id">
      <router-link :to="`/pubs/${dataset_obj.pub_id}`" class="link">
        <font-awesome-icon :icon="['fas', 'file']" />
        Publication
      </router-link>
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