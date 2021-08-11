import { Router } from "express";
import { ApiEndpointsConstants } from "../../config/api-endpoints.constants";
import * as projectControllers from "./project.controller";

export const projectRouter: Router = Router();


projectRouter.post(ApiEndpointsConstants.PROJECT_CREATE, projectControllers.projectHandler)
projectRouter.delete(ApiEndpointsConstants.PROJECT_DELETE, projectControllers.deleteProject);
projectRouter.get(ApiEndpointsConstants.PROJECT_TO_RECEIVE, projectControllers.getProject);
projectRouter.put(ApiEndpointsConstants.PROJECT_UPDATE, projectControllers.updateProject,);
projectRouter.post(ApiEndpointsConstants.PROJECT_SEARCH, projectControllers.searchProjectHandler);
projectRouter.get(ApiEndpointsConstants.PROJECT_SEARCH_FEATURE, projectControllers.searchFeatureHandler)




