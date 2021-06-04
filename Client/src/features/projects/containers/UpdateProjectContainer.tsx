import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { AppState } from 'src/app-state';
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent';
import { ResponseGetOneProjectModel } from '../models/response/responseGetOneProject.model';
import { getOneProjectDataAction } from '../store/actions';




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




   return (
      <>
         <span>this is update{id} </span>

         {getOneProject ? <CreateAndUpdateProjectComponent value={getOneProject} onSubmit={(value) => { console.log(value) }} /> :
            null}

         {/* <CreateAndUpdateProjectComponent value={initialValues} onSubmit={(getOneProject) => { console.log("!!!!!!!!!!!", getOneProject) }} /> */}

      </>
   )
}


