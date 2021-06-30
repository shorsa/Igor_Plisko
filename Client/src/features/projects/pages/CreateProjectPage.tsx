import React from 'react'
import { MainLayout } from '../../../layout/MainLayout'
import { CreateProjectContainer } from '../containers/CreateProjectContainer'



interface CreateProjectsProps { }

export function CreateProjectPage({ }: CreateProjectsProps) {
   return (
      <>
         < MainLayout>
            < CreateProjectContainer />
         </MainLayout>

      </>
   )
}


