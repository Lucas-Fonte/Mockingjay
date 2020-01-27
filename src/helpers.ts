
function getDifferenceBetweenTwoArrays(firstArray : Array<any>, secondArray : Array<any>) {
  if (firstArray.length > secondArray.length) {
    return firstArray.filter((element : any) => !secondArray.find(element));
  }

  return secondArray.filter((element : any) => !firstArray.includes(element));
}

function getKeysInsideOfObject(object : Object) {
  return Object.keys(object);
}


export {
  getDifferenceBetweenTwoArrays,
  getKeysInsideOfObject,
};
