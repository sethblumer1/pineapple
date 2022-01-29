import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyAuSpfTWbDoI0kz4s0lc6U_pHAOngq9SR0",

  authDomain: "react-hooks-tester-92492.firebaseapp.com",

  projectId: "react-hooks-tester-92492",

  storageBucket: "react-hooks-tester-92492.appspot.com",

  messagingSenderId: "1042347562012",

  appId: "1:1042347562012:web:fa44adf858fb907b3c3bd9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
