<template>
  <div class="hello">
    <h3>Vue</h3>
    <p>{{ msg }}</p>
    <div>{{ rawHTML }}</div>
    <div v-html="rawHTML"></div>
    <div>{{num+1}}</div>
    <div>{{num>10?">10":"10"}}</div>
    <p v-if="flag">vif true987654</p>
    <p v-else>v else false654321</p>
    <p v-show="flag">vshow true</p>
    <ul>
              <!--数据 在 列表  唯一关键字  id值   -->
      <li v-for="item in nlist" :key="item.id">{{ item.title }} {{ item.id }}</li>
      <!-- 不建议使用 根据下标唯一id -->
      <!-- <li v-for="(item,index) in nlist" :key="index">{{ item.title }} {{ item.id }}</li> -->

    </ul>
    <button @click="counter+=1">click:{{ counter }}</button>
    <button @click="clickaaa">clickaaa</button>
    <button @click="say('111')">1</button>
    <button @click="say('222')">2</button>
    <ul>
      <li @click="clickitem(item)" v-for="(item,index) in names" :key="index">{{ item }}</li>
    </ul>
    <input type="text" v-model="username">
    <p>{{ username }}</p>
  </div>

</template>

<script>
let nowdate = Date.now();
setInterval(() => {
  nowdate=Date.now()
}, 10);
export default {
  //innerhtml innertext区别
  name: 'HelloWorld',
  data(){
    return{
      msg:"Welcome to Vue!",
      rawHTML:"<a href='http://www.baidu.com'>baidu</a>",
      dynamicID:"1001",
      num:nowdate,
      flag:false,
      nlist:[{
        id:1023,
        title:123,
      },
      {
        id:1024,
        title:456,
      },
      {
        id:1025,
        title:789,
      },],
      counter:0,
      names:["alex","Setve","Mecau"],
      username:"",
    }
  },
  methods: {
    clickaaa(event){
     //在事件中读取data属性值要使用this.属性读取
     this.msg = "Update DOM!"
     //原生event对象
     console.log(event)
     event.target.innerHTML = "123"
    },
    say(data){
      console.log("has:"+data)
    },
    clickitem(item){
      console.log(item)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
