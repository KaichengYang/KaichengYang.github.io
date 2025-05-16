<script setup>
import BackForth from '@/components/nav/BackForth.vue'
import { ref, onMounted } from 'vue';


</script>

<template>
  <div>
    <!-- Introduction -->
    <p class="prose">
      I'm listing my collection of hidden curriculum below.
      These are resources that one would not typically find in classes or textbooks but are useful for one's research and career.
      The list contains tools, blogs, videos, and all sorts of resources that I found useful.
      Some were built or created by myself, and some were built by others.
    </p>
    <div class="divider divider-primary" />
    <h2 class="text-3xl font-bold text-center">Tools</h2>
    <ul class="list-disc list-inside">
      <li class="prose">
        <a href="https://github.com/yang3kc/llm_for_css" class="link">
          <font-awesome-icon :icon="['fab', 'github']" />
          llm_for_css
        </a>: my guidelines and example code for leveraging LLMs for computational social science tasks
      </li>
      <li class="prose">
        <a href="https://github.com/yang3kc/daily_arxiv_digest" class="link">
          <font-awesome-icon :icon="['fab', 'github']" />
          daily_arxiv_digest
        </a>: an interactive tool for using ChatGPT to filter relevant papers from arXiv every day
      </li>
      <li class="prose">
        <a href="https://github.com/yang3kc/llm_git_commit" class="link">
          <font-awesome-icon :icon="['fab', 'github']" />
          llm_git_commit
        </a>: a tool for using LLMs to generate git commit messages
      </li>
    </ul>
    <div class="divider divider-primary" />
    <BackForth :is_home="false" :target="'/hiddencurriculum'" />
  </div>
</template>