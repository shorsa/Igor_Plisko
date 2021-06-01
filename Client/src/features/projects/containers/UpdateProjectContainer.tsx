import React from 'react'
// import { useDispatch } from 'react-redux';
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent'
import { RequestUpdateProjectModel } from '../models'



const initialValues: RequestUpdateProjectModel = {
   _id: '',
   title: '',
   description: '',
   isOpen: true,
   estimateMin: 0,
   estimateMax: 0,
   features: []
}


export function UpdateProjectContainer() {
   // const dispatch = useDispatch();


   return (
      <>
         <span>this is update </span>
         <CreateAndUpdateProjectComponent value={initialValues} onSubmit={(value) => { console.log(value) }} />

      </>
   )
}


