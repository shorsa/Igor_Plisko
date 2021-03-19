import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import { deleteUser, registerHandler } from "./auth.controller";

export const authRouter: Router = Router();

authRouter.post(ApiEndpointsConstants.AUTH_REGISTER, registerHandler)
authRouter.delete(ApiEndpointsConstants.DELETE_USER, deleteUser)

authRouter.get('/user/:id')  //?хочу получить по id
// authRouter.put('')      //?>для обновления создоного поста
