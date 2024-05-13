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
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
}
</script>

<script lang="ts" setup>
//响应式引入
import {ref,reactive} from 'vue'
//数据
let car = ref({brand:"benz",price:100});
let games = ref([
    {id:1,name:"lol"},
    {id:2,name:"cf"},
    {id:3,name:"genshin"}
])
let obj = reactive({aaa:999})

console.log(car)
console.log(obj)
//方法
function changePrice(){
    car.value.price +=10;
}
function changeFirstGameName(){
    games.value[0].name = "csgo";
}
</script>

<style scoped>

</style>