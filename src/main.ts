import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {router} from "@/router/router";

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faBars,
    faCarSide,
    faCheck,
    faLocationDot,
    faMessage,
    faPhone,
    faWrench
} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faBars, faFacebookF, faWrench, faMessage, faCarSide, faCheck, faLocationDot, faPhone)

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')

