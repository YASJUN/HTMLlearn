<template>
    <div class="person">
        <h1>情况一：监视ref定义的基本类型数据</h1>
        <h2>当前求和为{{ sum }}</h2>
        <button @click="changeSUM">点我+1</button>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<script lang="ts" setup>
import { ref ,watch} from 'vue'
let sum = ref(0)

function changeSUM(){
    sum.value++
    if(sum.value>10){
        //停止监视
        stopWatch()
    }
}

//监视
//watch(谁，（回调函数）{})
// 情况一：监视ref定义的基本类型数据
const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了',newValue,oldValue)
},{immediate:true})
</script>
<style></style>