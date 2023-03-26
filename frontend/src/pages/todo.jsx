import React from 'react'
import { Todolist, SearchBar, Sidebar, DeleteTodo, UpdateTodo } from '../components/'
import { Box, Container, Grid } from '@mui/material'

const Todo = () => {
  return (
    <>
      <Box sx={{ marginTop: '3rem' }}>
        <Container>
          <Grid container alignItems="stretch" spacing={2}>
            <Grid item md={12} sx={{ width: '100%' }} container justifyContent="center">
              <SearchBar />
            </Grid>
            <Grid item xs={12} md={6}>
              <Todolist />
              <Grid container columnGap={2} justifyContent="center" direction="row">
                <DeleteTodo />
                <UpdateTodo />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Sidebar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Todo
