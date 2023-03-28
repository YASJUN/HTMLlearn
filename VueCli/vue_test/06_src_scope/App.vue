<template>
  <div>
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
}
</script>

<style>

</style>