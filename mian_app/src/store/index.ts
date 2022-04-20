import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store