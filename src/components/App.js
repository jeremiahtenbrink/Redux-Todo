import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import AddTodo from "./AddTodo";

class App extends Component {
    render() {
        return (
            <Container className={ "app-continaer" }>
                <Segment>
                    <Header as='h2' icon>
                        <Icon name='sticky note outline' />
                        Todo
                        <Header.Subheader>Manage your todo list in one place.</Header.Subheader>
                    </Header>
                    <TodoList />
                    <AddTodo />
                </Segment>
            </Container>
        );
    }
}

export default App;
