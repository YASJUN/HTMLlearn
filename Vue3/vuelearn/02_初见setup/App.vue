<template>
  <h1>{{name}},{{ age }}</h1>
  <button @click="sayHello">说话</button>
</template>

<script>
// import { h } from 'vue';


export default {
  name: 'App',
  //测试setup 不考虑响应式
  setup(){
    let name="张三";
    let age=18;


    //方法
    function sayHello(){
      alert("我叫${name},我${age}岁，你好啊")
    }

    return {
      name,age,sayHello

    }
    //返回一个渲染函数
    // return ()=>h('h1','2333')
  }

}
</script>

<style>
</style>
