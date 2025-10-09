// multiple promises
function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id, name: `Data ${id}` });
            } else {    
                reject(`Failed to fetch data for id ${id}.`);
            }
        }, Math.random() * 2000);
    });
}

const ids = [1, 2, 3, 4, 5];
const promises = ids.map(id => fetchData(id));

// with promise
Promise.all(promises)
    .then(results => {
        console.log("All data fetched:", results);      
    })
    .catch(error => {
        console.error("Error fetching data:", error);   
    });


// with async/await
async function getAllData() {
    try {
        const results = await Promise.all(promises);
        console.log("All data fetched with Async/Await:", results);
    } catch (error) {   
        console.error("Error fetching data with Async/Await:", error);
    }
}   
getAllData();