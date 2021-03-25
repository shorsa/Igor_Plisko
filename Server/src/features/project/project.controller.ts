import { Request, Response } from "express";
import * as authService from "./project.service";



export function projectHandler(req: Request, res: Response) {
    authService.login(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => res.send(err));
}
