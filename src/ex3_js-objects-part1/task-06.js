function cloneDeep(object) {
  const result = Array.isArray(object) ? [] : {};
  const typeVariable = typeof object;

  if (typeVariable !== 'object' || object === null) {
    return object;
  }

  Object.keys(object).forEach((key) => {
    result[key] = cloneDeep(object[key]);
  });

  return result;
}

module.exports = cloneDeep;
