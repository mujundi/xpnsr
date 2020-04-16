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

export { firebase, database as default };
