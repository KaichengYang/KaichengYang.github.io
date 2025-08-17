import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/bio/AboutPage.vue'
import PersonalPage from '@/components/bio/PersonalPage.vue'
import NewsPage from '@/components/news/NewsPage.vue'
import MediaPage from '@/components/media/MediaPage.vue'
import PhotoPage from '@/components/bio/PhotoPage.vue'
import PubsPage from '@/components/pubs/PubsPage.vue'
import FailurePage from '@/components/failure/FailurePage.vue'
import ToolPage from '@/components/tool/ToolPage.vue'
import HiddencurriculumPage from '@/components/hiddencurriculum/HiddencurriculumPage.vue'
import TeamPage from '@/components/team/TeamPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/pubs', component: PubsPage },
    { path: '/about', component: AboutPage },
    { path: '/kaicheng', component: PersonalPage },
    { path: '/team', component: TeamPage },
    { path: '/news', component: NewsPage },
    { path: '/media', component: MediaPage },
    { path: '/photos', component: PhotoPage },
    { path: '/failures', component: FailurePage },
    { path: '/tools', component: ToolPage },
    { path: '/hiddencurriculum', component: HiddencurriculumPage },
    { path: "/:pathMatch(.*)*", component: HomePage }
  ]
})

export default router