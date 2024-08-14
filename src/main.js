import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './app.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faEnvelope, faFile, faBookmark, faCircleArrowLeft, faCircleArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGoogleScholar, faResearchgate } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faEnvelope, faFile, faBookmark, faLinkedin, faTwitter, faGoogleScholar, faResearchgate, faCircleArrowLeft, faCircleArrowRight, faLink)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
