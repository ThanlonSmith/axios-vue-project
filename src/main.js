// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 默认找index.js
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '../static/global/index.css'
import Axios from 'axios'
// 将axios挂载到Vue原型上，这样每个组件中都可以使用
Vue.prototype.$https = Axios
// 设置公共的url
Axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v1/'
Vue.config.productionTip = false // 生产环境不需要控制台有提示
Vue.use(ElementUI)
// 创建bus实例，挂在到原型
let bus = new Vue()
Vue.prototype.$bus = bus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

