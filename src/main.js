import { createApp, ref } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/app.css'

import bibtexParse from '@orcid/bibtex-parse-js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faEnvelope, faFile, faBookmark, faCircleArrowLeft, faCircleArrowRight, faLink, faDatabase, faUser, faCircleUser, faDownload, faPodcast, faGauge, faExclamationTriangle, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf as faFilePdfRegular, faUser as faUserRegular, faCircleUser as faCircleUserRegular, faEnvelope as faEnvelopeRegular, faCopy as faCopyRegular, faCircleXmark as faCircleXmarkRegular } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faTwitter, faGoogleScholar, faResearchgate, faGithub, faPython, faRProject, faBluesky } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faEnvelope, faFile, faBookmark, faLinkedin, faTwitter, faGoogleScholar, faResearchgate, faCircleArrowLeft, faCircleArrowRight, faLink, faFilePdfRegular, faDatabase, faGithub, faUser, faCircleUser, faUserRegular, faCircleUserRegular, faEnvelopeRegular, faCopyRegular, faCircleXmarkRegular, faDownload, faPython, faRProject, faBluesky, faPodcast, faGauge, faExclamationTriangle, faNewspaper)

async function initApp() {
  const pub_list = ref([]);
  const tool_list = ref([]);
  const dataset_list = ref([]);
  const media_list = ref([]);
  const news_list = ref([]);
  const team = ref({});
  const teaching_list = ref([]);
  const [news_index, authors, pub_index, media, tools, datasets, team_data, teaching] = await Promise.all([
    fetch('/files/news/news_index.json').then(response => response.json()),
    fetch('/files/pubs/authors.json').then(response => response.json()),
    fetch('/files/pubs/pubs_index.json').then(response => response.json()),
    fetch('/files/media.json').then(response => response.json()),
    fetch('/files/tools.json').then(response => response.json()),
    fetch('/files/datasets.json').then(response => response.json()),
    fetch('/files/team/team.json').then(response => response.json()),
    fetch('/files/teaching.json').then(response => response.json()),
  ]);

  pub_list.value = await Promise.all(pub_index.map(async pub_file_name => {
    const response = await fetch(`/files/pubs/${pub_file_name}`);
    const pub = await response.json();
    pub.bibtex = bibtexParse.toJSON(pub.bibtex_string)[0];
    pub.id = pub.bibtex.citationKey;
    pub.title = pub.bibtex.entryTags.title;
    pub.authors.forEach(author => {
      author.info = authors[author.id];
    });
    pub.media_list = [];
    media.forEach(media_item => {
      if (media_item.project_id && media_item.project_id.indexOf(pub.id) >= 0 && media_item.toshow) {
        pub.media_list.push(media_item);
      }
    });
    return pub;
  }));

  tool_list.value = tools;
  dataset_list.value = datasets;
  team.value = team_data;
  teaching_list.value = teaching;


  news_list.value = await Promise.all(news_index.map(async news_file_name => {
    const response = await fetch(`/files/news/${news_file_name}`);
    const news = await response.json();
    // attach project object to each message if applicable
    news.msgs.forEach(msg => {
      if (msg.type === "pub") {
        msg.project = pub_list.value.find(pub => pub.id === msg.project_id);
        if (msg.project) msg.project.type = "pub";
      } else if (msg.type === "tool") {
        msg.project = tool_list.value.find(tool => tool.id === msg.project_id);
        if (msg.project) msg.project.type = "tool";
      }
    });
    // optional: keep the first encountered project for backward compatibility
    const firstMsgWithProject = news.msgs.find(m => m.project);
    news.project = firstMsgWithProject ? firstMsgWithProject.project : null;
    return news;
  }));


  media_list.value = media.map(media_item => {
    media_item.ref = [];
    tools.forEach(tool => {
      if (media_item.project_id && media_item.project_id.indexOf(tool.id) >= 0) {
        media_item.ref.push({
          "obj": tool,
          "type": "tool"
        });
      }
    });
    pub_list.value.forEach(pub => {
      if (media_item.project_id && media_item.project_id.indexOf(pub.id) >= 0) {
        media_item.ref.push({
          "obj": pub,
          "type": "pub"
        });
      }
    });
    return media_item;
  });


  createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .provide('news_list', news_list)
    .provide('pub_list', pub_list)
    .provide('tool_list', tool_list)
    .provide('dataset_list', dataset_list)
    .provide('media_list', media_list)
    .provide('team', team)
    .provide('teaching_list', teaching_list)
    .mount('#app');
}

initApp();