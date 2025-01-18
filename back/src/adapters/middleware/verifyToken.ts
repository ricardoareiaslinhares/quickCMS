
import TypeHttp from '../../framework/http.type.js';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { firebaseConfig } from '../../framework/firebase.config.js';
import { RequestHandler, Request, Response, NextFunction } from 'express';

const appAdmin = initializeApp(firebaseConfig);
const authAdmin = getAuth(appAdmin);

const validateFirebaseIdToken : RequestHandler = async (req: Request, res:Response, next:NextFunction) => {
  let idToken = req.headers.authorization?.split('Bearer ')[1];

  if (!idToken) {
    res.status(401).send('Unauthorized: No token provided');
  }
  idToken = String(idToken)
  try {
   // const decodedToken = await admin.auth().verifyIdToken(idToken);
    const decodedToken = await authAdmin.verifyIdToken(idToken);
    console.log('decodedToken:', decodedToken);

    if (req && decodedToken) {
        res.locals.decodedToken = decodedToken;
    }
    
    next(); 
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).send('Unauthorized: Invalid token');
  }
};
export default validateFirebaseIdToken;