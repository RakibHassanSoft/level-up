// A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// ========================Promise runs asynchronously (nside the microtask queue, not the regular callback queue.)========================
// console.log("Starting...");

setTimeout(() => {
//   console.log("Inside setTimeout");
}, 2000);

Promise.resolve("Promise Resolved").then((value) => {
//   console.log(value);
});

// console.log("Ending...");


// ==================Simulate fetching ===============
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId || userId <= 0) {
        return reject("Invalid User ID");
      }
      resolve({ id: userId, name: "Rakib" });
    }, 1000);
  });
}

// Simulate fetching orders of a user
function fetchOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders = [
        { id: 1, userId },
        { id: 2, userId },
      ];
      resolve(orders);
    }, 1000);
  });
}

// Simulate fetching products for orders
function fetchProducts(orders) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = orders.map(order => ({ orderId: order.id, product: "Product " + order.id }));
      resolve(products);
    }, 1000);
  });
}

// Promise chaining
// fetchUser(1) // Pass a valid userId
//   .then(user => {
//     console.log("User fetched:", user);
//     return fetchOrders(user.id);
//   })
//   .then(orders => {
//     console.log("Orders fetched:", orders);
//     return fetchProducts(orders);
//   })
//   .then(products => {
//     console.log("Products fetched:", products);
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });
  
//OR 
Promise.all([fetchUser(1), fetchOrders(1)]) // Fetch user and orders in parallel
  .then(([user, orders]) => {
    console.log("User:", user); 
    console.log("Orders:", orders);
    return fetchProducts(orders);
  })
  .then(products => {
    console.log("Products fetched:", products);
  })
  .catch(err => {
    console.error("Error:", err);
  });

  
  // -------another way using async-await------
async function fetchData() {
  try {
    const [user, orders] = await Promise.all([fetchUser(1), fetchOrders(1)]);
    
    console.log("User:", user);
    console.log("Orders:", orders);
    
    const products = await fetchProducts(orders);
    console.log("Products:", products);
    
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchData();


