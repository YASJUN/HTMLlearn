<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <my-school></my-school>
    <my-student></my-student>
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
//引入组件
export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
  },
};
</script>