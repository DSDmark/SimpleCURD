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
    publiched: false,
    submitted: false,
  })

  const onChangeDes = (e) => {
    setState({
      ...state,
      desc: e.target.value,
    })
  }

  const onChangeTitle = (e) => {
    setState({
      ...state,
      title: e.target.value,
    })
  }

  const saveTodo = async (e) => {
    try {
      const { title, desc } = state
      let data = dispatch(createTodo({ title, desc }))
      setState({
        id: data.id,
        title: data.title,
        desc: data.desc,
        publish: data.publiched,
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
      publiched: false,
      submitted: false,
    })
  }

  return (
    <>
      {state.submitted ? (
        <AddTodoFormSubmited newTodo={newTodo} />
      ) : (
        <AddTodoForm
          onChangeTitle={onChangeTitle}
          onChangeDes={onChangeDes}
          saveTodo={saveTodo}
        />
      )}
    </>
  )
}

export default connect(null, { createTodo })(AddTodo)
