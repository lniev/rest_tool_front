import { memo, useState, useEffect, FC } from 'react';

interface IProps {}

const BaseLayoutComponent: FC<IProps> = (props) => {
  const [] = useState();
  useEffect(() => {}, []);
  return <div>{props.children}</div>;
};
export default BaseLayoutComponent;
