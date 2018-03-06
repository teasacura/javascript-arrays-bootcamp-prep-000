var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
  return array
}

function DestructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}