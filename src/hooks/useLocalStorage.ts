import { useEffect, useState } from "react";
import { ITodo, TTodoState } from '../types/types';

export const useLocalStorage = () => {
    const todosFromLS: ( null | ITodo[]) = JSON.parse(localStorage.getItem('todos') || '[]');
    const [todos, setTodos]:TTodoState = useState(localStorage.getItem('todos') ? todosFromLS: []);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    return [todos,setTodos] as TTodoState
}