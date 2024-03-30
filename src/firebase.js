import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2Esq5pBteUmmMpmq6EArzRgl6BShX7Hc",
    authDomain: "netflix-clone-94995.firebaseapp.com",
    projectId: "netflix-clone-94995",
    storageBucket: "netflix-clone-94995.appspot.com",
    messagingSenderId: "259721975867",
    appId: "1:259721975867:web:a3b1443dc0f2c9da92a41e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;