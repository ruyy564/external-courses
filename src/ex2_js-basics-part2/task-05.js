function findMaxElementArray(array) {
  const lengthArray = array.length;
  let maxElement = array[0];
  for (let i = 0; i < lengthArray; i += 1) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }
  return maxElement;
}
module.exports = findMaxElementArray;
