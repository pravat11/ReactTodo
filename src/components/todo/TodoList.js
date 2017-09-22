import React from 'react';

export default function TodoList(props) {
  const {isShowing, todos, toggleTodo, removeTodo} = props;
  let todosToShow = [];
  let text = '';
  if (isShowing === 'all') {
    todosToShow = todos;
    text = 'No todos available';
  }
  else if (isShowing === 'active') {
    todosToShow = todos.filter(todo => {
      return todo.completed === false
    });
    text = 'No active todos';
  }
  else {
    todosToShow = todos.filter(todo => {
      return todo.completed === true
    });
    text = 'No completed todos';
  }
  return (
      <div>
        <ul>
          {
            (todosToShow.length === 0) && <li style={{textAlign: 'center'}}>{text}</li>
          }
          {
            todosToShow.map(todo => {
              return (
                  <li key={todo.id}>
                    <div className="todo-text">{todo.text}</div>
                    <div className="action-buttons">
                      <span id={todo.id} title="Delete task" className="remove-button"
                            onClick={removeTodo}>&times;</span>
                      {
                        todo.completed ?
                            <span id={todo.id} title="Make todo active" className="remove-button"
                                  onClick={toggleTodo}>&#x21bb;</span>
                            :
                            <span id={todo.id} title="Mark as completed" className="remove-button"
                                  onClick={toggleTodo}>&#10003;</span>
                      }
                    </div>
                  </li>
              );
            })
          }
        </ul>
      </div>
  );
}