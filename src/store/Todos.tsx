import React, { createContext } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TTodoState } from "../types/types";

export const TodosContext = createContext<TTodoState | null>(null)

export const TodosProvider:React.FC = (props) => {
    const [todos, setTodos]:TTodoState = useLocalStorage()
    
    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    )
}