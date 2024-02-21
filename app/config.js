
import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDU6DHI3fG6HmrQNCpv17Ozr4UfmeEC0kQ",
  authDomain: "authapp-cd494.firebaseapp.com",
  projectId: "authapp-cd494",
  storageBucket: "authapp-cd494.appspot.com",
  messagingSenderId: "127012127714",
  appId: "1:127012127714:web:5995e6a43685c8637befbb",
  measurementId: "G-SZ62E7CKM7"
};


const app = initializeApp(firebaseConfig);
export {app};