<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img
        :src="member.photo || '/photos/avatar_placeholder.jpg'"
        :alt="member.name"
        class="rounded-full w-48 h-48 object-cover"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title text-xl">{{ member.name }}</h2>
      <p class="text-lg text-primary font-medium">{{ member.role }}</p>
      <p v-if="member.year" class="text-sm text-gray-500">{{ member.year }}</p>
      <p v-if="member.affiliation" class="text-sm text-gray-500">{{ member.affiliation }}</p>

      <div v-if="member.bio" class="prose text-sm mt-2">
        <p>{{ member.bio }}</p>
      </div>

      <div v-if="member.research_interests && member.research_interests.length" class="mt-2">
        <p class="text-sm font-medium text-gray-600">Research Interests:</p>
        <div class="flex flex-wrap gap-1 mt-1">
          <span
            v-for="interest in member.research_interests"
            :key="interest"
            class="badge badge-outline badge-sm"
          >
            {{ interest }}
          </span>
        </div>
      </div>

      <div v-if="member.email || (member.links && member.links.length)" class="card-actions justify-center mt-4">
        <a
          v-if="member.email"
          :href="`mailto:${member.email}`"
          class="btn btn-circle btn-outline btn-sm"
          :title="`Email ${member.name}`"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>

        <template v-if="member.links">
          <a
            v-for="link in member.links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="btn btn-circle btn-outline btn-sm"
            :title="link.name"
          >
            <font-awesome-icon :icon="[link.icon.prefix, link.icon.icon]" />
          </a>
        </template>
      </div>
    </div>
  </div>
</template>