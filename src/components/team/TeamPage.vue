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
      <div v-if="team.pi" class="mb-8">
        <h2 class="text-3xl font-medium mb-6 text-center text-primary">Principal Investigator</h2>
        <div class="flex justify-center">
          <div class="w-full max-w-md">
            <TeamMember :member="team.pi" />
          </div>
        </div>
      </div>

      <!-- Join Us Section -->
      <div class="flex justify-center mt-12 mb-8">
        <div role="alert" class="alert alert-primary max-w-2xl">
          <div class="text-center">
            <h3 class="font-bold text-lg flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-current h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Join Us!
            </h3>
            <div class="text-sm mt-2">
              We are actively recruiting motivated students and collaborators! See <router-link to="/prospective" class="link">here</router-link> for more information.
            </div>
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

    </div>
    <Footer />
  </div>
</template>