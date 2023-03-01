import React, { useState } from "react"
import Todo from "../models/todo"

type TodoContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

interface Props {
    children: React.ReactNode;
}

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }
})

const TodoContextProvider: React.FC<Props> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handlerTodoText = (textTodo: string) => {

        const newTodo = new Todo(textTodo)

        setTodos(prev => prev.concat(newTodo))
    }

    // remove Todo
    const removeTodoHandler = (todoId: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== todoId))
    }

    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: handlerTodoText,
        removeTodo: removeTodoHandler
    }
    return <TodosContext.Provider
        value={contextValue}
    >
        {props.children}
    </TodosContext.Provider>
}

export default TodoContextProvider