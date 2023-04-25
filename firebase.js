// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAk5jYUXotnzmagCVMLMVacmteQKn_pAuM",
	authDomain: "commentsproyect.firebaseapp.com",
	projectId: "commentsproyect",
	storageBucket: "commentsproyect.appspot.com",
	messagingSenderId: "149629899933",
	appId: "1:149629899933:web:66495b7c8dbc624d34f074"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
