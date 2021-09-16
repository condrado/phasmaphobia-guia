import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon'

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './sass/app.scss'

// Make BootstrapVue available throughout your project
Vue.use(
  BootstrapVue, 
  VueAxios, 
  axios,
  require('vue-moment')
)
Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
