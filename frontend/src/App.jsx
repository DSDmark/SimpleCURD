import Todo from './pages/todo.jsx'
import AddTodo from './pages/addtodo.jsx'
import Todolist from './pages/todolist.jsx'
import { Button } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/todo" element={<Todolist />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/todo/:id" element={<AddTodo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
