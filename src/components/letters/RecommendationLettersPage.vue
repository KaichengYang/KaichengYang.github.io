<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
</script>

<template>
  <div class="flex flex-col flex-grow">
    <Navbar />
    <div class="container mx-auto max-w-screen-lg flex-grow">

      <h1 class="text-4xl font-bold my-8 text-center">Recommendation Letters</h1>

      <div class="max-w-4xl mx-auto">

        <!-- Overview -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Overview</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              Writing recommendation letters is part of my job—you are not asking me for a "favor."
              That said, the more you help me prepare, the stronger and more personalized a letter I can write for you.
            </p>
          </div>
        </div>

        <!-- Timing -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Timing</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              Please ask at least <strong>2 weeks</strong> before the earliest deadline.
              If I'm traveling or it's near the end of the semester, earlier is better.
              I'll do my best to accommodate shorter timelines, but I can't guarantee it.
            </p>
          </div>
        </div>

        <!-- What to Send -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">What to send to me</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              When you ask for a letter, please send me the following:
            </p>
            <ul>
              <li>Your <strong>CV or resume</strong></li>
              <li>A description of the <strong>opportunity</strong> (job posting, program description, fellowship details, etc.)</li>
              <li>The <strong>purpose</strong> of the letter: what you're applying for and why</li>
              <li>A <strong>bulleted list of key "selling points"</strong> you'd like me to highlight (projects we worked on together, skills you demonstrated, accomplishments, etc.)</li>
              <li>Any other <strong>supporting materials</strong> (transcripts, personal statements, etc.) that would help me write a stronger letter</li>
            </ul>
          </div>
        </div>

        <!-- Follow Up -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Follow up</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              Don't assume I've submitted the letter until I explicitly confirm it.
              If you haven't heard from me a few days before the deadline, please send me a reminder.
            </p>
            <p>
              Also, be aware that automated letter requests from application systems often end up in my spam or email filters.
              After you submit an application that triggers an email to me, follow up to make sure I actually received the request.
            </p>
          </div>
        </div>

        <!-- Interfolio -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold mb-6 text-center text-primary">Interfolio</h2>
          <div class="prose prose-lg mx-auto">
            <p>
              If you're going on the academic job market and need me to send many letters to different institutions, please consider using
              <a href="https://www.interfolio.com/" target="_blank" class="link">Interfolio</a>.
              It allows me to upload one letter that can be forwarded to multiple destinations, which saves both of us a lot of time.
              The service costs around $80/year, but it's worth it.
            </p>
          </div>
        </div>

      </div>

    </div>
    <Footer />
  </div>
</template>
