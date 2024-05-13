<template>
  <!-- html -->
  <div class="app">
    <h1>123456</h1>
    <Person></Person>
  </div>
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
    .app {
        background: #ddd;
        box-shadow:  0 0 20px;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
    }
</style>