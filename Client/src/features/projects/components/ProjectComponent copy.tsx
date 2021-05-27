import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Tag, Typography } from 'antd';
import React, { useCallback } from 'react';
import { ResponseSearchProjectsItemModel, ResponseSearchProjectsModel } from '../models';


export interface ProjectComponentProps {
   projectsData?: ResponseSearchProjectsModel,
   onPaginate: () => void;
}


export function ProjectComponent({ projectsData, onPaginate }: ProjectComponentProps) {
   const pageSizeOptions: string[] = ['5', '10'];

   const columns = [
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
         sorter: true,
      },
      {
         title: 'Description',
         dataIndex: 'description',
         key: 'description',
         sorter: true,
         width: '30%',
         render: (text: string) => <Typography.Text copyable>{text}</Typography.Text>
      },
      {
         title: 'Creation Date',
         dataIndex: 'creationDate',
         key: 'creationDate',
         sorter: true,
         render: (_value: number, row: ResponseSearchProjectsItemModel) => <span key={row._id}>{row.creationDate.toLocaleString()
         }</span>,

      },
      {
         title: ' Edit Date',
         dataIndex: 'editDate',
         key: 'editDate',
         sorter: true,

      },
      {
         title: 'Is open',
         dataIndex: 'isOpen',
         key: 'isOpen',
         sorter: true,
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
         render: (_value: number, row: ResponseSearchProjectsItemModel) => <span key={row._id}>{row.estimateMin} - {row.estimateMax}</span>
      },
      {
         title: 'Actions',
         dataIndex: 'actions',
         key: 'action',
         render: (_value: undefined, row: ResponseSearchProjectsItemModel) => {
            return (
               <>
                  <DeleteOutlined style={{ fontSize: '16px', color: 'red', paddingRight: '4px' }} onClick={() => handleDelete(row._id)} />
                  <EditOutlined id={row._id} style={{ fontSize: '16px', color: '#08c' }} onClick={() => handleEdit(row._id)} />
               </>
            )
         }
      }
   ];

   const handleDelete = (deleteProject: string) => {
      return deleteProject
   }

   const handleEdit = (editProject: string) => {
      console.log(editProject);
      return editProject
   }

   onchange = useCallback(
      (pagination: any, filters: any, sorter: any) => {
      },
      [],
   )

   return (
      <div>
         <Table
            rowKey={obj => obj._id}
            dataSource={projectsData?.items}
            columns={columns}
            pagination={{
               pageSize: Number(pageSizeOptions[0]),
               total: projectsData?.total,
               showSizeChanger: true,
               pageSizeOptions: pageSizeOptions,
               showQuickJumper: true,

            }}
            onChange={(pagination: any, filters: any, sorter: any) => {
               console.log("pagination", pagination);
               console.log("filters", filters);
               console.log("sorter", sorter);
               onPaginate(onchange)
            }}
         />
      </div>
   )
}

//? isOpen - I should add color