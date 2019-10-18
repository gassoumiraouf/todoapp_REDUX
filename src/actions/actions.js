import { ADD_TODO } from "./types";
import {DELETE_TODO} from "./types";
import {EDIT_TODO} from "./types";
import {CURRENT_TODO} from './types'
import {TOGGLE_TODO} from './types'


export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
 export const removeTodo= id =>{
     return {
         type:DELETE_TODO,
         payload: id
     }
 }
 export const editTodo = todoUpdate=>{
     return {
         type:EDIT_TODO,
         payload: todoUpdate
     }
 }
 export const toggle =id=>{
     return {
         type:TOGGLE_TODO,
         payload:id
     }
 }
 export const currentTodo =id=>{
     return {
         type:CURRENT_TODO,
         payload:id
     }
 }
