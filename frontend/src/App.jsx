import NavBar from './NavBar'
import Todo from './components/todo.component.js'
import AddTodo from './components/add-todo.component.js'
import Todolist from './components/todo-list.component.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
     <NavBar /> 
      <div>
        <Routes>
          <Route path="/" element={<Todolist />} />
          <Route path="/todo" element={<Todolist />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/todo/:id" element={<AddTodo />} />
        </Routes>
        
      </div>
        </Router>
    </>
  )
}

export default App
