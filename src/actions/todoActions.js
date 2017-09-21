export function addTodo(todoText) {
  return {
    type: 'ADD_TODO',
    todoText: todoText
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    todoId: id
  };
}

export function changeVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    todoId: id
  }
}
