import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB5A0-PY_l2QwH5jLzFHzdsW4O035zrF1M",
    authDomain: "turnout-508b5.firebaseapp.com",
    databaseURL: "https://turnout-508b5.firebaseio.com",
    projectId: "turnout-508b5",
    storageBucket: "turnout-508b5.appspot.com",
    messagingSenderId: "700929134312",
    appId: "1:700929134312:web:21a7558746acda2f8d835d"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')