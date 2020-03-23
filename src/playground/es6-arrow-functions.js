// const square = function(x) {
//   return x * x;
// };

// const squareES6 = x => {
//   return x * x;
// };

// const squareArrowExpression = x => x * x;

// console.log(square(8));
// console.log(squareES6(3));
// console.log(squareArrowExpression(4));

// Challenge - arrow functions

const getFirstName = fullName => {
  return fullName.split(" ")[0];
};
const getFirstNameExp = fullName => fullName.split(" ")[0];

const name = "Musa Jundi";
console.log(getFirstName(name));
console.log(getFirstNameExp(name));
