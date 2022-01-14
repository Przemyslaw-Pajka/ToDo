export interface ITodo {
    name: string,
    isCompleted: boolean
}
export interface ITodosProviderProps {
    todos: ITodo[],
    setTodos: (todo: ITodo[]) => void
}
export type TisClickedState = {isClickedTodo:boolean,  setIsClickedTodo: (isClickedTodo: boolean) => void}
export type TchangeTodoCompletedOnClick = (eventTargetText: string,{todos,setTodos}:ITodosProviderProps,{isClickedTodo,setIsClickedTodo}:TisClickedState) => void;
export type TTodoState = [todos:(ITodo[] | null),  setTodos: (todo: ITodo[]) => void]
