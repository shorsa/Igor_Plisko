import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import { verifyTokenMiddleware } from "../shared/middleware/authTokenMiddleware";
import { loginHandler, registerHandler } from "./auth.controller";

export const authRouter: Router = Router();

authRouter.post(ApiEndpointsConstants.AUTH_REGISTER, registerHandler);
authRouter.post(ApiEndpointsConstants.AUTH_LOGIN, verifyTokenMiddleware, loginHandler);
// authRouter.post(ApiEndpointsConstants.AUTH_LOGIN, loginHandler);

