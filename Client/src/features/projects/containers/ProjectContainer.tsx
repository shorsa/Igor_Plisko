
import { Row, Col } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app-state';
import { ProjectComponent } from '../components/ProjectComponent';
import { RequestSearchProjectModel } from '../models';
import { getAllProjectsDataAction } from '../store/actions';




export function ProjectContainer() {
   const dispatch = useDispatch();
   useEffect(() => {
      const model: RequestSearchProjectModel = {
         page: 1,
         pageSize: 2,
         searchText: ""
      };
      dispatch(getAllProjectsDataAction({ payload: model }))
   },
      []
   )

   const projectsData = useSelector((state: AppState) => state.projectState.projects)



   return (
      <>
         <Row>
            <Col xs={24} md={{ span: 14, offset: 6 }} >
               <ProjectComponent projectsData={projectsData} />
            </Col>
         </Row>
      </>
   )
}

