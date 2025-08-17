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
          <p class="text-xl text-center text-gray-700 mb-8">
            We are actively recruiting motivated Ph.D. students to join our research team at Binghamton University.
          </p>
        </div>

        <!-- Research Areas -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Research Areas</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-primary">
                  <font-awesome-icon :icon="['fas', 'user']" class="mr-2" />
                  Social Bots Detection
                </h3>
                <p>Developing advanced techniques to identify and analyze inauthentic social media accounts and their behaviors.</p>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-primary">
                  <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="mr-2" />
                  Misinformation Detection
                </h3>
                <p>Creating systems to identify, track, and understand the spread of false information online.</p>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-primary">
                  <font-awesome-icon :icon="['fas', 'gauge']" class="mr-2" />
                  Algorithmic Fairness
                </h3>
                <p>Investigating and addressing biases in AI systems and their impact on society.</p>
              </div>
            </div>
            
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title text-primary">
                  <font-awesome-icon :icon="['fas', 'database']" class="mr-2" />
                  Computational Social Science
                </h3>
                <p>Applying computational methods to understand social phenomena and online behaviors.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- What We Offer -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">What We Offer</h2>
          <div class="prose prose-lg mx-auto">
            <ul class="space-y-3">
              <li><strong>Competitive funding:</strong> Full PhD funding including tuition, stipend, and benefits</li>
              <li><strong>Research mentorship:</strong> Close collaboration with Dr. Yang and exposure to cutting-edge research</li>
              <li><strong>Publication opportunities:</strong> Support for publishing in top-tier venues</li>
              <li><strong>Conference participation:</strong> Travel funding for presenting research at conferences</li>
              <li><strong>Industry connections:</strong> Opportunities for internships and collaborations</li>
              <li><strong>Interdisciplinary environment:</strong> Collaboration across computer science, social science, and policy</li>
              <li><strong>Professional development:</strong> Training in grant writing, teaching, and career preparation</li>
            </ul>
          </div>
        </div>

        <!-- Ideal Candidates -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Ideal Candidates</h2>
          <div class="prose prose-lg mx-auto">
            <h3>Technical Background</h3>
            <ul>
              <li>Strong programming skills (Python, R, or similar)</li>
              <li>Experience with data analysis and machine learning</li>
              <li>Background in computer science, statistics, or related quantitative field</li>
              <li>Familiarity with web technologies and APIs is a plus</li>
            </ul>
            
            <h3>Research Experience</h3>
            <ul>
              <li>Previous research experience (undergraduate research, internships, or publications)</li>
              <li>Interest in interdisciplinary research combining technology and social science</li>
              <li>Passion for addressing societal challenges through computational methods</li>
            </ul>
            
            <h3>Personal Qualities</h3>
            <ul>
              <li>Strong motivation and self-direction</li>
              <li>Excellent communication and writing skills</li>
              <li>Collaborative mindset and ability to work in teams</li>
              <li>Curiosity about online information ecosystems and their societal impact</li>
            </ul>
          </div>
        </div>

        <!-- About Binghamton University -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">About Binghamton University</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              Binghamton University, part of the State University of New York (SUNY) system, is a premier public research university 
              known for its academic excellence and vibrant campus life. The School of Computing offers a supportive environment 
              for graduate students with:
            </p>
            <ul>
              <li>Small class sizes and close faculty-student relationships</li>
              <li>State-of-the-art research facilities and computing resources</li>
              <li>Beautiful campus in the Finger Lakes region of New York</li>
              <li>Affordable cost of living compared to major metropolitan areas</li>
              <li>Strong alumni network and career placement record</li>
            </ul>
          </div>
        </div>

        <!-- Application Process -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Application Process</h2>
          <div class="prose prose-lg mx-auto">
            <h3>Before You Apply</h3>
            <p>
              We strongly encourage prospective students to reach out before submitting a formal application. 
              Please send an email with the following:
            </p>
            <ul>
              <li>Your CV or resume</li>
              <li>A brief statement of research interests (1-2 paragraphs)</li>
              <li>Unofficial transcripts</li>
              <li>Any relevant research experience or publications</li>
            </ul>
            
            <h3>Formal Application</h3>
            <p>
              Applications to the PhD program in Computer Science at Binghamton University are submitted through the 
              university's graduate admissions portal. Key requirements include:
            </p>
            <ul>
              <li>Bachelor's degree in computer science or related field</li>
              <li>GRE scores (recommended but not required)</li>
              <li>TOEFL/IELTS scores for international students</li>
              <li>Three letters of recommendation</li>
              <li>Statement of purpose</li>
              <li>Official transcripts</li>
            </ul>
            
            <div class="alert alert-info mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 class="font-bold">Application Deadlines</h4>
                <p>For Fall admission with funding consideration, applications are typically due in early February. 
                Check the university website for exact dates.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="text-center mb-8">
          <div class="card bg-primary text-primary-content shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center text-2xl mb-4">Ready to Join Our Team?</h2>
              <p class="mb-6">
                We'd love to hear from you! Reach out to discuss research opportunities and answer any questions.
              </p>
              <div class="card-actions justify-center">
                <a href="mailto:yang3kc@gmail.com" class="btn btn-secondary">
                  <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
                  Contact Dr. Yang
                </a>
                <a href="https://www.binghamton.edu/computer-science/graduate/phd.html" target="_blank" class="btn btn-outline btn-secondary">
                  <font-awesome-icon :icon="['fas', 'link']" class="mr-2" />
                  PhD Program Info
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
    <Footer />
  </div>
</template>