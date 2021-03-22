import * as authService from "./auth.service";
import { Request, Response } from "express";

export function registerHandler(req: Request, res: Response) {
    authService.register(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => res.send(err));
}


export function loginHandler(req: Request, res: Response) {
    authService.login(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => res.send(err));
}
