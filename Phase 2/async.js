
function fetchUser(userId) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id: userId, name: "Rakib" }), 1000)
  );
}

function fetchOrders(userId) {
  return new Promise(resolve =>
    setTimeout(() => resolve([{ id: 1, userId }, { id: 2, userId }]), 1000)
  );
}

function fetchProducts(orderIds) {
  return new Promise(resolve =>
    setTimeout(() => resolve(orderIds.map(o => ({ orderId: o.id, product: "Product " + o.id }))), 1000)
  );
}

async function sequential() {
  console.time("Sequential");

  const user = await fetchUser(1);            // waits 1s
  const orders = await fetchOrders(user.id);  // waits 1s
  const products = await fetchProducts(orders); // waits 1s

  console.log("User:", user);
  console.log("Orders:", orders);
  console.log("Products:", products);

  console.timeEnd("Sequential");
}

// sequential();


// ====================Parallel execution============(faster)=================

async function parallel() {
  console.time("Parallel");

  const [user, orders] = await Promise.all([fetchUser(1), fetchOrders(1)]);

  // fetchProducts depends on orders, so run after
  const products = await fetchProducts(orders);

  console.log("User:", user);
  console.log("Orders:", orders);
  console.log("Products:", products);

  console.timeEnd("Parallel");
}

parallel();
