import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyATFafJr3d-Pqfb_nuFKD10QBeiiLqe-2A",
  authDomain: "quickload-f4a75.firebaseapp.com",
  databaseURL: "https://quickload-f4a75.firebaseio.com",
  projectId: "quickload-f4a75",
  storageBucket: "quickload-f4a75.appspot.com",
  messagingSenderId: "418341853597"
};
firebase.initializeApp(config);

export default firebase;
