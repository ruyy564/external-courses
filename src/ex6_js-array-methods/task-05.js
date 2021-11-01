function mapArray(array, callback) {
  const resultArray = [];

  for (let i = 0; i < array.length; i += 1) {
    resultArray.push(callback(array[i], i, array));
  }

  return resultArray;
}

module.exports = mapArray;
