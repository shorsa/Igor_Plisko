import React from 'react'
import { MainLayout } from '../../../layout/MainLayout'
import { UpdateProjectContainer } from '../containers/UpdateProjectContainer'



interface UpdateProjectsProps { }

export function UpdateProjectPage({ }: UpdateProjectsProps) {
   return (
      <>
         < MainLayout>
            <UpdateProjectContainer />
         </MainLayout>

      </>
   )
}


