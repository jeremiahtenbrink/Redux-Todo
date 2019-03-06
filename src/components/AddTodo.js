import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import PropTypes from "prop-types";
import { Form, Input, Label } from "semantic-ui-react";

var uuid4 = require( "uuid4" );

class AddTodo extends React.Component {
    state = {
        todo: ""
    };
    
    onInputChange = e => {
        this.setState( { todo: e.target.value } );
    };
    
    onSubmit = () => {
        this.props.addTodo( { id: uuid4(), todo: this.state.todo, completed: false } );
        this.setState( { todo: "" } );
    };
    
    render() {
        
        return (
            <Form onSubmit={ this.onSubmit }>
                <Form.Field>
                    <Input
                        value={ this.state.todo }
                        placeholder={ "Enter Todo" }
                        onChange={ this.onInputChange } />
                </Form.Field>
            </Form>
        );
    }
}

AddTodo.propTypes = {};
AddTodo.defaultProps = {};

export default connect( null, { addTodo } )( AddTodo );
