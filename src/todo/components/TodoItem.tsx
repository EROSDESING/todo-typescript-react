
import { Todo } from '../interface/Interfaces'

import { useTodos } from '../hooks/useTodos'

interface TodoItemsProps {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemsProps) => {
  const { toggleTodo } = useTodos()

  const handleDbClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : '',
      }}
      onClick={handleDbClick}
    >
      {todo.desc}
    </li>
  )
}
