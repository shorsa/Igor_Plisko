import { register } from "./auth.service";
import { Request, Response } from "express";

export function registerHandler(req: Request, res: Response) {
   register(req.body)
       .then((result) => {
           res.send(result)
       })
       .catch((err) => res.send(err));
}