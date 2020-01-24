function getDifferenceBetweenTwoArrays(firstArray, secondArray) {
  if (firstArray.length > secondArray.length) {
    return firstArray.filter(firstElement => {
      return secondArray.find(firstElement);
    });
  }
  return secondArray.map(firstElement => {
    return firstArray.filter(secondElement => firstElement === secondElement);
  });
}

function getKeysInsideOfObject(object) {
  return Object.keys(object);
}

function getValuesInsideOfObject(object) {
  return Object.values(object);
}

module.exports = {
  getDifferenceBetweenTwoArrays,
  getKeysInsideOfObject,
  getValuesInsideOfObject
};
