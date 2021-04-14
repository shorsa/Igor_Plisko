import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import * as authController from "./auth.controller";

export const authRouter: Router = Router();


authRouter.post(ApiEndpointsConstants.AUTH_REGISTER, authController.registerHandler);
authRouter.post(ApiEndpointsConstants.AUTH_LOGIN, authController.loginHandler);


