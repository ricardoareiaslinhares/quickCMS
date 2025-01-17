import { Router, Request, Response, NextFunction, Errback } from "express";
import LoginUseCase from "../aplication/use-cases/auth/LoginUseCase.js";

export const router = Router();



const asyncHandler = (controller:any) => (req:Request, res:Response, next:NextFunction) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  }


router.get("/", asyncHandler((req: Request, res: Response) => 
    res.send("QuickCMS Back-end is running;")
));

router.post("/auth/login", asyncHandler((req: Request, res: Response) => {
    const { email, password } = req.body;
    LoginUseCase(email, password);
}
));

router.post("/auth/register", asyncHandler((req: Request, res: Response) => 
    res.send("Register;")
));

router.post("/auth/logout", asyncHandler((req: Request, res: Response) => 
    res.send("Logout;")
));


