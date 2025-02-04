const convertToCelsius = function(degFahrenheit) {
  let celsius = (degFahrenheit - 32) * (5 / 9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(degCelsius) {
  let fahrenheit = (degCelsius * (9/5)) + 32
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
