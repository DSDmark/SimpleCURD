import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import TodoDataService from '../services/todo.service.js'

const initialState = []

export const createTodo = createAsyncThunk(
  'createData',
  async ({ title, desc }) => {
    const res = await TodoDataService.create({ title, desc })
  }
)

export const retrieveTodo = createAsyncThunk('getData', async () => {
  const res = await TodoDataService.getAll()
  return res
})

export const todoSlices = createSlice({
  name: 'todo',
  initialState,
  extraReducers: (builder) => {
    builder.addCase('create', (state, action) => {
      state.push(action.payload)
    }),
      builder.addCase('getAll', (state, action) => {
        return [...action.payload]
      })
  },
})

const { reducer } = todoSlices

export default reducer
