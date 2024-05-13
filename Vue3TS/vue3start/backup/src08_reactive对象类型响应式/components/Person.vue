<template>
    <div class="person">
        <h2>Car</h2>
        <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
        <button @click="changePrice">修改价值</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="qwq in games" :key="qwq.id">{{qwq.name}}</li>
        </ul>
        <button @click="changeFirstGameName">修改第一个游戏的名字</button>
        <h2>测试{{ obj.a.b.c }}</h2>
        <button @click="changeObj">测试</button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
}
</script>

<script lang="ts" setup>
//响应式引入
import {reactive} from 'vue'
//数据
let car = reactive({brand:"benz",price:100});
let games = reactive([
    {id:1,name:"lol"},
    {id:2,name:"cf"},
    {id:3,name:"genshin"}
])
let obj = reactive({
    a:{
        b:{
            c:666
        }
    }
})
//方法
function changePrice(){
    car.price +=10;
}
function changeFirstGameName(){
    games[0].name = "csgo";
}
function changeObj(){
    obj.a.b.c = 999;
}
</script>

<style scoped>

</style>