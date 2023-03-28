// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

//引入插件
import plugin from './plugins'
//应用插件
Vue.use(plugin)

// 关闭vue生产提示
Vue.config.productionTip = false;
// 创建vue实例
new Vue({
    el:"#app",
    render: createElements => createElements(App)
})