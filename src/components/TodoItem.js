import React from "react";
import PropTypes from "prop-types";
import { Icon, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleComplete, deleteTodo } from "../actions";

const TodoItem = ( props ) => {
    return (
        <List.Item onClick={ () => props.toggleComplete( props.todo.id ) }>
            <List.Content>
                <List.Description
                    className={ ( props.todo.completed ? "complete" :
                        "" ) }>{ props.todo.todo }</List.Description>
            </List.Content>
            <Icon onClick={() => props.deleteTodo(props.todo.id)} name="delete"></Icon>
        </List.Item>
    );
};

TodoItem.propTypes = {};
TodoItem.defaultProps = {};

const mapStateToProps = state => {
    return { state };
};

export default connect( mapStateToProps, { toggleComplete, deleteTodo } )( TodoItem );
