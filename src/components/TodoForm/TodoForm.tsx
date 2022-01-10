import React, { memo, useContext } from "react";
import { TodosContext } from "../../store/Todos";
import { submitForm } from "../../utils/submitForm";
import TodoAddInput from "../TodoAddInput/TodoAddInput";
import { TodoFormStyled } from "./styles/TodoFormStyled";

const TodoForm = () => {
    const [todos,setTodos] = useContext(TodosContext)
    
    const handleForm = (event:React.FormEvent) => {
       submitForm(event,{todos,setTodos})
    }
    
    return (
        <>
            <TodoFormStyled onSubmit={handleForm}>
                <TodoAddInput />
            </TodoFormStyled>
        </>
    )
}

export default memo(TodoForm)