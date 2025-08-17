<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">

      <h1 class="text-4xl font-bold my-8 text-center">Join Yang Lab</h1>

      <div class="max-w-4xl mx-auto">

        <!-- Introduction -->
        <div class="prose prose-lg mx-auto mb-8">
          <p class="text-xl">
            We are actively recruiting motivated Ph.D. and Master's students to join our research team at Binghamton University.
            We are also open to collaboration with researchers from other institutions.
          </p>
          <p class="text-xl">
            You can check out our <router-link to="/team" class="link">team</router-link> and <a class="link" href="#pubs">publications</a> to learn more about our research.
          </p>
        </div>


        <!-- PhD Candidates -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Ph.D. Candidates</h2>
          <div class="prose prose-lg mx-auto">
            <h3>Preferred Background</h3>
            <p>
              We are open to students with a wide range of backgrounds.
              However, since the Ph.D. program is located in a Computer Science department, the admission committee will give more weight to students with backgrounds in computer science or related fields.
              In principle, the admission committee only admits students with Master's degrees, but undergraduates with exceptional backgrounds will also be considered.
            </p>

            <h3>Application Process</h3>
            <p>
              Please follow the instructions on the <a href="https://www.binghamton.edu/computer-science/graduate-programs" target="_blank" class="link">Ph.D. program website</a> for more details.
              Prospective Ph.D. students are encouraged to reach out before submitting an application by emailing their research statements and CVs to <a href="mailto:yang3kc@gmail.com" class="link">Kai-Cheng</a>.
              Be sure to mention Kai-Cheng's name in the application so that he can be notified of your application.
            </p>

          </div>
        </div>

        <!-- Other students & collaborators -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Students at Binghamton University</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              We are also open to collaboration with students at Binghamton University and other institutions.
              Paid positions are unavailable unless stated otherwise, but we can provide research opportunities and resources for students who are interested in our work.
              Those who are interested in joining our lab should send <a href="mailto:yang3kc@gmail.com" class="link">Kai-Cheng</a> an email with a brief statement of research interests and a CV.
            </p>
          </div>
        </div>

      </div>

    </div>
    <Footer />
  </div>
</template>