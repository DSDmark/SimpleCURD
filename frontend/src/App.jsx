import AddTodo from './pages/addtodo.jsx'
import Todo from './pages/todo.jsx'
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/AddTodo" element={<AddTodo />} />
          <Route path="/todo/:id" element={<AddTodo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
