import Vue from 'vue'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/css/main.css'

//vuelidate
import vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
import './axios'
Vue.config.productionTip = false
//vuelidate
Vue.use(vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


 