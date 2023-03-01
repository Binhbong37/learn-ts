import React, { useContext } from 'react'
import { TodosContext } from '../store/todos-context'
import TodoItem from './TodoItem'
import classes from './Todo.module.css'

const Todos: React.FC = () => {
    const todoCtx = useContext(TodosContext)
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map(item => <TodoItem
                key={item.id}
                text={item.text}
                onRemoveTodo={() => todoCtx.removeTodo(item.id)}
            />)}
        </ul>
    )
}

export default Todos