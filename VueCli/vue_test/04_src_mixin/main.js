// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
//全局引入minin
import {mixin} from "./mixin.js"
// 关闭vue生产提示
Vue.config.productionTip = false;
//加入mixin
Vue.mixin(mixin)
// 创建vue实例
new Vue({
    el:"#app",
    render: createElements => createElements(App)
})