import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";
import {getTodos} from "../../services/api.sevice.ts";
import './Todos.css'
import Todo from "../todo/Todo.tsx";


const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([])

    useEffect(() => {
        const fetchData = async() =>{
            const todos = await getTodos()
            setTodos(todos)
        }
        fetchData()
    }, [])
    return (
        <div className={'todos'}>
            <h1>Todos</h1>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default Todos;
