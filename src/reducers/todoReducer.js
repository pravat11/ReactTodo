const todos = (state =[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
          ...state,
        {
          id: Date.now(),
          text:action.todoText,
          completed: false
        }
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.todoId) {
          return todo;
        }
        return {
            ...todo,
          completed: !todo.completed
        };
      });
    case 'REMOVE_TODO':
      return state.filter(todo => {return todo.id !== action.todoId});
    default :
      return state;
  }
};

const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoAppReducer = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};

export default todoAppReducer;