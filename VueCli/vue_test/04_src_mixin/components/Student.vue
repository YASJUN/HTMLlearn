<template>
  <div>

    <h2 @click="showname">name：{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>sex:{{sex}}</h2>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
//引入混合 分别暴露
// import {mixin} from "../mixin.js"
export default {
    name:"Student",
    data() {
        return {
            name:"sam",
            age:18,
            sex:"lll",
            msg:"114514"
        }
    },
    // mixins:[mixin]
}
</script>

<style>
   
</style>