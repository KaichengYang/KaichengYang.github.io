<script setup>
const nav_links = [
    {
        name: "Prospective Students",
        emoji: "🎓",
        link: "/prospective",
        is_internal: true,
    },
    {
        name: "Recommendation Letters",
        emoji: "✉️",
        link: "/recommendation-letters",
        is_internal: true,
    },
    {
        name: "Resource Collection",
        emoji: "🔖",
        link: "/hiddencurriculum",
        is_internal: true,
    },
];
</script>

<template>
    <div>
        <div class="gap-4 mt-4">
            <h1 class="text-4xl font-medium mb-4 flex justify-center">
                Welcome to Yang Lab @ Binghamton University
            </h1>
            <!-- lab description -->
            <div id="lab_description" class="mt-2 mx-4 prose">
                <p>
                    We are a research group led by
                    <router-link to="/kaicheng" class="link"
                        >Dr. Kai-Cheng Yang</router-link
                    >, who is an Assistant Professor in the School of Computing
                    at Binghamton University.
                </p>
                <p>
                    Our lab studies how generative AI is transforming online
                    information ecosystems, combining computational methods,
                    data science, and social science approaches.
                </p>
            </div>
            <!-- compact navigation links -->
            <div class="mt-6 mx-4 text-sm text-gray-500">
                <span class="mr-1">For students &amp; researchers:</span>
                <template v-for="(item, index) in nav_links" :key="item.name">
                    <router-link
                        v-if="item.is_internal"
                        :to="item.link"
                        class="link"
                        >{{ item.emoji }} {{ item.name }}</router-link
                    >
                    <a v-else :href="item.link" class="link"
                        >{{ item.emoji }} {{ item.name }}</a
                    >
                    <span
                        v-if="index < nav_links.length - 1"
                        class="mx-1 text-gray-400"
                        >·</span
                    >
                </template>
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
