import { Table, Tag } from 'antd';
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
      },
      {
         title: 'Creation Date',
         dataIndex: 'creationDate',
         key: 'creationDate',
         render: (_w: any, row: ResponseSearchProjectsItemModel) => <span>{row.creationDate.toLocaleString()
         }</span>
      },
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
      },
      {
         title: ' Edit Date',
         dataIndex: 'editDate',
         key: 'editDate',
      },
      {
         title: 'Is open',
         dataIndex: 'isOpen',
         key: 'isOpen',
         render: (isOpen: boolean, row: any) => (
            <>
               {isOpen ?
                  <Tag key={row._id}>    //!задать цвет 
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
      <Table dataSource={projectsData?.items} columns={columns} />
   )
}