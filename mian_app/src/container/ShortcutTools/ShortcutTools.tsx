import { FC } from 'react';
import { Popover } from 'antd';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { pushModal } from '../../components/FloatModalStack/floatModalSlice';
import ToolList from './ToolList';

interface IProps {}

const ShortcutToolsContainer: FC<IProps> = (props) => {
  const dispatch = useDispatch();

  function openModal(config) {
    dispatch(pushModal(config));
  }

  const content = (
    <div className={styles.tool}>
      {ToolList.map((el) => (
        <div className={styles.item} onClick={() => openModal(el)}>
          {el.icon()}
          {el.label}
        </div>
      ))}
    </div>
  );

  return (
    <Popover className={styles.popover} placement="rightBottom" title={'工具集'} content={content}>
      {props.children}
    </Popover>
  );
};

export default ShortcutToolsContainer;
