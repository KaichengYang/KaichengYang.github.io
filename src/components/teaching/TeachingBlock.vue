<script setup>

// props
defineProps({
  course_obj: {
    type: Object,
    required: true
  }
})

// data
const icon_mapping = {
  "Course Website": {
    prefix: "fas",
    icon: "link"
  },
  "Syllabus": {
    prefix: "far",
    icon: "file-pdf"
  },
  "GitHub Repository": {
    prefix: "fab",
    icon: "github"
  },
  "Course Materials": {
    prefix: "fas",
    icon: "database"
  },
  "default": {
    prefix: "fas",
    icon: "link"
  }
}

// methods
const get_icon = (link_name) => {
  return icon_mapping[link_name] || icon_mapping["default"]
}

</script>

<template>
  <div class="grid grid-cols-1 text-center md:grid-cols-2 md:text-left gap-4">
    <div class="col-span-1">
      <h1 class="text-2xl font-bold">{{ course_obj.title }}</h1>
      <p class="text-lg text-gray-600">{{ course_obj.code }} • {{ course_obj.institution }}</p>
      <p class="text-md text-gray-500">{{ course_obj.semester }}</p>
    </div>
    <div class="col-span-1">
      <div v-if="course_obj.links && course_obj.links.length > 0">
        <span v-for="(link, index) in course_obj.links" :key="link.url">
          <a :href="link.url" class="link" target="_blank">
            <font-awesome-icon :icon="[get_icon(link.name).prefix, get_icon(link.name).icon]" />
            {{ link.name }}
          </a>
          <span v-if="index != course_obj.links.length - 1"> | </span>
        </span>
      </div>
    </div>
  </div>
</template>