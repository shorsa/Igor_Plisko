import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import { loginHandler, registerHandler } from "./auth.controller";

export const authRouter: Router = Router();

authRouter.post(ApiEndpointsConstants.AUTH_REGISTER, registerHandler);
authRouter.post(ApiEndpointsConstants.AUTH_LOGIN, loginHandler);
