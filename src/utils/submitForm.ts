import { ITodosProviderProps } from "../interfaces/interfaces";

export const submitForm = (event:Event, {todos,setTodos}: ITodosProviderProps) => {
    event.preventDefault()
    const todoNameFromInput = (document.getElementById('todoAddInput') as HTMLInputElement).value;
    const isNameTodoExists = todos.some(todo => todo.name === todoNameFromInput)

    if (isNameTodoExists) {
        alert('dany typ TODO juz istnieje, nie można go dodać');

        return false;
    }
    else {
        setTodos([...todos, { name: todoNameFromInput, isCompleted: false }]);

        return true;
    }
}