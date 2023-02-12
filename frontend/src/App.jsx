import { Todo, AddTodo } from './pages/'
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/'

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
          <Route path="/todo/:id" element={<AddTodo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
