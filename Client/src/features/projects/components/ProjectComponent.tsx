import { Table } from 'antd';
import React from 'react'
import { ResponseSearchProjectsItemModel } from '../models';

export function ProjectComponent() {
   const dataSource: ResponseSearchProjectsItemModel[] = [
      {
         _id: "1",
         ownerId: "1",
         title: 'Name',
         description: 'This is a great project! I really like it',
         creationDate: new Date(),
         editDate: new Date(),
         isOpen: true,
         estimateMin: 8,
         estimateMax: 30,
      },
      // {
      //    key: '2',
      //    name: 'John',
      //    age: 42,
      //    address: '10 Downing Street',
      // },
   ];

   const columns = [
      {
         title: 'Title',
         dataIndex: 'title',
         key: 'title',
         render: (_w: any, row: ResponseSearchProjectsItemModel) => <span>{row.isOpen}</span>
      },
      {
         title: ' Description',
         dataIndex: 'description',
         key: '   description',
      },
      {
         title: 'Creation Date',
         dataIndex: 'creationDate',
         key: 'creationDate',
         render: (_w: any, row: ResponseSearchProjectsItemModel) => <span>{row.creationDate.toISOString()
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
      },
      {
         title: 'Estimate Min-Max ',
         dataIndex: 'estimateMin',
         key: 'estimateMin',
         render: (_r: any, row: ResponseSearchProjectsItemModel) => <span>{row.estimateMin} - {row.estimateMax}</span>
      },

   ];

   return (
      <Table dataSource={dataSource} columns={columns} />
   )
}