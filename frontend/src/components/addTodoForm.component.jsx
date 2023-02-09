import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Avatar,
  TextField,
  Box,
  Button,
  Typography,
  Link,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AccountCircle } from '@mui/icons-material'
const useStyles = makeStyles((theme) => ({
  flexStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
  },
}))

const AddTodoFrom = ({onChangeTitle,onChangeDes,saveTodo}) => {
  const classes = useStyles()
  return (
    <Box className={classes.flexStyle}>
      <Paper elevation={10} m={4}>
        <Grid container>
          <Grid item p={4} lineHeight={3} align="center">
            <Avatar sx={{bgcolor:"green"}}>
              <AccountCircle />
            </Avatar>
            <h2>Add Todo</h2>
            <TextField
              label="Title"
            placeholder="Title of your Todo"
              variant="outlined"
              fullWidth
              required
            onChange={(e)=>onChangeTitle(e)}
            />
            <TextField
              label="Description"
            sx={{mt:2}}
              placeholder="Description of your Todo"
            multiline
            rows={4}
              variant="outlined"
              fullWidth
            onChange={(e)=>onChangeDes(e)}
              required
            />
            <FormControlLabel
            control={<Checkbox textAlign="start" name="checkedB" color="primary" />}
              label="Publish"
            />
              <Button onClick={(e)=>saveTodo(e)} type="submit" color="primary" variant="contained" fullWidth>
             Add your Todo
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default AddTodoFrom
