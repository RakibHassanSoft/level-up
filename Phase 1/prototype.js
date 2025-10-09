const person ={
    name: "John",
    getName: function(){
        return this.name;
    }
}

const person2 = Object.create(person);
console.log(person2.getName());
const person3 = {__proto__: person2};
console.log(person3.getName());