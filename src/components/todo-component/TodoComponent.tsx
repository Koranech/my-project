import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";
import './TodoComponent.css'

type  TodoPropType ={
    todo: ITodo
}

const TodoComponent: FC<TodoPropType> = ({todo}) => {
    return (
        <div className={'todo'}>
            <h2>User - {todo.userId}</h2>
            <h3>Todo number - {todo.id}</h3>
            <p>{todo.title}</p>
            <p>Completed - {JSON.stringify(todo.completed)}</p>
        </div>
    );
};

export default TodoComponent;
