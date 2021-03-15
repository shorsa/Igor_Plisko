import { Router } from "express";
import { loginHandler } from "./auth.controller";

export const authRouter: Router = Router();

 authRouter.get('/login',loginHandler)

