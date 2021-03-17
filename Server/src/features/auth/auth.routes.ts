import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import { registerHandler } from "./auth.controller";

export const authRouter: Router = Router();

authRouter.post(ApiEndpointsConstants.AUTH_REGISTER, registerHandler)
authRouter.delete('',)
authRouter.get('',)
authRouter.post('',)
                                 //!ApiEndpointsConstants