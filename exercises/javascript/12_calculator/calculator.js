const add = function(left, right) {
  return left + right;
};

const subtract = function(left, right) {
  return left - right;
};

const sum = function(numbers) {
  return numbers.reduce(
    (accumulator, next) => accumulator + next,
    0,
  );
};

const multiply = function(numbers) {
  return numbers.reduce(
    (accumulator, number) => accumulator * number,
    1,
  )
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  if (number) return number * factorial(number - 1);
  else return 1;
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
