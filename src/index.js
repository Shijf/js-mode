class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }


    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }


    eat() {
        alert(`${this.getName} 可以吃饭`);
    }

    speak() {
        alert(`${this.getName} 可以说话`);
    }
}


let p = new Person('shijf', 15)

p.eat();