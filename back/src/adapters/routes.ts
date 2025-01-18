import { Router, Request, Response, NextFunction, Errback } from "express";
import LoginUseCase from "../aplication/use-cases/auth/LoginUseCase.js";
import validateFirebaseIdToken from "./middleware/verifyToken.js";


export const router = Router();



const asyncHandler = (controller:any) => (req:Request, res:Response, next:NextFunction) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  }


router.get("/", asyncHandler((req: Request, res: Response) => 
    res.send("QuickCMS Back-end is running;")
));

router.get("/auth/login", validateFirebaseIdToken, asyncHandler((req: Request, res: Response, next: NextFunction) => {
   const headers = req.headers;

   res.send("Login;");
}));

router.post("/auth/register", asyncHandler((req: Request, res: Response) => 
    res.send("Register;")
));

router.post("/auth/logout", asyncHandler((req: Request, res: Response) => 
    res.send("Logout;")
));


