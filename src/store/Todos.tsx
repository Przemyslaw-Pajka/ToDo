import React, { createContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ITodo } from "../interfaces/interfaces";
import { TTodoState } from "../types/types";

export const TodosContext = createContext<TTodoState | null>(null)


export const TodosProvide:React.FC = (props) => {
    const todosFromLS: (string | null) = JSON.parse(localStorage.getItem('todos') || '{}');
    const [todos, setTodos] = useState <ITodo[]> (localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')|| ''): []);
    const isFirstRenderOfTodosProvider = useRef(true)

    useLayoutEffect(() => {
        if (isFirstRenderOfTodosProvider.current) {
            isFirstRenderOfTodosProvider.current = false;
            console.log('first Render')
           
            return;
        }
    })

    useEffect(()=>{
        if (isFirstRenderOfTodosProvider.current === false) {
            localStorage.setItem('todos',JSON.stringify(todos))
            console.log("TODOS SETS in store", todos)
        }
    },[todos])
    
    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    )
}

export const TodosProvider = React.memo(TodosProvide)