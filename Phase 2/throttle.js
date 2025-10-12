// The first call happens immediately.
// Any calls within the next delay ms are ignored.
// After the delay passes, the function can run again.


//Use  case: 
// Scrolling events
// Window resizing
// Mouse movements
// API polling

function throttle(func, delay) {
  let lastTime = 0; // store the last time the function ran

  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}
