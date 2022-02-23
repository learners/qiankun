import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:9001',
    container: '#container',
    activeRule: '/react-app'
  }, {
    name: 'vueApp',
    entry: '//localhost:9002',
    container: '#container',
    activeRule: '/vue-app'
  }
])

// 启动 qiankun
start()
