<template>
  <div>

    <h2>name：{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>sex:{{sex}}</h2>
    <span>{{ msg }}</span>
    <button @click="gethello">hello</button>
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
    methods: {
      gethello(){
        this.hello()
      }
    },
}
</script>

<style>
   
</style>