import React from "react";
import { Route } from "react-router";
import { PROJECT_PAGE_URL } from "./project.urls";
import { ProjectPage } from "./pages/ProjectPage";


export const ProjectRoutes = [
   <Route key="project" path={PROJECT_PAGE_URL.urlTemplate} component={ProjectPage} />,

]

{/* <Route key="project" path={CREATE_PAGE_URL.urlTemplate} component={ProjectPage} />, */ }




