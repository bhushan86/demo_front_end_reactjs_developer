import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyB9MXvJokxd37ISq_rlpbCTx1p0pzxPu-A",
  authDomain: "linkedin-clone-ded66.firebaseapp.com",
  projectId: "linkedin-clone-ded66",
  storageBucket: "linkedin-clone-ded66.appspot.com",
  messagingSenderId: "148303027885",
  appId: "1:148303027885:web:201cf404066cec0ba6f024",
  measurementId: "G-996157KLVX"
};
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};