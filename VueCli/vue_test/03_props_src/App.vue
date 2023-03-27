<template>
  <div>
    <Student name="tom" sex="helo" :age='28'/>
    <Student name="jerry" sex="heloa"/>
  </div>
</template>

<script>
// 引入school组件
import Student from './components/School'

export default {
    name:"App",
    components:{Student},
}
</script>

<style>

</style>