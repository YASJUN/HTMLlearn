/* 
  该文件是整个项目的入口文件
*/
// 引入vue
import Vue from 'vue'
// 引入app 是所有组件的父组件
import App from './App.vue'

// 关闭vue生产提示
Vue.config.productionTip = false


// 创建vue实例对象
new Vue({
  // el:"#app",
  // 将app组件放入容器中
  render: h => h(App),

  // render(createElement){
  //   return  createElement('h1','hello')
  // }
  //以下为函数简化流程（ES6）
  //render:(createElement)=>{return createElement(xxx)}
  //render:createElement=>{return createElement(xxx)}
  //render:createElement=>{createElement(xxx)}
  //render:h=>h(xxx)
}).$mount('#app')
