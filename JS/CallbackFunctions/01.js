//Callback Functions

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  //   return result;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

//you are only allowed to call one function after this
//how will you display the result in the desired format

//Solution
//we add a third parameter to the "sum" function.. who's role is to call a function
// also instead of returning the result, we pass it in the function we are calling
const sum = sum(1, 2, displayResult);
