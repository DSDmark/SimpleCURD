import { Box, Button, Typography } from "@mui/material"
import DeleteIcon from "@mui/icons-material/DeleteForever"
import { deleteAllTodo } from "../../slices/todo.js"
import { useDispatch } from "react-redux"

const DeleteTodo = () => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(deleteAllTodo());
  }

  return (
    <>
      <Box mt={2}>
        <Button onClick={deleteAll} variant="outlined" sx={{ ":hover": { color: "red" } }}>
          <DeleteIcon />
          <Typography>
            Delete All todo
          </Typography>
        </Button>
      </Box>
    </>
  )
}

export default DeleteTodo;
