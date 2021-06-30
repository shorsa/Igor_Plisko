import { Request, Response } from "express";
import { errorHandler } from "../shared/helper/appError.helper";
import * as authService from "./auth.service";

export function registerHandler(req: Request, res: Response) {
    authService.register(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            errorHandler(err, res)
        });
}

export function loginHandler(req: Request, res: Response) {
    authService.login(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            errorHandler(err, res)
        });


}


