//? import {  } from '@ant-design/icons';
import { Table, Tag, Typography } from 'antd';
import React from 'react';
import { ResponseSearchProjectsItemModel, ResponseSearchProjectsModel } from '../models';


export interface ProjectComponentProps {
   projectsData?: ResponseSearchProjectsModel
}


export function ProjectComponent({ projectsData }: ProjectComponentProps) {
   console.log(projectsData)

   const columns = [
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
         render: (_w: any, row: ResponseSearchProjectsItemModel) => <span>{row.isOpen}</span>
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
         render: (_w: any, row: ResponseSearchProjectsItemModel) => <span>{row.creationDate.toLocaleString()
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
         render: (_r: any, row: ResponseSearchProjectsItemModel) => <span>{row.estimateMin} - {row.estimateMax}</span>
      },

   ];

   return (
      <div>
         <Table dataSource={projectsData?.items} columns={columns} pagination={{ pageSizeOptions: ["2", "4", "6", "8", "10"], total: projectsData?.total, pageSize: 2, showSizeChanger: true }}
            onChange={(pagination: any, filters: any, sorter: any) => {
               console.log("pagination", pagination);
               console.log("filters", filters);
               console.log("sorter", sorter);

            }} />

      </div>
   )
}