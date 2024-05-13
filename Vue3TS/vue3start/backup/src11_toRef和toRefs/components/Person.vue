<template>
  <div class="person">
    <h2>名字{{ person.name }}</h2>
    <h2>年龄{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<script lang="ts" setup>
import { ref,toRefs} from 'vue'
//数据
let person = ref({name:'张三',age:18})

let {name,age} = toRefs(person.value);
console.log(name,age)

//方法
function changeName(){
    // person.value.name += '~'
    name.value += '~'
}
function changeAge(){
    // person.value.age += 2
    age.value += 2
}
</script>
<style>

</style>