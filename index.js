var num1 = 10;
var num2 = 20;
var num3 = 30;

console.log("Is num1 less than num2?", num1 < num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 equal to num2?", num1 == num2);

var sum = num1 + num2;
console.log("Sum =", sum);

var subtract = num2 - num1;
console.log("Subtraction =", subtract);

var multiply = num1 * num2;
console.log("Multiplication =", multiply);

var divide = num2 / num1;
console.log("Division =", divide);

function getAvg(a, b, c) {
  var average = (a + b + c) / 3;
  return average;
}

console.log("Average using function =", getAvg(num1, num2, num3));
