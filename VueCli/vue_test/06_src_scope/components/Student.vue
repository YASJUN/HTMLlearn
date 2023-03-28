<template>
  <div class="demo">

    <h2>name：{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>sex:{{sex}}</h2>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
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
   
}
</script>

<style scoped>
   .demo{
    background-color: chocolate;
   }
</style>