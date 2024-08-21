function calculateArithematic(a, b, arithematicFinalFunction) {
  const answer = arithematicFinalFunction(a, b);
  return answer;
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const value = calculateArithematic(1, 2, sum);

//replace the third argument with a function to make it a callback function
//1. replace the third argument with a called named arithematicFinalFunction
//2. Change the following codeblock:
//if (type == "sum") {
//     const value = sum(a, b);
//     return value;
//   }
//   if (type == "minus") {
//     const value = sub(a, b);
//     return value;
//   }
