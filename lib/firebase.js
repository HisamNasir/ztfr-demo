import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyChniZJzl5eZPHK7oryAmfgsocXF2YaPl0",
  authDomain: "app1-edbbd.firebaseapp.com",
  projectId: "app1-edbbd",
  storageBucket: "app1-edbbd.appspot.com",
  messagingSenderId: "1461134649",
  appId: "1:1461134649:web:90761b4b5f7df6e2d874e8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
