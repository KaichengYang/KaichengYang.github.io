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
          We are actively seeking motivated students and collaborators, see <router-link to="/prospective" class="link">here</router-link> for more information.
        </p>
      </div>
    </div>
    <!-- <div role="alert" class="alert alert-info mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-info">
        We are actively recruiting motivated Ph.D. students! If you are interested in joining our lab,
        please send an email with your CV and a short statement of purpose to yang3kc@gmail.com.
      </span>
    </div> -->
  </div>
</template>

<style scoped>
.lab-image {
    width: 200px;
    height: auto;
    display: block;
}
</style>