function deleteFirstAndLastSpaceInString(string) {
  let startString = 0;
  let endString = string.length;

  if (string.startsWith(' ')) {
    startString = 1;
  }

  if (string.endsWith(' ')) {
    endString -= 1;
  }

  return string.slice(startString, endString);
}

module.exports = deleteFirstAndLastSpaceInString;
