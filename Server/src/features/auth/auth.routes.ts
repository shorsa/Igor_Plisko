import { Router } from "express";
import { registerHandler } from "./auth.controller";

export const authRouter: Router = Router();

 authRouter.get('/register',registerHandler)

