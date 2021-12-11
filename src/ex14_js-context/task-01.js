function Calculator() {
  return {
    result: 0,

    add(value = 0) {
      this.result += value;

      return this;
    },

    subtract(value = 0) {
      this.result -= value;

      return this;
    },

    multiply(value = 1) {
      this.result *= value;

      return this;
    },

    divide(value = 1) {
      this.result /= value;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    setState(value = this.result) {
      this.result = value;

      return this;
    },

    fetchData(callback) {
      setTimeout(() => {
        this.result = 500;
        callback(this.result);
      }, 1000);
    },

    getResult() {
      return this.result;
    },
  };
}

const calculator = Calculator();
module.exports = calculator;
