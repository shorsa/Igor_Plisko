import React from 'react'
import { MainLayout } from '../../../layout/MainLayout'
import { ProjectsContainer as ProjectsContainer } from '../containers/ProjectsContainer'


interface ProjectsProps { }

export function ProjectsPage({ }: ProjectsProps) {
   return (
      <div>
         < MainLayout>
            <ProjectsContainer />
         </MainLayout>

      </div>
   )
}


