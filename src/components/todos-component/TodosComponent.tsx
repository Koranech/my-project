import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.todo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";
import './TodosComponent.css'

const TodosComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodos();
            setTodos(todos);

        }
        fetchData()
    }, [])

    return (
        <div className="todos">
            {
                todos.map(todo => <TodoComponent key={todo.id}  todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;
