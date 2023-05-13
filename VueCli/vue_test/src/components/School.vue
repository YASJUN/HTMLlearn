<template>
  <div class="school">

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
 .school{
  background-color: #66ccff;
 }
</style>