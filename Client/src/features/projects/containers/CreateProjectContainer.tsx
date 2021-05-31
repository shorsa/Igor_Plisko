import React from 'react'
import { CreateProjectComponent } from '../components/CreateProjectComponent'

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



   return (
      <>
         <CreateProjectComponent value={initialValues} onSubmit={(value) => { console.log(value) }} />

      </>
   )
}

//   <CreateProjectComponent  value={initialValues} onChange={(value) => { console.log(value) }}  />