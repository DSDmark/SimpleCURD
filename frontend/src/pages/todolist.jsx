import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { AccountCircle } from '@mui/icons-material'
const Todolist = ({onChangeTitle,onChangeDes,saveTodo}) => {
  return (
<Grid container >
        <Grid item align="center">
      
      <Paper elevation={10} m={4}>
          <Avatar >
            <AccountCircle />
          </Avatar>
          <h2>Sign In</h2>
        <TextField
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
        onClick={(e)=>onChangeTitle(e)}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
        onClick={(e)=>onChangeDes(e)}
        
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
        </Grid>
    </Grid>
  )
}

export default Todolist
