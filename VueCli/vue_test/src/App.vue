<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点击输出元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
// 引入school组件
import School from './components/School'

export default {
    name:"App",
    components:{School},
    data() {
      return {
        msg:"Welcome",
      }
    },
    methods: {
      showDom(){
        console.log(this.$refs.title)//真实dom元素
        console.log(this.$refs.button)//真实dom元素
        console.log(this.$refs)//school组件的实例对象（就是VC）
      }
    },
}
</script>

<style>

</style>