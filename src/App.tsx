import NewTodo from "./components/NewTodo";
import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const todo = [
    new Todo('Learn ReactJS'),
    new Todo('Learn ReactTS')
  ]

  const handlerTodoText = (textTodo: string) => {
    console.log('APP: ', textTodo)
  }
  return (
    <div>
      <h1>Hello TS</h1>
      <NewTodo onAddTodo={handlerTodoText} />
      <Todos items={todo} />
    </div>
  );
}

export default App;
