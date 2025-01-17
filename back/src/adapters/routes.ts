import { Router, Request, Response, NextFunction, Errback } from "express";

export const router = Router();



const asyncHandler = (controller:any) => (req:Request, res:Response, next:NextFunction) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  }


router.get("/", asyncHandler((req: Request, res: Response) => 
    res.send("QuickCMS Back-end is running;")
));



router.post("/companies/:company_id/categories", asyncHandler((req: Request, res: Response) => 
    //categoryControllers.createCategory(req, res)
    res.send("h")
));