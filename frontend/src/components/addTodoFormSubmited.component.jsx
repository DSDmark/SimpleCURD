import { Button, Box, Typography, Paper } from '@mui/material'

const AddTodoFormSubmited = ({ newTodo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
      }}
    >
      <Paper
        justifyContent="center"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        elevation={6}
      >
        <Box display="flex" flexDirection="column" alignContent="center" p={4}>
          <Typography variant="h5">You have submitted successfully</Typography>
          <Button variant="contained" onClick={newTodo}>
            Add new todo
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default AddTodoFormSubmited
