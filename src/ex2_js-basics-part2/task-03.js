function calculateCountEventOddZeroElementsArray(array) {
  const lengthArray = array.length;
  let countEvent = 0;
  let countOdd = 0;
  let countZero = 0;
  let typeElementArray;

  for (let i = 0; i < lengthArray; i += 1) {
    typeElementArray = typeof array[i];

    if (typeElementArray === 'number') {
      if (array[i] === 0) {
        countZero += 1;
      } else if (array[i] % 2 === 0) {
        countEvent += 1;
      } else {
        countOdd += 1;
      }
    }
  }

  return [countEvent, countOdd, countZero];
}

module.exports = calculateCountEventOddZeroElementsArray;
