console.log("It's working!");

// Declare variables
var button = document.getElementById("button");
var input = document.getElementById("input");
var output = document.getElementById("output");

// Write a program that will convert a dollar amount to the number of coins that make up the amount from user input.
// Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
function getRemainder (total, value) {
  console.log(total % value);
  return total % value;
}


function getChange (total) {
  console.log(total);

  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = Math.floor(total / 25);
  coinPurse.dimes = Math.floor(getRemainder(total, 25) / 10);
  coinPurse.nickels = Math.floor(getRemainder(total, 10) / 5);
  coinPurse.pennies = Math.floor(getRemainder(total, 5) / 1);

//   return coinPurse;

// var coins = coinCounter()
  console.log(coinPurse);
}


// function to get input from user

function getInput() {
  getChange(input.value);
}

// Output coin purse to DOM.

button.addEventListener("click", getInput);










