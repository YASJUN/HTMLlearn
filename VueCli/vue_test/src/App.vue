<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <Student/>
    <school/>
  </div>
</template>

<script>
// 引入school组件
import School from './components/School'
import Student from './components/Student'

export default {
    name:"App",
    components:{Student,School},
    data() {
      return {
        msg:"你好啊！"
      }
    },
}
</script>

<style scoped>
  .app{
    background-color: gray;
  }
</style>