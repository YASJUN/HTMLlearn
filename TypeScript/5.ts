//抽象类
 abstract class Animal {
    abstract name: string;
    abstract Sound(): void;
    move() :void{
        console.log("I can move");
    }
}

class cat extends Animal {
    name: string = "cat";
    Sound() {
        console.log("Meow");
    }
}