function hello(name:string):string
function hello(age:number):string
function hello(value:string|number):string{
    if(typeof value === "string"){
        return "hello:"+value
    }else if(typeof value === "number"){
        return "age: "+value
    }
    return "hello "+value
}
hello("b")
hello(123)
