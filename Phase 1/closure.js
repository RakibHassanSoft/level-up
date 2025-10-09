function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance!");
      }
    },
    checkBalance: function() {
      console.log(`Current Balance: ${balance}`);
    }
  };
}

const account = createBankAccount(1000);

account.deposit(500);     // Deposited: 500
account.withdraw(200);    // Withdrawn: 200
account.checkBalance();   // Current Balance: 1300

// console.log(account.balance); // Error: undefined (private)
