<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
         <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showtel">查看联系方式</button> 
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    setup() {
        //setup中无this 弱化this
        //数据
        let name = '张三' //非响应式数据
        let age = 18    //非响应式数据
        let tel = '123456789'   //非响应式数据

        //方法
        function changeName() {
            name = '李四'//修改不会触发响应式修改
        }
        function changeAge() {
            age += 1
        }
        function showtel() {
            alert(tel)
        }

        return {name,age,changeName,changeAge,showtel}
        
        //setup返回值可以是渲染函数
        // return()=>"hhh"
        
    },
}
</script>

<style scoped>
.person {
    background-color: aqua;
    box-shadow: 0 0 20px;
}
button {
    margin-left: 10px;
}
</style>