var nameVar = "Andrew";
var nameVar = "Mike"; // redefinition works (no use for this)
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie"; // value can be changed, but variable can't be redefined
console.log("nameLet", nameLet);

const nameConst = "Frank"; // value can't be changed, nor redefined
console.log("nameConst", nameConst);

// SCOPES (all 3 are function scoped and block-level scoped)
// Function scoping
function getPetName() {
  var petName = "Hal";
  return petName;
}
// console.log(petName); <-- this won't work

// Block scoping
var fullName = "Li Ming";
if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName); // works with var, but not with let and const
