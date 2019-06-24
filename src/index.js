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
        alert(123);
    }

    speak() {
        alert("456");
    }
}


let p = new Person('shijf', 15)

p.eat();