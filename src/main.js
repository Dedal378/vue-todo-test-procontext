import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Breadcrumb from '@/components/Breadcrumb';

import './styles/main.scss'
Vue.component('Breadcrumb', Breadcrumb)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
