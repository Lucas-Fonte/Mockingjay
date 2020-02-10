
function getDifferenceBetweenTwoArrays(firstArray : Array<any>, secondArray : Array<any>) {
  console.log(JSON.stringify({ firstArray, secondArray }, null, 4));

  if (firstArray.length > secondArray.length) {
    return firstArray.filter((element : any) => !secondArray.find(element));
  }

  return secondArray.filter((element : any) => !firstArray.includes(element));
}

function getKeysInsideOfObject(object : Object) {
  return Object.keys(object);
}

function getLayeredObject(object : Object) {
  return getKeysInsideOfObject(object).map((objectKey : keyof object) => {
    if (typeof object[objectKey] === 'object') {
      return {
        object: {
          key: objectKey,
          object: getKeysInsideOfObject(object[objectKey]),
        },
      };
    }

    return {
      value: {
        key: objectKey,
        value: object[objectKey],
      },
    };
  });
}


function separateValuesAndObjects(array : Array<object>) {
  return {
    values: array.filter((element : object) => getKeysInsideOfObject(element)[0] === 'value'),
    objects: array.filter((element : object) => getKeysInsideOfObject(element)[0] === 'object'),
  };
}

export {
  getDifferenceBetweenTwoArrays,
  getKeysInsideOfObject,
  getLayeredObject,
  separateValuesAndObjects,
};
