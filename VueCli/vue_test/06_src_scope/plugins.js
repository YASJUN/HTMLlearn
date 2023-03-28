export default{
    install(Vue){
        console.log(Vue)

        //定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        }),
        //给vue原型添加方法
        Vue.prototype.hello = ()=>{alert("233333")}
    }
}
