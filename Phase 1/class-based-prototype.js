class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('Rakib', 25);
console.log(person1.getDetails());

class Student {
    constructor(name, age, ){
        // this.newData = Object.create(new Person(name, age));
        this.newData = Object.create(Person.prototype);
        this.newData.name = name ;
        this.newData.age = age ;

    }

}
const student1 = new Student('Alice', 22);
// console.log(student1.newData.getDetails());

class JuniorStudent  extends Person {
    constructor(name, age){
        super(name, age);
    }
}

const juniorStudent1 = new JuniorStudent('Bob', 20);
console.log(juniorStudent1.getDetails());