import React from "react";
import { Route } from "react-router";
import { CREATE_PAGE_URL, PROJECT_PAGE_URL } from "./projects.urls";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CreateProjectPage } from "./pages/CreateProjectPage";


export const ProjectsRoutes = [
   <Route key="project" path={PROJECT_PAGE_URL.urlTemplate} component={ProjectsPage} />,
   <Route key="project" path={CREATE_PAGE_URL.urlTemplate} component={CreateProjectPage} />

]

{/* <Route key="project" path={CREATE_PAGE_URL.urlTemplate} component={ProjectPage} />, */ }
