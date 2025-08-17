<script setup>
import { ref, onMounted, inject } from 'vue'
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
import TeamMember from '@/components/team/TeamMember.vue'

const team = inject('team', ref({}))

</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">
      
      <h1 class="text-4xl font-bold my-8 text-center">Yang Lab Team</h1>
      
      <!-- Principal Investigator Section -->
      <div v-if="team.pi" class="mb-12">
        <h2 class="text-3xl font-medium mb-6 text-center text-primary">Principal Investigator</h2>
        <div class="flex justify-center">
          <div class="w-full max-w-md">
            <TeamMember :member="team.pi" />
          </div>
        </div>
      </div>

      <div class="divider divider-primary" />

      <!-- Students Section -->
      <div v-if="team.students && team.students.length > 0" class="mb-8">
        <h2 class="text-3xl font-medium mb-6 text-center text-primary">Students</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamMember 
            v-for="student in team.students" 
            :key="student.name"
            :member="student" 
          />
        </div>
      </div>

      <!-- Join Us Section -->
      <div class="text-center mt-12 mb-8">
        <div role="alert" class="alert alert-info">
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
          <div>
            <h3 class="font-bold text-lg">Join Our Team!</h3>
            <div class="text-sm">
              We are actively recruiting motivated Ph.D. students interested in computational social science, 
              misinformation detection, and AI safety. If you're passionate about creating safer online information 
              ecosystems, we'd love to hear from you!
            </div>
            <div class="mt-2">
              <a href="mailto:yang3kc@gmail.com" class="btn btn-primary btn-sm">
                <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>