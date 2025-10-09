function getAllData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 1000);
}

function handleData(data) {
    console.log("Data received:", data);
}

getAllData(handleData);

