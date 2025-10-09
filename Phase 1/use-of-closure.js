// Uses of Closures: 
// Data encapsulation / privacy 
// Function factories
//  Maintaining state 
//  Callbacks & Event handlers

// Example 1: Data Encapsulation / Privacy
function createCounter() {
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };  

}

const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());

// Example 2: Function Factory
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    }
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
// console.log(double(5)); // 10
// console.log(triple(5)); // 15


// Example 3: Maintaining State
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {        
                return "Insufficient funds";
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}
const account = createBankAccount(1000);

// console.log(account.deposit(500)); // 1500
// console.log(account.withdraw(200)); // 1300
// console.log(account.getBalance()); // 1300


// Example 4: Callbacks & Event Handlers
function setupButton(buttonId) {
    let clickCount = 0; // private variable
    document.getElementById(buttonId).addEventListener('click', function() {    
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    }
    );
}   