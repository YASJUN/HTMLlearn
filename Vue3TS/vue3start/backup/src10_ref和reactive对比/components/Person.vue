<template>
    <div class="person">
        <h2>Car</h2>
        <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changePrice">修改价值</button>
        <button @click="changeCar">修改汽车</button>

        <h2>值为{{ sum }}</h2>
        <button @click="changeSum">点击sum+1</button>
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
// let car = reactive({brand:"benz",price:100});
let car = ref({brand:"benz",price:100});
let sum = ref(0)


//方法
function changeCar(){
    //失去响应式
    // car ={brand:"Audi",price:1}
    //使用assign修改 后面分配给前方第一项
    // Object.assign(car,{brand:"Audi",price:1})
    //使用ref
    car.value = {brand:"Audi",price:1};
    //ref.value 必定响应式
}
function changeBrand(){
    // car.brand = "BMW";
    car.value.brand = "BMW";
}
function changePrice(){
    // car.price +=10;
    car.value.price +=10;
}
function changeSum(){
    sum.value++;
}
</script>

<style scoped>

</style>