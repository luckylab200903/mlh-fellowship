// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUoiTeB2msDNFaHs1SX0wW_V-MiMZ2lQ4",
  authDomain: "movie-gpt-abb13.firebaseapp.com",
  projectId: "movie-gpt-abb13",
  storageBucket: "movie-gpt-abb13.appspot.com",
  messagingSenderId: "766611779307",
  appId: "1:766611779307:web:0afa58c2522073e3c358ae",
  measurementId: "G-FBMJB6DTXZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();