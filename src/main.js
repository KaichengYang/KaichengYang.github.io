import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './app.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelope, faFile, faBookmark, faCircleArrowLeft, faCircleArrowRight, faLink, faDatabase, faUser, faCircleUser, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf as faFilePdfRegular, faUser as faUserRegular, faCircleUser as faCircleUserRegular, faEnvelope as faEnvelopeRegular, faCopy as faCopyRegular, faCircleXmark as faCircleXmarkRegular} from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faTwitter, faGoogleScholar, faResearchgate, faGithub, faPython, faRProject } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faEnvelope, faFile, faBookmark, faLinkedin, faTwitter, faGoogleScholar, faResearchgate, faCircleArrowLeft, faCircleArrowRight, faLink, faFilePdfRegular, faDatabase, faGithub, faUser, faCircleUser, faUserRegular, faCircleUserRegular, faEnvelopeRegular, faCopyRegular, faCircleXmarkRegular, faDownload, faPython, faRProject)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
