import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import { projectHandler } from "./project.controller";

export const projectRouter: Router = Router();


projectRouter.post(ApiEndpointsConstants.PROJECT_CREATE, projectHandler)

