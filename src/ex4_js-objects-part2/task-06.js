function toUpperCaseTheFirstLetterEveryString(string) {
  const resultString = string.split(' ');

  for (let i = 0; i < resultString.length; i += 1) {
    resultString[i] = resultString[i][0].toUpperCase() + resultString[i].slice(1);
  }

  return resultString.join(' ');
}

module.exports = toUpperCaseTheFirstLetterEveryString;
