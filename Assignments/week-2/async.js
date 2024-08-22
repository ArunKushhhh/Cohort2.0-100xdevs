// Async vs Sync Functiond
// Synchronous: Together, one after the other, sequential
// only or thing is happeening at a time

//Asynchronous: Happens in parts
//multiple things are context switching with each other

//for eg Human brain and body are single threaded
//1. We acn only do one thing at a time
//2. But we can context switch between tasks, or we can delegate tasks to other people
//we are delegating different tasks to different threads in a js.

//So even if we have a single threaded nature, we can still delegate tasks and do things parallely or context switch between them.
//Net amount of time to do a task canbe decreased by doing multiple things(delegating and context switching)

//JS can delegate tasks using async functions

//Tihs is a synchronous function
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

//setTimeout is an async function
//when the control reaches to setTimeout, it does not wait there for the code to be executed
setTimeout(findSumTill100, 1000);
console.log("Hello World");

//busy waiting
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 10000000; i++) {
    a++;
  }
}

// syncSleep();
// findSumTill100();
// setTimeout(findSumTill100, 1000);
// console.log("Hello World");

//The difference between setTimeout and busy waiting is that in setTimeout the thread is free to proceed to the next line whereas in busy waiting the thread is not free

//Some other async functions
//fs.readFile - to read a file from your filesystem
//Fetch - to fetch some data from an API endpoint

const fs = require("fs");
//filesystem module

//this lets you read in a file
//three arguments:1. path where you want to read the file 2.encoding in which you want to read the file 3.a fucntion to run
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("Hi there");

//which one of the above two runs first
//fs.readFile runs first because it is a async function and it takes time

for (let i = 0; i < 1000000; i++) {
  i++;
}

console.log("Hi there 2");
//In JS if your thread is busy somewhere, even if a callback is resolved, even if the control should reach here, the thread remains busy in completing the tasks until the thread becomes idle
//The thread after then completes the pending callbacks


//stack, webAPIs and callback queue
console.log("Hi there");

setTimeout(function () {
  console.log("from inside async fn 1");
}, 20000);

setTimeout(function () {
  console.log("from inside async fn 2");
}, 10000);

let a = 0;
for (let i = 0; i < 10; i++) {
  a = a + 1;
}

console.log(a);
//Go to latentFlip
//Call Stack: Stack
//things getting called are stacked one upon the other
//web APIs
//the setTimeout function runs here
//Callback Queue
//Once the setTimeout function has run completely, it waits for the call stack to get over, once it gets over things from the callback queue get called 

//What if we put another setTimeout??
//the ten seconds setTimeout gets completed first, so it goes to the callback queue first and will be executed first when the JS thread gets free

//the webAPIs will stand in q queue in order in which they are completed, wait for the JS thread to run completely and when the JS thread becomes free it then pulls the functions from callback queue
