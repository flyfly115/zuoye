//引入vue库
import Vue from 'vue'
//引入 App模板文件
import App from './App.vue'
//引入路由
import router from './router'

//引入重置样式
import 'normalize.css';
//执行环境 默认是开发环境
Vue.config.productionTip = false

//创建新的vue对象
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
