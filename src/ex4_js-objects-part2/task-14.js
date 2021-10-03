function randomNumber(minNumber, maxNumber) {
  return Math.random() * (maxNumber - minNumber) + minNumber;
}

module.exports = randomNumber;
