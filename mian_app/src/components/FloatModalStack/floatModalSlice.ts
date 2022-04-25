import { createSlice } from '@reduxjs/toolkit';
import { FloatModalProps } from '../FloatModal/FloatModal';
import createSelector from "../../store/createSelector";

export interface ModalStackItem extends FloatModalProps{
  key: number
}
export type ModalStackType = Set<ModalStackItem>;

const modalStack = new Set([
  // {
  //   dragProps: {},
  //   resizeProps: {},
  //   // key: 1,
  //   // zIndex: 1,
  //   title: "test",
  // },
]) as ModalStackType;
export const floatModalKey = 'floatModal'
export const floatModalSlice = createSlice({
  name: 'floatModalStack',
  initialState: {
    modalStack: modalStack,
    indexMax: 1
  },
  reducers: {
    pushModal: (state, { payload }) => {
      if(state.modalStack.size > 6)return
      let lastModalDefaultPosition = [...state.modalStack][0]?.dragProps?.defaultPosition || {x: 0, y: 0}
      console.log([...state.modalStack],state.modalStack.size)
      const newOne = {
        ...payload,
        dragProps: {
          ...payload.dragProps,
          defaultPosition:  { x: lastModalDefaultPosition.x + 50, y: lastModalDefaultPosition.y + 50 },
        },
        key: Math.random(),
        zIndex: state.indexMax + 1
      }
      console.log(lastModalDefaultPosition.x,lastModalDefaultPosition.y)
      state.modalStack.add(newOne);
    },
    popModal(state, { payload }) {
      state.modalStack.delete(payload);
    },
    setModalIndex(state, { payload }) {
      state.indexMax = payload
    },
    refreshModal(state, { payload }) {
      // @ts-ignore
      for (const config of state.modalStack) {
        console.log(config);
      }
    },
  },
});
export const useFloatModalSelector = createSelector<ModalStackType>(floatModalKey);
export const { pushModal, popModal, refreshModal, setModalIndex } = floatModalSlice.actions;
export default floatModalSlice.reducer;

