import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  fontSize: "1rem",
  fontWeight: 800,
  textAlign: 'center',
  color: "white",
  background: theme.palette.primary.main,
  padding: theme.spacing(4),
}))

const Sidebar = () => {
  const selectedTodo = useSelector((state) => state.todo.currentTodo);

  const getItemStatus = (key,value)=>{
    if(key==="published"){
      return `${key}: ${value?"🟢 Active" : "🔴 Not Active"}`;
    }
    return `${key}: ${value}`;
  }
 const setItemLabel = (key,value)=>{
    if(key==="published"){
      return (value?{bgcolor:"success.main"}:{ bgcolor: "error.light" });
    }
    return {}
  } 
  
  const loopData = Object.entries(selectedTodo).map(([key,value])=>(
    <Grid item xs={12} key={window.crypto.randomUUID()}>
      <Item elevation={4} sx={setItemLabel(key,value)}>{getItemStatus(key,value)}</Item>
    </Grid>
  ))

  return (
    <>
      <Box>
        <Grid container rowSpacing={2}>
          {loopData}
        </Grid>
      </Box>
      </>
  )
}

export default Sidebar
