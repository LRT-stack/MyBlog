import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'                       //axios
import ElementUI from 'element-ui';             //Element UI      
import 'element-ui/lib/theme-chalk/index.css';  //Element UI    
import VueHighlightJS from 'vue-highlightjs'    //highlight
import 'highlight.js/styles/atom-one-dark.css'  //highlight



Vue.prototype.$axios = axios  
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueHighlightJS)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
