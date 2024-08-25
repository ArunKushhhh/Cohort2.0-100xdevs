//Promises
//So what happens is that the callbacks are called only when the thread of JS gets free and then it will execute it

//promises are syntactical sugars(just a pretty way) that make this code slightly more readable
//However it still uses callback queue, all the other things

// const fs = require("fs");

// //our own asynchronous function
// function ReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// //callback function to call
// function onComplete(data) {
//   console.log(data);
// }

// ReadFile(onComplete);

//using promises
const fs = require("fs");
const { resolve } = require("path");
//our own asynchronous function

//writing promises
//it doesn't have any arguments, it doesn't have any callbacks
function ReadFile() {
  console.log("inside readFile");
  //Here the promise is being returned synchronously, but the data that we want is still asynchronous
  //returning a promise(which is a class) is like returning a new Date(which is also a class and helps us access dates and time)
  //Promise takes a function as an argument which then takes resolve argument as a function
  return new Promise(function (resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("Before Resolve");
      resolve(data);
    });
  });
}

//callback function to call
function onComplete(data) {
  console.log(data);
}

// ReadFile().then(onComplete);
var a = ReadFile();
console.log(a);
a.then(onComplete);


//Promises has three states: pending, resolved and rejected