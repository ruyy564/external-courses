function calculateCountOccurrencesEachCharacter(string) {
  let copyString = string;
  let regular;
  while (copyString.length !== 0) {
    regular = new RegExp(`${copyString[0]}`, 'g');
    console.log(copyString.match().length);
    copyString = copyString.replace(regular, '');
  }

  return undefined;
}

module.exports = calculateCountOccurrencesEachCharacter;
