<script setup>

// props
defineProps({
  tool_obj: {
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
  "PyPI": {
    prefix: "fab",
    icon: "python"
  },
  "CRAN": {
    prefix: "fab",
    icon: "r-project"
  },
}

// methods
const get_icon = (link_name) => {
  return icon_mapping[link_name] || icon_mapping["default"]
}

</script>

<template>
  <div class="grid grid-cols-1 text-center md:grid-cols-2 md:text-left">
    <img :src="`/images/${tool_obj.image}.png`" alt="tool image" class="max-w-64 col-span-1 mx-auto" />
    <div class="col-span-1">
      <h1 class="text-2xl font-bold">{{ tool_obj.title }}</h1>
      <p class="text-lg prose">{{ tool_obj.msg }}</p>
      <span v-for="(link, index) in tool_obj.links" :key="link.url">
        <a :href="link.url" class="link" target="_blank">
          <font-awesome-icon :icon="[get_icon(link.name).prefix, get_icon(link.name).icon]" />
          {{ link.name }}
        </a>
        <span v-if="index != tool_obj.links.length - 1"> | </span>
      </span>
    </div>
  </div>
</template>