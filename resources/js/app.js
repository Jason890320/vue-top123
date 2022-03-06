import { createApp } from 'vue';
import App from './components/App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faEye);
library.add(faEyeSlash);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')