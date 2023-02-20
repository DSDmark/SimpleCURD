import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { createTodo } from '../slices/todo.js'
import { AddTodoForm, AddTodoFormSubmited } from '../components/'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    id: null,
    title: '',
    desc: '',
    published: false,
    submitted: false,
  })

  const hendleInputs = (e) => {
    let name = e.target.name === "Checkbox" ? "published" : e.target.name;
    let value = e.target.name === "Checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [name]: value
    })
  }

  const saveTodo = async (e) => {
    try {
      const { title, desc, published } = state
      let data = dispatch(createTodo({ title, desc, published }))
      setState({
        id: data.id,
        title: data.title,
        desc: data.desc,
        published: data.published,
        submitted: true,
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const newTodo = () => {
    setState({
      id: null,
      title: '',
      desc: '',
      published: false,
      submitted: false,
    })
  }

  return (
    <>
      {state.submitted ? (
        <AddTodoFormSubmited newTodo={newTodo} />
      ) : (
        <AddTodoForm
          hendleInputs={hendleInputs}
          saveTodo={saveTodo}
        />
      )}
    </>
  )
}

export default connect(null, { createTodo })(AddTodo)
