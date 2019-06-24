class People {
    constructor(name, age) {
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
        alert(`${this.getName()} 可以吃饭`);
    }

    speak() {
        alert(`可以说话`);
    }
}
//子类集成父类
class Studen extends People {

    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }

    study() {
        alert(`${this.name} study`)
    }
}


let xiaoming = new Studen('xiaoming', 10, 'A1')
xiaoming.eat();

alert(xiaoming.number)
xiaoming.study();
let xiaohong = new Studen('xiaohong', 15, 'A2')
xiaohong.speak();
