//泛型类
class Myclass<T>{
    public value:T;
    constructor (value:T){
        this.value = value;
    }
    do(input:T):T{
        console.log(this.value)
        return input;
    }
}
const a = new Myclass<string>("hello");
a.do("world");

const b = new Myclass<number>(123);
b.do(456);
