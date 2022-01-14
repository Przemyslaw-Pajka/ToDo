import { ITodo } from "../types/types";

export const compare = ( a:ITodo, b:ITodo ) => Number(a.isCompleted)-Number(b.isCompleted);