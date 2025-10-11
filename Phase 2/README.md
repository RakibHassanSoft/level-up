# JavaScript Event Loop & Concurrency Model (Bangla Notes)


## Introduction
JavaScript হল **single-threaded**, অর্থাৎ এক সময়ে একটাই কাজ করতে পারে।
কিন্তু এটি asynchronous কাজ করতে পারে যেমন API fetch, setTimeout, file I/O, যা main thread ব্লক করে না।
Event Loop বুঝলে তুমি predictably async কাজ করতে পারবে।
মানুষ হিসেবে ভাবলে JS একা দোকানদারের মতো, একসাথে এক গ্রাহককে সার্ভিস দিতে পারে।


## 1️⃣ Single-Threaded Model
JS এক সময়ে শুধুমাত্র একটি কাজ করতে পারে।
**Human analogy:** তুমি একা দোকান চালাচ্ছ → এক গ্রাহককে একসাথে সার্ভিস দিচ্ছ।
আরেকজন গ্রাহক আসলে তাকে পরে সার্ভিস দিতে হবে অথবা কাউকে task outsource করতে হবে।


## 2️⃣ Call Stack (মস্তিষ্কের কাজের তালিকা)
Call Stack হলো execution context এর stack।
এটি **LIFO (Last In, First Out)**।
**Example:**  

```js
function a() { b(); console.log("a"); }
function b() { console.log("b"); }

a();
```

**Step by Step:**
1. `a()` push → stack: `[a]`
2. `b()` push → stack: `[a, b]`
3. `b()` executes → logs "b" → pop → stack: `[a]`
4. `a()` resumes → logs "a" → pop → stack empty

**Output:**  
```
b
a
```

**Human analogy:** কাজের তালিকা step by step পালন করা।  


## 3️⃣ Web APIs / Node APIs
কিছু async কাজ যেমন `setTimeout`, `fetch`, I/O, Call Stack এর বাইরে চলে যায়।
কাজ শেষ হলে callback পাঠানো হয় **Task Queue** তে।
**Human analogy:** তুমি গ্রাহকের জন্য চা বানাতে কাউকে দিলে তুমি নিজে অন্য কাজ করতে পারো।


## 4️⃣ Task Queues
JS এর দুটি main queue আছে:

**Microtask Queue:**
- উদাহরণ: `Promise.then`, `queueMicrotask`
- Priority: Call Stack খালি হলে **প্রথমে execute**
- Human analogy: জরুরি ছোট কাজ (মেইল চেক, message পাঠানো)

**Macrotask Queue:**
- উদাহরণ: `setTimeout`, `setInterval`, I/O callbacks
- Priority: Microtasks শেষ → execute
- Human analogy: বড় অপেক্ষার কাজ (ডেলিভারি আনা, heavy computation)


## 5️⃣ Event Loop
Event Loop হলো JS এর **চক্রাকার নিয়ামক**, যা নিশ্চিত করে সব কাজ সঠিক ক্রমে execute হয়।
Step by Step:
1. Call Stack খালি? → না → wait
2. Call Stack খালি? → হ্যাঁ → Microtask Queue থেকে কাজ
3. Microtasks শেষ → Macrotask Queue থেকে কাজ
4. Repeat forever

**Human analogy:** তুমি বারবার চেক করছ → কোন কাজ আগে, কোন পরে।


## 6️⃣ Execution Order Example

```js
console.log("Start");

setTimeout(() => console.log("Timeout 0"), 0);

Promise.resolve().then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

console.log("End");
```

**Step by Step:**
1. Call Stack: `"Start"` → logs
2. `setTimeout` → Web API → Macrotask Queue
3. `Promise.then` → Microtask Queue
4. `"End"` → Call Stack → logs
5. Call Stack খালি → Microtasks → `"Promise 1"` → `"Promise 2"` logs
6. Microtasks শেষ → Macrotasks → `"Timeout 0"` logs

**Output:**
```
Start
End
Promise 1
Promise 2
Timeout 0
```


## 7️⃣ Async/Await & Event Loop

```js
async function asyncFunc() {
  console.log("Async start");
  await Promise.resolve();
  console.log("Async end");
}

console.log("Script start");
asyncFunc();
console.log("Script end");
```

**Output:**
```
Script start
Async start
Script end
Async end
```

**Human analogy:** তুমি কাজ শুরু করছ, কিছু অপেক্ষা দরকার, তারপর কাজ শেষ।


## 8️⃣ Sequential vs Parallel Async

**Sequential Execution:**  

```js
async function sequential() {
  const user = await fetchUser(1);
  const orders = await fetchOrders(user.id);
  const products = await fetchProducts(orders);
}
```

Time: sum of all delays (~3s)  
Use Case: Dependent tasks

**Parallel Execution:**  

```js
async function parallel() {
  const [user, orders] = await Promise.all([fetchUser(1), fetchOrders(1)]);
  const products = await fetchProducts(orders);
}
```

Time: max of all delays (~2s)  
Use Case: Independent tasks

Human analogy:
- Sequential = এক গ্রাহক শেষ → পরের শুরু
- Parallel = অনেক গ্রাহক একই সময়ে কাজ


## 9️⃣ Microtasks vs Macrotasks Summary

| Feature | Microtask | Macrotask |
|---------|-----------|-----------|
| Examples | Promise.then, queueMicrotask | setTimeout, setInterval, I/O |
| Priority | Call Stack খালি → first | Microtasks শেষ → next |
| Human analogy | জরুরি ছোট কাজ | বড় অপেক্ষার কাজ |


## 🔟 Key Takeaways
1. JS single-threaded, কিন্তু async tasks concurrency model অনুযায়ী handle করে।
2. Call Stack = কাজের তালিকা
3. Microtask = ছোট, জরুরি কাজ → আগে execute
4. Macrotask = বড় কাজ → পরে execute
5. Event Loop = কাজের execution চক্র
6. Async/Await = কাজ suspend → Microtask Queue → predictable control
7. Sequential vs Parallel = Dependent → sequential, Independent → parallel


## Human Analogy Summary
তুমি একা দোকান চালাচ্ছ → Call Stack
চা বানাতে কাউকে দিলে → Web API → Macrotask
Promise resolve → Microtask
Event Loop → বারবার check করছ → কোন কাজ আগে, কোন পরে


**End of Notes**
