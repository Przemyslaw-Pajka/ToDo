import { useContext } from "react";
import { TodosContext } from "../../store/Todos";
import { TTodoState } from "../../types/types";
import MainHeading from "../MainHeading/MainHeading";
import TodoForm from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";
import { TodoContainerStyled } from "./styles/TodoContainerStyled";


const TodoContainer:React.FC = () => {
    const [todos,setTodos] = useContext<TTodoState>(TodosContext)
    const isTodosExists = Boolean(todos)

    return(  
        <TodoContainerStyled>
            <MainHeading />
            <TodoForm />
            {isTodosExists ? <TodoList/> : null}
        </TodoContainerStyled>
    )
}

export default TodoContainer