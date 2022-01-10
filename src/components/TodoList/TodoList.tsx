import React, { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodosProviderProps } from '../../interfaces/interfaces';
import { TodosContext } from '../../store/Todos';
import { changeTodoCompletedOnClick } from '../../utils/changeTodoCompletedOnClick';
import { TodoListStyled } from './styles/TodoListStyled';
var isEqual = function (value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			// Compare the item
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				// Compare the item
			}
		}
	}

	// If nothing failed, return true
	return true;

};

export const TodoList = () => {
    const [todos,setTodos] = useContext<ITodosProviderProps[] | any>(TodosContext)
    const [isClickedTodo,setIsClickedTodo] = useState<any>(false)
    const isFirstRender = useRef(true);

    // useWhenClickTodo(isClickedTodo,isFirstRender.current)

    useEffect(() => {
        console.log("RENDER TODO LIST")
     })
     
    const handleTodo = (event:React.FormEvent) => {
        changeTodoCompletedOnClick(event.target.innerText,{todos,setTodos},{isClickedTodo,setIsClickedTodo})
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

