import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/'
import { Todo, AddTodo, UpdateTodo } from "./pages"
const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/AddTodo" element={<AddTodo />} />
          <Route path="/todo/:id" element={<UpdateTodo />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
