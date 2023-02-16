<template>
  <div class="hello">
    <h3>Vue</h3>
    <p>{{ msg }}</p>
    <div>{{ rawHTML }}</div>
    <div v-html="rawHTML"></div>
    <div>{{num+1}}</div>
    <div>{{num>10?">10":"<10"}}</div>
  </div>
</template>

<script>
export default {
  //innerhtml innertext区别
  name: 'HelloWorld',
  data(){
    return{
      msg:"Welcome to Vue!",
      rawHTML:"<a href='http://www.baidu.com'>baidu</a>",
      dynamicID:"1001",
      num:15,
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
