function calculateCountOccurrencesEachCharacter(string) {
  let copyString = string;

  while (copyString.length !== 0) {
    console.log(copyString.match(new RegExp(`${copyString[0]}`, 'g')).length);
    copyString = copyString.replaceAll(copyString[0], '');
  }

  return undefined;
}

module.exports = calculateCountOccurrencesEachCharacter;
