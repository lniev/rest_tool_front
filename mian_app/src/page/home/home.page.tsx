import { Button } from 'antd';
import { memo, useState, useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store';
interface IProps {}

const MainAppHomePage: FC<IProps> = () => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user);
  const [] = useState();
  useEffect(() => {}, []);
  return (
    <div>
      <Button>werqwerwqe</Button>
      MainAppHomePage
    </div>
  );
};
export default MainAppHomePage;
