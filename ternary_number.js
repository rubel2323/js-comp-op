var num1 = 7;
var num2 = 8;
var result;
// if (num1 > num2) {
//   var result = 2 * num1;
//   console.log("Result will be double of num1 =", result);
// } else {
//   var result = num1 + num2;
//   console.log("Result will be the sum of num1 and num2 =", result);
// }
num1 > num2
  ? console.log("Result will be double of num1 =", (result = 2 * num1))
  : console.log(
      "Result will be the sum of num1 and num2 =",
      (result = num1 + num2)
    );
