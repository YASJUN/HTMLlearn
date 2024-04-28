// 定义一个art类
class art{
    // 定义一个title属性，类型为string
    public title:string;
    // 定义一个content属性，类型为string
    content:string;
    // 定义一个aaa属性，类型为string，可选
    public aaa?:string;
    // 定义一个bbb属性，类型为数字，默认值为100
    bbb = 100
    // 定义一个tempdata属性，类型为string，可选
    private tempdata?:string
    // 定义一个tempdata1属性，类型为string，可选
    protected tempdata1?:string
    

    // 构造函数，接收两个参数，title和content
    constructor(title:string,content:string){
        // 设置title属性的值为传入的参数
        this.title=title;
        // 设置content属性的值为传入的参数
        this.content=content;
    }
}

// 定义一个art1类，继承自art类
class art1 extends art{
    // 构造函数，接收两个参数，title和content
    constructor(title:string,content:string){
        // 调用父类的构造函数，设置title和content属性的值
        super(title,content);
    }
}