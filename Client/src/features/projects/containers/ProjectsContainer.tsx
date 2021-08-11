
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app-state';
import { ProjectsComponent } from '../components/ProjectsComponent';
import { RequestSearchProjectModel } from '../models';
import { deleteProjectDataAction, getAllProjectsDataAction } from '../store/actions';




export function ProjectsContainer() {
   const projectsData = useSelector((state: AppState) => state.projectState.projects)   //?

   const dispatch = useDispatch();
   useEffect(() => {
      const model: RequestSearchProjectModel = {
         page: 1,
         pageSize: 7,
         searchText: ""
      };
      dispatch(getAllProjectsDataAction({ payload: model }))
   },
      [dispatch]
   )

   const onPaginate = useCallback(
      (pagination: any, _filters: any, _sorter: any) => {
         const model: RequestSearchProjectModel = {
            page: pagination.current,
            pageSize: pagination.pageSize,
            searchText: ""
         };
         dispatch(getAllProjectsDataAction({ payload: model }))

      },
      [dispatch],
   )

   const deleteProject = useCallback(
      (id: string) => {
         debugger
         dispatch(deleteProjectDataAction({ id: id }))
         console.log(id, 'what id dispatch');
      },
      [dispatch],
   )


   //!id

   return (
      <>
         <ProjectsComponent projectsData={projectsData} onPaginate={onPaginate} deleteProject={deleteProject} />
      </>
   )
}

