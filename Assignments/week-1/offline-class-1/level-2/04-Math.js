function mathMethods(value) {
  console.log("Original Value:", value);

  //rounds upto the nearest integer
  let rounded = Math.round(value);
  console.log("After round():", rounded);

  //smallest integer bigger than passed value
  //value=4.56 ceiling= 5
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  //biggest integer smaller than this
  //value = 4.56; floor = 4 
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  // generates a random value between 0 and 1
  let randomValue = Math.random();
  console.log("After random():", randomValue);

  // returns maximum of all the arguments passed in it
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);//15

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);//5

  //value = baseValue; 2 = exponent value
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  //square root
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
