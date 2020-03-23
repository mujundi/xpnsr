// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);       won't work
  return a + b;
};

// this keyword - no longer bound with arrow functions
const user = {
  name: "Musa",
  cities: ["NYC", "Orlando", "Gainesville"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

// console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  // numbers - array of numbers to be multiplied
  numbers: [3, 0, 1, 2],
  // multiplyBy - single number
  multiplyBy: 6,
  // multiply - return new array where each number has been multiplied
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
