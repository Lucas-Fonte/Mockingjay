import wantedJSON from './json/wantedJSON.json';
import baseJSON from './json/baseJSON.json';
import {
  getLayeredObject, separateValuesAndObjects,
} from './helpers';


function compareJSONs() {
  return {
    wantedJSON: separateValuesAndObjects(getLayeredObject(wantedJSON)),
    baseJSON: separateValuesAndObjects(getLayeredObject(baseJSON)),
  };
}


function findWantedKeyInBase(wantedValues : Array <any>, baseValues : Array <any>) {
  const newJson = baseValues.map((baseValue) => {
    const settedValue = wantedValues.find((wantedValue) => wantedValue.value.key === baseValue.value.key);
    return settedValue || baseValue;
  });

  return {
    wantedValues,
    baseValues,
    newJson,
  };
}

function applyDifferenceInValues() {
  const result = compareJSONs();

  return findWantedKeyInBase(result.wantedJSON.values, result.baseJSON.values);
}

console.log(JSON.stringify(applyDifferenceInValues(), null, 4));
