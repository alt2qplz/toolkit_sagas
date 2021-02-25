import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTodo, myTodo } from './todoSlice'

const Todo = () => {
  const oneTodo = useSelector(myTodo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  return (
    <div>
      <h2>{oneTodo?.title}</h2>
    </div>
  )
}

export default Todo