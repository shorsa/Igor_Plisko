
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app-state';
import { ProjectComponent } from '../components/ProjectComponent';
import { RequestSearchProjectModel } from '../models';
import { getAllProjectsDataAction } from '../store/actions';




export function ProjectContainer() {
   const dispatch = useDispatch();
   useEffect(() => {
      const model: RequestSearchProjectModel = {
         page: 1,
         pageSize: 10,
         searchText: ""
      };
      dispatch(getAllProjectsDataAction({ payload: model }))
   },
      []
   )

   const projectsData = useSelector((state: AppState) => state.projectState.projects)



   return (
      <ProjectComponent projectsData={projectsData} />
   )
}

