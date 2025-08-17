<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">

      <h1 class="text-4xl font-bold my-8 text-center">About This Website</h1>

      <div class="max-w-4xl mx-auto">
        <div class="prose prose-lg mx-auto">
          <p>
            This lab website was created with the help of AI <a class="link" href="https://cursor.com" target="_blank">coding</a> <a class="link" href="https://www.anthropic.com/claude-code" target="_blank">assistants</a>.
            It serves as the digital home for Yang Lab, showcasing our research, publications, tools, and team members.
          </p>
          <p>
            The website is implemented as a <a class="link" href="https://vuejs.org/" target="_blank">Vue.js</a> single-page application,
            with <a class="link" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and <a class="link" href="https://daisyui.com/" target="_blank">daisyUI</a> for styling.
            The icons are from <a class="link" href="https://fontawesome.com/" target="_blank">Font Awesome</a>.
            It also uses <a class="link" href="https://github.com/ORCID/bibtexParseJs" target="_blank">@orcid/bibtexParseJs</a> to parse the BibTeX files.
          </p>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>