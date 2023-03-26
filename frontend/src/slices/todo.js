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

// finding by title 
export const findByTitle = createAsyncThunk("findByTitle", async ({ title }) => {
  const res = await TodoDataService.findByTitle(title)
  return res.data;
})

// delete one by id 
export const deleteById = createAsyncThunk("deleteById", async (id) => {
  console.log(id)
  const res = await TodoDataService.deleteOne(id);
  return res.data;
})

// update by id 
export const updateById = createAsyncThunk("updateById", async ({ id, title, desc, published }) => {
  const res = await TodoDataService.updateOne(id, { title, desc, published });
  return res.data;
})

export const todoSlices = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = { ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload)
    }),
      builder.addCase(deleteAllTodo.fulfilled, (state, action) => {
        return initialState;
      }),
      builder.addCase(findByTitle.fulfilled, (state, action) => {
        return { ...state, todos: action.payload }
      }),
      builder.addMatcher(
        (action) => action.type === deleteById.fulfilled.type, (state, action) => { return { ...state, currentTodo: action.payload } })
    builder.addMatcher(
      (action) => action.type === updateById.fulfilled.type, (state, action) => { return { ...state, currentTodo: action.payload } })
    builder.addMatcher(
      (action) => action.type === updateById.fulfilled.type, (state, action) => { return { ...state, currentTodo: action.payload } })

    builder.addMatcher(
      (action) => action.type === retrieveTodo.fulfilled.type, (state, action) => { return { ...state, todos: action.payload } })
  },
})

export const { setCurrentTodo, setFilteredTodo } = todoSlices.actions;
export const todoReducer = todoSlices.reducer;

