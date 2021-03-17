import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import { registerHandler } from "./auth.controller";

export const authRouter: Router = Router();

authRouter.post(ApiEndpointsConstants.AUTH_REGISTER, registerHandler)
authRouter.get('',) //?получение юзеров
authRouter.get('/user/:id')  //?хочу получить по id
authRouter.put('')      //?>для обновления создоного поста 
authRouter.delete('user/:id')     //? удаляем по айдишнику                        //!ApiEndpointsConstants