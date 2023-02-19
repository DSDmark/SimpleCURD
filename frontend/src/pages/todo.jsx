import React from 'react'
import { Todolist, SearchBar, Sidebar } from '../components/'
import { Box, Container, Grid } from '@mui/material'

const Todo = () => {
  return (
    <>
        <Box sx={{ marginTop: '3rem' }}>
          <Container>
            <Grid container alignItems="stretch" spacing={2}>
              <Grid item xs={12} sx={{ width: '100%' }} container justifyContent="center">
                <SearchBar />
              </Grid>
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
