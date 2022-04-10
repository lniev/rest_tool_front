import { memo, useState, useEffect, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import microApp from '@micro-zoe/micro-app';
import Config from '../../../../config';
interface IProps {}

const ReactAppPage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProd = process.env.NODE_ENV === 'production';
  const baseRoute = Config.child_react_baseRoute;

  function pushState(path) {
    navigate(path);
  }

  useEffect(() => {
    microApp.setData('react-app', { pathname: location.pathname.replace(baseRoute, '/'), pushState });
  });
  const url = Config.child_react_url

  return (
    <div>
      <micro-app name="react-app" url={url} baseroute={baseRoute} keep-alive></micro-app>
    </div>
  );
};
export default ReactAppPage;
