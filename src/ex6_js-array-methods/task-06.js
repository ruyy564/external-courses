function reduceArray(array, callback, initialValue) {
  let previousValue = initialValue || array[0];
  const startLoop = initialValue === undefined ? 1 : 0;

  for (let i = startLoop; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduceArray;
