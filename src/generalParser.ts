import wantedJSON from './json/wantedJSON.json';
import baseJSON from './json/baseJSON.json';
import {
  getLayeredObject, separateValuesAndObjects, getDifferenceBetweenTwoArrays,
} from './helpers';


function compareJSONs() {
  return {
    wantedJSON: separateValuesAndObjects(getLayeredObject(wantedJSON)),
    baseJSON: separateValuesAndObjects(getLayeredObject(baseJSON)),
  };
}

function applyDifferenceInValues() {
  const result = compareJSONs();

  return {
    result: result.baseJSON.values,
    differenceInValues: getDifferenceBetweenTwoArrays(result.wantedJSON.values, result.baseJSON.values),
    // differenceInObjects: getDifferenceBetweenTwoArrays(result.wantedJSON.objects, result.baseJSON.objects),
  };
}
console.log({ teste: getDifferenceBetweenTwoArrays([1, 2], [5, 4, 3]) });
console.log(JSON.stringify(applyDifferenceInValues(), null, 4));
