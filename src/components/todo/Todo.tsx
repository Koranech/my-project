import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";
import './Todo.css'

type TodoPropType = {
    todo: TodoModel
}

const Todo: FC<TodoPropType> = ({todo}) => {
    return (
        <div className={'todo'}>
            <h2>User Todo: {todo.userId}</h2>
            <h3>{todo.id}</h3>
            <p>{todo.todo}</p>
            <p>Completed - {todo.completed}</p>
        </div>
    );
};

export default Todo;
