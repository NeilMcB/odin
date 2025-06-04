const roundToPrecision = function(number, precision) {
  return Math.round(number * 10 ** precision) / 10 ** precision;
}

const convertToFahrenheit = function(celsius) {
  return roundToPrecision(celsius * (9 / 5) + 32, 1);
};

const convertToCelsius = function(farenheit) {
  return roundToPrecision((farenheit - 32) * (5 / 9), 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
