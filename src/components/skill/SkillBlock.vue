<script setup>

// props
defineProps({
  skill_obj: {
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
  <div class="text-center md:text-left">
    <h1 class="text-2xl font-bold">{{ skill_obj.title }}</h1>
    <p class="text-lg prose">{{ skill_obj.msg }}</p>
    <span v-for="(link, index) in skill_obj.links" :key="link.url">
      <a :href="link.url" class="link" target="_blank">
        <font-awesome-icon :icon="[get_icon(link.name).prefix, get_icon(link.name).icon]" />
        {{ link.name }}
      </a>
      <span v-if="index != skill_obj.links.length - 1"> | </span>
    </span>
    <div v-if="skill_obj.status === 'retired'" class="mt-3">
      <div class="alert alert-warning bg-gray-50 border-gray-200 text-gray-600 p-3 rounded-lg shadow-sm">
        <font-awesome-icon icon="exclamation-triangle"/>
        <span class="font-medium">This skill is no longer maintained.</span>
      </div>
    </div>
  </div>
</template>
