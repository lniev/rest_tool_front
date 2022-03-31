import { memo, useState, useEffect, FC } from 'react';

interface IProps {}

const Component: FC<IProps> = () => {
  const [] = useState();
  useEffect(() => {}, []);
  return (
    <div>
      <h1>子应用</h1>
      <micro-app name="react-app" url="http://localhost:8077/" baseroute="/rp/"></micro-app>
    </div>
  );
};
export default Component;
