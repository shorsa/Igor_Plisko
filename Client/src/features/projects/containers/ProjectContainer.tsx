
import { Row, Col, Slider, Typography } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
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
         pageSize: 7,
         searchText: ""
      };
      dispatch(getAllProjectsDataAction({ payload: model }))
   },
      [dispatch]
   )

   const onPaginate = useCallback(
      (pagination: any, _filters: any, _sorter: any) => {
         const model: RequestSearchProjectModel = {
            page: pagination.current,
            pageSize: pagination.pageSize,
            searchText: ""
         };
         dispatch(getAllProjectsDataAction({ payload: model }))

      },
      [dispatch],
   )

   const projectsData = useSelector((state: AppState) => state.projectState.projects)
   const [rows, setRows] = useState(10)

   return (
      <>
         <Row>
            <Col xs={24} md={{ span: 14, offset: 6 }} >
               <Typography.Title level={4}>Number of items per page!</Typography.Title>
               <Slider min={1} max={20} defaultValue={rows} onChange={setRows} />
               {/* <ProjectComponent projectsData={projectsData} /> */}
               <ProjectComponent projectsData={projectsData} onPaginate={onPaginate} />
            </Col>
         </Row>
      </>
   )
}

// <ProjectComponent projectsData={projectsData} onPaginate={onPaginate} />   