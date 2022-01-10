export interface ITodo {
    name: string,
    isCompleted: boolean
}
export interface ITodosProviderProps {
    todos: ITodo[],
    setTodos: (todo: ITodo[]) => void
}