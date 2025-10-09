// Async/Await is built on top of Promises.
// Async functions always return a Promise behind the scenes.

function fetchData() {
    return new Promise((resolve, reject) => {
        const data = { id: 1, name: "Sample Data" };
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(data);
            } else {    
                reject("Failed to fetch data.");
            }
        }, 1000);
    });
}

// with promise
fetchData()
    .then(data => {
        console.log("Data fetched with Promise:", data);
    })
    .catch(error => {
        console.error("Error with Promise:", error);
    });

// with async/await
async function getData() {
    try {   
        const data = await fetchData();
        console.log("Data fetched with Async/Await:", data);
    }
    catch (error) {
        console.error("Error with Async/Await:", error);
    }       
}

getData();

// difference between async/await and promise is that async/await makes asynchronous code look and behave more like synchronous code. This can make it easier to read and maintain, especially when dealing with multiple asynchronous operations. However, both approaches ultimately achieve the same result of handling asynchronous operations in JavaScript.