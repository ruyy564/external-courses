function toLowerCamelCase(string) {
  const splitString = string.split(' ');
  let result = splitString[0].toLowerCase();

  for (let i = 1; i < splitString.length; i += 1) {
    result += splitString[i][0].toUpperCase() + splitString[i].slice(1).toLowerCase();
  }

  return result;
}

module.exports = toLowerCamelCase;
