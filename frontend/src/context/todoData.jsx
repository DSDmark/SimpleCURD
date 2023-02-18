import React,{useCallback,useEffect} from "react";
import { retrieveTodo } from '../slices/todo.js'
import { useDispatch, useSelector } from 'react-redux'
import TodoContext from "./todoContext.js"

const TodoData = (props)=>{
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)

  // fetching data
  const initData = useCallback(() => {
    dispatch(retrieveTodo())
  }, [dispatch])

  useEffect(() => {
    initData()
  }, [initData])

  
  return(
    <TodoContext.Provider value={todo}>{props.children}</TodoContext.Provider>
  )
} 

export default TodoData;
