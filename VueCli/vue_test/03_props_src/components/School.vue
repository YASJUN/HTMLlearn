<template>
  <div>

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
            msg:"114514"
        }
    },
    // props: ['name','sex','age'],   //简单接收
    //接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String,
    // }
    //接收的同时对数据进行类型限制+指定默认值+必要性指定
    props:{
        name:{
            type:String,//字符串
            required:true//必填
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
   
</style>