import { useContext, useEffect } from "react";
import { TodosContext } from "../store/Todos";

export const useSubmitForm = (event) => {
    const [todos, setTodos] = useContext(TodosContext)
    let isNameTodoExists;
    let todoNameFromInput;

    useEffect(() => {
        todoNameFromInput = document.getElementById('todoAddInput').value;
        isNameTodoExists = todos.some(todo => todo.name === todoNameFromInput)
    }, [])

    if (isNameTodoExists) {
        alert('dany typ TODO juz istnieje, nie można go dodać');

        return false;
    }
    else {
        return () => { setTodos([...todos, { name: todoNameFromInput, completed: false }]) }

    }
}