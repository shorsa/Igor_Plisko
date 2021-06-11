import { Request, Response } from "express";
import { errorHandler } from "../shared/helper/appError.helper";
import * as projectService from "./project.service";

export function projectHandler(req: Request, res: Response) {
   projectService.createProject(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => {
         errorHandler(err, res)
      });
}

export function deleteProject(req: Request, res: Response) {
   projectService.deleteProject(req.query.id as string)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => {
         errorHandler(err, res)
      });
}

export function getProject(req: Request, res: Response) {
   projectService.getProject(req.query.id as string)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => {
         errorHandler(err, res)
      });
}

export function updateProject(req: Request, res: Response) {
   projectService.updateProject(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => {
         errorHandler(err, res)
      });

}


export function searchProjectHandler(req: Request, res: Response) {
   projectService.searchProject(req.body)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => {
         errorHandler(err, res)
      });
}

export function searchFeatureHandler(req: Request, res: Response) {
   projectService.searchFeatureProject(req.query.search as string)
      .then((result) => {
         res.send(result)
      })
      .catch((err) => {
         errorHandler(err, res)
      });
}

