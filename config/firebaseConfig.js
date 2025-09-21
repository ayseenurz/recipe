// Import the functions you need from the SDKs you need
import { initializeApp ,} from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYNccyihVCYGIpme6Tdtv95j2uzOIobzU",
  authDomain: "recipeapp-bc236.firebaseapp.com",
  projectId: "recipeapp-bc236",
  storageBucket: "recipeapp-bc236.appspot.com",
  messagingSenderId: "292489614604",
  appId: "1:292489614604:web:a894fa394848c9ace62529"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database  = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});