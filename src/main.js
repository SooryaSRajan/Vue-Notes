import {createApp} from 'vue'
import App from './App.vue'
import router from "./config/router"

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {faTrashCan} from '@fortawesome/free-regular-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faBars)
library.add(faTrashCan)

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')