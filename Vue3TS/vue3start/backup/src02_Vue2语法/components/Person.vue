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
    data() {
        return {
            name: '张三',
            age: 18,
            sex: '男',
            tel: "13812341234"
        }
    },
    methods: {
        changeName() {
            this.name = '李四';
        },
        changeAge() {
           this.age +=1;
        },
        showtel() {
            alert(this.tel);
        }
    }
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