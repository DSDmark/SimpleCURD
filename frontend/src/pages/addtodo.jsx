import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { createTodo } from '../slices/todo.js'
import AddTodoFormSubmited from '../components/addTodoFormSubmited.component.jsx'
//import AddTodoForm from '../components/addTodoForm.component.jsx'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    id: null,
    title: '',
    desc: '',
    publiched: false,
    submitted: true,
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
      let data = await dispatch(createTodo({ title, desc }))
      setState({
        id: data.id,
        title: data.title,
        desc: data.desc,
        publish: data.publiched,
        submitted: false,
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

  return <>{state.submitted ? <AddTodoFormSubmited newTodo={newTodo} /> : "hey" }</>
}

export default connect(null, { createTodo })(AddTodo)
