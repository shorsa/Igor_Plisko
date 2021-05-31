import React from 'react'
import { MainLayout } from '../../../layout/MainLayout'
import { CreateProjectContainer } from '../containers/CreateProjectContainer'



interface ProjectsProps { }

export function CreateProjectPage({ }: ProjectsProps) {
   return (
      <>
         < MainLayout>
            < CreateProjectContainer />
         </MainLayout>

      </>
   )
}


