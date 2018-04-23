// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, name) {
  return arr.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })
};

function fuzzyMatch(arr, letters){
  let length = letters.length;
  return arr.filter(function(driver){
    return driver.slice(0, length) === letters
  })
};

function matchName(arr, name){
  return arr.filter(function(driver){
    return driver.name === name;
  })
};
