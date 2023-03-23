<template>
  <!-- 组建的结构 -->
  <!-- 此处没有根节点会提示语法错误 -->
  <!-- 鱿鱼须懂个锤子Vue -->
  <div>
    <h2>stuname:{{ name }}</h2>
    <h2>stuage:{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互的代码（数据，方法）
// 需要暴露组件
//1. 分别暴露：export const school =  
//2. 统一暴露：在定义完毕之后： export {school}  |  import {???} from ???
// 3.默认暴露：export default school    |  import ??? from ???
    export default {
    name:"Student",
    data() {
        return {
        name: "sam",
        age: 18,
        };
    },
    }
</script>