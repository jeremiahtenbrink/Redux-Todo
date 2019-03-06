export const addTodo = (todo) => {
  return {
      type: "ADD_TODO",
      payload: todo
  }
};

export const toggleComplete = (todoID) => {
  return {
      type: 'TOGGLE_COMPLETE',
      todoID
  }
};

export const deleteTodo = (todoID) => {
    return {
        type: 'DELETE_TODO',
        todoID
    }
};