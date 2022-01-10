import { useContext, useEffect, useLayoutEffect } from "react";
import { TodosContext } from "../store/Todos";
import { compare } from '../utils/compare';

export const useWhenClickTodo = (isClicked:boolean, isFirstRenderOfTodoList:boolean) => {
    const [todos, setTodos] = useContext<any>(TodosContext)

    useLayoutEffect(() => {
        if (isFirstRenderOfTodoList) {
            isFirstRenderOfTodoList = false;
           
            return;
        }
    })

    useEffect(() => {
     
        const sortedTodos = todos.sort(compare)

        setTodos([...sortedTodos])
    }, [isClicked]);
}