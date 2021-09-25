function areSameElementsArray(array) {
  const lengthArray = array.length;
  const firstElementArray = array[0];

  for (let i = 0; i < lengthArray; i += 1) {
    if (firstElementArray !== array[i]) {
      return false;
    }
  }

  return true;
}

module.exports = areSameElementsArray;
