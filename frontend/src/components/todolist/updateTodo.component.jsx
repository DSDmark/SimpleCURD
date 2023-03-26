import { Box, Button, Typography } from "@mui/material"
import DeleteIcon from "@mui/icons-material/DeleteForever"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const UpdateTodo = () => {
  const selectTodo = useSelector(state => state.todo.currentTodo.id)


  return (
    <>
      <Box mt={2}>
        <Button LinkComponent={Link} to={`/todo/${selectTodo ? selectTodo : ""}`} variant="outlined" sx={{ ":hover": { color: "red" } }}>
          <DeleteIcon />
          <Typography>
            update Select todo
          </Typography>
        </Button>
      </Box>
    </>
  )
}

export default UpdateTodo;

