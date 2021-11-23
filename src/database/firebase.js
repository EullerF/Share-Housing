import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCZhNu84r7ySHq85VsOml-vLHqu2_3YQ7A",
  authDomain: "tcc2021-33dfe.firebaseapp.com",
  projectId: "tcc2021-33dfe",
  storageBucket: "tcc2021-33dfe.appspot.com",
  messagingSenderId: "976202805637",
  appId: "1:976202805637:web:a503e96664d555bc37d4ec",
  measurementId: "G-LD8EQ59KHK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

