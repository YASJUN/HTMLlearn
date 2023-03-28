<template>
  <div class="demo">

    <h2>schoolname：{{name}}</h2>
    <h2>schooldaddress:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:"Student",
    data() {
        return {
            name:"TOHOKU",
            address:"Tokyo",
        }
    },
}
</script>

<style>
   .demo{
    background-color: aqua;
    color: black;
   }
</style>