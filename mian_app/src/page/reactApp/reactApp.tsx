import { memo, useState, useEffect, FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import microApp from '@micro-zoe/micro-app';

interface IProps {}

const ReactAppPage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const baseRoute = '/rp/';

  function pushState(path) {
    navigate(path);
  }

  useEffect(() => {
    microApp.setData('react-app', { pathname: location.pathname.replace(baseRoute, '/'), pushState });
  });

  return (
    <div>
      <micro-app name="react-app" url="http://localhost:8077/" baseroute={baseRoute} keep-alive></micro-app>
    </div>
  );
};
export default ReactAppPage;
