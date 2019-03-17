import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBpC50gHORvwz9pHMpXuPaHCeFUy-yA9jI",
    authDomain: "chateste-cb319.firebaseapp.com",
    databaseURL: "https://chateste-cb319.firebaseio.com",
    projectId: "chateste-cb319",
    storageBucket: "chateste-cb319.appspot.com",
    messagingSenderId: "85010456294"
};
firebase.initializeApp(config);

export default firebase;