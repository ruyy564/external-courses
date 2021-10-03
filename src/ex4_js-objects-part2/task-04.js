function toUpperCaseTheFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1, string.length);
}

module.exports = toUpperCaseTheFirstLetter;
