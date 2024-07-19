import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHXigxxqw_bU-ndIhQv4yh9Y-bbgJzuv4",
    authDomain: "cookingninja-e2bbe.firebaseapp.com",
    projectId: "cookingninja-e2bbe",
    storageBucket: "cookingninja-e2bbe.appspot.com",
    messagingSenderId: "139927098693",
    appId: "1:139927098693:web:7a4d619e1f2e569a8b9a2c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
