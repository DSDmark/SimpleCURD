import React from 'react'
import { Checkbox, FormControlLabel, Grid, Paper, Avatar, TextField, Box, Button } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const AddForm = styled(Box)(() => ({
  display: 'grid',
  placeItems: 'center',
  minHeight: '90vh',
}))

const AddTodoForm = ({ onChangeTitle, onChangeDes, saveTodo }) => {
  return (
    <AddForm>
      <Paper elevation={10} m={4}>
        <Grid container>
          <Grid item p={4} lineHeight={3} align="center">
            <Avatar sx={{ bgcolor: 'green' }}>
              <AccountCircle />
            </Avatar>
            <h2>Add Todo</h2>
            <TextField label="Title" placeholder="Title of your Todo" variant="outlined" fullWidth required onChange={(e) => onChangeTitle(e)} />
            <TextField label="Description" sx={{ mt: 2 }} placeholder="Description of your Todo" multiline rows={4} variant="outlined" fullWidth onChange={(e) => onChangeDes(e)} required />
            <FormControlLabel control={<Checkbox textalign="start" name="checkedB" color="primary" />} label="Publish" />
            <Button onClick={(e) => saveTodo(e)} type="submit" color="primary" variant="contained" fullWidth>
              Add your Todo
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </AddForm>
  )
}

export default AddTodoForm
