function Calculator() {
  let result = 0;

  function add(a = 0) {
    result += a;

    return add;
  }

  function subtract(a = 0) {
    result -= a;

    return subtract;
  }

  function divide(a = 1) {
    result /= a;

    return divide;
  }

  function multiply(a = 1) {
    result *= a;

    return multiply;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;

    return undefined;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const calculator = Calculator();

module.exports = calculator;
