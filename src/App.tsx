import NewTodo from "./components/NewTodo";
import Todos from "./components/Todo";
import TodoContextProvider from "./store/todos-context";


function App() {

  return (
    <TodoContextProvider>
      <h1 style={{ textAlign: 'center' }}>Todo with TS</h1>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
