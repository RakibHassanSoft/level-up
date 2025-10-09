
// hoising is just moving the declaration to the top of the scope
// scope is the current context of execution

// closure is a function that has access to its own scope, the outer function's scope, and the global scope

// clear example of closure
function counter() {
  let count = 0; // private variable

  return function() {
    count++;
    return count;
  };
}

const increment = counter();

// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3



