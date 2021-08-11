import {
   FundProjectionScreenOutlined,
   ScheduleOutlined

} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useCallback, useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export interface MainLayoutProps {
   children: React.ReactChild | React.ReactChild[]
}


export function MainLayout({ children }: MainLayoutProps) {
   const [state, setState] = useState<boolean>(false)

   const onCollapse = useCallback(
      (value: boolean) => {
         setState(value)
      },
      [],
   )

   return (
      <div>
         <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={state} onCollapse={onCollapse}>

               <div className="logo" />
               <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="2" icon={<ScheduleOutlined />}>
                     Statistics
                  </Menu.Item>
                  <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Projects">
                     <Menu.Item key="3">Create new project</Menu.Item>
                     <Menu.Item key="4">View all projects </Menu.Item>
                  </SubMenu>
               </Menu>
            </Sider>
            <Layout className="site-layout">
               <Header className="site-layout-background" style={{ padding: 0 }} />
               <Content style={{ margin: '0 16px' }}>
                  {children}
               </Content>
               <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 </Footer>
            </Layout>
         </Layout>
      </div>
   )
}

 //!  DOIT  зделать ссылки history или link или navLinck
//  <Menu.Item key="3">Create new project</Menu.Item>             
//  <Menu.Item key="4">View all projects </Menu.Item>