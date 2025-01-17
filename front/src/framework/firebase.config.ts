import { initializeApp } from "firebase/app"


const APIKEY = import.meta.env.VITE_FB_apiKey as string
const AUTHDOMAIN = import.meta.env.VITE_FB_authDomain as string
const PROJECTID = import.meta.env.VITE_FB_projectId as string
const STORAGEBUCKET = import.meta.env.VITE_FB_storageBucket as string
const MESSAGINGSENDERID = import.meta.env.VITE_FB_messagingSenderId as string
const APPID = import.meta.env.VITE_FB_appId as string
const MEASUREMENTID = import.meta.env.VITE_FB_measurementId as string


export const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

// Initialize Firebase
export const appFB = initializeApp(firebaseConfig)
