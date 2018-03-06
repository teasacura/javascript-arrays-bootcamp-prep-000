var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

function DestructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
