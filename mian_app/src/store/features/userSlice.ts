import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadUserData = createAsyncThunk('movie/loadData', async () => {
  const fet = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('testName');
    }, 2000);
  });
  const res = await fet;
  return res; // 此处的返回结果会在 .fulfilled中作为payload的值
});
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'initialName',
  },
  reducers: {
    updateUser(state, { payload }) {
      state.name = payload.name;
    },
    clearUser(state) {
      state.name = null;
    },
  },
  extraReducers: {
    // [loadUserData.fulfilled](state, { payload }) {
    //   console.log(payload);
    // },
  },
});


export const { updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;