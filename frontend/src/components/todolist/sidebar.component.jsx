import { useContext,useState } from 'react'
import {TodoContext} from "../../context/"
import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontSize:"1rem",
  fontWeight:800,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation:24,
}))


const Sidebar = () => {
  const todo = useContext(TodoContext);
  const [selectedTodo,setSelectedTodo] = useState(null)


  const setTodo = (currentTodo)=>{
    setSelectedTodo(currentTodo)
  }
  
  return(
    <>
      <Box>
        <Grid container rowSpacing={1}>
          {todo.map((e) => (
            <Grid key={e.id} item xs={12}>
              <Item elevation={4} sx={selectedTodo==e.id?{bgcolor:"primary.main",color:"white"}:""} onClick={()=>setTodo(e.id)}>{e.title}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      </>
  ) 
}

export default Sidebar
