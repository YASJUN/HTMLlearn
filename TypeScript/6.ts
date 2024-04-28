//类实现接口
interface Animal {
    name: string;
    get sound(): string;
    makeSound():void;
}

class Dog implements Animal {
    name: string = "dog";
    get sound() {
        return "woof";
    }
    makeSound() {
        console.log(this.sound);
    }
}