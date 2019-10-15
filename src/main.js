import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import NowUiKit from './plugins/now-ui-kit';

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(NowUiKit);

new Vue({
  created() {
    AOS.init({
      offset: 120,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 300,
      once: true,
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
