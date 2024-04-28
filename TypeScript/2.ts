interface Parent{
    prop1:string
    prop2:number
}

interface Child extends Parent{
    prop3:boolean
}

let child:Child = {
    prop1:'hello',
    prop2:123,
    prop3:true
}