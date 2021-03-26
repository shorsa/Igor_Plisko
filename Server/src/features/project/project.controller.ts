import { Request, Response } from "express";
import * as projectService from "./project.service";


export function projectHandler(req: Request, res: Response) {
   projectService.create(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}
