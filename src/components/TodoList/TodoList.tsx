import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from '../../store/Todos';
import { TTodoState } from '../../types/types';
import { changeTodoCompletedOnClick } from '../../utils/changeTodoCompletedOnClick';
import { TodoListStyled } from './styles/TodoListStyled';

export const TodoList = () => {
    const [todos,setTodos] = useContext<TTodoState>(TodosContext)
    const [isClickedTodo,setIsClickedTodo] = useState<boolean>(false)
     
    const handleTodo = ({target}) => {
        const eventTargetText = target.innerText
        
        changeTodoCompletedOnClick(
            eventTargetText,
            {todos,setTodos},
            {isClickedTodo,setIsClickedTodo}
        )
    }

    return (
        <TodoListStyled>
            {todos.map((todo) => {
                return(
                    <li key={uuidv4()} data-completed={todo.isCompleted} onClick={handleTodo}>
                        <span>{todo.name}</span>
                    </li>
                )}
            )}
        </TodoListStyled>
    )
}

