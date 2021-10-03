function findPropertyInPrototype(property, object) {
  if (object.hasOwnProperty(property)) {
    return undefined;
  }

  return object[property];
}

module.exports = findPropertyInPrototype;
