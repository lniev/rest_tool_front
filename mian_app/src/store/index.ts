import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import floatModalReducer, { floatModalKey } from '../components/FloatModalStack/floatModalSlice';

const options = {
  reducer: {
    user: userReducer,
    [floatModalKey]: floatModalReducer,
  },
};
const store = configureStore(options);


export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store