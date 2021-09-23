function outputElementsArrayAndCount(array) {
  const lengthArray = array.length;
  for (let i = 0; i < lengthArray; i += 1) {
    console.log(array[i]);
  }
  console.log(lengthArray);
  return '';
}
module.exports = outputElementsArrayAndCount;
