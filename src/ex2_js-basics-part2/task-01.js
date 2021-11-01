function defineTypeVariable(variable) {
  const typeVariable = typeof variable;

  if ((typeVariable === 'number' && isNaN(variable)) || (typeVariable !== 'string' && typeVariable !== 'number')) {
    return undefined;
  }

  return typeVariable;
}

module.exports = defineTypeVariable;
