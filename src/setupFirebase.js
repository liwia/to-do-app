import firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyCKzk3YShdRvsExaNdPqF2IN1jNDBkfeks",
    authDomain: "to-do-app-34c41.firebaseapp.com",
    databaseURL: "https://to-do-app-34c41.firebaseio.com",
    projectId: "to-do-app-34c41",
    storageBucket: "to-do-app-34c41.appspot.com",
    messagingSenderId: "442126275473"
};
export default () => {
    firebase.initializeApp(config);
}