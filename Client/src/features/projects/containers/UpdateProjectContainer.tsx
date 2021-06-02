import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { CreateAndUpdateProjectComponent } from '../components/CreateAndUpdateProjectComponent'
import { RequestUpdateProjectModel } from '../models'
// import { getOneProjectDataAction } from '../store/actions';
// import { useDispatch } from 'react-redux';



const initialValues: RequestUpdateProjectModel = {
   _id: '',
   title: '',
   description: '',
   isOpen: true,
   estimateMin: 0,
   estimateMax: 0,
   features: []
}

export interface UpdateProjectsComponentProps {
}


export function UpdateProjectContainer({ }: UpdateProjectsComponentProps) {
   // const dispatch = useDispatch();

   const { id } = useParams<{ id: string }>();

   useEffect(() => {

      console.log('innit Useeffect')
      // dispatch(getOneProjectDataAction())
   },
      []
   )




   return (
      <>
         <span>this is update{id} </span>

         {/* <CreateAndUpdateProjectComponent value={initialValues} onSubmit={(value) => { console.log(value) }} /> */}
         <CreateAndUpdateProjectComponent value={initialValues} onSubmit={(value) => { console.log(value) }} />

      </>
   )
}


