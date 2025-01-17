import dotenv from 'dotenv';
dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const APIKEY = process.env.APIKEY
const AUTHDOMAIN = process.env.AUTHDOMAIN
const PROJECTID = process.env.PROJECTID
const STORAGEBUCKET = process.env.STORAGEBUCKET
const MESSAGINGSENDERID = process.env.MESSAGINGSENDERID
const APPID = process.env.APPID
const MEASUREMENTID = process.env.MEASUREMENTID


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
