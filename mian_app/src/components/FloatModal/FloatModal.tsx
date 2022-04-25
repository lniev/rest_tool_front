// @ts-ignore
import { useDeferredValue, useState, useEffect, FC, useRef, useMemo, startTransition } from 'react';
import styles from './styles.module.scss';
import Draggable, { DraggableProps } from 'react-draggable';
import classNames from 'classnames';
import { CloseSquareTwoTone } from '@ant-design/icons';
import { Resizable, ResizableProps } from 're-resizable';
import Helper from '../../utils/helper';

export interface FloatModalProps {
  dragProps?: Partial<DraggableProps>;
  resizeProps?: Partial<ResizableProps>;
  title?: string;
  onClose?: (props: FloatModalProps) => void;
  onClick?: (e: MouseEvent) => void
  zIndex?: number
}

const FloatModalComponent: FC<FloatModalProps> = (props) => {
  const { dragProps, resizeProps, onClick, zIndex, title, children } = props;
  const handle = useMemo(() => '.handle' + Math.floor(Math.random() * 10000), []);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 300,
    bottom: 300,
  });
  const defBounds = useDeferredValue(bounds, { timeoutMs: 1000 });
  useEffect(() => {
    // 设置节流事件
    Helper.throttleEvent('resize', 'optimizedResize');
    // 获取节点
    const ele = document.getElementsByClassName('ant-layout')[0];
    const container = document.getElementById(handle);
    // 设置边界
    if (ele && container) {
      setBounds({
        ...bounds,
        right: ele.clientWidth - container.offsetWidth - 48,
        bottom: ele.clientHeight - container.offsetHeight,
      });
    }
    // 监听窗口变化、重新设置边界
    const optimizedResizeFun = function (e) {
      setBounds({
        ...bounds,
        right: ele.clientWidth - container.offsetWidth - 48,
        bottom: ele.clientHeight - container.offsetHeight,
      });
    };
    window.addEventListener('optimizedResize', optimizedResizeFun);
    return () => {
      window.removeEventListener('optimizedResize', optimizedResizeFun);
    };
  }, []);

  function handleResize() {
    const ele = document.getElementsByClassName('ant-layout')[0];
    const container = document.getElementById(handle);
    if (ele && container) {
      setBounds({
        ...bounds,
        right: ele.clientWidth - container.offsetWidth - 48,
        bottom: ele.clientHeight - container.offsetHeight,
      });
    }
  }

  // 允许resize的方向
  const enableOption = {
    top: false,
    right: true,
    bottom: true,
    left: false,
    topRight: false,
    bottomRight: true,
    bottomLeft: false,
    topLeft: false,
  };

  function onClose() {
    try {
      props.onClose && props.onClose(props);
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    // @ts-ignore
    <Draggable handle={'header'} bounds={defBounds} defaultPosition={{ x: 100, y: 100 }} {...dragProps} >
      <Resizable
        // @ts-ignore
        id={handle}
        defaultSize={{ width: 600, height: 400 }}
        className={classNames(styles.floatModal, handle.slice(1))}
        onResizeStop={handleResize}
        bounds={'window'}
        style={{zIndex: zIndex}}
        enable={enableOption}
        onClick={onClick}
        {...resizeProps}
      >
        <header className={styles.header}>
          <span>{title}</span>
          <CloseSquareTwoTone onClick={onClose} />
        </header>
        <div className={styles.body}>{children}</div>
      </Resizable>
    </Draggable>
  );
};

export default FloatModalComponent;
