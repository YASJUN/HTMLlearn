<template>
  <h1>{{name}}</h1>
  <h1>{{ age }}</h1>
  <h3>{{ job.type }}</h3>
  <h3>{{ job.salary }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup(){
    let name= ref("张三");
    let age= ref(18);
    let job = ref({
      type:"front",
      salary:"30000"
    });
    function changeInfo(){
      console.log(name,age)
      name.value = "444"
      age.value = "123"
      job.value.salary="23333"
    }

    return{name,age,changeInfo,job}
  }

}
</script>

<style>
</style>
