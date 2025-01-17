// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = import.meta.env.VITE_FB_apiKey as string
const authDomain = import.meta.env.VITE_FB_authDomain as string
const projectId = import.meta.env.VITE_FB_projectId as string
const storageBucket = import.meta.env.VITE_FB_storageBucket as string
const messagingSenderId = import.meta.env.VITE_FB_messagingSenderId as string
const appId = import.meta.env.VITE_FB_appId as string
const measurementId = import.meta.env.VITE_FB_measurementId as string

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);