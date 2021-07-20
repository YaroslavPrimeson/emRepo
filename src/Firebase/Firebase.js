import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBXk91j3W3FtoRkMYZtT8fG_KosW84DDQw",
    authDomain: "emeli-beauty.firebaseapp.com",
    projectId: "emeli-beauty",
    storageBucket: "emeli-beauty.appspot.com",
    messagingSenderId: "493874227186",
    appId: "1:493874227186:web:fbadbd1357c8fa1b81ed6b",
    measurementId: "G-QEQMPHFH1J"
};
export const fire = firebase.initializeApp(firebaseConfig);
