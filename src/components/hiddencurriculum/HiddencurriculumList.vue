<script setup>
import BackForth from '@/components/nav/BackForth.vue'
import { ref } from 'vue';

const sections = ref([
  {
    id: 'research-tools',
    title: 'Research Tools',
    items: [
      {
        title: 'llm_for_css',
        link: 'https://github.com/yang3kc/llm_for_css',
        description: 'my guidelines and example code for leveraging LLMs for computational social science tasks',
        icon: { prefix: 'fab', icon: 'github' }
      },
      {
        title: 'daily_arxiv_digest',
        link: 'https://github.com/yang3kc/daily_arxiv_digest',
        description: 'an interactive tool for using ChatGPT to filter relevant papers from arXiv every day',
        icon: { prefix: 'fab', icon: 'github' }
      },
      {
        title: 'scicolor',
        link: 'https://yang3kc.github.io/scicolor/',
        description: 'a collection of color palettes for scientific visualization'
      }
    ]
  },
  {
    id: 'coding',
    title: 'Coding',
    items: [
      {
        title: 'The Missing Semester of Your CS Education',
        link: 'https://missing.csail.mit.edu/',
        description: ''
      },
      {
        title: 'llm_git_commit',
        link: 'https://github.com/yang3kc/llm_git_commit',
        description: 'a tool for using LLMs to generate git commit messages',
        icon: { prefix: 'fab', icon: 'github' }
      }
    ]
  },
  {
    id: 'paper-writing',
    title: 'Paper Writing',
    items: [
      {
        title: 'cs-paper-checklist',
        link: 'https://github.com/yzhao062/cs-paper-checklist',
        description: 'a checklist for writing computer science papers',
        icon: { prefix: 'fab', icon: 'github' }
      },
      {
        title: 'Snippet to generate PDF diff files on Overleaf on the fly',
        link: 'https://gist.github.com/yang3kc/120aeb79a3c41837b51ba611ace28a78',
        description: ''
      }
    ]
  },
  {
    id: 'academic-job-market',
    title: 'Academic Job Market',
    items: [
      {
        title: 'Tips for Computer Science Faculty Applications - Yisong Yue',
        link: 'https://yisongyue.medium.com/checklist-of-tips-for-computer-science-faculty-applications-9fd2480649cc',
        description: 'the Medium-Level Agenda point is gold',
        icon: { prefix: 'fas', icon: 'lightbulb' }
      },
      {
        title: 'Arthur Spirling on Job Talks',
        link: 'https://github.com/ArthurSpirling/jobtalks/blob/master/jobtalks2017_handout_version.pdf',
        description: '',
        icon: { prefix: 'fas', icon: 'lightbulb' }
      },
      {
        title: 'CV Template',
        link: 'https://www.overleaf.com/project/62696ff20c0ea2172a793d1e',
        description: 'the LaTeX template I use for my CV',
        icon: { prefix: 'far', icon: 'file-pdf' }
      },
      {
        title: 'Personal website',
        link: 'https://github.com/KaichengYang/KaichengYang.github.io',
        description: 'source code for my personal website',
        icon: { prefix: 'fab', icon: 'github' }
      }
    ]
  },
  {
    id: 'misc',
    title: 'Misc',
    items: []
  }
]);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div>
    <!-- Introduction -->
    <p class="prose">
      I'm listing my collection of hidden curriculum below.
      These are resources that one would not typically find in classes or textbooks but are useful for their research and career.
      The list contains tools, blog posts, videos, and all sorts of resources that I found useful.
      Some were built or created by myself, and some were created by others.
    </p>

    <!-- Table of Contents -->
    <div class="my-8 flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-left">
        <li v-for="section in sections" :key="section.id" class="prose">
          <a href="#" @click.prevent="scrollToSection(section.id)" class="link">
            {{ section.title }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Content Sections -->
    <template v-for="section in sections" :key="section.id">
      <div class="divider divider-primary" />
      <h2 :id="section.id" class="text-3xl font-bold text-center">{{ section.title }}</h2>
      <ul class="list-disc list-inside">
        <li v-for="item in section.items" :key="item.title" class="prose">
          <a :href="item.link" class="link" target="_blank">
            <font-awesome-icon v-if="item.icon" :icon="[item.icon.prefix, item.icon.icon]" />
            {{ item.title }}
          </a>
          <span v-if="item.description">: {{ item.description }}</span>
        </li>
      </ul>
    </template>

    <div class="divider divider-primary" />
    <BackForth :is_home="false" :target="'/hiddencurriculum'" />
  </div>
</template>