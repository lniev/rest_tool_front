import { memo, useState, useEffect, FC, useRef } from 'react';
import { Col, Divider, Popover, Row } from 'antd';
import styles from './styles.module.scss';
interface IProps {}

const ShortcutToolsContainer: FC<IProps> = (props) => {
  const [,] = useState();

  useEffect(() => {}, []);

  const content = (
    <div className={styles.tool}>
      <div className={styles.item}>json格式化</div>
      <div className={styles.item}>json格式化</div>
      <div className={styles.item}>json格式化</div>
      <div className={styles.item}>json格式化</div>
    </div>
  );

  return (
    <Popover placement="rightBottom" title={'工具集'} content={content} trigger="click">
      {props.children}
    </Popover>
  );
};

export default ShortcutToolsContainer;
