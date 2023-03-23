<template>
  <div>
    <school-vue></school-vue>
    <student-vue></student-vue>
  </div>
</template>

<script>
import SchoolVue from './School.vue'
import studentVue from './student.vue'
    //引入组件
    export default {
        name:"App",
        components:{
            SchoolVue,studentVue
        }
    }
</script>