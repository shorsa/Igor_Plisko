import React from 'react'
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent'

import { RequestCreateProjectModel } from '../models'


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

   // const valueProject = (getOneProject === undefined) ?    :

   return (
      <>
         <CreateAndUpdateProjectComponent value={initialValues} onSubmit={(value) => { console.log(value) }} />

      </>
   )
}

//   <CreateProjectComponent  value={initialValues} onChange={(value) => { console.log(value) }}  />