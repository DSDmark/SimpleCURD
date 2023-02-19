import React, { useState, useCallback, useEffect } from "react";
import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { setCurrentTodo, retrieveTodo } from '../../slices/todo.js'
import { useDispatch, useSelector } from 'react-redux'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontSize: "1rem",
  fontWeight: 800,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 24,
}))

const Todolist = () => {
  const [selectedTodo, setSelectedTodo] = useState([])
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)

  // fetching data
  const initData = useCallback(() => {
    dispatch(retrieveTodo())
  }, [dispatch])

  useEffect(() => {
    initData()
  }, [initData])

  // setting current selected todo 
  const setTodo = (currentTodo) => {
    setSelectedTodo(currentTodo)
    dispatch(setCurrentTodo(currentTodo))
  }

  return (
    <>
      <Box>
        <Grid container rowSpacing={1}>
          {todo.todos && todo.todos.map((e) => (
            <Grid key={e.id} item xs={12}>
              <Item elevation={4} sx={selectedTodo && selectedTodo.id == e.id ? { bgcolor: "primary.main", color: "white" } : ""} onClick={() => setTodo(e)}>{e.title}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Todolist
