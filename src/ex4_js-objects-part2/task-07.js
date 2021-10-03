function equataLengthStringAndNumber(string, number) {
  if ((string.length - number) > 0) {
    return `${string.slice(0, number - 1)}…`;
  }

  return string;
}

module.exports = equataLengthStringAndNumber;
