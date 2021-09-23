function areSameElementsArray(array) {
  const lengthArray = array.length;
  for (let i = 0; i < lengthArray; i += 1) {
    if (array[0] !== array[i]) {
      return false;
    }
  }
  return true;
}
module.exports = areSameElementsArray;
