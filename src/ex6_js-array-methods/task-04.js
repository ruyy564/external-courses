function filterArray(array, callback) {
  const resultArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
}

module.exports = filterArray;
