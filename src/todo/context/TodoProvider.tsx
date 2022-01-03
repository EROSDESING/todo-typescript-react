import { TodoContext } from './TodoContext'
import { TodoState } from '../interface/Interfaces'
import { todoReducer } from './TodoReducer'
import { useReducer } from 'react'

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    { id: '1', desc: 'Recolectar Las Piedras Del Infinito', completed: false },
    { id: '2', desc: 'Piedra Del Alma', completed: false },
  ],
  completed: 0,
  pending: 2,
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id: id } })
  }

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
