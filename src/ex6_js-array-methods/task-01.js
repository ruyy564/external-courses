function sliceArray(array, begin = 0, end = array.length) {
  const resultArray = [];
  let start;
  let finish;

  start = (begin < 0) ? array.length + begin : begin;
  start = (start < 0) ? 0 : start;
  start = (start > array.length) ? array.length : start;
  finish = (end < 0) ? array.length + end : end;
  finish = (finish < 0) ? 0 : finish;
  finish = (finish > array.length) ? array.length : finish;

  for (let i = start; i < finish; i += 1) {
    resultArray.push(array[i]);
  }

  return resultArray;
}

module.exports = sliceArray;
