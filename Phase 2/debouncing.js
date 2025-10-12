//uses case :
// Stop repeated function calls
// Improve performance
// Common in typing, scrolling, and resizing events

// How It Works
// Event triggers → starts timer
// Another event triggers → timer resets
// Function runs only after delay passes without interruption




//  Part 1: Create a reusable debounce function
function debounce(func, delay) {
  let timeout; // Part 1: store the timer reference
  
  // Part 2: return a new function each time debounce is used
  return function(...args) {
    clearTimeout(timeout); // Part 3: clear previous timer
    timeout = setTimeout(() => {
      func.apply(this, args); // Part 4: run the function after the delay
    }, delay);
  };
}
