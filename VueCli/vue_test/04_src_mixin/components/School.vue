<template>
  <div>

    <h2 @click="showname">schoolname：{{name}}</h2>
    <h2>schooldaddress:{{address}}</h2>
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
            name:"TOHOKU",
            address:"Tokyo",
            msg:"114514"
        }
    },
    // mixins:[mixin]
}
</script>

<style>
   
</style>