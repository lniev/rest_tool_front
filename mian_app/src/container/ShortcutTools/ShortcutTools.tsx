import { memo, useState, useEffect, FC, useRef } from 'react';
import { Col, Divider, Popover, Row } from 'antd';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import {pushModal, useFloatModalSelector} from '../../components/FloatModalStack/floatModalSlice';
import JsonFormat from '../../container/JsonFormat/JsonFormat.container'

interface IProps {}

const ShortcutToolsContainer: FC<IProps> = (props) => {
  const modalStack = useFloatModalSelector((state) => state.modalStack);
  useEffect(() => {}, []);

  const dispatch = useDispatch();

  function openModal() {
    dispatch(
      pushModal({
        title: 'test' + modalStack.size + 1,
        type: 'jsonFormat',
        content: () => {
          return (<JsonFormat />)
        }
      })
    );
  }

  const content = (
    <div className={styles.tool}>
      <div className={styles.item}>json格式化</div>
      <div className={styles.item} onClick={openModal}>json格式化</div>
      <div className={styles.item}>json格式化</div>
      <div className={styles.item}>json格式化</div>
    </div>
  );

  return (
    <Popover className={styles.popover} placement="rightBottom" title={'工具集'} content={content} trigger="click">
      {props.children}
    </Popover>
  );
};

export default ShortcutToolsContainer;
