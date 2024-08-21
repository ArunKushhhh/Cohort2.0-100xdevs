//Calculate the time between a setTimeout calls and the inner function actually running
//Hint: use .getTime()
setTimeout(calculateSum, 1000);

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum = sum + i;
  }
  return sum;
}

//calcuating time taken to run the function\
const beforeDate = new Date();
const beforeTimeinMS = beforeDate.getTime();

console.log(calculateSum());

console.log(`beforeTimeinMS: ${beforeTimeinMS}`);
console.log(`afterTimeinMS: ${afterTimeinMS}`);

console.log(afterTimeinMS - beforeTimeinMS);
