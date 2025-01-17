import {signInWithEmailAndPassword, onAuthStateChanged, UserCredential, User } from "firebase/auth";
import { auth } from "../../../app.js";

const LoginUseCase = async (email: string, password: string): Promise<User | undefined> => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log(result);
        return result.user
    } catch (error) {
        console.log(error);
    }
}

export default LoginUseCase;
/*
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  */



