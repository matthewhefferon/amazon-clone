import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCG5wpdfkVdhSnHaqV5eQqmcRj3afMr97k",
  authDomain: "clone-3ae62.firebaseapp.com",
  databaseURL: "https://clone-3ae62.firebaseio.com",
  projectId: "clone-3ae62",
  storageBucket: "clone-3ae62.appspot.com",
  messagingSenderId: "456766108683",
  appId: "1:456766108683:web:178caee0b56de97858830e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
