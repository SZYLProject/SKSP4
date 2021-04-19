import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue' 
import router from './routes'
import store from './vuex'
import * as API from './api'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import '../theme-deepblue/index.css'
import Vant from 'vant'
// import {Toast} from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css';//引用字体css
Vue.prototype.$API = API
Vue.config.productionTip = false
Vue.use(Vant)
// Vue.use(Toast)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
