import { ITodosProviderProps } from "../types/types";

export const submitForm = (event:Event, {todos,setTodos}: ITodosProviderProps) => {
    event.preventDefault()
    const todoNameFromInput = (document.getElementById('todoAddInput') as HTMLInputElement).value;
    const isNameTodoExists = todos.some(todo => todo.name === todoNameFromInput)
    const errorMsg = 'dany typ TODO juz istnieje, nie można go dodać'

    if (isNameTodoExists) {
        alert(errorMsg);

        return false;
    }
    else {
        setTodos(
            [...todos, { name: todoNameFromInput, isCompleted: false }]
        );

        return true;
    }
}