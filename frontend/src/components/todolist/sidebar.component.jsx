import { Grid, Paper, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontSize: "1rem",
  fontWeight: 800,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 24,
  background: theme.palette.primary.main,
  padding: theme.spacing(4),
  color: "white",
}))

const Sidebar = () => {
  const selectedTodo = useSelector((state) => state.todo.currentTodo);
  const { title, desc, published } = selectedTodo;
  return (
    <>
      <Box>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Item elevation={4}>{title}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={4}>{desc}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={4} sx={published ? { bgcolor: "red" } : { bgcolor: "green" }}>{published ? " 🔴 Not Active" : "🟢Active "}</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Sidebar
