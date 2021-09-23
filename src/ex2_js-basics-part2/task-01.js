function defineTypeVariable(variable) {
  let typeVariable = typeof variable;
  if ((typeVariable === 'number' && isNaN(variable)) || (typeVariable !== 'string' && typeVariable !== 'number')) {
    typeVariable = undefined;
  }
  return typeVariable;
}

module.exports = defineTypeVariable;
