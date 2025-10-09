// call back fucntion mean a function which is passed as an argument to another function

function myCallback(name) {
    console.log('Hello ' + name);
}
function greetUser(callback) {
    const name = 'Rakib';
    callback(name);
}
function myCallback2(age){
    console.log('Your age is ' + age);
}
function greetUserAge(callback) {
    const age = 23;
    callback(age);
}

// greetUser(myCallback); // Hello Rakib
// greetUserAge(myCallback2); // Your age is 23 