// @ts-ignore
import { useDeferredValue, useState, useEffect, FC, useRef, useMemo, startTransition, ReactNode } from 'react';
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
  onClick?: (e: MouseEvent) => void;
  zIndex?: number;  // css层级
  content: () => ReactNode; // 窗口内容
  isBounds: boolean; // 是否限定边界
  onLeaveScreen: Function
  parentNode: string // 指定容器节点 className
}

const FloatModalComponent: FC<FloatModalProps> = (props) => {
  const { dragProps, resizeProps, onClick, zIndex, title, isBounds, content, parentNode = 'ant-layout', onLeaveScreen } = props;
  const handle = useMemo(() => '.handle' + Math.floor(Math.random() * 10000), []);
  const [bounds, setBounds] = useState({
    // left: 0,
    top: 0,
    // right: 300,
    // bottom: 300,
  });
  const defBounds = useDeferredValue(bounds, { timeoutMs: 1000 });
  useEffect(() => {
    if(!isBounds) return () => {}
    // 设置节流事件
    Helper.throttleEvent('resize', 'optimizedResize');
    // 获取节点
    const ele = document.getElementsByClassName(parentNode)[0];
    const container = document.getElementById(handle);
    // 设置边界
    if (ele && container) {
      setBounds({
        ...bounds,
        // @ts-ignore
        right: ele.clientWidth - container.offsetWidth - 48,
        bottom: ele.clientHeight - container.offsetHeight,
      });
    }
    // 监听浮动窗口变化、重新设置边界
    const optimizedResizeFun = function (e) {
      setBounds({
        ...bounds,
        // @ts-ignore
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
    const ele = document.getElementsByClassName(parentNode)[0];
    const container = document.getElementById(handle);
    if (ele && container) {
      setBounds({
        ...bounds,
        // @ts-ignore
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

  /**
   * 判断当前窗口是否被移动到可视区域外
   * @param e
   */
  function judgeIsArea(e) {
    const parentNodeContainer = document.getElementsByClassName(parentNode)[0]
    // @ts-ignore
    const isOverflowX = e.clientX < 48 || e.clientX > parentNodeContainer.offsetWidth
    // @ts-ignore
    const isOverflowY = e.clientY < 0 || e.clientY > (parentNodeContainer && parentNodeContainer.offsetHeight)
    if (isOverflowX || isOverflowY) {
      onLeaveScreen && onLeaveScreen()
    }
  }

  return (
    // @ts-ignore
    <Draggable
      handle={'header'}
      bounds={defBounds}
      // @ts-ignore
      onDrag={(e) => {console.log(e.target.offsetLeft)}}
      // @ts-ignore
      onStop={judgeIsArea}
      defaultPosition={{ x: 100, y: 100 }}
      {...dragProps}
    >
      <Resizable
        // @ts-ignore
        id={handle}
        defaultSize={{ width: 600, height: 400 }}
        className={classNames(styles.floatModal, handle.slice(1))}
        onResizeStop={handleResize}
        bounds={'window'}
        style={{ zIndex: zIndex }}
        enable={enableOption}
        onClick={onClick}
        {...resizeProps}
      >
        <header className={styles.header}>
          <span>{title}</span>
          <CloseSquareTwoTone onClick={onClose} />
        </header>
        <div className={styles.body}>{content && content()}</div>
      </Resizable>
    </Draggable>
  );
};

export default FloatModalComponent;
