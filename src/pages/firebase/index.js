
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyCv0KTJfyTI-481dg1np7iwp4NKQMYt-fU",
    authDomain: "dayfood-17bb7.firebaseapp.com",
    projectId: "dayfood-17bb7",
    storageBucket: "dayfood-17bb7.appspot.com",
    messagingSenderId: "694545209052",
    appId: "1:694545209052:web:abd7a22a9b4272b31d8619",
    measurementId: "G-T3TMBR2QR9"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app)

export {auth, storage, db}