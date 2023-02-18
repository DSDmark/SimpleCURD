import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import TodoDataService from '../services/todo.service.js'

const initialState = { todos: [], currentTodo: {} }

export const createTodo = createAsyncThunk('createData', async ({ title, desc }) => {
  const res = await TodoDataService.create({ title, desc })
  return res.data;
})

export const retrieveTodo = createAsyncThunk('getData', async () => {
  const res = await TodoDataService.getAll()
  return res.data
})

export const todoSlices = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = { ...action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase('create', (state, action) => {
      state.push(action.payload)
    }),
      builder.addMatcher(
        (action) => action.type === retrieveTodo.fulfilled.type,
        (state, action) => { return { ...state, todos: action.payload } }
      )
  },
})

export const { setCurrentTodo } = todoSlices.actions;
export const todoReducer = todoSlices.reducer;

