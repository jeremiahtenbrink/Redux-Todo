import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { List } from "semantic-ui-react";

const TodoList = ( props ) => {
    debugger;
    return (
        <List divided relaxed>
            { props.todos.length > 0 ?
                props.todos.map( ( todo ) => <TodoItem key={ todo.id } todo={ todo } /> ) :
                <h3>Enter a Todo Item.</h3> }
        </List>
    );
    
};

TodoList.propTypes = {};
TodoList.defaultProps = {};

const mapStateToProps = state => {
    return { todos: state.todoReducer.todos };
};

export default connect( mapStateToProps )( TodoList );
