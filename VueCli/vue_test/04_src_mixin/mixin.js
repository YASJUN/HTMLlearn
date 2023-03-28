export const mixin = {
    methods: {
        showname(){
            console.log(this.name)
        }
    },
    mounted(){
        console.log("ready")
    }
}
// export default {mixin}