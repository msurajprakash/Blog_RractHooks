import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuj7_ObaI4nRK5ZeCSm2S1bWudFW0Cjaw",
    authDomain: "react-hooks-blog-d88ea.firebaseapp.com",
    projectId: "react-hooks-blog-d88ea",
    storageBucket: "react-hooks-blog-d88ea.appspot.com",
    messagingSenderId: "929461481425",
    appId: "1:929461481425:web:ef98ac9c28e407696b3af0"
};


firebase.initializeAppnitializeApp(firebaseConfig);

export const firebase = firebase.firestore();