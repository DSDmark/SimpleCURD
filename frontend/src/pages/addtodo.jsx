import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { createTodo } from '../slices/todo.js'
import { Box, TextField, Button, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    id: null,
    title: '',
    desc: '',
    publiched: false,
    submitted: false,
  })

  const onChangeDes = (e) => {
    setState({
      ...state,
      desc: e.target.value,
    })
  }

  const onChangeTitle = (e) => {
    setState({
      ...state,
      title: e.target.value,
    })
  }

  const saveTodo = async (e) => {
    try {
      const { title, desc } = state
      let data = await dispatch(createTodo({ title, desc }))
      setState({
        id: data.id,
        title: data.title,
        desc: data.desc,
        publish: data.publiched,
        submitted: true,
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const newTodo = () => {
    setState({
      id: null,
      title: '',
      desc: '',
      publiched: false,
      submitted: false,
    })
  }

  return (
    <>
      {state.submitted ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
          }}
        >
          <Box p={4} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography variant="h5">You have submitted successfully</Typography>
          </Box>
          <Button variant="contained" onClick={newTodo}>
            Add new todo
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
          }}
        >
          <Box p={4} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              value={state.title}
              onChange={onChangeTitle}
              id="input-with-sx"
              label="Title"
              variant="standard"
            />
          </Box>
          <Box p={4} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Write the description"
              variant="standard"
              value={state.desc}
              onChange={onChangeDes}
            />
          </Box>
          <Button onClick={saveTodo} variant="contained">submit</Button>
        </Box>
      )}
    </>
  )
}

export default connect(null, { createTodo })(AddTodo)
