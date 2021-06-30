import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent'

import { RequestCreateProjectModel } from '../models'
import { createProjectDataAction } from '../store/actions';


const initialValues: RequestCreateProjectModel = {
   title: '',
   description: '',
   isOpen: true,
   estimateMin: 0,
   estimateMax: 0,
   features: []
}


export interface CreateProjectContainerProps { }

export function CreateProjectContainer({ }: CreateProjectContainerProps) {
   const dispatch = useDispatch();

   const handleCreateProjectSubmit = useCallback(
      (value: any) => {
         dispatch(createProjectDataAction({ payload: value }))
      },
      [dispatch],
   )

   return (
      <>
         <CreateAndUpdateProjectComponent value={initialValues} onSubmit={handleCreateProjectSubmit} />

      </>
   )
}

//   <CreateProjectComponent  value={initialValues} onChange={(value) => { console.log(value) }}  />