import React from "react";
import { CREATE_PAGE_URL, PROJECT_PAGE_URL, UPDATE_PAGE_URL } from "./projects.urls";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CreateProjectPage } from "./pages/CreateProjectPage";
import { UpdateProjectPage } from "./pages/UpdateProjectPage";
import { AuthRouteGuard } from "../../shared/helpers/AuthRouteGuard.helper";


export const ProjectsRoutes = [
   <AuthRouteGuard key="project" path={PROJECT_PAGE_URL.urlTemplate} component={ProjectsPage} />,
   <AuthRouteGuard key="create" path={CREATE_PAGE_URL.urlTemplate} component={CreateProjectPage} />,
   <AuthRouteGuard key="update" path={UPDATE_PAGE_URL.urlTemplate} component={UpdateProjectPage} />
]

{/* <Route key="project" path={CREATE_PAGE_URL.urlTemplate} component={ProjectPage} />, */ }
