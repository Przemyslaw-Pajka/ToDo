import { TchangeTodoCompletedOnClick } from "../types/types";
import { compare } from "./compare";

export const changeTodoCompletedOnClick:TchangeTodoCompletedOnClick = (
        text,
        { todos,setTodos },
        { isClickedTodo,setIsClickedTodo }
    ) => {
    const newTodoList = todos.map((todo)=>{
        if(text === todo.name){
            return {
                ...todo,
                isCompleted: !todo.isCompleted
            }
        }

        return todo;
    })
   
    const sortedTodos = newTodoList.sort(compare)
    
    setIsClickedTodo(!isClickedTodo)
    setTodos(sortedTodos)
}