// callback fucntion is a fucntion that's passed as an argument to another function
// and is executed after some operation has been completed.

//Type of callback function
//1. Synchronous Callback
//2. Asynchronous Callback
//3. Error-First Callback (Node.js Style)
//4. Anonymous Callback
//5. Named Callback
//6. Inline Callback
//7. Arrow Function Callback
//8.Higher-Order Function Callback

//1. Synchronous Callback
function printMessage(message, callback) {
  console.log(message);
  let age = 25;
  callback(age);
}

function displayAge(age) {
//   console.log("Age is: " + age);
}

// printMessage("Hello, World!", displayAge);


//2. Asynchronous Callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}
fetchData((data) => {
//   console.log("Data fetched:", data);
});

//3. Error-First Callback (Node.js Style)
function getUser(id, callback) {
  if (id <= 0) {
    callback("Invalid ID", null);
  } else {
    callback(null, { id, name: "Rakib" });
  }
}

getUser(1, (err, user) => {
  if (err) return console.error(err);
//   console.log(user);
});


//4. Anonymous Callback
setTimeout(function() {
//   console.log("This message is shown after 1 second");
}, 1000);


//5. Named Callback
function showMessage() {
//   console.log("Named callback executed");
}

setTimeout(showMessage, 1000);


//6. Inline Callback
function multiply(num, value){
    //  console.log(num * value)
}
[1, 2, 3].forEach(num => multiply(num, 2));

//7. Arrow Function Callback
const  multiply1 = (num, value)=>{
    //  console.log(num * value)
}
[1, 2, 3].forEach(num => multiply1(num, 2));


//8.Higher-Order Function Callback
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
const triple = multiplier(3);
console.log(triple(5)); // 15