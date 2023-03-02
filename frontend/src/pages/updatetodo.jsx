import React from 'react'
import { Checkbox, ButtonGroup, FormControlLabel, Grid, Paper, Avatar, TextField, Box, Button } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { useParams, useNavigate } from "react-router-dom"
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from "react-redux"
import { deleteById } from "../slices/todo.js"
import { useState } from 'react'

const AddForm = styled(Box)(() => ({
  display: 'grid',
  placeItems: 'center',
  minHeight: '90vh',
}))


const UpdateTodo = () => {

  const selectedTodo = useSelector(state => state.todo.currentTodo)
  const dispatch = useDispatch();
  const { id } = useParams();
  const negivateTo = useNavigate();
  const [input, setInput] = useState(selectedTodo);
  let { title, desc, published } = input;

  const hendleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value
    console.log(name,selectedTodo)
    setInput({
      ...input,
      [name]: value
    })
  }

  const deleteTodo = (e) => {
    dispatch(deleteById(id))
    negivateTo('/todo');
  }

  return (
    <AddForm>
      <Paper elevation={10} m={4}>
        <Grid container>
          <Grid item p={4} lineHeight={3} align="center">
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <AccountCircle />
            </Avatar>
            <h2>Update Todo</h2>
            <TextField name="title" value={title} label="Title" placeholder="Title of your Todo" variant="outlined" fullWidth required onChange={(e) => hendleInputs(e)} />
            <TextField name="desc" label="Description" value={desc} sx={{ mt: 2 }} placeholder="Description of your Todo" multiline rows={4} variant="outlined" fullWidth onChange={(e) => hendleInputs(e)} required />
            <FormControlLabel control={<Checkbox name="published" checked={published} onChange={(e) => hendleInputs(e)} textalign="start" />} label="Publish" />
            <ButtonGroup fullWidth={true} variant="contained" >
              <Button onClick={(e) => saveTodo(e)} >
                Update Todo
              </Button>
              <Button onClick={(e) => deleteTodo(e)} >
                Delete that todo
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </AddForm>
  )
}

export default UpdateTodo

