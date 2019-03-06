import { combineReducers } from "redux";

const defaultState = {
    todos: []
};

const todoReducer = ( state = defaultState, action ) => {
    if( action.type === "ADD_TODO" ) {
        return {
            todos: [ ...state.todos, action.payload ]
        };
    }else if( action.type === "TOGGLE_COMPLETE" ) {
        let todos = state.todos.map( todo => {
            if( todo.id === action.todoID ) {
                todo.completed = !todo.completed;
            }
            return todo;
        } );
        return {
            todos
        };
    }else if( action.type === "DELETE_TODO" ) {
        let todos = state.todos.filter( todo => !( todo.id === action.todoID ) );
        return {
            todos
        };
    }
    return state;
    
};

export default combineReducers( {
    todoReducer
} );