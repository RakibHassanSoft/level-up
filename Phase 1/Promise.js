
// A Promise has three possible states:
//  - pending — initial state, not fulfilled or rejected
//  - fulfilled — operation completed successfully (has a value)
//  - rejected — operation failed (has a reason/error)



const promiseFun = (resolve, reject) => {
   // Do some async work
  const success = true;

  if (success) {
    resolve(Error("It worked!"));
  } else {
    reject("Something went wrong.");
  }  
};
const promise  = new Promise(promiseFun);



promise
  .then((value) => {
    console.log("Fulfilled:", value);
    return value;
    })  
    .then((newValue) => {   
        console.log("Chained:", newValue);
    })
    .catch((error) => {
        console.log("Rejected:", error);
    })
    .finally(() => {
        console.log("Promise settled (either fulfilled or rejected).");
    });