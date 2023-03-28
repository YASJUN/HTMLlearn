<template>
  <div>

    <h2>schoolname：{{name}}</h2>
    <h2>schooldaddress:{{address}}</h2>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
    name:"Student",
    data() {
        return {
            name:"TOHOKU",
            address:"Tokyo",
            msg:"114514"
        }
    },
}
</script>

<style>
   
</style>