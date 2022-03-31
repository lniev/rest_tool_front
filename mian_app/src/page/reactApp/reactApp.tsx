import { memo, useState, useEffect, FC } from 'react';

interface IProps {}

const Component: FC<IProps> = () => {
  const [] = useState();
  useEffect(() => {}, []);
  return (
    <div>
      <micro-app name="react-app" url="http://localhost:8077/" baseroute="/rp/" keep-alive></micro-app>
    </div>
  );
};
export default Component;
