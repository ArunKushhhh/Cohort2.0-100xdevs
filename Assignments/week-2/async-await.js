function AsyncFunction() {
  let p = new Promise(function (resolve) {
    //do some async logic here
    resolve("hi there");
  });
  return p;
}

// function main() {
//   AsyncFunction().then(function (value) {
//     console.log(value);
//   });
// }


//the callback function needs to have the async await syntax
//every await has to be wrapped inside a async function
//no callbacks, no .then() syntax
async function main() {
  const value = await AsyncFunction(); //the thread gets hung here, waiting for the async function to get resolved
  console.log(value);
}

main();
