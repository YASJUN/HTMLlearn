<template>
  <!-- 组建的结构 -->
  <!-- 此处没有根节点会提示语法错误 -->
  <!-- 鱿鱼须懂个锤子Vue -->
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>address:{{ address }}</h2>
    <button @click="showname">提示学校名</button>
  </div>
</template>

<script>
// 组件交互的代码（数据，方法）
// 需要暴露组件
//1. 分别暴露：export const school =  
//2. 统一暴露：在定义完毕之后： export {school}  |  import {???} from ???
// 3.默认暴露：export default school    |  import ??? from ???
    export default {
    name:"School",
    data() {
        return {
        name: "schoolnames",
        address: "schooladdress",
        };
    },
    methods: {
        showname() {
        alert(this.schoolname);
        },
    },
    }
</script>

<style>
/* 组建的样式（css代码） */
.demo{
    background-color: orange;
}
</style>