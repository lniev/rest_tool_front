import React, { useState } from 'react';
import { Avatar, Descriptions, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import { level1Menu, level2Menu } from './menu';
import { useLocation, NavLink } from 'react-router-dom';
import Router from '../router/router';

export default (props) => {
  const location = useLocation();
  return (
    <ProLayout
      location={{
        pathname: location.pathname,
      }}
      style={{ height: '100vh' }}
      collapsedButtonRender={false}
      collapsed
      route={{
        routes: level1Menu,
      }}
      headerRender={false}
      menuItemRender={(item, dom) => <NavLink to={item.path} onClick={() => {
          window.history.pushState(null, '', item.path)
      }
      }>{dom}</NavLink>}
      disableContentMargin
    >
      {/*<ProLayout*/}
      {/*  location={{*/}
      {/*    pathname: location.pathname,*/}
      {/*  }}*/}
      {/*  route={{*/}
      {/*    routes: level2Menu,*/}
      {/*  }}*/}
      {/*  navTheme="light"*/}
      {/*  style={{*/}
      {/*    height: '400px',*/}
      {/*  }}*/}
      {/*  rightContentRender={() => (*/}
      {/*    <div>*/}
      {/*      <Avatar shape="square" size="small" icon={<UserOutlined />} />*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*  menuHeaderRender={false}*/}
      {/*>*/}
      <PageContainer>
        <Router />
      </PageContainer>
      {/*</ProLayout>*/}
    </ProLayout>
    // <div style={{display: 'flex'}}>
    //   <Menu defaultSelectedKeys={[level1Menu[0].path]} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={true}>
    //     {level1Menu.map((el) => (
    //       <Menu.Item key={el.path} icon={el.icon}>
    //         {el.name}
    //       </Menu.Item>
    //     ))}
    //   </Menu>
    //     <div>
    //         <Router />
    //     </div>
    // </div>
  );
};
