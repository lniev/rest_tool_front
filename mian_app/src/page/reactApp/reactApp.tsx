import { memo, useState, useEffect, FC } from 'react';

interface IProps {}

const Component: FC<IProps> = (props) => {
  const [] = useState();
  useEffect(() => {}, []);
  return (
    <div>
      <micro-app name="react-app" url="http://localhost:8077/" baseroute="/rp/"></micro-app>
    </div>
  );
};
export default Component;
