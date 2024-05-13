<template>
  <!-- html -->
  <Person/>
</template>

<script lang="ts">
// js ts
import Person from './components/Person.vue';
export default {
  name: 'App',//组件名字
  components: { Person },
  //注册组件
}
</script>

<style>
    /* css */
</style>