//Vendors
import { Request, Response } from "express";
//Services
import * as  exampleService from "./example.service";

export function exampleHandler(req: Request, res: Response) {
    exampleService.exampleCreate(req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => res.send(err));
}