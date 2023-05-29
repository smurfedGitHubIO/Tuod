import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_1laaV9xXvjl7QN9huxuYQdsJ0Y3jKt0",
  authDomain: "tuod-c49da.firebaseapp.com",
  projectId: "tuod-c49da",
  storageBucket: "tuod-c49da.appspot.com",
  messagingSenderId: "122615820752",
  appId: "1:122615820752:web:c783e5a454e747f5e389d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)

