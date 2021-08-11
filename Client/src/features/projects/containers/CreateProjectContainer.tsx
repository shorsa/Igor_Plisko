import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { getUserId } from '../../../shared/helpers/Token.helper';
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent'

import { RequestCreateProjectModel } from '../models'
import { createProjectDataAction } from '../store/actions';


const initialValues: RequestCreateProjectModel = {
   title: '',
   description: '',
   isOpen: true,
   estimateMin: 0,
   estimateMax: 0,
   features: [
      {
         level: '1',
         title: '',
         description: '',
         isRequired: true,
         estimateMin: 0,
         estimateMax: 0,
      }
   ]
}


export interface CreateProjectContainerProps { }

export function CreateProjectContainer({ }: CreateProjectContainerProps) {
   const dispatch = useDispatch();

   const handleCreateProjectSubmit = useCallback(
      (value: RequestCreateProjectModel) => {
         const userId: string = getUserId() as string;

         const model: RequestCreateProjectModel = {
            ...value,
            ownerId: userId
         }
         dispatch(createProjectDataAction({ payload: model }))
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