import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDD9zPXUO3GEdWpiCVzVvzKTVenzcNAEyA",
    authDomain: "motogol-isa.firebaseapp.com",
    databaseURL: "https://motogol-isa.firebaseio.com",
    projectId: "motogol-isa",
    storageBucket: "motogol-isa.appspot.com",
    messagingSenderId: "660062742416"
};
firebase.initializeApp(config);

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const provider = new firebase.auth.GoogleAuthProvider();
export const database = new firebase.database();
export const auth = new firebase.auth();
