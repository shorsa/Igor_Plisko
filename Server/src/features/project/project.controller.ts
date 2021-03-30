import { Request, Response } from "express";
import * as projectService from "./project.service";


export function projectHandler(req: Request, res: Response) {
   projectService.create(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}


export function deleteProject(req: Request, res: Response) {

   projectService.deleteServiceProject(req.query.id as string)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}



export function getProject(req: Request, res: Response) {

   projectService.getServiceProject(req.query.id as string)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}


