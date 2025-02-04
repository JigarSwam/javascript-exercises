const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArr) {
	let sum = 0;
  numArr.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(numArr) {
  let result = 1;
  numArr.forEach(num => {
    result *= num;
  });
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num == 0) { return 1; };

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
