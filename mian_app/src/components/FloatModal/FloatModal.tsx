import { memo, useState, useEffect, FC, useRef, useMemo } from 'react';
import styles from './styles.module.scss';
import Draggable from 'react-draggable';
import classNames from 'classnames';
import { CloseSquareTwoTone } from '@ant-design/icons';
interface IProps {}

const FloatModalComponent: FC<IProps> = (props) => {
  const [layoutContent, setLayoutContent] = useState<Element>();
  const handle = useMemo(() => '.handle' + Math.floor(Math.random() * 10000), []);
  const containerRef = useRef<HTMLElement | null>();
  useEffect(() => {
    const ele = document.getElementsByClassName('ant-layout')[0];
    const container = document.getElementById(handle);
    setLayoutContent(ele);
    containerRef.current = container;
  }, []);

  const bounds = {
    left: 0,
    top: 0,
    right: layoutContent ? layoutContent.clientWidth - containerRef.current.offsetWidth - 48 : 300,
    bottom: layoutContent ? layoutContent.clientHeight - containerRef.current.offsetHeight : 300,
  };

  return (
    <Draggable handle={handle} bounds={bounds} defaultPosition={{ x: 100, y: 100 }}>
      <div id={handle} className={classNames(styles.floatModal, handle.slice(1))}>
        <div className={styles.header}>
          <span>header</span>
          <CloseSquareTwoTone />
        </div>
        {props.children}
      </div>
    </Draggable>
  );
};

export default FloatModalComponent;
