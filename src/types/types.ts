import { ITodo, ITodosProviderProps } from '../interfaces/interfaces';

export type TchangeTodoCompletedOnClick = (text: string,{todos,setTodos}:ITodosProviderProps,{isClickedTodo,setIsClickedTodo}:{isClickedTodo:any,setIsClickedTodo:any}) => void;
export type TTodoState = [todos:(ITodo[] | null),  setTodos: (todo: ITodo[]) => void]