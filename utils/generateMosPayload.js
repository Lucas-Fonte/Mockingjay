const wantedJSON = require("./wantedJSON.json");
const baseJSON = require("./baseJSON.json");
const {
  getDifferenceBetweenTwoArrays,
  getKeysInsideOfObject,
  getValuesInsideOfObject
} = require("./helpers");

function getAllKeysUptoThreeLaywers(object, orderPosition) {
  return {
    firstLaywer: getKeysInsideOfObject(object),

    secondLaywer: getKeysInsideOfObject(object).map(firstKey =>
      getKeysInsideOfObject(object[firstKey])
    )[0],

    thirdLaywer: getKeysInsideOfObject(object).map(firstKey => {
      return getKeysInsideOfObject(object[firstKey]).map(secondKey =>
        getKeysInsideOfObject(object[firstKey][secondKey])
      );
    })[0][orderPosition]
  };
}

const layweredBaseJSON = getAllKeysUptoThreeLaywers(baseJSON, 4);
const layweredWantedJSON = getAllKeysUptoThreeLaywers(wantedJSON, 1);

const differenceBetweenBaseAndWanted = {
  firstLaywer: {
    difference: getDifferenceBetweenTwoArrays(
      layweredBaseJSON.firstLaywer,
      layweredWantedJSON.firstLaywer
    )
  },
  secondLaywer: {
    difference: getDifferenceBetweenTwoArrays(
      layweredBaseJSON.secondLaywer,
      layweredWantedJSON.secondLaywer
    )
  },
  thirdLaywer: {
    difference: getDifferenceBetweenTwoArrays(
      layweredBaseJSON.thirdLaywer,
      layweredWantedJSON.thirdLaywer
    )
  }
};

console.log(differenceBetweenBaseAndWanted.secondLaywer.difference);
