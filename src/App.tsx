import { useState } from 'react'
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handlerTodoText = (textTodo: string) => {
    const newTodo = new Todo(textTodo)

    setTodos(prev => prev.concat(newTodo))
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todo with TS</h1>
      <NewTodo onAddTodo={handlerTodoText} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
