import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMyXsmf9CANJ1sO29GalPxNCRr3JvbVcw",
  authDomain: "xpnsr-mj.firebaseapp.com",
  databaseURL: "https://xpnsr-mj.firebaseio.com",
  projectId: "xpnsr-mj",
  storageBucket: "xpnsr-mj.appspot.com",
  messagingSenderId: "220194159000",
  appId: "1:220194159000:web:283526ef65611cf76393ed",
  measurementId: "G-KDTJTMD7G9",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
// child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// // FETCHING ARRAY DATA
// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// ARRAYS IN FIREBASE
// database.ref("expenses").push({
//   createdAt: 1000,
//   note: "test note 1",
//   description: "test description 1",
// });

// // ON - OFF
// // --------------
// // subscribe
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (error) => {
//     console.log("Error occured: ", e);
//   }
// );
//
// const onValueChange = database.ref().on("value", (snapshot) => {
//   const person = snapshot.val();
//   console.log(
//     `${person.name} is a ${person.job.title} at ${person.job.company}.`
//   );
// });
//
// // unsubscribe
// database.ref().off(onValueChange);

// ONCE
// ------
// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Musa Jundi",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software Dev",
//       company: "Google",
//     },
//     location: {
//       city: "Dallas",
//       state: "TX",
//     },
//   })
//   .then(() => {
//     console.log("Data written.");
//   })
//   .catch((error) => {
//     console.log("Failure to write.", error);
//   });

// SET METHOD
// ------------------------
// database.ref().set("Test data");

// database.ref("age").set(27);
// database.ref("location/city").set("Frisco");

// database
//   .ref("attributes")
//   .set({
//     height: 70,
//     weight: 170,
//   })
//   .then(() => {
//     console.log("Second write operation succeeded.");
//   });

// REMOVE METHOD
// -----------------
// database
//   .ref("name")
//   .remove()
//   .then(() => {
//     console.log("Deletion succeeded.");
//   })
//   .catch(() => {
//     console.log("Deletion failed.");
//   });

// UPDATE METHOD
// -------------------------
// database.ref().update({
//   name: 'Bob Jundi', // updates existing field
//   age: 55,
//   job: 'Software Dev', // creates new field
//   isEmployed: null,  // deletes existing field
//   'location/city': 'Frisco' // updates nested field
// })
