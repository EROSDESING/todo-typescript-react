
import { TodoItem } from './TodoItem'
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {
 const {todos} = useTodos()

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  )
}
