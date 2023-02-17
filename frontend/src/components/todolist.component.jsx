import React, { useEffect, useCallback } from 'react'
import { retrieveTodo } from '../slices/todo.js'
import { useDispatch, connect, useSelector } from 'react-redux'
import { Checkbox, FormControlLabel, Grid, Paper, Box, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AccountCircle } from '@mui/icons-material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const Todolist = () => {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)

  const initData = useCallback(() => {
    dispatch(retrieveTodo())
  }, [dispatch])

  useEffect(() => {
    initData()
  }, [initData])

  return (
    <>
      <Box>
        <Grid container rowSpacing={1}>
          {todo.map((e) => (
            <Grid key={window.crypto.randomUUID()} item xs={12}>
              <Item>{e.title}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Todolist
