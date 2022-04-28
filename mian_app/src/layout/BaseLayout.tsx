import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import { level1Menu, level2Menu } from './menu';
import { useLocation, NavLink } from 'react-router-dom';
import Router from '../router/router';
import ShortcutToolsContainer from '../container/ShortcutTools/ShortcutTools';
import FloatModalStackComponent from '../components/FloatModalStack/FloatModalStack';
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
      menuItemRender={(item, dom) => (
        <NavLink
          to={item.path}
          onClick={() => {
            window.history.pushState(null, '', item.path);
          }}
        >
          {dom}
        </NavLink>
      )}
      disableContentMargin
      menuFooterRender={() => (
        <ShortcutToolsContainer>
          <div style={{ color: '#fff', width: '48px', height: '40px', fontSize: '18px', textAlign: 'center' }}>
            <AppstoreOutlined />
          </div>
        </ShortcutToolsContainer>
      )}
    >
      {/* <ProLayout */}
      {/*  location={{ */}
      {/*    pathname: location.pathname, */}
      {/*  }} */}
      {/*  route={{ */}
      {/*    routes: level2Menu, */}
      {/*  }} */}
      {/*  navTheme="light" */}
      {/*  style={{ */}
      {/*    height: '400px', */}
      {/*  }} */}
      {/*  rightContentRender={() => ( */}
      {/*    <div> */}
      {/*      <Avatar shape="square" size="small" icon={<UserOutlined />} /> */}
      {/*    </div> */}
      {/*  )} */}
      {/*  menuHeaderRender={false} */}
      {/* > */}
      <Router />
      <FloatModalStackComponent />
      {/* </ProLayout> */}
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
