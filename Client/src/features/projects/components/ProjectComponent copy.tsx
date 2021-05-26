//? import {  } from '@ant-design/icons';
import { Table, Tag, Typography } from 'antd';
import React from 'react';
// import { useDispatch } from 'react-redux';
import { ResponseSearchProjectsItemModel, ResponseSearchProjectsModel } from '../models';
// import { usePagination } from './HookPagination';


export interface ProjectComponentProps {
   projectsData?: ResponseSearchProjectsModel,
   rows: any
}








export function ProjectComponent({ projectsData, rows = 10 }: ProjectComponentProps) {

   console.log('!!!!!!!!!!!!!!!!!!!!!', projectsData)
   // const dispatch = useDispatch();

   // const isFetching = useIsFetchingPublisher();
   // const [

   //    currentPage,
   //    setCurrentPage,
   //    pageSize
   // ] = usePagination(publishers);

   // useEffect(() => {
   //    dispatch(getAllPublishersAsync());
   // }, []);



   const columns = [
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
         render: (_w: any, row: ResponseSearchProjectsItemModel,) => <span key={row._id}>{row.isOpen}</span>
      },
      {
         title: 'Description',
         dataIndex: 'description',
         key: 'description',
         width: '30%',
         render: (text: any) => <Typography.Text copyable>{text}</Typography.Text>
      },
      {
         title: 'Creation Date',
         dataIndex: 'creationDate',
         key: 'creationDate',
         render: (_w: any, row: ResponseSearchProjectsItemModel) => <span key={row._id}>{row.creationDate.toLocaleString()
         }</span>,
         sorter: (a: any, b: any) => a.fleeRate - b.fleeRate,
      },
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
         window: '10%',
      },
      {
         title: ' Edit Date',
         dataIndex: 'editDate',
         key: 'editDate',
         sorter: (a: any, b: any) => a.fleeRate - b.fleeRate,
      },
      {
         title: 'Is open',
         dataIndex: 'isOpen',
         key: 'isOpen',
         render: (isOpen: boolean, row: any) => (
            <>
               {isOpen ?
                  <Tag key={row._id}>
                     Open
                </Tag> : <Tag key={row._id}>
                     Close
                </Tag>
               }
            </>
         ),
      },
      {
         title: 'Estimate Min-Max ',
         dataIndex: 'estimateMin',
         key: 'estimateMin',
         render: (_r: any, row: ResponseSearchProjectsItemModel) => <span key={row._id}>{row.estimateMin} - {row.estimateMax}</span>
      },

   ];

   return (

      // <>
      //    <PageHeader
      //       title="Publisher"
      //       subTitle="Manage all publishers"
      //       extra={[
      //          <Pagination

      //             key={"pagination"}
      //             current={currentPage}
      //             onChange={setCurrentPage}
      //             pageSize={pageSize}
      //             total={publishers.length}
      //             size="small"
      //          />
      //       ]}
      //    />

      //    <Table
      //       dataSource={projectsData?.items}
      //       columns={columns}
      //       rowKey="id"
      //       size="small"
      //       bordered
      //       pagination={false}
      //       tableLayout="fixed"
      //       loading={isFetching}
      //    />

      <>

         <Table
            rowKey={obj => obj._id}
            dataSource={projectsData}
            columns={columns}
            pagination={{
               pageSize: rows,
               total: projectsData?.total,
               // defaultPageSize: 3,
               showSizeChanger: true,
               pageSizeOptions: ["5", "10", "15", "20"],
               showQuickJumper: true,

            }}
            onChange={(pagination: any, filters: any, sorter: any) => {
               console.log("pagination", pagination);
               console.log("filters", filters);
               console.log("sorter", sorter);
            }}
         />

      </>
   )
}


