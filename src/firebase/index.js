import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4tpADjCOHZ9QDLXNXYwih4rMrT_eSNWk",
    authDomain: "gaming-cove.firebaseapp.com",
    projectId: "gaming-cove",
    storageBucket: "gaming-cove.appspot.com",
    messagingSenderId: "404113349963",
    appId: "1:404113349963:web:c311d081e66a9dee551cce"
  };

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
  return app;
}

export function getFirestore(){
  return firebase.firestore(app)
}


