import Todos from "./components/Todo";
import Todo from "./models/todo";

function App() {
  const todo = [
    new Todo('Learn ReactJS'),
    new Todo('Learn ReactTS')
  ]
  return (
    <div>
      <h1>Hello TS</h1>
      <Todos items={todo} />
    </div>
  );
}

export default App;
