import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig={
  apiKey: "AIzaSyAHicukSf2-Wm3ucWeMrywqovypKGZuWOw",
  authDomain: "squid-game-tr.firebaseapp.com",
  databaseURL: "https://squid-game-tr-default-rtdb.firebaseio.com",
  projectId: "squid-game-tr",
  storageBucket: "squid-game-tr.appspot.com",
  messagingSenderId: "204187601456",
  appId: "1:204187601456:web:e16fbd82bb86a0bcd43bf5",
  measurementId: "G-1204Q321CL",
}



// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
initializeApp(firebaseConfig)

export const db = getFirestore()