class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`$My name is ${this.name}. I'm ${this.age} years old`)
    }
}

const alice = new Person('Alice', 20);
const bob = new Person('Bob', 30);

alice.printInfo();
bob.printInfo();