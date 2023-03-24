// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false;
// 创建vue实例
new Vue({
    render: createElements => createElements(app)
})