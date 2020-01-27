import wantedJSON from './json/wantedJSON.json';
import baseJSON from './json/baseJSON.json';
import { getKeysInsideOfObject, getDifferenceBetweenTwoArrays } from './helpers';


function getLayeredObject(object : Object) {
  return getKeysInsideOfObject(object).map((objectKey : keyof object) => {
    if (typeof object[objectKey] === 'object') {
      if (getKeysInsideOfObject(object[objectKey]) === 'object') {
        return getKeysInsideOfObject(object[objectKey].map((objectInsiderKey: keyof object[objectKey]) => getKeysInsideOfObject(object[objectKey][objectInsiderKey])));
      }

      return getKeysInsideOfObject(object[objectKey]);
    }
    return object[objectKey];
  });
}

console.log(getLayeredObject(baseJSON));

function getJSON() {
  console.log({
    wantedJSON: getKeysInsideOfObject(wantedJSON),
    baseJSON: getKeysInsideOfObject(baseJSON),
    difference: getDifferenceBetweenTwoArrays(getKeysInsideOfObject(wantedJSON), getKeysInsideOfObject(baseJSON)),
  });
}

getJSON();
