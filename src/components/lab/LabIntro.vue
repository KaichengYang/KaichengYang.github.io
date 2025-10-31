<script setup>
</script>

<template>
  <div>
    <div class="gap-4 mt-4">
      <h1 class="text-4xl font-medium mb-4 flex justify-center">Welcome to Yang Lab @ Binghamton University</h1>
      <!-- lab description -->
      <div id="lab_description" class="mt-2 mx-4 prose">
        <p>
          We are a research group led by <router-link to="/kaicheng" class="link">Dr. Kai-Cheng Yang</router-link>, who is an Assistant Professor in the School of Computing at Binghamton University.
        </p>
        <p>
          Our lab focuses on creating safe, fair, and trustworthy online information platforms by identifying
          how malicious actors and flawed systems distort information flow and developing effective countermeasures.
          Our work spans social bots, misinformation, and algorithmic biases.
          Currently, we're exploring how generative AI is being misused in these contexts and how to harness
          this technology to protect against these threats. We combine computational methods, data science,
          and social science approaches to address critical challenges in online information ecosystems.
        </p>
        <p>
          Learn more about our research by exploring our <router-link to="/team" class="link">team</router-link> and <a class="link" href="#pubs">publications</a>.
          Our work has been <a class="link" href="#media">featured</a> in various media outlets, and you may find our research <a class="link" href="#tools">tools</a> helpful for your own projects.
          We've also compiled a <router-link to="/hiddencurriculum" class="link">collection of resources</router-link> that researchers might find useful.
        </p>
        <p>
          For prospective students, please see <router-link to="/prospective" class="link">here</router-link> for more information about joining our lab.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lab-image {
    width: 200px;
    height: auto;
    display: block;
}
</style>