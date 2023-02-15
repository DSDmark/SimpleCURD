import React, { useEffect, useCallback } from 'react'
import { retrieveTodo } from '../slices/todo.js'
import { useDispatch, connect, useSelector } from 'react-redux'
import { Todolist, SearchBar, Sidebar } from '../components/'
import { Box, Container, Grid } from '@mui/material'

const Todo = () => {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)

  const initData = useCallback(() => {
    dispatch(retrieveTodo())
  }, [dispatch])

  useEffect(async () => {
    initData()
  }, [initData])

  return (
    <>
      <Box sx={{ marginTop: '3rem' }}>
        <Container>
          <Grid container alignItems="stretch" spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ width: '100%' }}
              container
              justifyContent="center"
            >
              <SearchBar />
            </Grid>
            {todo &&
              todo.map((e) => {
                return { e }
              })}
            <Grid item xs={6}>
              <Todolist />
            </Grid>
            <Grid item xs={6}>
              <Sidebar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Todo
