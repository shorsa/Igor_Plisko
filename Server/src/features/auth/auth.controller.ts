import { login } from "./auth.service";
import { Request, Response } from "express";

export function loginHandler(req: Request, res: Response) {
   login(req.body)
       .then((result) => {
           res.send(result)
       })
       .catch((err) => res.send(err));
}