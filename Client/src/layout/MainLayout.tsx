import {
   DesktopOutlined,
   UserOutlined
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
                  <Menu.Item key="2" icon={<DesktopOutlined />}>
                     Option
            </Menu.Item>
                  <SubMenu key="sub1" icon={<UserOutlined />} title="Projects">
                     <Menu.Item key="3">Tom</Menu.Item>
                     <Menu.Item key="4">Bill</Menu.Item>
                     <Menu.Item key="5">Alex</Menu.Item>
                  </SubMenu>


               </Menu>
            </Sider>
            <Layout className="site-layout">
               <Header className="site-layout-background" style={{ padding: 0 }} />
               <Content style={{ margin: '0 16px' }}>
                  {children}
               </Content>
               <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
         </Layout>
      </div>
   )
}

