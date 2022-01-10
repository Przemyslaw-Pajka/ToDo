import { ITodo } from "../interfaces/interfaces";

export const compare = ( a:ITodo, b:ITodo ) =>{
    return <any>a.isCompleted-<any>b.isCompleted;
 }