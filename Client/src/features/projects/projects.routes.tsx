import React from "react";
import { Route } from "react-router";
import { PROJECT_PAGE_URL } from "./projects.urls";
import { ProjectsPage } from "./pages/ProjectsPage";


export const ProjectsRoutes = [
   <Route key="project" path={PROJECT_PAGE_URL.urlTemplate} component={ProjectsPage} />,

]

{/* <Route key="project" path={CREATE_PAGE_URL.urlTemplate} component={ProjectPage} />, */ }
