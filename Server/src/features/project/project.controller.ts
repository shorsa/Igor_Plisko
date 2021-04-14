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

export function updateProject(req: Request, res: Response) {

   projectService.updateServiceProject(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}


export function searchProjectHandler(req: Request, res: Response) {

   projectService.searchServiceProject(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}

export function searchFeatureHandler(req: Request, res: Response) {

   projectService.searchFeatureServiceProject(req.query.search as string)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => res.send(err));
}

