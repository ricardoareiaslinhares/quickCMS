import { Router, Request, Response, NextFunction, Errback } from "express";
import LoginUseCase from "../aplication/use-cases/auth/LoginUseCase.js";

export const router = Router();



const asyncHandler = (controller:any) => (req:Request, res:Response, next:NextFunction) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  }


router.get("/", asyncHandler((req: Request, res: Response) => 
    res.send("QuickCMS Back-end is running;")
));

router.get("/auth/login", asyncHandler((req: Request, res: Response) => {
   const headers = req.headers;
   console.log(headers.authorization);
   res.send("Login;");
   
}
));

router.post("/auth/register", asyncHandler((req: Request, res: Response) => 
    res.send("Register;")
));

router.post("/auth/logout", asyncHandler((req: Request, res: Response) => 
    res.send("Logout;")
));


