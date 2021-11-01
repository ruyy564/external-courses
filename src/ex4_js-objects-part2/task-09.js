function addStringInString(string, addingString, numberPlaces) {
  const result = string.split(' ');
  const lastWord = result[numberPlaces];

  return string.replace(lastWord, `${lastWord} ${addingString}`);
}

module.exports = addStringInString;
