// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUki9Mz9gWJob4Y7lzJUdZQDp_AqOv-mw",
  authDomain: "building-management-a5b4a.firebaseapp.com",
  projectId: "building-management-a5b4a",
  storageBucket: "building-management-a5b4a.appspot.com",
  messagingSenderId: "641607789233",
  appId: "1:641607789233:web:f42edd8850430969909090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;