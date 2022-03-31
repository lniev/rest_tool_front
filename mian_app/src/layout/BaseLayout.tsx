import React, {useState} from 'react';
import {Avatar, Descriptions} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import ProLayout, {PageContainer} from '@ant-design/pro-layout';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import {level1Menu, level2Menu} from './menu';
import {useLocation, useNavigate,Link} from 'react-router-dom';
import Router from '../router/router'


export default (props) => {
    // const location = useLocation();
    const [pathname, setPathname] = useState('/home');
    return (
        <ProLayout
            location={{
                pathname: pathname
                // location.pathname,
            }}
            style={{height: '100vh'}}
            collapsedButtonRender={false}
            collapsed
            // iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
            route={{
                routes: level1Menu,
            }}
            headerRender={false}
            menuItemRender={(item, dom) => <Link to={item.path} onClick={() => {
                setPathname(item.path)
            }
            }>{dom}</Link>}
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
            {/*<PageContainer>*/}
                <Router/>
            {/*</PageContainer>*/}
            {/*</ProLayout>*/}
        </ProLayout>
    );
};
