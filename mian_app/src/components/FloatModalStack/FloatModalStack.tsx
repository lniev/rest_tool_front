import { FC } from 'react';
import FloatModalComponent from '../FloatModal/FloatModal';
import { useDispatch } from 'react-redux';
import { useFloatModalSelector, popModal, setModalIndex } from './floatModalSlice';

interface FloatModalStackProps {}

const FloatModalStackComponent: FC<FloatModalStackProps> = () => {
  const modalStack = useFloatModalSelector((state) => state.modalStack);
  const indexMax = useFloatModalSelector((state) => state.indexMax);
  const dispatch = useDispatch();

  function handleClose(config) {
    dispatch(popModal(config));
  }

  function increaseIndex(element) {
    // @ts-ignore
    const _indexMax = indexMax + 1;
    element.currentTarget.style.zIndex = _indexMax;
    dispatch(setModalIndex(_indexMax));
  }

  return (
    <>
      {/*ts-ignore*/}
      {[...modalStack].map((config) => {
        return (
          <FloatModalComponent
            {...config}
            key={config.key}
            onClick={increaseIndex}
            onClose={() => handleClose(config)}
            onLeaveScreen={() => handleClose(config) }
          />
        );
      })}
    </>
  );
};
export default FloatModalStackComponent;
