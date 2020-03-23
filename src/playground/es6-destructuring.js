// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "Miami",
//     temp: 92
//   }
// };

// const { name = "Anon", age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName); // Pengion, default is "Self-Published"

// const address = ["1122 Jordan Avenue", "Miami", "Florida", "19147"];
// const [street, , state = 'New York', zip] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (iced)", "$2.00", "$2.50", "$2.75"];

const [beverage, , price] = item;
console.log(`A Medium ${beverage} costs ${price}.`);
