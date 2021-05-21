import React from 'react'
import { MainLayout } from '../../../layout/MainLayout'
import { ProjectContainer } from '../containers/ProjectContainer'


interface ProjectProps { }

export function ProjectPage({ }: ProjectProps) {
   return (
      <div>
         < MainLayout>
            <ProjectContainer />
         </MainLayout>

      </div>
   )
}


