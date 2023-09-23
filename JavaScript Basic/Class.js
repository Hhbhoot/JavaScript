// Class 

class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }

    hello() {

        return ("Hello World..");
    }

    newAge() {
        return this.age + 10;
    }
};

let x = new Person("Hitesh", 22);
console.log(x);
console.log(x.age);
console.log(x.newAge());
console.log(x.hello());
console.log(x.name);


