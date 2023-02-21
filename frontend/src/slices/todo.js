import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import TodoDataService from '../services/todo.service.js'

const initialState = { todos: [], currentTodo: {} }

// create todo
export const createTodo = createAsyncThunk('createData', async ({ title, desc, published }) => {
  const res = await TodoDataService.create({ title, desc, published })
  return res.data;
})

// get all todo
export const retrieveTodo = createAsyncThunk('getData', async () => {
  const res = await TodoDataService.getAll()
  return res.data
})

// delete all todo
export const deleteAllTodo = createAsyncThunk("deleteAllData", async () => {
  const res = await TodoDataService.deleteAll();
  return res.data;
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
      builder.addCase(deleteAllTodo.fulfilled, (state, action) => {
        return initialState;
      }),
      builder.addMatcher(
        (action) => action.type === retrieveTodo.fulfilled.type, (state, action) => { return { ...state, todos: action.payload } })
  },
})

export const { setCurrentTodo } = todoSlices.actions;
export const todoReducer = todoSlices.reducer;

