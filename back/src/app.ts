import express, {Application} from 'express';
import { router } from './adapters/routes.js';
import ErrorHandler from './utils/errors/ErrorHandler.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { firebaseConfig } from './framework/firebase.config.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const appFB = initializeApp(firebaseConfig);
export const auth = getAuth(appFB);
//const analytics = getAnalytics(appFB);



const app: Application = express();
app.use(express.json());
const FRONTEND_URL = process.env.FRONTEND_URL

app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

// Mount the routes
app.use('', router);

// express specific error handling middleware
app.use(ErrorHandler.middleware);


const APP_PORT = process.env.APP_PORT || 3001;
app.listen(APP_PORT, () => {
    console.log(`QuickCMS Back-end, TS node server is running on http://localhost:${APP_PORT}`);
});