function addNotExistPropertyInObject(property, object) {
  const resultObject = {};
  Object.assign(resultObject, object);

  if (!object.hasOwnProperty(property)) {
    resultObject[property] = 'new';
  }

  return resultObject;
}

module.exports = addNotExistPropertyInObject;
