import { useSelector } from 'react-redux';
import { RootState } from './index';

/**
 * 创建selector
 * @param property 需要选择的属性
 */
const createSelector = <T>(property: string) => {
  return (callback?: Function) => {
    return useSelector<RootState, T>((state) => {
      try {
        const targetState = state[property];
        if (targetState) {
          if (callback) {
            return callback(targetState);
          } else return targetState;
        } else return {};
      } catch (e) {
        console.warn(e);
      }
    });
  };
};
export default createSelector;
