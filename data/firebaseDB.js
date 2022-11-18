import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMFxJci9AU-rytRIiCCCL3PU2N7Rtk4oM",
  authDomain: "mobileofgod.firebaseapp.com",
  projectId: "mobileofgod",
  storageBucket: "mobileofgod.appspot.com",
  messagingSenderId: "358372114754",
  appId: "1:358372114754:web:ac7c2e2e83b4a3cc8708db",
  measurementId: "G-6E7ZSWYH4M"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase };