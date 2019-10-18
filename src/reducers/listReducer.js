import { ADD_TODO } from "../actions/types";
import {DELETE_TODO} from "../actions/types";
import {EDIT_TODO} from "../actions/types";
import {TOGGLE_TODO} from '../actions/types'
import {CURRENT_TODO} from '../actions/types'

const initialState = {
    todos: [],
    toUp: null
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(element => element.id !== action.payload)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload.id ? action.payload : el),
                toUp: null
            }
            case CURRENT_TODO:
                return{
                    ...state,
                    toUp: state.todos.filter(el => el.id === action.payload)
                }
            case TOGGLE_TODO: 
               return {
                   ...state,
                   todos: state.todos.map(el => el.id === action.payload ? {...el, completed: !el.completed} : el)
                }
                 
                 
                 
              
        default:
            return state
    }
}

export default listReducer