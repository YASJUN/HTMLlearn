<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        姓名:<span>{{ fullName }}</span>
        <button @click="changeFullName">修改全名</button>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
let firstName = ref('张')
let lastName = ref('三')
//只读的计算属性
// let fullName = computed(() => {
//     return firstName.value + "-" + lastName.value
// })
//可读可写的计算属性
let fullName = computed({
    get(){
        return firstName.value + "-" + lastName.value
    },
    set(val){
        const [str1,str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})

function changeFullName(){
    fullName.value = '李-四'
}

</script>
<style></style>