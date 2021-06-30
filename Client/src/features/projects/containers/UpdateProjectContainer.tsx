import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { AppState } from 'src/app-state';
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent';
import { ResponseGetOneProjectModel } from '../models/response/responseGetOneProject.model';
import { getOneProjectDataAction, updateProjectDataAction } from '../store/actions';

export interface UpdateProjectsContainerProps {

}

export function UpdateProjectContainer({ }: UpdateProjectsContainerProps) {
   const dispatch = useDispatch();
   const getOneProject: ResponseGetOneProjectModel | undefined = useSelector((state: AppState) => state.projectState.project);
   const { id } = useParams<{ id: string }>();

   useEffect(() => {
      dispatch(getOneProjectDataAction({ id: id }))
   },
      [dispatch, id]
   )

   const handleUpdateProjectSubmit = useCallback(
      (value: any) => {
         dispatch(updateProjectDataAction({ payload: value }))
         console.log('value!!!', value);

      },
      [dispatch],
   )

   return (
      <>
         <span>this is update{id} </span>

         {getOneProject ? <CreateAndUpdateProjectComponent value={getOneProject} onSubmit={handleUpdateProjectSubmit} /> :      //value={getOneProject} onSubmit={(value) => { console.log(value) }}
            null}
      </>
   )
}


