class Person {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }

    greet() {
        console.log(`Hi ${this.name} how are you ?`);
    }
}

const person1=new Person('john',30);
person1.greet();