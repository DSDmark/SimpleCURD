import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todo'

const reducer = {
  todo: todoReducer,
}
export const store = configureStore({
  reducer:reducer,
  devTools:true,
})
